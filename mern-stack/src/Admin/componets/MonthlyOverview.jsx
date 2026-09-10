import React from "react";
import { AccountCircle, TrendingUp } from "@mui/icons-material";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const salesData = [
  {
    stats: "245k",
    title: "Sales",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
    color: "primary",
  },
  {
    stats: "12.5k",
    title: "Customers",
    icon: <AccountCircle sx={{ fontSize: "1.75rem" }} />,
    color: "success",
  },

  {
    stats: "1.54k",
    title: "Products",
    icon: <PhonelinkIcon sx={{ fontSize: "1.75rem" }} />,
    color: "warning",
  },

  {
    stats: "88k",
    title: "Revenue",
    icon: <AttachMoneyIcon sx={{ fontSize: "1.75rem" }} />,
    color: "info",
  },
];

const renderStats = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          variant="rounded"
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: "common.white",
            backgroundColor: `${item.color}.main`,
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="caption">{item.title}</Typography>
          <Typography variant="h6">{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ));
};

const MonthlyOverview = () => {
  return (
    <Card sx={{}}>
      <CardHeader
        title="Monthly Overview"
        action={
          <IconButton
            size="small"
            aria-label="settings"
            className="card-more-options"
            sx={{ color: "text.secondary" }}
          >
            <MoreVertIcon />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box
              component="span"
              sx={{ fontWeight: 600, mx:2, color: "text.primary" }}
            >
              Total 48.5% growth
            </Box>{" "}
            😎 this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: "0.15px !important",
          },
        }}
      />

      <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MonthlyOverview;
