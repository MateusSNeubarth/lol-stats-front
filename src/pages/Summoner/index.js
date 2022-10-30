import React, { useEffect, useState } from "react";
import { Spinner } from 'react-bootstrap';
import { useParams } from "react-router-dom";

import {
  Container,
  Content,
  HeaderContent,
  IconSummoner,
  EloSummoner,
  SummonerInfo,
  FooterContent,
  CircleDiv,
  WinsLabel,
  LossesLabel
} from "./style";
import api from "../../services/api";

import bronze from "../../assets/bronze.png";
import iron from "../../assets/iron.png";
import silver from "../../assets/silver.png";
import gold from "../../assets/gold.png";
import platinum from "../../assets/platinum.png";
import diamond from "../../assets/diamond.png";
import grandmaster from "../../assets/grandmaster.png";
import master from "../../assets/master.png";
import challenger from "../../assets/challenger.png";


function Summoner() {
  const [summoner, setSummoner] = useState(Object);
  const [loading, setLoading] = useState(0);
  const params = useParams();

  useEffect(() => {
    async function loadData() {
      setLoading(1);
      const res = await api
        .get(`/summoner/${params.id}`)
        .catch((e) => alert("There was an error on looking for Summoner"));

      if (res && res.data) {
        setSummoner(res.data);
      }
      setLoading(0);
    }
    loadData();

    //eslint-disable-next-line
  }, []);

  function validarElo(elo) {
    switch (elo) {
      case "BRONZE":
        return <EloSummoner src={bronze} alt="elo" />;
      case "IRON":
        return <EloSummoner src={iron} alt="elo" />;
      case "SILVER":
        return <EloSummoner src={silver} alt="elo" />;
      case "GOLD":
        return <EloSummoner src={gold} alt="elo" />;
      case "PLATINUM":
        return <EloSummoner src={platinum} alt="elo" />;
      case "DIAMOND":
        return <EloSummoner src={diamond} alt="elo" />;
      case "GRANDMASTER":
        return <EloSummoner src={grandmaster} alt="elo" />;
      case "MASTER":
        return <EloSummoner src={master} alt="elo" />;
      case "CHALLENGER":
        return <EloSummoner src={challenger} alt="elo" />;
      default: break;
    }
  }

  return (
    <Container>  
      {
        !loading?
        (
          <>
            <Content>
             <HeaderContent>
            <IconSummoner src={summoner.iconUrl} alt="icon" />
            <SummonerInfo>
              <h2>
                <strong>{params.id}</strong> #BR1
              </h2>
              <h3>
                Nível {summoner.summonerLevel} - {summoner.tier} {summoner.rank}
              </h3>
            </SummonerInfo>
  
            {validarElo(summoner.tier)}
          </HeaderContent>
          <FooterContent>
            <div>
              <WinsLabel>
                <strong>WINS: </strong>
                <label>{summoner.wins}</label>
              </WinsLabel>
              <LossesLabel>
                <strong>LOSSES: </strong>
                <label>{summoner.losses}</label>
              </LossesLabel>
            </div>
            <CircleDiv>
              <label>
                <strong>{summoner.winRate}%</strong>
              </label>
              <label>WIN RATE</label>
            </CircleDiv>
          </FooterContent>
        </Content>
        </>)
        :
        (
          <Spinner animation="border" variant="light" />
        )
      }
    </Container>
  );
}

export default Summoner;