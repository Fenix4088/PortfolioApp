import React from "react";
import {Header} from "../Header/Header";
import {Main} from "../Main/Main";
import {Portfolio} from "../Portfolio/Portfolio";

export const Home = () => {
  return (
    <>
      <Header />
      <Main>
          <Portfolio/>
      </Main>
    </>
  );
};