import { useEffect, useState } from "react";
import style from "./cliente.module.scss";
import Sidebar from "../../assets/components/sideBar/sideBar";
import { Div, Divider } from "../../assets/elements/common";
import {
  UserCircle,
  SquaresFour,
  IdentificationCard,
  Envelope,
  Password,
  UserSwitch,
  MapPinLine,
  Calendar,
  Pencil,
} from "@phosphor-icons/react";
import { FloatButton, Form, Button, Input, Select, DatePicker, message, Table } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import clientHook from "../../../api/hooks/client";
import type { ColumnsType } from "antd/es/table";
import dayjs, { Dayjs } from "dayjs";

interface IClient {
  _id: null,
  name: string,
  email: string,
  password: string,
  status: boolean,
  dateOfBirth: moment.Moment,
  city: string
}

const IClientInitialize: IClient = {
  _id: null,
  name: "",
  email: "",
  password: "####",
  status: true,
  dateOfBirth: moment(),
  city: ""
};

function Cliente() {
  const [formData, setFormData] = useState<IClient>(IClientInitialize);
  const [form] = Form.useForm();

  const [tableData, setTableData] = useState<IClient[]>([]);

  const updateTable = () =>
    clientHook
      .get(null)
      .then((_clients: any) =>
        setTableData(
          _clients.map((client: any) => {
            return {
              _id: client._id,
              name: client.name,
              email: client.email,
              password: client.password,
              status: client.status,
              dateOfBirth: moment(client.dateOfBirth),
              city: client.city
            };
          })
        )
      )
      .catch((error) => {
        console.log(error);
      });

  const editRecord = (record: IClient) => setFormData({ ...record });

  const onSubmitHandler = () => {
    const _id = formData._id ?? null;
    const client = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      status: formData.status,
      dateOfBirth: formData.dateOfBirth.toDate(),
      city: formData.city,
    };

    if (_id === null && client.password === "####")
      form.setFields(
        [
          {
            name: "password",
            errors: ["Insira uma senha valida"],
          },
        ]
      );
    else {
      form.setFields(
        [
          {
            name: "password",
            errors: [],
          },
        ]
      );

      clientHook
        .set(_id, client)
        .then((data: any) => {
          message.success(data.message);
          formData._id = data._id;
          updateTable();
        })
        .catch((error) => {
          message.error(error.response.data.message);
          console.log(error);
        });
    }

  };

  useEffect(() => {
    updateTable()
  }, []);

  useEffect(() => {
    form.setFieldsValue({ ...formData, dateOfBirth: dayjs(formData.dateOfBirth.toDate()) });
  }, [form, formData]);

  const columns: ColumnsType<IClient> = [
    {
      title: "Name",
      dataIndex: "name",
      sortDirections: ["descend"],
    },
    {
      title: "Email",
      dataIndex: "email",
      defaultSortOrder: "descend",
    },
    {
      title: "Estatus",
      dataIndex: "status",
      filters: [
        {
          text: "Ativo",
          value: true,
        },
        {
          text: "Inativo",
          value: false,
        },
      ],
      onFilter: (value: string | number | boolean, record: IClient) => {
        return record.status === value;
      },
      render: (_, record: IClient) => (
        <>{record.status ? "Ativo" : "Inativo"}</>
      ),
    },
    {
      title: "Cidade",
      dataIndex: "city",
    },
    {
      title: "Data de Aniversario",
      dataIndex: "dateOfBirth",
      render: (_, record: IClient) => <>{record.dateOfBirth.format("DD/MM/YYYY").toString()}</>
    },
    {
      title: "Opções",
      render: (_, record: IClient) => (
        <div className={style.btn_table}>
          <Button
            className={style.Btn_table_add}
            type="primary"
            block
            onClick={(e) => {
              editRecord(record);
            }}
          >
            <Pencil className={style.IconTitle} size={24} weight="duotone" />
          </Button>

        </div >
      ),
    },
  ];

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
                  onFinish={onSubmitHandler}
                  form={form}
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
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Por favor insira o Nome!",
                        },
                      ]}
                      className={style.FormItem}
                    >
                      <Input
                        className={style.Input}
                        placeholder="Nome"
                        onChange={(e: any) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      label={
                        <Envelope
                          size={24}
                          color="#f8f9fcc3"
                          weight="duotone"
                        />
                      }
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Por favor insira o seu Email!",
                        },
                      ]}
                      className={style.FormItem}
                    >
                      <Input
                        className={style.Input}
                        placeholder="Email"
                        onChange={(e: any) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </Form.Item>

                    <Form.Item
                      label={
                        <Password
                          size={24}
                          color="#f8f9fcc3"
                          weight="duotone"
                        />
                      }
                      name="password"
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
                        onChange={(e: any) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
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
                      name="city"
                      rules={[
                        {
                          required: true,
                          message: "Por favor insira a sua Cidade!",
                        },
                      ]}
                      className={style.FormItem}
                    >
                      <Input
                        className={style.Input}
                        placeholder="Cidade"
                        onChange={(e: any) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      label={
                        <Calendar
                          size={24}
                          color="#f8f9fcc3"
                          weight="duotone"
                        />
                      }
                      name="dateOfBirth"
                      rules={[
                        {
                          required: true,
                          message: "Por favor insira a sua Data de Nascimento!",
                        },
                      ]}
                      className={style.FormItem}
                    >
                      <DatePicker className={style.InputDate}
                        onChange={(dateInDayjs: Dayjs | null, dateInString: string) =>
                          setFormData({ ...formData, dateOfBirth: dateInDayjs === null ? moment() : moment(dateInString) })
                        }
                      />
                    </Form.Item>

                    <Form.Item
                      label={
                        <UserSwitch
                          size={24}
                          color="#f8f9fcc3"
                          weight="duotone"
                        />
                      }
                      name="status"
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
                        onChange={(value: boolean) =>
                          setFormData({ ...formData, status: value })
                        }
                        options={[
                          { value: true, label: "Ativo" },
                          { value: false, label: "Inativo" },
                        ]}
                      />
                    </Form.Item>
                  </div>
                  <div className={style.btn_container}>
                    <Form.Item className={style.Btn_conten}>
                      <Button
                        className={style.Btn_form}
                        type="primary"
                        block
                        onClick={(e) => {
                          setFormData(IClientInitialize);
                        }}
                        style={{
                          backgroundColor: "transparent",
                          border: "1px solid rgba(var(--primary_color), 1)",
                          color: "rgba(var(--primary_color), 1)",
                        }}
                      >
                        {formData._id === null ? (
                          <>Limpar Campos</>
                        ) : (
                          <>Criar novo Cliente</>
                        )}
                      </Button>
                    </Form.Item>

                    <Form.Item className={style.Btn_conten}>
                      <Button
                        className={style.Btn_form}
                        type="primary"
                        htmlType="submit"
                        block
                      >
                        {formData._id === null ? (
                          <>Cadastrar Cliente</>
                        ) : (
                          <>Atualizar Cliente</>
                        )}
                      </Button>
                    </Form.Item>
                  </div>
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
                <Table
                  style={{ width: "100%" }}
                  columns={columns}
                  dataSource={tableData}
                />
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
