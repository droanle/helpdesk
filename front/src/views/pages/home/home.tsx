import React from "react";
import style from "./home.module.scss";
import Sidebar from "../../assets/components/sideBar/sideBar";
import { Div } from "../../assets/elements/common";
import { SquaresFour } from "@phosphor-icons/react";
import { FloatButton } from "antd";
import Loader from "../../assets/components/Loader/Loader";
import BarChart from "../../assets/components/Charts/Bar/barChart";
import DonutChart from "../../assets/components/Charts/Donut/donutChart";
import TimelineChart from "../../assets/components/Charts/Timeline/timelineChart";
import Polarchart from "../../assets/components/Charts/Polar/polar";

function Home() {
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
              >
                <BarChart />
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
                <DonutChart />
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
              <div className={style.charts}>
                <Polarchart />
                <TimelineChart />
              </div>
            </Div>
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
