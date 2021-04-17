import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Box, Chip } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import GoogleMap from './GoogleMap'


var categories = [
   {
      title: 'Electronics'
   },
   {
      title: 'Nuclear'
   },
   {
      title: 'Car parts'
   },
   {
      title: 'Aluminium'
   }
]

const positions = [
   {
      lat: 51.776701,
      lng: 19.451934,
      text: 'Bateries'
   },
   {
      lat: 51.794237,
      lng: 19.446157,
      text: 'Bio'
   },
   {
      lat: 51.745335, 
      lng: 19.482403,
      text: 'Metals'
   },

]

const useStyles = makeStyles((theme) => ({
   root: {
      height: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& .MuiTextField-root': {
         margin: theme.spacing(1),
         width: '25ch',
      },
   },
}));

const MapView = () => {
   const classes = useStyles();
   const [chips, setChips] = React.useState([]);
   const [category, setCategory] = React.useState(null);
  
   const generateChips = () => {
      return chips.map((category) => {
         return <Chip key={category} style={{ margin: '5px' }}
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
      })
   };
   const handleAdd = () => {
      let res = chips.findIndex((element) => element === category);
      if (res === -1) {
         const chipsBuf = [...chips];
         chipsBuf.push(category);
         setChips(chipsBuf);
      }
      else {

      }
   };
   const handleTextFieldChange = (value) => {
      setCategory(value);
   };


   return (
      <div id='view'>
         <form className={classes.root} noValidate autoComplete="off">
            <Box display='flex' alignItems='center' justifyContent='center'>
               <Autocomplete
                  id="combo-box-demo"
                  options={categories}
                  getOptionLabel={(option) => option.title}
                  style={{ width: 300 }}
                  onInputChange={handleTextFieldChange}
                  renderInput={(params) =>
                     <TextField {...params}
                        label="Choose category"
                        variant="outlined"
                     />}
               />
               <Button variant="contained" color="secondary" style={{ height: '40px' }} onClick={handleAdd}>
                  Add
               </Button>
            </Box>
         </form>
         {
            chips.length > 0 ?
               (<div style={{ height: '40px', padding: '10px', display: 'flex', overflow: 'scroll' }}>
                  { generateChips()}
               </div>) : null
         }
         <GoogleMap
            id="map"
            options={{
               center: { lat: 51.7433, lng: 19.4667 },
               zoom: 12
            }}
          
            onMapLoad={map => {
                 
                  positions.forEach((el)=>{
                     var infowindow = new window.google.maps.InfoWindow({
                     content: "<h3>Recycling place:</h3> <h2>" + el.text + "</h2>"
                     });
                     var marker = new window.google.maps.Marker({
                     position: { lat: el.lat, lng: el.lng, },
                     map: map,
                     label: el.text[0]
                  });
                  new window.google.maps.event.addListener(marker, 'click', function() {
                     infowindow.open(map,marker);
                  });
               });
            }
            }
         />
      </div>
   );
}

export default MapView;