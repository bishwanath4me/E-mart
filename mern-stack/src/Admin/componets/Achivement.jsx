import { Button, Card, CardContent, styled } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=rewarded_ads" />
const TrignleImg = styled("img")({
  right: "0px",
  height: "100px",
  position: "absolute",
  bottom: "0px",
});

const TrophyImg = styled("img")({
  right: "1px",
  height: "100px",
  position: "absolute",
  bottom: "20px",
});

const Achivement = () => {
  return (
    <Card sx={{ position: "relative", }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
          Shop with Zosh
        </Typography>
        <Typography variant="body2">Conguratulation 🥳</Typography>
        <Typography variant="h5" sx={{my:3.1}}>420.8k</Typography>
        <Button size="small" variant="contained"> View Sales</Button>
        {/* <TrignleImg src="/assets/triangule.png" alt="triangule" /> */}
        <TrophyImg src="https://img.freepik.com/free-vector/trophy_78370-345.jpg?semt=ais_hybrid&w=340&q=40" alt="trophy" />
      </CardContent>
    </Card>
  );
};

export default Achivement;
