import React from "react";
import { useLoading, Bars } from "@agney/react-loading";
import "./Preloader.scss"

export function Preloader() {
  const barStyle = {
    background: "red"
  }

  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Bars width="80" />,
  });

  return <div {...containerProps} className={"preloader"}>{indicatorEl}</div>;
}