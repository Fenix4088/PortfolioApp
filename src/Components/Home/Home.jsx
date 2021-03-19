import React from "react";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Portfolio } from "../Portfolio/Portfolio";
import { Timeline } from "../Timeline/Timeline";
import {Contacts} from "../Contacts/Contacts";

export const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Portfolio />
        <Timeline />
        <Contacts/>
      </Main>
    </>
  );
};



