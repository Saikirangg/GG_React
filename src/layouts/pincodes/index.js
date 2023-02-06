/**
=========================================================
* Gourmet Garden CRM React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// Gourmet Garden CRM React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Gourmet Garden CRM React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/pincodes/data/callTagsTableData";
import { Button } from "@mui/material";

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from "@mui/material";
import { CircularProgress } from "@mui/material";
// import projectsTableData from "layouts/tables/data/projectsTableData";


function PincodeSettings() {
  const { columns, rows } = authorsTableData();
  const initialValue= ''
  const placeholder= 'Enter your text...';
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(initialValue);
  const [city, setCity] = React.useState(initialValue);
  // const [preferences, setPreferences] = React.useState( { 'Sunday': false, 'Monday': false, 'Tuesday': false,'Wednesday':false,'Thursday':false,'Friday':false,'Saturday':false } ) 
  const [sun, setSun] = React.useState(true);
  const [mon, setMon] = React.useState(false);
  const [tue, setTue] = React.useState(false);
  const [thu, setThu] = React.useState(false);
  const [fri, setFri] = React.useState(false);
  const [sat, setSat] = React.useState(true);
  const [wed, setWed] = React.useState(false);
  const [flag, setFlag] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleFlag = () => {
    setFlag(false);
  };
  const handleChangeMon = (event) => {
    setMon(!mon);
  };
  const handleChangeTue = (event) => {
    setTue(!tue);
  };
  const handleChangeWed = (event) => {
    setWed(!wed);
  };
  const handleChangeThu = (event) => {
    setThu(!thu);
  };
  const handleChangefri = (event) => {
    setFri(!fri);
  };
  const handleChangeSat = (event) => {
    setSat(!sat);
  };
  const handleChangeSun = (event) => {
    setSun(!sun);
  };

function togglePreference(animal) { 
    
    preferences[animal] = !preferences[animal];
    // Update animal likings 
  }

const handleSaveClose = () => {
  // setOpen(false);
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var raw = JSON.stringify({
  "pincode":value,
  "status":1,
  "monday":mon, 
  "tuesday":tue,
  "wednesday":wed,
  "thursday":thu,
  "friday":fri,
  "saturday":sat,
  "sunday":sun
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://ggbeta-gcp-h6c2-main-i2mxwms2pq-el.a.run.app/order/pincodes", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    console.log("value is "+value);
    setFlag(false);
    handleFlag();
    // window.location.reload()
  };
  // const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Pincodes
                </MDTypography>
              </MDBox>
              <div>
                <Button onClick={handleClickOpen}>
                  + Add New Pincode
                </Button>
                <Dialog open={open} 
                PaperProps={{
        sx: {
          width: "50%",
          maxHeight: 1000,
          height : "55%"
        }
      }} onClose={handleClose}>
        {/* <DialogTitle>Call Tags</DialogTitle> */}
        <MDBox
                mx={2}
                mt={2}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Call Tags
                </MDTypography>
              </MDBox>
        <DialogContent style={{ overflow: "hidden" }}>
          <DialogContentText>
            Please add New Call Tags
          </DialogContentText>
          <TextField
            autoFocus            
            margin="dense"
            id="name"
            label="Pincode "
            type="text"
            fullWidth
            variant="standard"
            value={value}
            onChange={e => setValue(e.target.value)}/>
          {/* <TextField
            autoFocus
            // value={this.state.value}
            margin="dense"
            id="name"
            label="City Name "
            type="text"
            fullWidth
            variant="standard"
            value={city}
            onChange={e => setCity(e.target.value)}
          /> */}
      <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Status" />
      <FormGroup aria-label="position" row>
      <FormControlLabel control={<Checkbox checked={sun} onChange={handleChangeSun} />} label="Sunday" />
      <FormControlLabel  control={<Checkbox checked={mon}  onChange={handleChangeMon}/>} label="Monday" />
      <FormControlLabel  control={<Checkbox checked={tue}  onChange={handleChangeTue}/>} label="Tuesday" />
      <FormControlLabel  control={<Checkbox checked={wed} onChange={handleChangeWed} />} label="WednesDay" />
      <FormControlLabel  control={<Checkbox checked={thu} onChange={handleChangeThu}/>} label="Thursday" />
      <FormControlLabel  control={<Checkbox checked={fri} onChange={handleChangefri}/>} label="Friday" />
      <FormControlLabel  control={<Checkbox checked={sat} onChange={handleChangeSat}/>} label="Saturday" />
      </FormGroup>
      </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} >Cancel</Button>
          <Button 
          onClick={handleSaveClose} >Save</Button>
        </DialogActions>
                </Dialog>
              </div>
              <MDBox pt={3}>
              {flag==true ? <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box> :<DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />}
              </MDBox>
          
            </Card>
          </Grid>
          {/* <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info">
                <MDTypography variant="h6" color="white">
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid> */}
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );

}

export default PincodeSettings;
