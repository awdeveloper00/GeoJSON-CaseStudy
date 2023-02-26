import React from "react";
import "../styles/DataTable.css";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";
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
              <TableData data={data} />
            )}
          </div>
        )
      )}
    </div>
  );
}
