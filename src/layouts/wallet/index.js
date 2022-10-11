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
import React, { useEffect, useState } from "react"
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


// Data
import authorsTableData from "layouts/customers/data/callTagsTableData";
import { Button } from "@mui/material";
import { WindowSharp } from "@mui/icons-material";
// const name = document.getElementById('name').value;
// const surname = document.getElementById('surname').value;
// import projectsTableData from "layouts/tables/data/projectsTableData";



function Wallet() {
  // const userId="";
  const initialValue= ''
  const placeholder= 'Enter your text...'
  const { columns, rows } = authorsTableData();
  const [open, setOpen] = useState(false);
  const [openbal, setOpenbal] = useState(false);
  const [value, setValue] = useState(initialValue)
  const [incbal, setIncbal] = useState(initialValue)
  const [userwallet, setUserwallet] = useState("");
  const [userid, setUserid] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userfirstname, setUserfirstname] = useState("");
  const [gender, setGender] = React.useState('ADD');

  const handleChange = (event) => {
    setGender(event.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenBal = () => {
    setOpenbal(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseBal = () => {
    setOpenbal(false);
  };

  useEffect(() => {
    setOpen(false);
    //new
    console.log("this is using useeffect")

    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer BX7iC0evrcwbp1RaFSLn5lnNTYWmSS");
    // myHeaders.append("Content-Type", "application/json");
    
    // var graphql = JSON.stringify({
    //   query: "query{\n  users(phone:\"\",email:\""+value+"\"){\n    id\n    lastLogin\n  }\n}",
    //   variables: {}
    // })
    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: graphql,
    //   redirect: 'follow'
    // };
    
    // fetch("https://gourmetgardenhapi.farziengineer.co/graphql/", requestOptions)
    //   .then(response => response.text()
    //   )
    //   .then(result =>
    //     setUserwallet(result)
    //   )
    //   .catch(error => console.log('error', error));
    // console.log(results);
    
  }, [userwallet]);

  
  const handleSaveBalClose = () => {
    setOpenbal(false);
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer BX7iC0evrcwbp1RaFSLn5lnNTYWmSS");
myHeaders.append("Content-Type", "application/json");

var graphql = JSON.stringify({
  query: "mutation UpdateWalletBalance($input: WalletInput!) {\n  walletBalanceUpdate(input: $input) {\n    wallet {\n      id\n      amount\n      __typename\n    }\n    __typename\n  }\n}\n",
  variables: {"input":{"amount": incbal,"reason":"min_balance_needed","secret":"GOURMET","type": gender,"userId": userid}}
})
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: graphql,
  redirect: 'follow'
};

fetch("https://gourmetgardenhapi.farziengineer.co/graphql/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  // window.location.reload();
  };

  const handleSaveClose = () => {
    setOpen(false);
    //new

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer BX7iC0evrcwbp1RaFSLn5lnNTYWmSS");
    myHeaders.append("Content-Type", "application/json");
    
    var graphql = JSON.stringify({
      query: "query{\n  users(phone:\"\",email:\""+value+"\"){\n    id\n    lastLogin\n  }\n}",
      variables: {}
    })
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: graphql,
      redirect: 'follow'
    };
    
    fetch("https://gourmetgardenhapi.farziengineer.co/graphql/", requestOptions)
      .then(response => response.text()
      )
      .then(result =>
        // console.log(JSON.parse(result).data.users.id)
        setUserid(JSON.parse(result).data.users.id)
        // setUserwallet(result)
      )
      .catch(error => console.log('error', error));
      // window.location.reload()
      // console.log(userwallet);
    // sessionStorage.setItem("SURNAME", surname);
    // sessionStorage.setItem("SURNAME", surname);
    
    //old
//     var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "call_tag": value
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("http://ec2-15-206-79-135.ap-south-1.compute.amazonaws.com:8000/calls/call_tags/", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
//     console.log("value is "+value);
    // window.location.reload()
    console.log("finallay here is "+userid)

    //new one
//     var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer BX7iC0evrcwbp1RaFSLn5lnNTYWmSS");
// myHeaders.append("Content-Type", "application/json");

var graphqlWallet = JSON.stringify({
  query: "query Wallet($userId:ID!){\n  wallet(userId:$userId){\n    id\n    user{\n      id\n      email\n      firstName\n    }\n    amount\n    expiryDate\n  }\n}",
  variables: {"userId": userid}
})
var requestOptionsWallet = {
  method: 'POST',
  headers: myHeaders,
  body: graphqlWallet,
  redirect: 'follow'
};

fetch("https://gourmetgardenhapi.farziengineer.co/graphql/", requestOptionsWallet)
  .then(response => response.text())
  .then(result => {
    // console.log(JSON.parse(result).data.wallet.amount)
    setUserwallet(JSON.parse(result).data.wallet.amount)
    setUseremail(JSON.parse(result).data.wallet.user.email)
    setUserfirstname(JSON.parse(result).data.wallet.user.firstName)
  }
    )
  
  .catch(error => console.log('error', error));
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
                Wallet : 
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
              <div>
              <div>
      <Button variant="contained" 
      style={{ color : "white" }}
      onClick={handleClickOpen}>
        Search Customer By E-mail
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
                Wallet
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
          <Button onClick={handleSaveClose}>Search</Button>
        </DialogActions>
      </Dialog>
    </div>
              </div>
                {/* <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                /> */}
                
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Customer Name : {userid}
                    </Typography>
                    <Typography variant="h5" component="div">
                    Balance  : {userwallet}

                    </Typography>
                    <Typography variant="h5" component="div">
                    Email  : {useremail}

                    </Typography>

{/* Increase the balance */}
                   {userid!="" && <Button variant="contained" 
                    style={{ color : "white" }}
                    onClick={handleClickOpenBal}
                    >
                      Increase Balance
                    </Button>

                    
                }
                {/* new check */}

                
                <Dialog open={openbal} PaperProps={{
        sx: {
          width: "50%",
          maxHeight: 2000,
          height : "60%"
        }
      }} onClose={handleClickOpenBal}>
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
                Add Balance
                </MDTypography>
              </MDBox>
        <DialogContent style={{ overflow: "hidden" }}>
          <DialogContentText>
            Add new balance
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
            value={incbal}
            onChange={e => setIncbal(e.target.value)}
          />
          <FormControl>
      {/* <FormLabel id="demo-radio-buttons-group-label">Money</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value = "ADD"
          checked={gender === 'ADD'}
          onChange={handleChange} control={<Radio />} label="Increase" />
        <FormControlLabel value = "SUB"
          checked={gender === 'SUB'}
          onChange={handleChange} control={<Radio />} label="Decrease" />
      </RadioGroup>
    </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseBal}>Cancel</Button>
          <Button onClick={handleSaveBalClose}>Add</Button>
        </DialogActions>
      </Dialog>

                {/* new check */}
{/* Decrease the balance */}
                {/* {userid!="" && <Button variant="contained" 
                color="red"
                          style={{ color : "white" }}
                          // onClick={handleClickOpen}
                          >
                            Decrease Balance
                          </Button>
                      } */}

                    
                  </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
                
              </MDBox>
          
            </Card>
          </Grid>
          
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );

}

export default Wallet;