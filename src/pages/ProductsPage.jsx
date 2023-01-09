import { Box, Grid } from "@mui/material";
import ProductsList from "../components/Products/ProductsList";
import SideBar from "../components/Products/SideBar";
import React from "react";

const ProductsPage = () => {
  return (
    <Box p={5}>
      <Grid container spacing={3}>
        <ProductsList />
        <SideBar />
      </Grid>
    </Box>
  );
};

export default ProductsPage;
