import axios from 'axios';
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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React,{Component} from 'react';
  
class Locus extends Component {
   
    state = {
  
      // Initially, no file is selected
      selectedFile: null
    };
     
    // On file select (from the pop up)
    onFileChange = event => {
     
      // Update the state
      this.setState({ selectedFile: event.target.files[0] });
     
    };
     
    // On file upload (click the upload button)
    onFileUpload = () => {
     
 // Create an object of formData
 const formData = new FormData();
     
 // Update the formData object
  formData.append(
    "myFile",
    this.state.selectedFile,
    "/C:/Users/Sai kiran/Downloads/Book1.csv"
  );

//  formData.append(
//    "file",
//    "Book1.csv",
//    "/C:/Users/Sai kiran/Desktop/Book1.csv"
//   //  this.state.selectedFile.name
//  );

 // Details of the uploaded file
 console.log(this.state.selectedFile);

 // Request made to the backend api
 // Send formData object
//  axios.post("api/uploadfile", formData);


 var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic c2Fpa2lyYW5AZ21haWwuY29tOnNhaWtpcmFu");

// var formdata = new FormData();

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formData,
  redirect: 'follow'
};

fetch("http://ec2-15-206-79-135.ap-south-1.compute.amazonaws.com:8000/api/locus/file_upload/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));



    };
     
    // File content to be displayed after
    // file upload is complete
    fileData = () => {
     
      if (this.state.selectedFile) {
          
        return (
          <div>
            <h2>File Details:</h2>
            <p>File Name: {this.state.selectedFile.name}</p>
  
            <p>File Type: {this.state.selectedFile.type}</p>
  
            <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
  
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        );
      }
    };
     
    render() {
     
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
                  Wallet : 
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                <div>
                <div>
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
                Wallet
                </MDTypography>
                <div>
            <h1>
              Locus
            </h1>
            <h3>
              Select a csv file to upload
            </h3>
            <div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
          {this.fileData()}
        </div>
              </MDBox>
 
      </div>
                </div>
                  {/* <DataTable
                    table={{ columns, rows }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  /> */}
                  
                 
                  
                </MDBox>
            
              </Card>
            </Grid>
            
          </Grid>
        </MDBox>
        <Footer />
      </DashboardLayout>



   
      

      );
    }
  }
  
  export default Locus;