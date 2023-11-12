import style from "./graficos.module.scss";
import Sidebar from "../../assets/components/sideBar/sideBar";
import { Div } from "../../assets/elements/common";
import { ChartBar, House } from "@phosphor-icons/react";
import { FloatButton, Progress, Space } from "antd";
import { Link } from "react-router-dom";
import Search from "antd/es/input/Search";
import Loader from "../../assets/components/Loader/Loader";

function Cliente() {
  return (
    <div>
      <Sidebar />
      <div className={style.Container}>
        <div className={style.ContentContainer}>
          <div className={style.Main}>
            <div className={style.Title}>
              <Link to="/Home">
                <House className={style.IconTitle} size={32} weight="duotone" />
              </Link>
              <h1>Home /</h1>
              <ChartBar className={style.IconPage} size={32} weight="duotone" />
              <h1>Gráficos</h1>
            </div>
            <Div
              className={style.content}
              $primary
              $colorBG="#f8f9fc1d"
              $width="100%"
              $height="80px"
              $radius="12px"
              $border="1px solid rgba(var(--primary_color), .5)"
            >
              <div className={style.Seach}>
                <Search
                  style={{ width: "40%" }}
                  placeholder="Busque por um Gráfico"
                  size="large"
                />
              </div>
            </Div>
            <div className={style.Section1}>
              <Div
                className={style.content}
                $primary
                $colorBG="#f8f9fc1d"
                $width="49%"
                $height="230px"
                $radius="12px"
                $border="1px solid rgba(var(--primary_color), .5)"
                $padding="20px 20px"
              >
                <div className={style.graphics}>
                  <h1 style={{ marginBottom: "2%" }}>
                    Exemplo de Gráfico de Proasdasdagressão
                  </h1>
                  <Progress percent={30} status="active" />
                  <Progress percent={50} status="active" />
                  <Progress percent={70} status="exception" />
                  <Progress percent={100} />
                  <Progress percent={50} showInfo={false} status="active" />
                </div>
              </Div>
              <Div
                className={style.content}
                $primary
                $colorBG="#f8f9fc1d"
                $width="49%"
                $height="230px"
                $radius="12px"
                $border="1px solid rgba(var(--primary_color), .5)"
                $padding="20px 20px"
              >
                <div className={style.graphics}>
                  <h1 style={{ marginBottom: "2%" }}>
                    Exemplo de Gráfico Circular
                  </h1>
                  <Space wrap>
                    <Progress
                      type="circle"
                      percent={30}
                      status="active"
                      style={{ padding: "20px 0px 10px 10px" }}
                    />
                    <Progress
                      type="circle"
                      percent={50}
                      status="active"
                      style={{ padding: "20px 0px 10px 0px" }}
                    />
                    <Progress
                      type="circle"
                      percent={70}
                      status="exception"
                      style={{ padding: "20px 0px 10px 0px" }}
                    />
                    <Progress
                      type="circle"
                      percent={100}
                      style={{ padding: "20px 0px 10px 0px" }}
                    />
                  </Space>
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

export default Cliente;
