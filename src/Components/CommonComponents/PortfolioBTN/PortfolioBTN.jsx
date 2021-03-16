import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import React from "react";
import "./PortfolioBTN.scss"

export const PortfolioBTN = (props) => {
  const { theme, linkType, title, path, additionalClass } = props;

  const linkStyle = theme === "color" ? "color" : "colorless";

  return (
    <>
      {linkType === "hash" ? (
        <HashLink to={path} className={`${linkStyle}-btn ${additionalClass}`}>
          {title}
        </HashLink>
      ) : (
        <NavLink to={path} className={`${linkStyle}-btn ${additionalClass}`}>
          {title}
        </NavLink>
      )}
    </>
  );
};