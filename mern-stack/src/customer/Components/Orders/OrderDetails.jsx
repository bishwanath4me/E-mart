import React from "react";
import AdreessCard from "../AdressCard/AdreessCard";
import OrderTraker from "./OrderTraker";
import { Box, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { deepPurple } from "@mui/material/colors";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Dilivery Address</h1>
        <AdreessCard />
      </div>
      <div className="py-20">
        <OrderTraker activeStep={3} />
      </div>
      <Grid className="space-y-5" container>
      {[1,1,1,1,1].map((item)=>

     
        <Grid
          item
          container
          className=" shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-betwwn" }}
        >
          <Grid items xs={6}>
            <div className="flex items-center space-x-4 cursor-pointer">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://m.media-amazon.com/images/I/71z6STWL+1L._SX679_.jpg"
                alt=""
              />
              <div className="ml-5 space-y-2">
                <p className="font-semibold">bade sheet</p>
                <p className="opacity-50 text-xs font-semibold space-x-5">
                  Size:M
                </p>
                <p className="opacity-50 text-xs font-semibold space-x-5">
                  Color:Black
                </p>
              </div>
            </div>

            <Grid items>
              <Box sx={{ color: deepPurple[500] }}>
                <StarIcon
                  sx={{ fontSize: "2rem" }}
                  fontSize={"2px"}
                  className="px-2 text-5xl"
                />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        </Grid>
    )}
      </Grid>
    </div>
  );
};

export default OrderDetails;
