import React, { useEffect, useState, useCallback } from 'react';
import Portal from './Portal';

// TODO: 添加transition效果
interface ImessageOption {
  type: string;
  title: string;
  id?: any;
}

interface NotificationItemProps {
  item: ImessageOption;
  onHide: (item: ImessageOption) => void;
  timeout?: number;
}

class Manager {
  private set: Set<ImessageOption> = new Set();
  private callbacks: ((set: Set<ImessageOption>) => void)[] = [];
  private loopCallbacks() {
    this.callbacks.forEach(cb => cb(this.set));
  }
  add(option: ImessageOption) {
    this.set.add(option);
    this.loopCallbacks();
  }
  remove(option: ImessageOption) {
    this.set.delete(option);
    this.loopCallbacks();
  }
  onChange(cb: (set: Set<ImessageOption>) => void): () => void {
    this.callbacks.push(cb);
    return () => {
      this.callbacks.splice(this.callbacks.indexOf(cb), 1);
    };
  }
}

const manager = new Manager();
let count = 0;

const NotificationItem: React.FC<NotificationItemProps> = React.memo(({ item, timeout = 3000, onHide }) => {
  useEffect(() => {
    const t = setTimeout(() => {
      onHide(item);
    }, timeout);
    return () => clearTimeout(t);
  });
  return <div className="ui-notifacation-item">{item.title}</div>;
});

interface Inotification extends React.FC {
  info: (title: string) => void;
  error: (title: string) => void;
  warning: (title: string) => void;
}

const Notification: Inotification = () => {
  const [notificationList, setList] = useState<ImessageOption[]>([]);
  useEffect(() => {
    return manager.onChange(set => {
      setList(Array.from(set));
    });
  }, []);
  const handleHide = useCallback((item: ImessageOption) => {
    manager.remove(item);
  }, []);
  return (
    <Portal>
      <div className="ui-notification">
        {notificationList.map(item => {
          return <NotificationItem key={item.id} onHide={handleHide} item={item} />;
        })}
      </div>
    </Portal>
  );
};

Notification.info = (title: string) => {
  manager.add({ type: 'info', title, id: count++ });
};
Notification.error = (title: string) => {
  manager.add({ type: 'error', title, id: count++ });
};
Notification.warning = (title: string) => {
  manager.add({ type: 'warning', title, id: count++ });
};

export default Notification;
