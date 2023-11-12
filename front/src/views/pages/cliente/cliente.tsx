import style from "./cliente.module.scss";
import Sidebar from "../../assets/components/sideBar/sideBar";
import { Div, Divider } from "../../assets/elements/common";
import {
  UserCircle,
  SquaresFour,
  Users,
  IdentificationCard,
  Envelope,
  Password,
  UserSwitch,
  MapPinLine,
  Calendar,
} from "@phosphor-icons/react";
import { FloatButton, Form, Button, Input, Select, DatePicker } from "antd";
import Loader from "../../assets/components/Loader/Loader";
import { Link } from "react-router-dom";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const handleChange = (value: string) => {
  console.log(`${value}`);
};

function Cliente() {
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
              <UserCircle
                className={style.IconPage}
                size={32}
                weight="duotone"
              />
              <h1>Cliente</h1>
            </div>
            <Div
              className={style.content}
              $primary
              $colorBG="#f8f9fc1d"
              $width="100%"
              $height="auto"
              $radius="12px"
              $border="1px solid rgba(var(--primary_color), .5)"
            >
              <div className={style.formUser}>
                <h1>Cadastro de Cliente</h1>
                <Divider />
                <Form
                  name="basic"
                  labelCol={{ span: 0 }}
                  wrapperCol={{ span: 0 }}
                  style={{
                    width: "100%",
                  }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  className={style.Form}
                >
                  <div className={style.containerInpt}>
                    <Form.Item
                      label={
                        <IdentificationCard
                          size={24}
                          color="#f8f9fcc3"
                          weight="duotone"
                        />
                      }
                      name="Name"
                      rules={[
                        {
                          required: true,
                          message: "Por favor insira o Nome!",
                        },
                      ]}
                      className={style.FormItem}
                    >
                      <Input className={style.Input} placeholder="Nome" />
                    </Form.Item>
                    <Form.Item
                      label={
                        <Envelope
                          size={24}
                          color="#f8f9fcc3"
                          weight="duotone"
                        />
                      }
                      name="Email"
                      rules={[
                        {
                          required: true,
                          message: "Por favor insira o seu Email!",
                        },
                      ]}
                      className={style.FormItem}
                    >
                      <Input className={style.Input} placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                      label={
                        <Password
                          size={24}
                          color="#f8f9fcc3"
                          weight="duotone"
                        />
                      }
                      name="Senha"
                      rules={[
                        {
                          required: true,
                          message: "Por favor insira a sua senha!",
                        },
                      ]}
                      className={style.FormItem}
                    >
                      <Input.Password
                        className={style.Input}
                        placeholder="Senha"
                      />
                    </Form.Item>
                    <Form.Item
                      label={
                        <MapPinLine
                          size={24}
                          color="#f8f9fcc3"
                          weight="duotone"
                        />
                      }
                      name="Cidade"
                      rules={[
                        {
                          required: true,
                          message: "Por favor insira a sua Cidade!",
                        },
                      ]}
                      className={style.FormItem}
                    >
                      <Input className={style.Input} placeholder="Cidade" />
                    </Form.Item>
                    <Form.Item
                      label={
                        <Calendar
                          size={24}
                          color="#f8f9fcc3"
                          weight="duotone"
                        />
                      }
                      name="DataNasc"
                      rules={[
                        {
                          required: true,
                          message: "Por favor insira a sua Data de Nascimento!",
                        },
                      ]}
                      className={style.FormItem}
                    >
                      <DatePicker className={style.InputDate} />
                    </Form.Item>

                    <Form.Item
                      label={
                        <UserSwitch
                          size={24}
                          color="#f8f9fcc3"
                          weight="duotone"
                        />
                      }
                      name="Status"
                      rules={[
                        {
                          required: true,
                          message: "Por favor insira o Status do Cliente!",
                        },
                      ]}
                      className={style.FormItem}
                    >
                      <Select
                        className={style.Input}
                        placeholder="Status"
                        onChange={handleChange}
                        options={[
                          { value: 0, label: "Ativo" },
                          { value: 1, label: "Inativo" },
                        ]}
                      />
                    </Form.Item>
                  </div>
                  <Form.Item className={style.Btn_container}>
                    <Button
                      className={style.Btn_form}
                      type="primary"
                      htmlType="submit"
                      block
                    >
                      Cadastrar
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
