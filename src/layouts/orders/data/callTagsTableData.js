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
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import React, { useEffect, useState } from "react"

export default function data() {
  const [users, setUsers] = useState([]);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {

//     var raw = "";

// var requestOptions = {
//   method: 'GET',
//   body: raw,
//   redirect: 'follow'
// };

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer BX7iC0evrcwbp1RaFSLn5lnNTYWmSS");
myHeaders.append("Content-Type", "application/json");

var graphql = JSON.stringify({
  query: "query Order($first: Int){\n    orders(first: $first) {\n		edges {\n			node {\n				__typename\n				created\n				id\n				number\n				payments {\n					gateway\n					__typename\n				}\n				privateMetadata {\n					key\n					value\n					__typename\n				}\n				voucher {\n					code\n					__typename\n				}\n				metadata {\n					key\n					value\n					__typename\n				}\n				fulfillments {\n					trackingNumber\n					__typename\n				}\n				paymentStatus\n				status\n				total {\n					__typename\n					gross {\n						__typename\n						amount\n						currency\n					}\n				}\n				userEmail\n			}\n			__typename\n		}\n		pageInfo {\n			hasPreviousPage\n			hasNextPage\n			startCursor\n			endCursor\n			__typename\n		}\n		__typename\n	}\n}",
  variables: {"first":20}
})
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: graphql,
  redirect: 'follow'
};

// fetch("https://gourmetgardenhapi.farziengineer.co/graphql/", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

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




    fetch("https://gourmetgardenhapi.farziengineer.co/graphql/",requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
        // console.log(datas);
        setUsers(datas.data.orders.edges);
      })
  }, [])

  useEffect(() => {
    console.log(users);
    if (users.length > 0) {
      var usersListTemp = [];
      users.map((u)=>{
        usersListTemp.push({
          // (users.map(us => us.name))
          id_and_email: <Author image={team2}
            // {...users.map(user => ( 
            // {...console.log(userk.username)}
            name={u.node.id}
            email={u.node.userEmail}
            number_val={u.node.number }
            payments = {u.node.userEmail}
            gross_value = {u.node.useEffect}
           
          // ))}
          />,
          number_and_status: <Job title={u.node.number} description={u.node.status} />,
          paymentStatus: (
            <MDBox ml={-1}>
              <MDBadge badgeContent={u.node.paymentStatus} color="success" variant="gradient" size="sm" />
            </MDBox>
          ),
          createdat: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              "{u.node.created}"
            </MDTypography>
          ),
          action: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              Edit
            </MDTypography>
          ),
        })
      })
      setUsersList(usersListTemp)
    } else {
      setUsersList([])
    }
  }, [users]);

  const Author = ({ image, name, email, number, payments, gross_value }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
        <MDTypography variant="caption">{number_val}</MDTypography>
        <MDTypography variant="caption">{payments}</MDTypography>
        <MDTypography variant="caption">{gross_value}</MDTypography>
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
      { Header: "id_and_email", accessor: "id_and_email", width: "45%", align: "left" },
      { Header: "number_and_status", accessor: "number_and_status", align: "left" },
      { Header: "paymentStatus", accessor: "paymentStatus", align: "center" },
      { Header: "createdat", accessor: "createdat", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    // {users.length>0 ? (rows:[]) : (rows:[])}

    rows: usersList
    ,

  };
}
