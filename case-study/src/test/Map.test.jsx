import React from 'react';
import { shallow } from 'enzyme';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';


import Map from '../Components/Map';

describe('<Map />', () => {
  const geojsonData = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: [0, 0]
        }
      }
    ]
  };

  it('renders a map', () => {
    const wrapper = shallow(<Map geojsonData={geojsonData} />);
    expect(wrapper.find(MapContainer)).toHaveLength(1);
  });

  it('renders a tile layer', () => {
    const wrapper = shallow(<Map geojsonData={geojsonData} />);
    expect(wrapper.find(TileLayer)).toHaveLength(1);
  });

  it('renders GeoJSON data', () => {
    const wrapper = shallow(<Map geojsonData={geojsonData} />);
    expect(wrapper.find(GeoJSON)).toHaveLength(1);
  });
});