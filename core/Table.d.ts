import React from 'react';
interface TableColumn {
    prop: string;
    title: string;
    key?: string;
}
interface TableProps extends React.HTMLAttributes<HTMLTableElement>, React.ClassAttributes<HTMLTableElement> {
    columns: TableColumn[];
    data: {
        [prop: string]: any;
    }[];
}
declare const Table: React.FC<TableProps>;
export default Table;
