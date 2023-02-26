import axios from "axios";

export const fetchOpenStreetMapData = async (val) => {
  const response = await axios.get(
    `https://www.openstreetmap.org/api/0.6/map?bbox=${val.minLon},${val.minLat},${val.maxLon},${val.maxLat}`
  );
  return response.data;
};
