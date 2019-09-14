import React, { useEffect, useState, useCallback } from 'react';
import Portal from './Portal';
class Manager {
    constructor() {
        this.set = new Set();
        this.callbacks = [];
    }
    loopCallbacks() {
        this.callbacks.forEach(cb => cb(this.set));
    }
    add(option) {
        this.set.add(option);
        this.loopCallbacks();
    }
    remove(option) {
        this.set.delete(option);
        this.loopCallbacks();
    }
    onChange(cb) {
        this.callbacks.push(cb);
        return () => {
            this.callbacks.splice(this.callbacks.indexOf(cb), 1);
        };
    }
}
const manager = new Manager();
let count = 0;
const NotificationItem = React.memo(({ item, timeout = 3000, onHide }) => {
    useEffect(() => {
        const t = setTimeout(() => {
            onHide(item);
        }, timeout);
        return () => clearTimeout(t);
    });
    return React.createElement("div", { className: "ui-notifacation-item" }, item.title);
});
const Notification = () => {
    const [notificationList, setList] = useState([]);
    useEffect(() => {
        return manager.onChange(set => {
            setList(Array.from(set));
        });
    }, []);
    const handleHide = useCallback((item) => {
        manager.remove(item);
    }, []);
    return (React.createElement(Portal, null,
        React.createElement("div", { className: "ui-notification" }, notificationList.map(item => {
            return React.createElement(NotificationItem, { key: item.id, onHide: handleHide, item: item });
        }))));
};
Notification.info = (title) => {
    manager.add({ type: 'info', title, id: count++ });
};
Notification.error = (title) => {
    manager.add({ type: 'error', title, id: count++ });
};
Notification.warning = (title) => {
    manager.add({ type: 'warning', title, id: count++ });
};
export default Notification;
