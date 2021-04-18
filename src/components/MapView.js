import React, { useEffect, useState } from "react";
import { Chip } from "@material-ui/core";
import GoogleMap from "./GoogleMap";
import axios from "axios";
import styled from "styled-components";
import apiKeys from "../apiKeys";
import { StyledCard } from "./styledComponents";


const MapView = ({ categoryId }) => {
  const [chips, setChips] = useState([]);
  const [positions, setPositions] = useState([]);
  const [category, setCategory] = useState(categoryId);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiKeys.backendURL}waste_category/`)
      .then(function (response) {
        console.log(response.data.waste_categories);
        setCategories(response.data.waste_categories);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (category) {
      axios
        .get(
          `${apiKeys.backendURL}waste_collection_point?location_category_id=${category}`
        )
        .then(function (response) {
          setPositions(
            response.data.waste_collection_points.map((res) => ({
              ...res,
              lat: parseFloat(res.x),
              lng: parseFloat(res.y),
              text: res.name,
            }))
          );
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [category]);

  console.log(positions);

  const generateChips = () => {
    return chips.map((category) => {
      return (
        <Chip
          key={category}
          style={{ margin: "5px" }}
          label={category}
          onDelete={() => {
            let res = chips.findIndex((element) => element === category);
            if (res !== -1) {
              const chipsBuf = [...chips];
              chipsBuf.splice(res, 1);
              setChips(chipsBuf);
            }
          }}
          color="primary"
        />
      );
    });
  };

  const handleTextFieldChange = (event) => {
    setCategory(event.target.value);
  };


  return (
    <div id="view">
      <StyledWrapper>
        <StyledSelect id="cars" onChange={handleTextFieldChange}>
          {categories.map((cat) => (
            <option value={cat.id} key={`select-${cat.id}`}>
              {cat.name}
            </option>
          ))}
        </StyledSelect>
      </StyledWrapper>
      <div>
        {chips.length > 0 ? (
          <div
            style={{
              height: "40px",
              padding: "10px",
              display: "flex",
              overflow: "scroll",
            }}
          >
            {generateChips()}
          </div>
        ) : null}
      </div>
    
      <GoogleMap
        id="map"
        options={{
          center: { lat: 51.7433, lng: 19.4667 },
          zoom: 12,
        }}
        onMapLoad={(map) => {
          positions.forEach((el) => {
            var infowindow = new window.google.maps.InfoWindow({
              content: "<h3>Recycling place:</h3> <h2>" + el.text + "</h2>",
            });
            var marker = new window.google.maps.Marker({
              position: { lat: el.lat, lng: el.lng },
              map: map,
              label: el.text[0],
            });
            new window.google.maps.event.addListener(
              marker,
              "click",
              function () {
                infowindow.open(map, marker);
              }
            );
          });
        }}
      />
    </div>
  );
};

export default MapView;

const StyledSelect = styled.select`
  width: 300px;
  max-width: 60%;
  font-size: 18px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
