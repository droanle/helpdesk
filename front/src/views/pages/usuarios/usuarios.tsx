import style from "./usuarios.module.scss";
import Sidebar from "../../assets/components/sideBar/sideBar";
import { Div, Divider } from "../../assets/elements/common";
import {
  SquaresFour,
  Users,
  IdentificationCard,
  Envelope,
  Password,
  Briefcase,
  UserRectangle,
} from "@phosphor-icons/react";
import { FloatButton, Form, Button, Input, Select } from "antd";
import Loader from "../../assets/components/Loader/Loader";
import { Link } from "react-router-dom";
import DataTable from "../../assets/components/Table/table";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const handleChange = (value: string) => {
  console.log(`${value}`);
};

function Usuarios() {
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
              <Users className={style.IconPage} size={32} weight="duotone" />
              <h1>Usuários</h1>
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
                <h1>Cadastro de Usuário</h1>
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
                        <UserRectangle
                          size={24}
                          color="#f8f9fcc3"
                          weight="duotone"
                        />
                      }
                      name="Nivel"
                      rules={[
                        {
                          required: true,
                          message: "Por favor insira o Nivel do Usuário!",
                        },
                      ]}
                      className={style.FormItem}
                    >
                      <Select
                        className={style.Input}
                        placeholder="Nivel"
                        onChange={handleChange}
                        options={[
                          { value: 0, label: "Admin" },
                          { value: 1, label: "Usuário" },
                        ]}
                      />
                    </Form.Item>
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
                          message: "Por favor insira o Setor do Usuário!",
                        },
                      ]}
                      className={style.FormItem}
                    >
                      <Select
                        className={style.Input}
                        placeholder="Setor"
                        onChange={handleChange}
                        options={[
                          { value: 0, label: "A" },
                          { value: 1, label: "B" },
                          { value: 2, label: "C" },
                          { value: 3, label: "D" },
                          { value: 4, label: "E" },
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
              $height="auto"
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

export default Usuarios;
