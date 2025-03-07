import React, { useEffect } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import TabPostagem from "../../components/postagens/tabpostagens/TabPostagem";
import "./Home.css";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function Home() {
  let history = useNavigate();

  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  )

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      })
      history("/login")
    }
  }, [token])

  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa" >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">
              Olá treinadores !
            </Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">
              Compartilhe seus conhecimentos e suas descobertas de pokemons !
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Link to='/postagens' className="text-decorator-none">
              <Button variant="outlined" className="botao">
                Ver Postagens
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src="https://i.imgur.com/o5TBtmx.jpg" alt="" width="500px" height="500px"
          />
        </Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
