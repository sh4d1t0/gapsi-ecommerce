import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Container, Grid, Typography } from "@mui/material";
import Products from "../components/Products";
import ResponsiveAppBar from "../components/AppBar";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <ResponsiveAppBar />
      <Head>
        <meta name="description" content="Gapsi ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant="h2" component="h2" gutterBottom>
          Productos
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Products />
        </Grid>
      </main>
    </Container>
  );
}
