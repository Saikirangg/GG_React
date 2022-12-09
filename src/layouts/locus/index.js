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
import React, { useEffect, useState } from "react"
// import React, { useState } from "react";


// import React, { useState } from "react";
 
const Locus=()=>{

  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [failed, setFailed] = useState([]);
  const [success, setSuccess] = useState([]);
  
  const changeHandler = (event) => {
      setSelectedFile(event.target.files[0]);
      setIsFilePicked(true);
  };
  
  const handleSubmission = () => {
      const formData = new FormData();
      formData.append("file", selectedFile);
      console.log(selectedFile);
      axios
      .post("http://ec2-15-206-79-135.ap-south-1.compute.amazonaws.com:8000/api/locus/file_upload/", formData, {
          headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": "Basic c2Fpa2lyYW5AZ21haWwuY29tOnNhaWtpcmFu",
          },
      })
      .then((response) => {
        setFailed(response.data.failed);
        setSuccess(response.data.uploaded);
          console.log(response);
      })
      .catch((error) => {
          console.log(error);
      });
  };
 
 
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
                Locus Upload
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
                Please select a CSV file to upload to locus
                </MDTypography>

                <div>
        <input type="file" name="file" onChange={changeHandler} />
        <div>
            {isFilePicked ? (
            <div>
                <p>Filename: {selectedFile.name}</p>
                <p>Filetype: {selectedFile.type}</p>
                <p>Size in bytes: {selectedFile.size}</p>
                <p>
                lastModifiedDate:{""}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
                </p>

                {failed.length!=0 && 
                <p>Failed: 
                  
                  {failed.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                  </p>
                }

                  {success.length!=0 && 
                <p>Failed: 
                  
                  {success.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                  </p>
                }
                
            </div>
            ) : (
            <p>Select a file to show details</p>
            )}
        </div>
        <button onClick={handleSubmission}>Upload!</button>
        </div>
                

              </MDBox>
 
      </div>
                </div>

                  
                </MDBox>
            
              </Card>
            </Grid>
            
          </Grid>
        </MDBox>
        <Footer />
      </DashboardLayout>



   
      

      );
} 
 
 
export default Locus;
// write a component to take a csv file from backend api and convert it to json



  
// class Locus extends Component=()=> {
//   // const [users, setUsers] : React.useState([]);
  
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isFilePicked, setIsFilePicked] = useState(false);
  
//    changeHandler = (event) => {
//       setSelectedFile(event.target.files[0]);
//       setIsFilePicked(true);
//   };
  
//    handleSubmission = () => {
//       const formData = new FormData();
//       formData.append("file", selectedFile);
//       console.log(selectedFile);
//       axios
//       .post("http://localhost:5000/upload", formData, {
//           headers: {
//           "Content-Type": "multipart/form-data",
//           },
//       })
//       .then((response) => {
//           console.log(response);
//       })
//       .catch((error) => {
//           console.log(error);
//       });
//   };
   
//     state = {
  
//       // Initially, no file is selected
//       selectedFile: null
//     };
     
//     // On file select (from the pop up)
//     onFileChange = event => {
     
//       // Update the state
//       this.setState({ selectedFile: event.target.files[0] });
     
//     };
     
//     // On file upload (click the upload button)
//     onFileUpload = () => {
     
//  // Create an object of formData
//  const formData = new FormData();
     
//  // Update the formData object
//   formData.append(
//     "myFile",
//     this.state.selectedFile,
//     "/C:/Users/Sai kiran/Downloads/Book1.csv"
//   );

// //  formData.append(
// //    "file",
// //    "Book1.csv",
// //    "/C:/Users/Sai kiran/Desktop/Book1.csv"
// //   //  this.state.selectedFile.name
// //  );

//  // Details of the uploaded file
//  console.log(this.state.selectedFile);

//  // Request made to the backend api
//  // Send formData object
// //  axios.post("api/uploadfile", formData);


