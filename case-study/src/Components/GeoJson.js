import React from "react";

import "../styles/DataTable.css";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";
import Map from "./Map";
import TableData from "./TableData";

export default function GeoJson({ data, loader }) {
  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        data && (
          <div>
            {data.error ? (
              <ErrorComponent error={data.error} />
            ) : (
              <div>
                <h4 className="my-2">Map </h4>
                <Map data={data} />
                <h4 className="my-2">Data Table</h4>
                <TableData data={data} />
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
}
