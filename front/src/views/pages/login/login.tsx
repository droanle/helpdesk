import React from "react";
import style from "./login.module.scss";
import { DivFlex } from "../../assets/elements/common";
import { Password, UserCircle } from "@phosphor-icons/react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { Link } from "react-router-dom";

/**
 * @function Login
 * @description Page Login.tsx
 */

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const login = () => {
  message.success("Login efetuado com sucesso!");
};

function Login() {
  return (
    <div className={style.Bg}>
      <div className={style.AppStyle}>
        <div className={style.Container}>
          <DivFlex $primary $colorBG="#141415" className={style.DivForm}>
            <h1 className={style.TitleForm}>- Login -</h1>
            <Form
              name="basic"
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 0 }}
              style={{
                maxWidth: 1200,
                width: "80%",
              }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label={
                  <UserCircle size={24} color="#f8f9fcc3" weight="duotone" />
                }
                name="Login"
                rules={[
                  { required: true, message: "Por favor insira o seu login!" },
                ]}
                className={style.FormItem}
              >
                <Input className={style.Input} placeholder="Login" />
              </Form.Item>

              <Form.Item
                label={
                  <Password size={24} color="#f8f9fcc3" weight="duotone" />
                }
                name="Senha"
                rules={[
                  { required: true, message: "Por favor insira a sua senha!" },
                ]}
                className={style.FormItem}
              >
                <Input.Password className={style.Input} placeholder="Senha" />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox style={{ color: "white" }}>Lembre-me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Link to="/Home">
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    onClick={login}
                  >
                    Login
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </DivFlex>
        </div>
      </div>
    </div>
  );
}

export default Login;
