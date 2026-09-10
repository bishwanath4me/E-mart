import { Grid } from "@mui/material";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl border " >
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://m.media-amazon.com/images/I/71z6STWL+1L._SX679_.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">bade sheet</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                Size:M
              </p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                Color:Black
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹1299</p>
        </Grid>
        <Grid item xs={4}>
          {true &&
          <div >
           
            <p>
              <AdjustIcon sx={{width:"15px",height:"15px"}} className="text-green-600 mr-2"/> <span>Delivered On March 3</span>
            </p>
            <p className="text-xs">Your Item Has Been Delivered</p>
          
          </div>
          }
          {false && (
            <p>
              <span> Expected Delivery On Mar 2</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
