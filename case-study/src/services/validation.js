import * as yup from "yup";

export const FormValidation = {
  minLon: yup.string().required("Minimum Longitude is required"),

  maxLon: yup.string().required("Maximum Longitude is required"),

  minLat: yup.string().required("Minimum Latitude is required"),

  maxLat: yup.string().required("Maximum Latitude is required"),
};

export function validateBoundingBox(val) {
  if (
    val.minLon < -180 ||
    val.minLat < -90 ||
    val.maxLon > 180 ||
    val.maxLat > 90
  ) {
    return { error: "Invalid bounding box coordinates" };
  }
}
