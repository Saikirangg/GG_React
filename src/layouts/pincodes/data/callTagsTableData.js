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

var raw = "";

var requestOptions = {
  method: 'GET',
  body: raw,
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




    fetch("http://localhost:8000/order/pincodes")
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
      users.map((u)=>{
        usersListTemp.push({
          // (users.map(us => us.name))
          pincode:
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <B>{u.pincode}</B>
        </MDTypography>,
        //  <Author image={team2}
        //     // {...users.map(user => ( 
        //     // {...console.log(userk.username)}
        //     name={u.name}
        //     email={u.email}
        //   // ))}
        //   />,
          // store_id: <Job title={u.store_id==1?"bangalore":"Chennai"} description={u.store_id} />,
          // paymentStatus: (
          //   <MDBox ml={-1}>
          //     <MDBadge badgeContent={u.first_name} color="success" variant="gradient" size="sm" />
          //   </MDBox>
          // ),
          monday: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              "{u.monday}"
            </MDTypography>
          ),
          tuesday: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              "{u.tuesday}"
            </MDTypography>
          ),
          wednesday: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              "{u.wednesday}"
            </MDTypography>
          ),
          thursday: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              "{u.thursday}"
            </MDTypography>
          ),
          friday: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              "{u.friday}"
            </MDTypography>
          ),
          saturday: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
             {u.saturday? "Active":"Deactive"}
            </MDTypography>
          ),
          sunday: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              "{u.sunday}"
            </MDTypography>
          ),
          // action: (
          //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          //     Edit
          //   </MDTypography>
          // ),
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
      { Header: "pincode", accessor: "pincode", width: "45%", align: "left" },
      { Header: "monday", accessor: "monday", align: "left" },
      { Header: "tuesday", accessor: "tuesday", align: "left" },
      { Header: "wednesday", accessor: "wednesday", align: "left" },
      { Header: "thursday", accessor: "thursday", align: "left" },
      { Header: "friday", accessor: "friday", align: "left" },
      { Header: "saturday", accessor: "saturday", align: "left" },
      { Header: "sunday", accessor: "sunday", align: "left" },

      // { Header: "paymentStatus", accessor: "paymentStatus", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
      // { Header: "action", accessor: "action", align: "center" },
    ],

    // {users.length>0 ? (rows:[]) : (rows:[])}

    rows: usersList
    ,

  };
}
