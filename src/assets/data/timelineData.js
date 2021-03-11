import React from "react";
import {faFacebook, faHtml5, faJs, faJsSquare, faLinkedin, faReact,} from "@fortawesome/free-brands-svg-icons";


export const timelineData = [
  {
    title: "Zaporizhzhia Technical University",
    desc:
      "Bachelor's Degree in in welding technologies and equipment\n" +
      "Engineering and Technology Faculty\n",
    dates: "2009 - March 2013",
    icon: {
      icon: "",
      class: "fa-linkedin",
    },
  },
  {
    title: "Zaporizhzhia Technical University",
    desc: "Specialist in welding technologies and equipment\n" +
        "Engineering and Technology Faculty\n",
    dates: "2013 - March 2014",
    icon: {
      icon: faFacebook,
      class: "fa-facebook",
    },
  },
  {
    title: "Online course on HTML / CSS coding",
    desc: "HTML, CSS coding, responsive web design, PixelPerfect, Bootsrtap, basics of JS, jQuery",
    dates: "2013 - March 2014",
    icon: {
      icon: faHtml5,
      class: "fa-facebook",
    },
  },
  {
    title: "JavaScript course",
    desc: "JavaScript (OOP), working with DOM, creating SPA applications, working with Webpack",
    dates: "April 2020 – July 2020",
    icon: {
      icon: faJsSquare,
      class: "fab fa-js-square",
    },
  },
  {
    title: "JavaScript course (advanced level)",
    desc: "JavaScript (OOP), working with DOM, creating SPA applications, UI for programmers",
    dates: "August 2020 – November 2020",
    icon: {
      icon: faJsSquare,
      class: "fab fa-js-square",
    },
  },
  {
    title: "React/Redux course",
    desc: "React, Redux(react-redux, redux-thunk), TypeScript, JavaScript, MaterialUI, Unit-test",
    dates: "December 2020 – current",
    icon: {
      icon: faReact,
      class: "fab fa-react",
    },
  },
];
