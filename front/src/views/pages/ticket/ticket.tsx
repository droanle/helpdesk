import React from "react";
import style from "./ticket.module.scss";
import Sidebar from "../../assets/components/sideBar/sideBar";
import { Div } from "../../assets/elements/common";
import { Ticket, SquaresFour, Briefcase, Envelope } from "@phosphor-icons/react";
import { Button, FloatButton, Form, Select } from "antd";
import { Link } from "react-router-dom";

const handleChange = (value: string) => {
  console.log(`${value}`);
};

function TicketPage() {
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
              <Ticket className={style.IconPage} size={32} weight="duotone" />
              <h1>Ticket</h1>
            </div>
            <Form name="basic" className={style.containerForm} labelCol={{ span: 0 }} wrapperCol={{ span: 0 }}>
              <Div
                className={style.content}
                $primary
                $colorBG="#f8f9fc1d"
                $width="50%"
                $height="auto"
                $radius="12px"
                $border="1px solid rgba(var(--primary_color), .5)"
              >
                <div className={style.form}>
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
                        message: "Por favor insira o Setor!",
                      },
                    ]}
                    className={style.FormItem}
                  >
                    <Select
                      className={style.Input}
                      placeholder="Setor"
                      onChange={handleChange}
                      options={[
                        { value: 0, label: "Admin" },
                        { value: 1, label: "Usuário" },
                      ]}
                    />
                  </Form.Item>
                </div>
              </Div>
              <Div
                className={style.content}
                $primary
                $colorBG="#f8f9fc1d"
                $width="100%"
                $height="370px"
                $radius="12px"
                $border="1px solid rgba(var(--primary_color), .5)"
                $padding="20px 20px"
              >
              </Div>
              <Form.Item className={style.Btn_container}>
                <Button
                  className={style.Btn_form}
                  type="primary"
                  htmlType="submit"
                  block
                >
                  Enviar Ticket <Envelope size={24} weight="duotone" />
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <FloatButton.BackTop />
    </div>
  );
}

export default TicketPage;
