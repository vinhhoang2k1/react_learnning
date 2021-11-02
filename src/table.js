import React, { Component } from "react";
import "./index.css";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
        
        const rows = props.characrerData.map((row, index) => {
            
            return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    );
  });
return <tbody>{rows}</tbody>;
};
class Table extends Component {
  render() {
    const { characterData } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody characrerData={characterData} />
      </table>
    );
  }
}

export default Table;
