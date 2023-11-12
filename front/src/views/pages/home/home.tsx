import React, { useState } from "react";
import style from "./home.module.scss";
import Sidebar from "../../assets/components/sideBar/sideBar";
import { Div } from "../../assets/elements/common";
import { SquaresFour } from "@phosphor-icons/react";
import { FloatButton } from "antd";
import Loader from "../../assets/components/Loader/Loader";
import Chart from "apexcharts";

function Home() {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]);

  return (
    <div>
      <Sidebar />
      <div className={style.Container}>
        <div className={style.ContentContainer}>
          <div className={style.Main}>
            <div className={style.Title}>
              <SquaresFour
                className={style.IconTitle}
                size={32}
                weight="duotone"
              />
              <h1>Dashboard</h1>
            </div>
            <div className={style.Section1}>
              <Div
                className={style.content}
                $primary
                $colorBG="#f8f9fc1d"
                $width="48%"
                $height="350px"
                $radius="12px"
                $border="1px solid rgba(var(--primary_color), .5)"
                $padding="20px 20px"
              ></Div>
              <Div
                className={style.content}
                $primary
                $colorBG="#f8f9fc1d"
                $width="48%"
                $height="350px"
                $radius="12px"
                $border="1px solid rgba(var(--primary_color), .5)"
                $padding="20px 20px"
              >
                <div className={style.Loader}>
                  <Loader />
                </div>
              </Div>
            </div>
            <Div
              className={style.content}
              $primary
              $colorBG="#f8f9fc1d"
              $width="100%"
              $height="350px"
              $radius="12px"
              $border="1px solid rgba(var(--primary_color), .5)"
              $padding="20px 20px"
            >
              <div className={style.Loader}>
                <Loader />
              </div>
            </Div>
            <div className={style.Section1}>
              <Div
                className={style.content}
                $primary
                $colorBG="#f8f9fc1d"
                $width="48%"
                $height="350px"
                $radius="12px"
                $border="1px solid rgba(var(--primary_color), .5)"
                $padding="20px 20px"
              >
                <div className={style.Loader}>
                  <Loader />
                </div>
              </Div>
              <Div
                className={style.content}
                $primary
                $colorBG="#f8f9fc1d"
                $width="48%"
                $height="350px"
                $radius="12px"
                $border="1px solid rgba(var(--primary_color), .5)"
                $padding="20px 20px"
              >
                <div className={style.Loader}>
                  <Loader />
                </div>
              </Div>
            </div>

            <Div
              className={style.content}
              $primary
              $colorBG="#f8f9fc1d"
              $width="100%"
              $height="350px"
              $radius="12px"
              $border="1px solid rgba(var(--primary_color), .5)"
              $padding="20px 20px"
            >
              <div className={style.Loader}>
                <Loader />
              </div>
            </Div>
          </div>
        </div>
      </div>
      <FloatButton.BackTop />
    </div>
  );
}
export default Home;
