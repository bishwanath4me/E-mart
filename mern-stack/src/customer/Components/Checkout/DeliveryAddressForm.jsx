import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AdreessCard from "../AdressCard/AdreessCard";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../State/Order/Action";

const DeliveryAddressForm = () => {
  const jwt = localStorage.getItem("jwt");
 const navigate = useNavigate();
  const dispatch = useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            streetAddress: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zipCode: data.get("zip"),
            mobile: data.get("phoneNumber"),
          };
      
          dispatch(createOrder({ address, jwt, navigate }));
          console.log("addres", address)
          console.log("nav",navigate)
        
    }

    

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5}>
          <Box className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll ">
            <div className="p-5 py-7 border-b cursor-pointer">
              {" "}
              <AdreessCard />
              <Button
                sx={{ mt: 2 }}
                size="large"
                variant="contained"
                color="primary"
              >
                Deliverd Here
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} lg={7}>
        <Box className="border rounded-md shadow-md p-5">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="shipping address"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  sx={{ padding: ".9rem 1.5rem" }}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Deliverd Here
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
