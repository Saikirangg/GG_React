/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Gourmet Garden CRM React components
import MDBox from "components/MDBox";
import { Button } from "@mui/material";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import React, { useEffect, useState } from "react"
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { WindowSharp } from "@mui/icons-material";


export default function data(setHh,setTagedit,setTageditid) {
  const [users, setUsers] = useState([]);
  const [usersList, setUsersList] = useState([]);

  const [opens, setOpens] = React.useState(false);
  const [abc, setAbc] = React.useState(false);


  const handleClick = (event, param) => {
    console.log(param);
    var raw = "";

    var requestOptions = {
      method: 'DELETE',
      body: raw,
      redirect: 'follow'
    };

    fetch("http://ec2-15-206-79-135.ap-south-1.compute.amazonaws.com:8000/calls/call_tags/" + param, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    // setOpens(true);
    // window.location.reload()
    console.log(param + " id deleted");
    window.location.reload();
  };

  const handleCloses = () => {
    setOpens(false);
  };

  const handleClickOpenDiaologue = () => {
    console.log("nani is bujji");

    setHh(true);
  };

  const handleCloseDiaologue = () => {
    setHh(false);
  };

  useEffect(() => {

    var raw = "";

    var requestOptions = {
      method: 'GET',
      body: raw,
      redirect: 'follow'
    };

    // fetch("http://ec2-15-206-79-135.ap-south-1.compute.amazonaws.com:8000/calls/call_tags/", requestOptions)
    //   .then((response) => {
    //   // response => response.text();
    //   console.log(response)
    //   setUsers(response.data);
    //   return response.json();
    //   }
    //   )
    //   .then(result => console.log(result.data))
    //   .catch(error => console.log('error', error));




    fetch("http://ec2-15-206-79-135.ap-south-1.compute.amazonaws.com:8000/calls/call_tags/")
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
        console.log(datas);
        setUsers(datas.data);
      })
  }, [])

  useEffect(() => {
    console.log(users);
    if (users.length > 0) {
      var usersListTemp = [];
      users.map((u) => {
        usersListTemp.push({
          // (users.map(us => us.name))
          calltag: <Author image={team2}
            // {...users.map(user => ( 
            // {...console.log(userk.username)}
            name={u.call_tag}
            email={u.call_id}
          // ))}
          />,
          function: <Job title="Manager" description="Organization" />,
          status: (
            <MDBox ml={-1}>
              <MDBadge badgeContent={u.is_active.toString()} color="success" variant="gradient" size="sm" />
            </MDBox>
          ),
          createdat: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              {u.created_at}
            </MDTypography>
          ),
          action: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              <Button variant="contained" style={{
                borderRadius: 24,
                backgroundColor: "#21b6ae",
                padding: "2px 39px",
                fontSize: "13px",
                color: "white",

              }} 
              onClick={() => {
                handleClickOpenDiaologue();
                setTagedit(u.call_tag);
                setTageditid(u.call_id);
                console.log(u.call_id);
              }}>
               {/* onClick={handleClickOpenDiaologue}> */}
                Edit
              </Button>
              <Button variant="contained" style={{
                borderRadius: 24,
                backgroundColor: "#21b6ae",
                padding: "2px 39px",
                fontSize: "13px",
                color: "white"
              }}
                onClick={event => handleClick(event, u.call_id)}>
                Delete
              </Button>

              {/* dialogue for edit module */}
              
              {/* dialgue for edit module */}
              {/* <Dialog open={opens} onClose={handleCloses}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloses}>Cancel</Button>
          <Button onClick={handleCloses}>Subscribe</Button>
        </DialogActions>
      </Dialog> */}
            </MDTypography>
          ),
        })
      })
      setUsersList(usersListTemp)
    } else {
      setUsersList([])
    }
  }, [users]);

  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );





  return {
    // users:[
    //   users.map(user => (
    //     <li key={user.id}>{user.name}</li>
    //   ))
    // ],

    columns: [
      { Header: "calltag", accessor: "calltag", width: "45%", align: "left" },
      { Header: "function", accessor: "function", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "createdat", accessor: "createdat", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    // {users.length>0 ? (rows:[]) : (rows:[])}

    rows: usersList
    ,

  };
}
