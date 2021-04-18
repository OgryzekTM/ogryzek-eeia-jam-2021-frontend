import React from 'react';
import MapView from '../components/MapView';
import {
   StyledWrapper,
   StyledCard,
   StyledCardHeader,
   StyledInput,
   StyledButton,
   StyledInputComponent,
 } from "../components/styledComponents";
const SearchResult = (props) => {
   const obj = props.location.state;
   return <>
      <div>
         <h2>Your product is {obj.product}</h2>
         <h3>Recycling category is {obj.waste_category.name}</h3>
      </div>
      <div>
         <MapView> </MapView>
      </div>
   </>
}

export default SearchResult;