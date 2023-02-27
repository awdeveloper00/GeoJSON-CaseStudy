import React from "react";
//Component for render GeoJSON Data through table format
export default function TableData({ data }) {
  return (
    <div className="d-flex justify-content-center py-5 ">
      <table
        className="table  table-hover table-responsive"
        data-testid="table"
        role={"table"}
      >
        <thead className="thead-light ">
          <tr>
            <th>Type</th>
            <th>ID</th>
            <th>properties</th>
            <th>geometry</th>
          </tr>
        </thead>

        <tbody>
          {/* Looping GeoJSON Data */}
          {data?.features.map((feature, i) => (
            <tr key={i}>
              {Object.keys(feature).map((key, id) => (
                <td key={id}>{JSON.stringify(feature[key])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
