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


export default function data() {
  const [users, setUsers] = useState([]);
  const [usersList, setUsersList] = useState([]);

  const [opens, setOpens] = React.useState(false);
  

  const handleClick = (event, param) => {
    console.log(param);
    var raw = "";

var requestOptions = {
  method: 'DELETE',
  body: raw,
  redirect: 'follow'
};

// fetch("https://ggbeta-gcp-h6c2-main-i2mxwms2pq-el.a.run.app/calls/call_tags/"+param, requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
//     // setOpens(true);
//     // window.location.reload()
//     console.log(param+" id deleted");
    window.location.reload();
  };

  function walletBalance(param) {
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer BX7iC0evrcwbp1RaFSLn5lnNTYWmSS");
myHeaders.append("Content-Type", "application/json");

var graphql = JSON.stringify({
  query: "query Wallet($userId:ID!){\n  wallet(userId:$userId){\n    id\n    user{\n      id\n      email\n      firstName\n    }\n    amount\n    expiryDate\n  }\n}",
  variables: {"userId":param}
})
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: graphql,
  redirect: 'follow'
};

fetch("https://gourmetgardenhapi.farziengineer.co/graphql/", requestOptions)
  .then(response => response.text())
  .then(result => console.log("balance is "+result.data.wallet.id))
  .then((response) => {
    // return response.data..json();
  })
  .catch(error => console.log('error', error));
  // console.log()
  // return response.json();
  };

  const handleCloses = () => {
    setOpens(false);
  };

  useEffect(() => {
//
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer BX7iC0evrcwbp1RaFSLn5lnNTYWmSS");
myHeaders.append("Content-Type", "application/json");

var graphql = JSON.stringify({
  query: "fragment CustomerFragment on User {\n  id\n  email\n  firstName\n  lastName\n  phone\n  metadata {\n    key\n    value\n    __typename\n  }\n  __typename\n}\n\nquery Customers($after: String, $before: String, $first: Int, $last: Int, $filter: CustomerFilterInput, $sort: UserSortingInput) {\n  customers(after: $after, before: $before, first: $first, last: $last, filter: $filter, sortBy: $sort) {\n    edges {\n      node {\n        ...CustomerFragment\n        orders(first: 1) {\n          totalCount\n          edges {\n            node {\n              id\n              created\n              shippingAddress {\n                id\n                city\n                postalCode\n                __typename\n              }\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        firstPlacedOrder: orders(last: 1) {\n          edges {\n            node {\n              id\n              created\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      __typename\n    }\n    __typename\n  }\n}\n",
  variables: {"first":20,"filter":{"dateJoined":null,"moneySpent":null,"numberOfOrders":null},"sort":{"direction":"ASC","field":"LAST_NAME"}}
})
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: graphql,
  redirect: 'follow'
};

fetch("https://gourmetgardenhapi.farziengineer.co/graphql/", requestOptions)
.then((response) => {
  // console.log("this is customers"+response.json())
  return response.json();
})
.then((datas) => {
  console.log(datas);
  setUsers(datas.data.customers.edges);
})
  // .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

    //

    var raw = "";

var requestOptions = {
  method: 'GET',
  body: raw,
  redirect: 'follow'
};






    // fetch("https://ggbeta-gcp-h6c2-main-i2mxwms2pq-el.a.run.app/calls/call_tags/")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((datas) => {
    //     console.log(datas);
    //     setUsers(datas.data);
    //   })
  }, [])

  useEffect(() => {
    console.log(users);
    if (users.length > 0) {
      var usersListTemp = [];
      users.map((u)=>{
        usersListTemp.push({
          // (users.map(us => us.name))
          name_and_email: <Author image={team2}
            // {...users.map(user => ( 
            // {...console.log(userk.username)}
            name={u.node.firstName + u.node.firstName}
            email={u.node.email}
          // ))}
          />,
          mobile_number: <Job title="phone" description={u.node.phone!=null?u.node.phone:""} />,
          status: (
            <MDBox ml={-1}>
              <MDBadge badgeContent={walletBalance(u.node.id)} color="success" variant="gradient" size="sm" />
            </MDBox>
          ),
          createdat: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              {u.created_at}
            </MDTypography>
          ),
          action: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              <Button variant="contained"  style={{
        borderRadius: 24,
        backgroundColor: "#21b6ae",
        padding: "2px 39px",
        fontSize: "13px",
        color : "white",
        
    }}>
                  Edit
              </Button>
              {/* <Button 
              style={{
                borderRadius: 24,
                backgroundColor: "#ed3326",
                padding: "2px 39px",
                fontSize: "13px",
                color : "white"
            }}
              variant="contained" >
                  Delete
              </Button> */}
              <Button variant="contained"  style={{
        borderRadius: 24,
        backgroundColor: "#21b6ae",
        padding: "2px 39px",
        fontSize: "13px",
        color : "white"
    }} onClick={event => handleClick(event, u.call_id)}>
        Delete
      </Button>
      <Dialog open={opens} onClose={handleCloses}>
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
      </Dialog>
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
      { Header: "name_and_email", accessor: "name_and_email", width: "45%", align: "left" },
      { Header: "mobile_number", accessor: "mobile_number", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "createdat", accessor: "createdat", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    // {users.length>0 ? (rows:[]) : (rows:[])}

    rows: usersList
    ,

  };
}
