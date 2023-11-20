import React from "react";
import style from "./setores.module.scss";
import Sidebar from "../../assets/components/sideBar/sideBar";
import { Div } from "../../assets/elements/common";
import { Briefcase, PlusCircle, SquaresFour } from "@phosphor-icons/react";
import { Button, FloatButton, Form, Input } from "antd";
import { Link } from "react-router-dom";
import DataTable from "../../assets/components/Table/table";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};


function Setores() {
  return (
    <div>
      <Sidebar />
      <div className={style.Container}>
        <div className={style.ContentContainer}>
          <div className={style.Main}>
            <div className={style.Title}>
              <Link to="/Home">
                <SquaresFour
                  className={style.IconTitle}
                  size={32}
                  weight="duotone"
                />
              </Link>
              <h1>Dashboard /</h1>
              <Briefcase
                className={style.IconPage}
                size={32}
                weight="duotone"
              />
              <h1>Setores</h1>
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
              <div className={style.containerInput}>
                <Form
                  name="basic"
                  labelCol={{ span: 0 }}
                  wrapperCol={{ span: 0 }}
                  style={{
                    width: "100%", display: "flex", gap: "20px"
                  }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label={
                      <Briefcase
                        size={24}
                        color="#f8f9fcc3"
                        weight="duotone"
                      />
                    }
                    name="Setor"
                    rules={[
                      {
                        required: true,
                        message: "Por favor insira o nome do Setor!",
                      },
                    ]}
                    className={style.FormItem}
                  >
                    <Input className={style.Input} placeholder="Setor" />
                  </Form.Item>
                  <Form.Item className={style.Btn_container}>
                    <Button
                      className={style.Btn_form}
                      type="primary"
                      htmlType="submit"
                      block
                    >
                      Adicionar Setor <PlusCircle size={24} weight="fill" />
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Div>
            <Div
              className={style.content}
              $primary
              $colorBG="#f8f9fc1d"
              $width="100%"
              $height="405px"
              $radius="12px"
              $border="1px solid rgba(var(--primary_color), .5)"
              $padding="20px 20px"
            >
              <div className={style.table}>
                <DataTable />
              </div>
            </Div>
          </div>
        </div>
      </div>
      <FloatButton.BackTop />
    </div>
  );
}

export default Setores;
