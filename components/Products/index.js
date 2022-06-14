import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid, Typography } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Api from "../../services/Api";
import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Api()
      .get("search?&query=nintendo&page=1")
      .then((response) => {
        setProducts(
          response.data.item.props.pageProps.initialData.searchResult
            .itemStacks[0].items
        );
        // console.log("products: ", products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {products.map((product) => {
        return (
          <Grid item xs={2} sm={4} md={4} key={product.id}>
            <Item>
              <Card>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={product.name}
                  subheader={product.availabilityStatusDisplayValue}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <AddShoppingCartIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Item>
          </Grid>
        );
      })}
    </>
  );
}
