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
  query: "fragment Money on Money {\n  amount\n  currency\n  __typename\n}\n\nfragment ProductFragment on Product {\n  id\n  name\n  thumbnail {\n    url\n    __typename\n  }\n  isAvailable\n  isPublished\n  productType {\n    id\n    name\n    hasVariants\n    __typename\n  }\n  __typename\n}\n\nquery Products($first: Int, $after: String, $last: Int, $before: String, $filter: ProductFilterInput, $sort: ProductOrder) {\n  products(before: $before, after: $after, first: $first, last: $last, filter: $filter, sortBy: $sort) {\n    edges {\n      node {\n        ...ProductFragment\n        attributes {\n          attribute {\n            id\n            __typename\n          }\n          values {\n            id\n            name\n            __typename\n          }\n          __typename\n        }\n        pricing {\n          priceRangeUndiscounted {\n            start {\n              gross {\n                ...Money\n                __typename\n              }\n              __typename\n            }\n            stop {\n              gross {\n                ...Money\n                __typename\n              }\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    pageInfo {\n      hasPreviousPage\n      hasNextPage\n      startCursor\n      endCursor\n      __typename\n    }\n    totalCount\n    __typename\n  }\n}\n",
  variables: {"first":35,"filter":{"attributes":null,"categories":null,"collections":null,"isPublished":null,"price":null,"productTypes":null,"stockAvailability":null},"sort":{"direction":"ASC","field":"NAME"}}
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
        console.log(datas);
        setUsers(datas.data.products.edges);
      })
  }, [])

  useEffect(() => {
    console.log(users);
    if (users.length > 0) {
      var usersListTemp = [];
      users.map((u)=>{
        usersListTemp.push({
          // (users.map(us => us.name))
          product_name_and_id: <Author image={u.node.thumbnail!=null?u.node.thumbnail.url:""}
            // {...users.map(user => ( 
            // {...console.log(userk.username)}
            name={u.node.name}
            email={u.node.id}
          // ))}
          />,
          price: <Job title={u.node.pricing.priceRangeUndiscounted.start.gross.amount.toString()+"-"+ u.node.pricing.priceRangeUndiscounted.stop.gross.amount.toString()} description={u.node.pricing.priceRangeUndiscounted.start.gross.currency} />,
          isAvailable: (
            <MDBox ml={-1}>
              <MDBadge badgeContent={u.node.isAvailable.toString()}  color="success" variant="gradient" size="sm" />
            </MDBox>
          ),
          productType: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              {u.node.productType.name}
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
      { Header: "product_name_and_id", accessor: "product_name_and_id", width: "45%", align: "left" },
      { Header: "price", accessor: "price", align: "left" },
      { Header: "isAvailable", accessor: "isAvailable", align: "center" },
      { Header: "productType", accessor: "productType", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    // {users.length>0 ? (rows:[]) : (rows:[])}

    rows: usersList
    ,

  };
}
