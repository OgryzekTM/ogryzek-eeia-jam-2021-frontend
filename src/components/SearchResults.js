import React from "react";
import MapView from "../components/MapView";
import { StyledWrapper } from "../components/styledComponents";
const SearchResult = ({ location: { state } }) => {
  return (
    <>
      {state && (
        <div>
          <StyledWrapper>
            <h2>Your product is {state.product}</h2>
            <h3>Recycling category is {state.waste_category.name}</h3>
          </StyledWrapper>
          <div>
            <MapView categoryId={state.waste_category.id} />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResult;
