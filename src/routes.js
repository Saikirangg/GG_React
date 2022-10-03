/** 
  All of the routes for the Gourmet Garden CRM React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Gourmet Garden CRM React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
// import Billing from "layouts/billing";
// import RTL from "layouts/rtl";
// import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import CallStatus from "layouts/call-status";
import CallTags from "layouts/call-tags";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Orders from "layouts/orders";
import Products from "layouts/products";
import Dnd from "layouts/dnd";
import Tickets from "layouts/tickets";
import PincodeSettings from "layouts/pincodes";
import Customers from "layouts/customers";
import Wallet from "layouts/wallet";
// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
    {
      type: "collapse",
      name: "Customers",
      key: "customers",
      icon: <Icon fontSize="small">paid</Icon>,
      route: "/customers",
      component: <Customers />,
    },
    {
    type: "collapse",
    name: "Wallet",
    key: "wallet",
    icon: <Icon fontSize="small">paid</Icon>,
    route: "/wallet",
    component: <Wallet />,
  },
  {
    type: "collapse",
    name: "Orders",
    key: "orders",
    icon: <Icon fontSize="small">discount</Icon>,
    route: "/orders",
    component: <Orders />,
  },
  {
    type: "collapse",
    name: "Products",
    key: "products",
    icon: <Icon fontSize="small">addhome</Icon>,
    route: "/products",
    component: <Products />,
  },
  {
    type: "collapse",
    name: "CallStatus",
    key: "callstatus",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/callstatus",
    component: <CallStatus />,
  },
  {
    type: "collapse",
    name: "Call Tags",
    key: "calltags",
    icon: <Icon fontSize="small">Call</Icon>,
    route: "/calltags",
    component: <CallTags />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "DND Numbers",
    key: "dnd",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/dnd",
    component: <Dnd />,
  },
  {
    type: "collapse",
    name: "PincodeDelivery",
    key: "pincode",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/pincode",
    component: <PincodeSettings />,
  },
  {
    type: "collapse",
    name: "Tickets",
    key: "tickets",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tickets",
    component: <Tickets />,
  },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/billing",
  //   component: <Billing />,
  // },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  // {
  //   type: "collapse",
  //   name: "Notifications",
  //   key: "notifications",
  //   icon: <Icon fontSize="small">notifications</Icon>,
  //   route: "/notifications",
  //   component: <Notifications />,
  // },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
