import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { deleteProduct, findProducts } from "../../State/Product/Action";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Card, CardHeader } from "@mui/material";

const ProductsTableView = () => {
  // Fetch products data here if needed
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  console.log("products in product table ------", products);

  useEffect(() => {
    const data = {
      category: "T-Shirts",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 10000,
      minDiscount: 0,
      sort: "price_low",
      // pageNumber: pageNumber - 1 ,
      pageNumber: 1, //backend pageNumber start from 0
      pageSize: 20,
      stock: "",
    };
    dispatch(findProducts(data));
  }, [products.deleteProduct, dispatch]);

  return (
    <div className="p-5">
      <Card
        className="mt-2 bg-[gray] "
        sx={{ bgcolor: "#1b1b1b", color: "white" }}
      >
        <CardHeader align="left" title="Recent Products" />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Title</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Category</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Price</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Quantity</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.products?.content?.slice(0,10).map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ textAlign: "center" }} align="right">
                    <Avatar alt={item.titel} src={item.imageUrl} />
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    component="th"
                    scope="row"
                  >
                    {item.title}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }} align="right">
                    {item.category.name}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }} align="right">
                    {item.price}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }} align="right">
                    {item.quantity}
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

export default ProductsTableView;
