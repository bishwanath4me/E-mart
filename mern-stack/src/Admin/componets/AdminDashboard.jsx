import React from "react";
import { Grid } from "@mui/material";
import Achivement from "./Achivement";
import MonthlyOverview from "./MonthlyOverview";
import OrdersTable from "../view/OrderTableView";
import ProductsTable from "./ProductsTable";
import OrdersTableView from "../view/OrderTableView";
import ProductsTableView from "../view/ProductTableView";
//import OrdersTable from "./OrdersTable";

const AdminDashboard = () => {
  return (
    <div className="px-10">
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <div className="shadow-lg shadow-gray-600">
            <Achivement />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="shadow-lg shadow-gray-600">
            <MonthlyOverview />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-600">
            <OrdersTableView />
          </div>
     
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-600">
            <ProductsTableView />
          </div>
          <div className="shadow-lg shadow-gray-600">
            <ProductsTableView />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-600">
            <ProductsTableView />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDashboard;
