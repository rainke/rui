import React, { useEffect, useState } from 'react';
import Portal from './Portal';

interface Subscriber {
  (option: ImessageOption): any;
}
class Subpub {
  private subscribers: Subscriber[] = [];
  subscribe(fn: Subscriber) {
    this.subscribers.push(fn);
  }
  publish(option: ImessageOption) {
    this.subscribers.forEach(subscriber => {
      subscriber(option);
    });
  }
}

const ob = new Subpub();
interface ImessageOption {
  type: string;
  title: string;
}
interface Imessage {
  (option: ImessageOption): any;
  error: () => any;
}

const message: Imessage = option => {
  ob.publish(option);
};

message.error = () => 3;

const Notification: React.FC = () => {
  const [list, setList] = useState<ImessageOption[]>([]);
  useEffect(() => {
    ob.subscribe(option => {
      setList((list: any[]) => list.concat(option));
    });
  }, []);
  return (
    <Portal>
      <div className="ui-notification">
        {list.map(item => (
          <div className="ui-notification-item" key={item.title}>
            {item.title}
          </div>
        ))}
      </div>
    </Portal>
  );
};

export default Notification;
export { message };
