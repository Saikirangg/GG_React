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
import * as React from 'react';
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Gourmet Garden CRM React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Gourmet Garden CRM React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


// Data
import authorsTableData from "layouts/customers/data/callTagsTableData";
import { Button } from "@mui/material";
// import projectsTableData from "layouts/tables/data/projectsTableData";



function Customers() {
  const initialValue= ''
  const placeholder= 'Enter your text...'
  const { columns, rows } = authorsTableData();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(initialValue)

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSaveClose = () => {
    setOpen(false);
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "call_tag": value
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://ggbeta-gcp-h6c2-main-i2mxwms2pq-el.a.run.app/calls/call_tags/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    console.log("value is "+value);
    window.location.reload()
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
                  Customers
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
              <div>
              <div>
      <Button variant="contained" 
      style={{ color : "white" }}
      onClick={handleClickOpen}>
        Add New
      </Button>
      <Dialog open={open} PaperProps={{
        sx: {
          width: "50%",
          maxHeight: 1000,
          height : "45%"
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
                  Customers
                </MDTypography>
              </MDBox>
        <DialogContent style={{ overflow: "hidden" }}>
          <DialogContentText>
            Please add New Customer
          </DialogContentText>
          <TextField
            autoFocus
            // value={this.state.value}
            
            margin="dense"
            id="name"
            label="Customer Name"
            type="text"
            fullWidth
            variant="standard"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSaveClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
              </div>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
                
              </MDBox>
          
            </Card>
          </Grid>
          
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );

}

export default Customers;