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

// @mui material components
import Icon from "@mui/material/Icon";

// Gourmet Garden CRM React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";

export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  // const Progress = ({ color, value }) => (
  //   <MDBox display="flex" alignItems="center">
  //     <MDTypography variant="caption" color="text" fontWeight="medium">
  //       {value}%
  //     </MDTypography>
  //     <MDBox ml={0.5} width="9rem">
  //       <MDProgress variant="gradient" color={color} value={value} />
  //     </MDBox>
  //   </MDBox>
  // );

  return {
    columns: [
      { Header: "action", accessor: "action", width: "30%", align: "left" },
      { Header: "order id", accessor: "order_id", align: "left" },
      { Header: "customer", accessor: "customer", align: "center" },
      { Header: "shipping_details", accessor: "shipping_details", align: "center" },
      { Header: "amount", accessor: "amount", align: "center" },
      { Header: "payment_status", accessor: "payment_status", align: "center" },
      { Header: "delivery_details", accessor: "delivery_details", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "assigned to", accessor: "assigned_to", align: "center" },
      { Header: "call status", accessor: "call_status", align: "center" },
      { Header: "call note", accessor: "call_note", align: "center" },
    ],

    rows: [
      {
        action: <Project image={LogoAsana} name="Asana" />,
        order_id: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $2,500
          </MDTypography>
        ),
        customer: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            working
          </MDTypography>
        ),
        shipping_details: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            Address
          </MDTypography>
        ),
        amount: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
        payment_status: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
        delivery_details: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
    ],
  };
}
