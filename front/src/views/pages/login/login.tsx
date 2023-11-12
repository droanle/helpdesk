import React from 'react';
import style from './login.module.scss';
import { DivFlex } from '../../assets/elements/common';
import { GoogleLogo, FacebookLogo, TwitterLogo, Password, UserCircle } from '@phosphor-icons/react';
import { Button, Checkbox, Divider, Form, Input, message } from 'antd';
import { Link } from 'react-router-dom';

/**
 * @function Login 
 * @description Page Login.tsx
 */

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const login = () => {
  message.success('Login efetuado com sucesso!');
}

const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
  e.preventDefault();
};


function Login() {
  return (
    <div className={style.Bg}>
      <div className={style.AppStyle}>
        <div className={style.Container} onContextMenu={handleContextMenu}>
          <DivFlex $primary $colorBG='#141415' $width='100%' $height='100%' $radius='24px' className={style.DivForm}>
            <img src="./img/logo_white.png" alt="Logo BootSolutions" draggable={false} />
            <Form
              name="basic"
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 0 }}
              style={{
                maxWidth: 1200,
                width: '80%',
              }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label={(
                  <UserCircle size={24} color='#f8f9fcc3' weight="duotone" />
                )}
                name="Login"
                rules={[{ required: true, message: 'Por favor insira o seu login!' }]}
                className={style.FormItem}
              >
                <Input className={style.Input} placeholder='Login' />
              </Form.Item>

              <Form.Item
                label={(<Password size={24} color='#f8f9fcc3' weight="duotone" />)}
                name="Senha"
                rules={[{ required: true, message: 'Por favor insira a sua senha!' }]}
                className={style.FormItem}
              >
                <Input.Password className={style.Input} placeholder='Senha' />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" >
                <Checkbox style={{color: "white"}}>Lembre-me</Checkbox>
              </Form.Item>

              <Form.Item >
                <Link to="/Home">
                  <Button type="primary" htmlType="submit" block onClick={login}>
                    Login
                  </Button>
                </Link>
                <Divider style={{ borderColor: "#f8f9fc", color: "#f8f9fc" }}>ou login com</Divider>
                <div className={style.socialLogin}>
                  <FacebookLogo size={32} color="#3b5998" weight="duotone" onClick={login} className={style.socialLogo} />
                  <GoogleLogo size={32} weight="duotone" color="#db4537" onClick={login} className={style.socialLogo} />
                  <TwitterLogo size={32} color="#00acee" weight="duotone" onClick={login} className={style.socialLogo} />
                </div>
              </Form.Item>
            </Form>
          </DivFlex>
        </div>
      </div >
      <footer><span>powered by @BootSolutions</span></footer>
    </div>
  );
}

export default Login;