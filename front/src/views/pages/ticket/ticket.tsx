import React, { useState, useEffect } from "react";
import style from "./ticket.module.scss";
import Sidebar from "../../assets/components/sideBar/sideBar";
import { Div } from "../../assets/elements/common";
import { Ticket, SquaresFour, Briefcase, Envelope } from "@phosphor-icons/react";
import { Button, FloatButton, Form, Select, Table } from "antd";
import { Link } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TicketEditor from "../../assets/components/TicketEditor/editor";


interface ITi

function TicketPage() {
  const [value, setValue] = useState('');


  useEffect(() => { }, [value])
  const columns: ColumnsType<IUser> = [
    {
      title: "Name",
      dataIndex: "name",
      onFilter: (value: string | number | boolean, record: IUser) => {
        if (typeof value === "string") {
          return record.name.indexOf(value) === 0;
        }
        return false;
      },
      sortDirections: ["descend"],
    },
    {
      title: "Email",
      dataIndex: "email",
      defaultSortOrder: "descend",
    },
    {
      title: "Nivel",
      dataIndex: "nivel",
      filters: [
        {
          text: "Admin",
          value: 0,
        },
        {
          text: "Usuário",
          value: 1,
        },
      ],
      onFilter: (value: string | number | boolean, record: IUser) => {
        return record.nivel === value;
      },
      render: (_, record: IUser) => (
        <>{record.nivel === 0 ? "Admin" : "Usuario"}</>
      ),
    },
    {
      title: "Setor",
      dataIndex: "sector",
      render: (_, record: IUser) => <>{record.sector.name}</>
    },
    {
      title: "Opções",
      render: (_, record: IUser) => (
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

          {record._id === session._id ?
            <></> :
            <Button
              className={style.Btn_table_remove}
              onClick={() => setModal(record._id ?? "")}
              type="primary"
              block
            >
              <Trash className={style.IconTitle} size={24} weight="duotone" />
            </Button>
          }
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
              <Ticket className={style.IconPage} size={32} weight="duotone" />
              <h1>Ticket</h1>
            </div>

            <Table
              style={{ width: "100%" }}
              columns={columns}
              dataSource={tableData}
            />

            {/* <TicketEditor _id={"olas"} content={{}} /> */}




            {/* <Form name="basic" className={style.containerForm} labelCol={{ span: 0 }} wrapperCol={{ span: 0 }}>
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
                <ReactQuill theme="snow" className={style.RichEditor} value={value} onChange={setValue} />

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
            </Form> */}
          </div>
        </div>
      </div>
      <FloatButton.BackTop />
    </div>
  );
}

export default TicketPage;
