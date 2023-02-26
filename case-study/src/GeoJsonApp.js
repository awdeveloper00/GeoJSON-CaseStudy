import React, { useState } from "react";
import CordinateForm from "./Components/CordinateForm";
import GeoJson from "./Components/GeoJson";

const GeoJsonMap = () => {
  const [geojson, setGeojson] = useState(null);
  const [loader, setLoader] = useState(false);

  return (
    <div>
      <CordinateForm setGeojson={setGeojson} setLoader={setLoader} />

      <GeoJson data={geojson} loader={loader} />
    </div>
  );
};

export default GeoJsonMap;
