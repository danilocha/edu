import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import {
  Container,
  TextField,
  Stack,
  Autocomplete,
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import NavBar from "../src/molecules/NavBar";
const Home: NextPage = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (apiResponse) {
      setCourses(apiResponse);
    }
  }, []);
  useEffect(() => {
    if (search) {
      const newCourses = apiResponse.filter(
        (item) =>
          item.titulo.includes(search) ||
          item.tags.includes(search) ||
          item.descripcion.includes(search)
      );
      setCourses(newCourses);
    }
  }, [search]);
  return (
    <Container>
      <Head>
        <title>Educando</title>
        <meta name="description" content="Plataforma de contenido educativo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <NavBar /> */}
      <Stack spacing={2} mt={2}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={apiResponse.map((option) => option.titulo)}
          renderInput={(params) => <TextField {...params} label="Cursos" />}
          onChange={(e, value) => setSearch(value)}
        />
        <Grid container spacing={4}>
          {courses
            ? courses.map((item, i) => (
                <Grid item key={i + item.titulo}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.urlpreview}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.titulo}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.descripcion}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            : null}
        </Grid>
      </Stack>
    </Container>
  );
};

export default Home;

// etapa > grado > materia
// TO DO: mostrar POP up, usuario invalido
const apiResponse = [
  {
    etapa: 2,
    titulo: "recurso 1",
    descripcion: "SETT",
    grado: 1,
    materia: "M",
    urlpreview:
      "https://image.freepik.com/vector-gratis/banner-blanco-jardin-lindos-conejos-aislados_1308-57363.jpg",
    urlpresource: "urllocal",
    tags: ["tag1", "tag2"],
  },
  {
    etapa: 2,
    titulo: "recurso 2",
    descripcion: "SETT",
    grado: 1,
    materia: "M",
    urlpreview:
      "https://image.freepik.com/vector-gratis/composicion-isometrica-educacion-linea-personas-proceso-aprendizaje-libros-gorra-graduacion-computadora-portatil-globo_1284-51157.jpg",
    urlpresource: "urllocal",
    tags: ["tag3", "tag2"],
  },
  {
    etapa: 2,
    titulo: "recurso 3",
    descripcion: "SETT",
    grado: 1,
    materia: "M",
    urlpreview:
      "https://image.freepik.com/vector-gratis/vector-etiqueta-estrellas-brillantes-amarillo_53876-43571.jpg",
    urlpresource: "urllocal",
    tags: ["tag5", "tag6"],
  },
  {
    etapa: 2,
    titulo: "recurso 4",
    descripcion: "SETT",
    grado: 1,
    materia: "M",
    urlpreview:
      "https://img.freepik.com/vector-gratis/fondo-plano-concepto-universitario_52683-11177.jpg?size=338&ext=jpg",
    urlpresource: "urllocal",
    tags: ["tag7", "tag8"],
  },
];
