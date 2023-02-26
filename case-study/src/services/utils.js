import osmtogeojson from "osmtogeojson";

//Coverting OSM To GeoJSON
export const OsmToGeoJsonConverter = (data) => {
  return osmtogeojson(data);
};
