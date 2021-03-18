import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import React from "react";
import "./PortfolioBTN.scss"
import {faFileDownload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const PortfolioBTN = (props) => {
  const { theme, linkType, title, path, additionalClass } = props;

  const linkStyle = theme === "color" ? "color" : "colorless";

  return (
    <>
      {linkType === "hash" ? (
        <HashLink to={path} className={`${linkStyle}-btn ${additionalClass}`}>
          {title}
        </HashLink>
      ) :
          linkType === "nav"  ? (
        <NavLink to={path} className={`${linkStyle}-btn ${additionalClass}`}>
          {title}
        </NavLink>
      )  :
          <a href={path} className={`${linkStyle}-btn ${additionalClass}`} target="_blank" rel="noreferrer" download>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <FontAwesomeIcon icon={faFileDownload} style={{marginRight: "10px"}}/>
              {title}
            </div>
          </a>
      }
    </>
  );
};