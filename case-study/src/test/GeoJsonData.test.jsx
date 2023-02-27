import React from 'react';
import { render,  screen, waitFor  } from '@testing-library/react';
import axios from 'axios';
import user from '@testing-library/user-event';


import CordinateForm from '../Components/CordinateForm';
import { MockGeoJSONData, MockData } from '../mock/MockData';
import * as mockConverter  from '../services/utils';
import GeoJson from '../Components/GeoJson';

jest.mock('axios');

describe('OSM Data Converted to GEOJSON', () => {

  it('GeoJSON data is returned when all fields pass validation', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(MockData));

    jest
      .spyOn(mockConverter, 'OsmToGeoJsonConverter')
      .mockImplementation(() => MockGeoJSONData);
      
    render(<CordinateForm/>);
    
    user.type(getMinimumLongitude(), '0.1');
    user.type(getMinimumLatitude(), '51');
    user.type(getMaximumLongitude(), '0.103');
    user.type(getMaximumLatitude(), '51.001');


    clickSubmit();
    
    render(<GeoJson/>);


     waitFor(() => {
      expect( screen.getByRole('table')).toBeInTheDocument();
    });

  });
 
  it('GeoJSON Table Data Rendered', async () => {
    render(<GeoJson/>);

     waitFor(() => {
      expect( screen.getByRole('table')).toBeInTheDocument();
    });

  });
});


async function clickSubmit () {
     user.click(await screen.findByRole('submit'));
}

function getMinimumLongitude() {
  return screen.queryByTestId('min_long_inp');
}

function getMinimumLatitude() {
  return screen.queryByTestId('min_lat_inp');
}

function getMaximumLongitude() {
  return screen.queryByTestId('max_long_inp');
}

function getMaximumLatitude() {
  return screen.queryByTestId('max_lat_inp');
}
