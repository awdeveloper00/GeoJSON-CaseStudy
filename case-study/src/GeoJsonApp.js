import React, { useState } from "react";
import CordinateForm from "./Components/CordinateForm";
import GeoJson from "./Components/GeoJson";

const GeoJsonMap = () => {
  const [geojson, setGeojson] = useState(null);
  const [loader, setLoader] = useState(false);

  return (
    <div>
      <CordinateForm setGeojson={setGeojson} setLoader={setLoader} />
      {/* Table Render's when Form filled and Api Call is 200 */}
      <GeoJson data={geojson} loader={loader} />
    </div>
  );
};

export default GeoJsonMap;
