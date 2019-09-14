import React from 'react';
interface Inotification extends React.FC {
    info: (title: string) => void;
    error: (title: string) => void;
    warning: (title: string) => void;
}
declare const Notification: Inotification;
export default Notification;
