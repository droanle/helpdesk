import moment from "moment";
import React, { Component } from "react";
import { Select, Checkbox, Input, Card, Divider, Form, Button } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import sectorHook from "../../../../api/hooks/sector";
import style from "./editor.module.scss";
import { Envelope } from "@phosphor-icons/react"

interface IPorfile {
    _id: String;
    name: String;
}

interface ISector {
    _id: String;
    name: String;
}

interface IDiscourse {
    name: String;
    content: String;
    date: Date;
}

interface ComponentProps {
    _id: string | null;
    content: ComponentState | {};
}

interface ComponentState {
    title: String;
    creater: IPorfile;
    creationDate: moment.Moment | null;
    closingDate: Date | null;
    priority: Number | null;
    status: Number;
    relatedUsers: IPorfile[];
    sectors: string | null;
    discourse: IDiscourse[];
    sectorOptions: { value: string; label: string }[];
}

class TicketEditor extends Component<ComponentProps, ComponentState> {
    state: ComponentState = {
        title: "",
        creater: {
            _id: "",
            name: "",
        },
        creationDate: moment(),
        closingDate: null,
        priority: null,
        status: 0,
        relatedUsers: [],
        sectors: null,
        discourse: [],
        sectorOptions: [],
    };

    constructor(props: ComponentProps) {
        super(props);
        this.setState(props.content);
    }

    componentDidMount() {
        sectorHook
            .get(null)
            .then((_sectors: any) => {
                this.setState({
                    sectorOptions: _sectors.map((sector: any) => {
                        return { value: sector._id, label: sector.name };
                    }),
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render(): React.ReactNode {
        return (
            <div>
                <Form>
                    <div className={style.header}>
                        <span>Nome do Criador</span>
                        <span>Data criação</span>
                    </div>
                    <Form.Item label="Titulo" name="Titulo">
                        <Input type="text" name="title" />
                    </Form.Item>

                    <div className={style.contentForm}>
                        {/* Sector */}
                        <Form.Item label="Setor" name="Setor">
                            <Select
                                style={{ width: 120 }}
                                onChange={(value) => {
                                    this.setState({ sectors: value });
                                }}
                                options={this.state.sectorOptions}
                            />
                        </Form.Item>

                        {/* Status */}
                        <Form.Item label="Status" name="Status">
                            <Select
                                style={{ width: 120 }}
                                onChange={(value) => {
                                    this.setState({ status: value });
                                }}
                                options={[
                                    { value: 0, label: "Pendente" },
                                    { value: 1, label: "Em Progresso" },
                                    { value: 2, label: "Pausado" },
                                    { value: 3, label: "Cancelado" },
                                    { value: 4, label: "Concluído" },
                                ]}
                            />
                        </Form.Item>
                        {/* Priority */}
                        <Form.Item label="Prioridade" name="Prioridade">
                            <Select
                                style={{ width: 120 }}
                                onChange={(value) => {
                                    this.setState({ priority: value });
                                }}
                                options={[
                                    { value: 0, label: "Alta" },
                                    { value: 1, label: "Média" },
                                    { value: 2, label: "Pequena" },
                                    { value: 3, label: "Irrelevante" },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item label="Concluido" name="Concluido">
                            <Checkbox name="closingDate" />
                        </Form.Item>
                    </div>
                    <Divider>Discussão</Divider>
                    <div className={style.cards}>
                        <Card title="Nome do user" size="small">
                            <p>Date</p>
                            <p>Mensagem1</p>
                        </Card>
                        <Card title="Nome do user" size="small">
                            <p>Date</p>
                            <p>Mensagem2</p>
                        </Card>
                        <Card title="Nome do user" size="small">
                            <p>Date</p>
                            <p>Mensagem3</p>
                        </Card>
                    </div>

                    <div>
                        <ReactQuill />
                    </div>
                    <Form.Item className={style.Btn_container}>
                        <Button
                            className={style.Btn_form}
                            type="primary"
                            htmlType="submit"
                            block
                        >
                            Publicar Mensagem <Envelope size={24} weight="duotone" />
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default TicketEditor;
