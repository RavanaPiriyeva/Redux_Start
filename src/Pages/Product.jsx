import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";
import { Container, Grid } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const { data, isLoading, error, refetch } = useQuery("productData", () => {
    return axios.get("https://northwind.vercel.app/api/products");
  });

  let dispatch = useDispatch();


  const add = (id) => {
    let newTodoItem =data?.data.find((item)=>item.id ==id)

    dispatch({ type: "ADD", payload: newTodoItem });
  };

//   const removeToDo = (id) => {
//     dispatch({ type: "REMOVE", payload: id });
//   };

  return (
    <div >
      <Container>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        >
          {data?.data.map((product, index) => (
            <Grid item xs={3} style={{ padding: 20, margin: 10 }} key={index}>
              <Card sx={{ width: 300 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {product.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {product.unitPrice}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
                <button onClick={()=>add(product.id)}>Add</button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Product;
