import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from "../../State/Admin/Order/Action";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import {
  Avatar,
  Button,
  Card,
  AvatarGroup,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const OrdersTableView = () => {
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event,index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget
    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index) => {
    const newAnchorElArray=[...anchorEl]
    newAnchorElArray[index]=null
    setAnchorEl(newAnchorElArray);
  };

  const dispatch = useDispatch();
  const { adminsOrder } = useSelector((store) => store);
  
  
  useEffect(() => {
    dispatch(getOrders());
  }, [adminsOrder.confirmed, adminsOrder.shipped, adminsOrder.delivered, adminsOrder.deletedOrder]);
  
  const handleShippedOrder = (orderId,index) => {
    //handleUpdateStatusMenuClose(index);
    dispatch(shipOrder(orderId));
    //setOrderStatus("ShIPPED")
      console.log("handle ship order ", orderId)
    handleClose()
  };

  const handleDeliveredOrder = (orderId,index) => {
    //handleUpdateStatusMenuClose(index);
    dispatch(deliveredOrder(orderId))
    //setOrderStatus("DELIVERED")
    console.log("handle confirmed order ", orderId)
    handleClose()
  };

  const handleConfirmedOrder = (orderId, index) => {
    //handleUpdateStatusMenuClose(index);
    dispatch(confirmOrder(orderId));
      console.log("handle deelver order ", orderId)
   // setOrderStatus("CONFIRMED")
   handleClose()
  };

  

  const handleDeleteOrder = (orderId) => {
  
    dispatch(deleteOrder(orderId));
  };

  //console.log("orders in admin order table ------", adminsOrder);

  return (
    <div className="p-10">
      <Card
        className="mt-2 bg-[gray] "
        sx={{ bgcolor: "#1b1b1b", color: "white" }}
      >
        <CardHeader align="left" title="Recent Orders" />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Title</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Id</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Price</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Status</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {adminsOrder?.orders?.map((item,index) => (
                <TableRow
                  // key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* {console.log(item)} */}
                  <TableCell sx={{ textAlign: "center" }} align="right">
                    <AvatarGroup max={2} sx={{ justifyContent: "start" }}>
                      {item.orderItems.map(
                        (orderItem) => (
                          <Avatar
                            key={orderItem._id}
                            src={orderItem?.product?.imageUrl}
                          ></Avatar>
                        ),
                        //<Avatar alt={item.titel} src={item.imageUrl} />
                      )}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    component="th"
                    scope="row"
                  >
                    {item.orderItems.map((orderItem) => (
                      <p>{orderItem?.product?.title}</p>
                    ))}
                    {/* <p>{item.orderItems?.product?.title}</p> */}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }} align="right">
                    {item.orderItems.map((orderItem) => (
                      <p>{orderItem?.product?._id}</p>
                    ))}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }} align="right">
                    {item.orderItems.map((orderItem) => (
                      <p>{orderItem?.price}</p>
                    ))}
                  </TableCell>
           
                  <TableCell sx={{ textAlign: "center" }} align="right">
                             <span className={` text-white px-5 py-2 rounded-full ${
                             item.orderStatus==="CONFIRMED" ?"bg-[green]":
                             item.orderStatus==="SHIPPED"?"bg-[blue]":
                             item.orderStatus==="PLACED"?"bg-[gray]":
                             item.orderStatus=="PENDING"?"bg-[gray]":
                             "bg-[red]"}`}>{item?.orderStatus}</span> 
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Button
                      // id={buttonId}
                      id="basic-menu"
                      //aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                     // aria-expanded={open ? "true" : undefined}
                      onClick={(e)=>handleClick(e,index)}
                        aria-controls={`basic-menu-${item._id}`}
                    aria-expanded={Boolean(anchorEl[index])}
                    >
                      Status
                    </Button>
                    <Menu
                      //id={menuId}
                      id={`basic-menu-${item._id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={()=>handleClose(index)}
                      // slotProps={{
                      //   list: {
                      //     "aria-labelledby": buttonId,
                      //   },
                      // }}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={() => handleConfirmedOrder(item?._id)}>Confirmed Order</MenuItem>
                      <MenuItem onClick={() => handleShippedOrder(item?._id)}>Shipped Order</MenuItem>
                      <MenuItem onClick={() => handleDeliveredOrder(item?._id)}>Delivered Order</MenuItem>
                    </Menu>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrdersTableView;
