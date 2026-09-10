import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Box, CssBaseline, Drawer } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import CreateProductForm from "./componets/CreateProductForm";
import ProductsTable from "./componets/ProductsTable";
import OrdersTable from "./componets/OrdersTable";
import CustomersTable from "./componets/CustomersTable";
import AdminDashboard from "./componets/AdminDashboard";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products",  path: "/admin/products", icon: <DashboardIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <DashboardIcon /> },
  { name: "Orders",    path: "/admin/orders", icon: <DashboardIcon /> },
  // {name:"Total Earnings",path:"/admin"},
  //{name:"Weekly Overview",path:"/admin"},
  //{name:"Monthly Overview",path:"/admin"},
  {
    name: "Add Product",
    path: "/admin/product/create",
    icon: <DashboardIcon />,
  },
];
const AdminPannel = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = React.useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <>
        {/* {isLargeScreen && <Toolbar />} */}
        <List>
          {menu.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              onClick={() => navigate(item.path)}
            >
              <ListItemButton>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
     
        </List>
      <List sx={{ position: "absolute", bottom: 0, width: "100vw" }}>
        <ListItem disablePadding>
          <ListItemButton>
            {/*             <Avatar
              className="text-white"
              onClick={handleLogout}
              sx={{
                bgcolor: deepPurple[500],
                color: "white",
                cursor: "pointer",
              }}
            >
              {auth.user?.firstName[0].toUpperCase()}
            </Avatar> */}
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText className="ml-5" primary={"Logout"} />
          </ListItemButton>
        </ListItem>
      </List>
       </>
    </Box>
  );

  return (
    <div>
      <div className=" relative flex h-[100vh] ">
        <CssBaseline />
        <div variant="permanent" className="w-[15%]  fixed top-0">
          {drawer}
        </div>
        <div className="w-[85%] border borer-blue-800  ml-[15%]">
          <Toolbar />
          <Routes>
            <Route path="/" element={<AdminDashboard />}></Route>
            <Route path="/product/create" element={<CreateProductForm />}></Route>
            {/* <Route path="/product/update/:productId" element={<UpdateProductForm/>}></Route> */}
            <Route path="/products" element={<ProductsTable />}></Route>
            <Route path="/orders" element={<OrdersTable />}></Route>
            <Route path="/customers" element={<CustomersTable />}></Route>
            {/* <Route path="/demo" element={<DemoAdmin />}></Route> */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminPannel;
