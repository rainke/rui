var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import cx from 'clsx';
const Table = (_a) => {
    var { columns, data, className, style } = _a, other = __rest(_a, ["columns", "data", "className", "style"]);
    return (React.createElement("table", Object.assign({ className: cx('ui-table', className), style: style }, other),
        React.createElement("colgroup", null, columns.map((_, idx) => (React.createElement("col", { width: "100", key: idx })))),
        React.createElement("thead", null,
            React.createElement("tr", null, columns.map(item => (React.createElement("th", { key: item.key || item.prop }, item.title))))),
        React.createElement("tbody", null, data.map((item, idx) => (React.createElement("tr", { key: idx }, columns.map(col => {
            return React.createElement("td", { key: col.key || col.prop }, item[col.prop]);
        })))))));
};
export default Table;
