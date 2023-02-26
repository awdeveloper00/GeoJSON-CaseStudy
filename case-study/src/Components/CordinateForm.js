import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import "../styles/FormContainer.css";
import { OsmToGeoJsonConverter } from "../services/utils";
import { fetchOpenStreetMapData } from "../services/https";
import { FormValidation, validateBoundingBox } from "../services/validation";
import ErrorComponent from "./ErrorComponent";
export default function CordinateForm({ setGeojson, setLoader }) {
  const onPressHandeler = async (val) => {
    setLoader(true);
    try {
      //Validating InputValues
      validateBoundingBox(val);
      const data = await fetchOpenStreetMapData(val);
      //If Api Call is Success(200)
      const GeoJsonData = OsmToGeoJsonConverter(data);
      setLoader(false);
      setGeojson(GeoJsonData);
    } catch (error) {
      //If Api Call is UnSuccessful(400)
      setLoader(false);
      setGeojson({ error: error.response.data });
    }
  };
  const ValidateForm = yup.object(FormValidation);

  return (
    //FormHandling through formik and valdation
    <div className="formContainer">
      <div className="form" data-testid="form">
        <Formik
          initialValues={{
            minLon: null,
            minLat: null,
            maxLon: null,
            maxLat: null,
          }}
          validationSchema={ValidateForm}
          validateOnChange={false}
          onSubmit={(val) => onPressHandeler(val)}
        >
          {({ handleChange, handleSubmit, errors }) => (
            <>
              <div className="title">Welcome</div>
              <div className="subtitle">
                Please Enter Latitude and Longitude
              </div>

              <div className="input-container ic1">
                <input
                  type="number"
                  name="left"
                  onChange={handleChange("minLon")}
                  className="input"
                  placeholder=" "
                  data-testid="min_long_inp"
                />
                <div className="cut"></div>
                <label className="placeholder">Minimum Longitude</label>
              </div>

              <ErrorComponent error={errors.maxLon} />

              <div className="input-container ic1">
                <input
                  type="number"
                  onChange={handleChange("minLat")}
                  className="input"
                  data-testid="min_lat_inp"
                  name="bottom"
                  placeholder=" "
                />
                <div className="cut"></div>
                <label className="placeholder">Minimum Latitude</label>{" "}
              </div>
              <ErrorComponent error={errors.minLat} />

              <div className="input-container ic1">
                <input
                  type="number"
                  onChange={handleChange("maxLon")}
                  className="input"
                  name="right"
                  data-testid="max_long_inp"
                  placeholder=" "
                />
                <div className="cut"></div>
                <label className="placeholder">Maximum Longitude</label>{" "}
              </div>

              <ErrorComponent error={errors.maxLon} />

              <div className="input-container ic1">
                <input
                  type="number"
                  name="top"
                  onChange={handleChange("maxLat")}
                  className="input"
                  data-testid="max_lat_inp"
                  placeholder=" "
                />
                <div className="cut"></div>
                <label className="placeholder">Maximum Latitude</label>{" "}
              </div>

              <ErrorComponent error={errors.maxLat} />

              <button
                className="submit"
                name="submit"
                type="button"
                data-testid="submit"
                role={"button"}
                onClick={handleSubmit}
              >
                Get GeoJSON
              </button>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
}
