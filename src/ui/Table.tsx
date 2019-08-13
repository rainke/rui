import React from 'react';

interface TableColumn {
  prop: string;
  title: string;
  key?: string;
}
interface TableProps extends React.HTMLAttributes<HTMLTableElement>, React.ClassAttributes<HTMLTableElement> {
  columns: TableColumn[];
  data: { [prop: string]: any }[];
}
const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table>
      <colgroup>
        {columns.map((_, idx) => (
          <col width="100" key={idx}/>
        ))}
      </colgroup>
      <thead>
        <tr>
          {columns.map(item => (
            <th key={item.key || item.prop}>{item.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx}>
            {columns.map(col => {
              return <td key={col.key || col.prop}>{item[col.prop]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
