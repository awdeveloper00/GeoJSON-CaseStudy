import React from 'react';
import { act, render,  screen,  } from '@testing-library/react';
import user from '@testing-library/user-event';


import CordinateForm from '../Components/CordinateForm';


describe('CordinateForm', () => {

it('Inputs Are Rendered', async() => {

      
    render( <CordinateForm />);

      expect(getMinimumLongitude()).toBeInTheDocument();
      expect(getMinimumLatitude()).toBeInTheDocument()
      expect(getMaximumLongitude()).toBeInTheDocument();
      expect(getMaximumLatitude()).toBeInTheDocument();
    })
   
  
  it('Minimum Longitude must be less than Maximum Longitude', async() => {

      
    render( <CordinateForm />);
    user.type(getMinimumLongitude(), '0.01');
    user.type(getMinimumLatitude(), '51');
    user.type(getMaximumLongitude(), '0.02');
    user.type(getMaximumLatitude(), '51.001');
 
    clickSubmit();

    
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
