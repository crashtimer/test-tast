import React from "react";
// styles
import styles from "./Table.module.css";

type Row = { [key: string]: string | number };

interface TableProps {
  headers: Row[];
  rows: Row[];
}

const Table = ({ headers, rows }: TableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.id}>{header.name}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, index) => (
          <tr key={row.id ?? index}>
            {headers.map((header) => (
              <td key={row[header.id]}>{row[header.id]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
