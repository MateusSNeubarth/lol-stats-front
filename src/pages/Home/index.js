import React, { useState } from "react";

import { Container, Header, Img } from "./styles";
import logo from "../../assets/logo.png";
import img from "../../assets/lol.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [summoner, setSummoner] = useState("");
  const history = useNavigate();

  return (
    <Container>
      <Header>
        <img src={logo} alt="logo" />
        <span>
          <strong>LOL STATS</strong>
        </span>
      </Header>
      <h1>
        Busque pelo nome de <strong>invocador!</strong>
      </h1>
      <form>
        <input
          value={summoner}
          onChange={(e) => setSummoner(e.target.value)}
          placeholder="Summoner"
        />
        <label>BR1</label>
        <button type="button" onClick={() => history(`/summoner/${summoner}`)}>
          <strong>BUSCAR</strong>
        </button>
      </form>
      <Img src={img} alt="bg"/>
    </Container>
  );
}

export default Home;