//  var myHeaders = new Headers();
// myHeaders.append("Authorization", "Basic c2Fpa2lyYW5AZ21haWwuY29tOnNhaWtpcmFu");

// // var formdata = new FormData();

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: formData,
//   redirect: 'follow'
// };

// fetch("http://ec2-15-206-79-135.ap-south-1.compute.amazonaws.com:8000/api/locus/file_upload/", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));



//     };
     
//     // File content to be displayed after
//     // file upload is complete
//     fileData = () => {
     
//       if (this.state.selectedFile) {
          
//         return (
//           <div>
//             <h2>File Details:</h2>
//             <p>File Name: {this.state.selectedFile.name}</p>
  
//             <p>File Type: {this.state.selectedFile.type}</p>
  
//             <p>
//               Last Modified:{" "}
//               {this.state.selectedFile.lastModifiedDate.toDateString()}
//             </p>
  
//           </div>
//         );
//       } else {
//         return (
//           <div>
//             <br />
//             <h4>Choose before Pressing the Upload button</h4>
//           </div>
//         );
//       }
//     };
     
//     render() {
     
//       return (
//         <DashboardLayout>
//         <DashboardNavbar />
//         <MDBox pt={6} pb={3}>
//           <Grid container spacing={6}>
//             <Grid item xs={12}>
//               <Card>
//                 <MDBox
//                   mx={2}
//                   mt={-3}
//                   py={3}
//                   px={2}
//                   variant="gradient"
//                   bgColor="info"
//                   borderRadius="lg"
//                   coloredShadow="info"
//                 >
//                   <MDTypography variant="h6" color="white">
//                   Wallet : 
//                   </MDTypography>
//                 </MDBox>
//                 <MDBox pt={3}>
//                 <div>
//                 <div>
//                 <MDBox
//                 mx={2}
//                 mt={2}
//                 py={3}
//                 px={2}
//                 variant="gradient"
//                 bgColor="info"
//                 borderRadius="lg"
//                 coloredShadow="info"
//               >
//                 <MDTypography variant="h6" color="white">
//                 Wallet
//                 </MDTypography>

//                 <div>
//         <input type="file" name="file" onChange={changeHandler} />
//         <div>
//             {isFilePicked ? (
//             <div>
//                 <p>Filename: {selectedFile.name}</p>
//                 <p>Filetype: {selectedFile.type}</p>
//                 <p>Size in bytes: {selectedFile.size}</p>
//                 <p>
//                 lastModifiedDate:{""}
//                 {selectedFile.lastModifiedDate.toLocaleDateString()}
//                 </p>
//             </div>
//             ) : (
//             <p>Select a file to show details</p>
//             )}
//         </div>
//         <button onClick={handleSubmission}>Upload!</button>
//         </div>
                
//                 {/* //     <div>
//     //     <input type="file" name="file" onChange={changeHandler} />
//     //     <div>
//     //         {isFilePicked ? (
//     //         <div>
//     //             <p>Filename: {selectedFile.name}</p>
//     //             <p>Filetype: {selectedFile.type}</p>
//     //             <p>Size in bytes: {selectedFile.size}</p>
//     //             <p>
//     //             lastModifiedDate:{""}
//     //             {selectedFile.lastModifiedDate.toLocaleDateString()}
//     //             </p>
//     //         </div>
//     //         ) : (
//     //         <p>Select a file to show details</p>
//     //         )}
//     //     </div>
//     //     <button onClick={handleSubmission}>Upload!</button>
//     //     </div> */}
//               </MDBox>
 
//       </div>
//                 </div>
//                   {/* <DataTable
//                     table={{ columns, rows }}
//                     isSorted={false}
//                     entriesPerPage={false}
//                     showTotalEntries={false}
//                     noEndBorder
//                   /> */}
                  
                 
                  
//                 </MDBox>
            
//               </Card>
//             </Grid>
            
//           </Grid>
//         </MDBox>
//         <Footer />
//       </DashboardLayout>



   
      

//       );
//     }
//   }
  
//   export default Locus;