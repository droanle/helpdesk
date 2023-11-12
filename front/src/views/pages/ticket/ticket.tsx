import React, { useState } from "react";
import style from "./ticket.module.scss";
import Sidebar from "../../assets/components/sideBar/sideBar";
import { Div } from "../../assets/elements/common";
import {
  CameraPlus,
  Envelope,
  Ticket,
  SquaresFour,
  Password,
  UserCircle,
} from "@phosphor-icons/react";
import { Avatar, Button, FloatButton, Form, Input, Modal } from "antd";
import { Link } from "react-router-dom";
import Loader from "../../assets/components/Loader/Loader";

function TicketPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
            <Div
              className={style.content}
              $primary
              $colorBG="#f8f9fc1d"
              $width="50%"
              $height="200px"
              $radius="12px"
              $border="1px solid rgba(var(--primary_color), .5)"
            >
              <div>
                <Avatar
                  className={style.Avatar}
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                  icon={<CameraPlus size={64} weight="duotone" />}
                />
              </div>
              <div className={style.InfoUser}>
                <ul>
                  <li>
                    <h1>Nome</h1>
                    <Input
                      placeholder="Nome do Usuário"
                      disabled
                      style={{ marginLeft: "2%" }}
                    />
                  </li>
                  <li>
                    <h1>Email</h1>
                    <Input
                      placeholder="Email@email.com"
                      disabled
                      style={{ marginLeft: "2%" }}
                    />
                  </li>
                </ul>
              </div>
              <div className={style.ModalUser}>
                <Button type="primary" onClick={showModal}>
                  Alterar
                </Button>
                <Modal
                  okType="primary"
                  title="Alterar Informações do Usuário"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <Form layout="vertical">
                    <Form.Item
                      label={
                        <UserCircle
                          size={28}
                          color="#f8f9fcc3"
                          weight="duotone"
                        />
                      }
                      name="Login"
                      className={style.FormItem}
                    >
                      <Input className={style.Input} placeholder="Login" />
                    </Form.Item>
                    <Form.Item
                      label={
                        <Envelope
                          size={28}
                          color="#f8f9fcc3"
                          weight="duotone"
                        />
                      }
                      name="Login"
                      className={style.FormItem}
                    >
                      <Input className={style.Input} placeholder="Login" />
                    </Form.Item>
                    <Form.Item
                      label={
                        <Password
                          size={28}
                          color="#f8f9fcc3"
                          weight="duotone"
                        />
                      }
                      name="Senha"
                      className={style.InputModal}
                    >
                      <Input.Password placeholder="Senha" />
                    </Form.Item>
                  </Form>
                </Modal>
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

export default TicketPage;
