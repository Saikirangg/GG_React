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
  query: "query Order($first: Int){\n    orders(first: $first) {\n		edges {\n			node {\n				__typename\n				created\n				id\n                user{\n        email\n        phone\n        firstName\n        lastName\n      }\n      shippingAddress{\n        id\n        firstName\n        lastName\n        streetAddress1\n        streetAddress2\n        city\n        cityArea\n        postalCode\n        countryArea\n      }\n       billingAddress{\n        id\n        firstName\n        lastName\n        streetAddress1\n        streetAddress2\n        city\n        cityArea\n        postalCode\n        countryArea\n      }\n      lines{\n        variant{\n          sku\n        }\n      }\n				number\n				payments {\n					gateway\n					__typename\n				}\n				privateMetadata {\n					key\n					value\n					__typename\n				}\n				voucher {\n					code\n					__typename\n				}\n				metadata {\n					key\n					value\n					__typename\n				}\n				fulfillments {\n					trackingNumber\n					__typename\n				}\n				paymentStatus\n				status\n				total {\n					__typename\n					gross {\n						__typename\n						amount\n						currency\n					}\n				}\n				userEmail\n			}\n			__typename\n		}\n		pageInfo {\n			hasPreviousPage\n			hasNextPage\n			startCursor\n			endCursor\n			__typename\n		}\n		__typename\n	}\n}",
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

// fetch("https://bsjgoxudjb.execute-api.us-east-2.amazonaws.com/calls/call_tags/", requestOptions)
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
          id_and_email: (
          // <>
          // {/* <Author 
          //   // image={team2}
          //   name={u.node.id}
          //   email={u.node.userEmail} /> */}
          //   <MDBox>
          //     <MDBadge badgeContent={u.node.user.email} color="success" variant="gradient" size="sm" />
          //     <MDBadge badgeContent={"k.value"} color="failure" variant="gradient" size="sm" />
          //   </MDBox></>
          <MDBox ml={-1}>
               <MDBox>
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
             {u.node.user!=null ? u.node.user.firstName+" "+u.node.user.lastName : ""}
            </MDTypography>
            </MDBox>
            <MDBox>
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
             {u.node.user!=null ? u.node.user.phone : ""}
            </MDTypography>
            </MDBox>
            <MDBox>
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
             {u.node.user!=null ? u.node.user.email : ""}
            </MDTypography>
            </MDBox>
            </MDBox>
          ),
          number_and_status: <Job title={"Number : "+u.node.number} description={"Status : "+u.node.status} />,
          paymentStatus: (
            <MDBox ml={-1}>
              {/* <MDBadge badgeContent={u.node.paymentStatus} color="success" variant="gradient" size="sm" /> */}
              {
               u.node.metadata.length>0 && u.node.metadata.map((k)=> 
               <>
               <MDBox>
               <MDBadge badgeContent={k.key} color="success" variant="gradient" size="sm" />
               <MDBadge badgeContent={JSON.stringify(k.value)} color="failure" variant="gradient" size="sm" />
               </MDBox>
               </>
               )
                }

            </MDBox>
          ),
          createdat: (
            <MDBox ml={-1}>
              {
               u.node.payments.length>0 && u.node.payments.map((k)=> 
               <MDBox>
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
             {k.gateway}
            </MDTypography>
            </MDBox>
            )
          }
            </MDBox>
          ),
          shipping_address: (
            // <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            //   Edit
            // </MDTypography>
            <MDBox ml={-1}>
               <MDBox>
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
             {u.node.shippingAddress!=null ? u.node.shippingAddress.firstName+" "+u.node.shippingAddress.lastName : ""}
            </MDTypography>
            </MDBox>
            <MDBox>
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
             {u.node.shippingAddress!=null ? u.node.shippingAddress.city : ""}
            </MDTypography>
            </MDBox>
            <MDBox>
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
             {u.node.shippingAddress!=null ? u.node.shippingAddress.streetAddress1+" , "+u.node.shippingAddress.streetAddress2+" , "+u.node.shippingAddress.postalCode : ""}
            </MDTypography>
            </MDBox>
            </MDBox>
          ),
        })
      })
      setUsersList(usersListTemp)
    } else {
      setUsersList([])
    }
  }, [users]);

  const Author = ({ image, name, email,number_val, number, payments, gross_value }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
        {/* <MDTypography variant="caption">{number_val}</MDTypography> */}
        
        {/* <MDTypography variant="caption">{payments}</MDTypography>
        <MDTypography variant="caption">{gross_value}</MDTypography> */}
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
      { Header: "shipping_address", accessor: "shipping_address", align: "center" },
    ],

    // {users.length>0 ? (rows:[]) : (rows:[])}

    rows: usersList
    ,

  };
}
