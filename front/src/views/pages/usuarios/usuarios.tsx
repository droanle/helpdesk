import style from './usuarios.module.scss';
import Sidebar from '../../assets/components/sideBar/sideBar';
import { Div } from '../../assets/elements/common';
import { House, Users } from '@phosphor-icons/react';
import { FloatButton, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import Search from 'antd/es/input/Search';
import Loader from '../../assets/components/Loader/Loader';

function Usuarios() {

    interface DataType {
        key: string;
        name: string;
        age: number;
        address: string;
        tags: string[];
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Nome',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Idade',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Endereço',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Ação',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            name: 'John Brown',
            age: 46,
            address: 'New York No. 1 Lake Park',
            tags: ['Bom', 'Desenvolvedor'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            tags: [''],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['Professor'],
        },
        {
            key: '4',
            name: 'Luck Field',
            age: 22,
            address: 'Curlin No. 6 Park Lake',
            tags: ['Usuário'],
        },
        {
            key: '5',
            name: 'Any Rose',
            age: 25,
            address: 'New York No. 5 Park',
            tags: ['Desenvolvedor'],
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
                                <House className={style.IconTitle} size={32} weight='duotone' />
                            </Link>
                            <h1>Home /</h1>
                            <Users className={style.IconPage} size={32} weight='duotone' />
                            <h1>Usuários</h1>
                        </div>
                        <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='100%' $height='80px' $radius='12px'
                            $border='1px solid rgba(var(--primary_color), .5)'>
                            <div className={style.Seach}>
                                <Search
                                    style={{ width: '40%', }}
                                    placeholder="Busque por um Usuário"
                                    size="large" />
                            </div>
                        </Div>
                        <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='100%' $height='370px' $radius='12px'
                            $border='1px solid rgba(var(--primary_color), .5)' $padding='20px 20px'>
                            <div className={style.TableUsers}>
                                <Table
                                    style={{ width: '100%' }}
                                    columns={columns}
                                    dataSource={data}
                                    pagination={false}
                                />
                            </div>
                        </Div>
                        <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='100%' $height='350px' $radius='12px'
                            $border='1px solid rgba(var(--primary_color), .5)' $padding='20px 20px'>
                            <div className={style.Loader}><Loader /></div>
                        </Div>
                    </div>
                </div>
            </div>
            <FloatButton.BackTop />
        </div>
    )
}

export default Usuarios;