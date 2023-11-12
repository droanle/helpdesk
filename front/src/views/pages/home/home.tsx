import React, { useState } from 'react';
import style from './home.module.scss';
import Sidebar from '../../assets/components/sideBar/sideBar';
import { Div } from '../../assets/elements/common';
import { House } from '@phosphor-icons/react';
import {
    Col, ColorPicker, DatePicker, Divider,
    FloatButton, Rate, Row, Slider, Space,
    Button, notification, Calendar
} from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Dayjs } from 'dayjs';
import Search from 'antd/es/input/Search';
import Loader from '../../assets/components/Loader/Loader';


const { RangePicker } = DatePicker;

function Home() {

    const [inputValue, setInputValue] = useState(1);

    const onChange = (newValue: number) => {
        setInputValue(newValue);
    };

    const close = () => {
        console.log(
            'A notificação foi encerrada. O botão Fechar foi clicado ou o tempo de duração terminou.',
        );
    };

    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
        const key = `open${Date.now()}`;
        const btn = (
            <Space>
                <Button type="link" size="small" onClick={() => api.destroy()}>
                    Fechar
                </Button>
                <Button type="primary" size="small" onClick={() => api.destroy(key)}>
                    Confirmar
                </Button>
            </Space>
        );
        api.open({
            message: 'Titulo da Notificação',
            description:
                'Esse é um exemplo de uma caixa de notificação (fecha automaticamente após o tempo de "duração").',
            btn,
            key,
            onClose: close,
        });
    };

    const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    return (
        <div>
            <Sidebar />
            <div className={style.Container}>
                <div className={style.ContentContainer}>

                    <div className={style.Main}>
                        <div className={style.Title}>
                            <House className={style.IconTitle} size={32} weight='duotone' />
                            <h1>Home</h1>
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
                        <div className={style.Section1}>
                            <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='48%' $height='350px' $radius='12px'
                                $border='1px solid rgba(var(--primary_color), .5)' $padding='20px 20px'>
                                <div className={style.FormDate}>
                                    <RangePicker
                                        style={{ width: "100%", marginBottom: "10%" }}
                                    />
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "5%" }}>
                                        <Row align="middle" style={{ marginTop: "2%" }}>
                                            <Space>
                                                <Col>
                                                    <ColorPicker
                                                        styles={{
                                                            popupOverlayInner: {
                                                                width: 468 + 24,
                                                            },
                                                        }}
                                                        presets={[
                                                            {
                                                                label: 'Recommended',
                                                                colors: [
                                                                    '#000000',
                                                                    '#000000E0',
                                                                    '#000000A6',
                                                                    '#00000073',
                                                                    '#00000040',
                                                                    '#00000026',
                                                                    '#0000001A',
                                                                    '#00000012',
                                                                    '#0000000A',
                                                                    '#00000005',
                                                                    '#F5222D',
                                                                    '#FA8C16',
                                                                    '#FADB14',
                                                                    '#8BBB11',
                                                                    '#52C41A',
                                                                    '#13A8A8',
                                                                    '#1677FF',
                                                                    '#2F54EB',
                                                                    '#722ED1',
                                                                    '#EB2F96',
                                                                    '#F5222D4D',
                                                                    '#FA8C164D',
                                                                    '#FADB144D',
                                                                    '#8BBB114D',
                                                                    '#52C41A4D',
                                                                    '#13A8A84D',
                                                                    '#1677FF4D',
                                                                    '#2F54EB4D',
                                                                    '#722ED14D',
                                                                    '#EB2F964D',
                                                                ],
                                                            },
                                                            {
                                                                label: 'Recent',
                                                                colors: [
                                                                    '#F5222D4D',
                                                                    '#FA8C164D',
                                                                    '#FADB144D',
                                                                    '#8BBB114D',
                                                                    '#52C41A4D',
                                                                    '#13A8A84D',
                                                                ],
                                                            },
                                                        ]}
                                                        panelRender={(_, { components: { Picker, Presets } }) => (
                                                            <div
                                                                className="custom-panel"
                                                                style={{
                                                                    display: 'flex',
                                                                    width: 468,
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        flex: 1,
                                                                    }}
                                                                >
                                                                    <Presets />
                                                                </div>
                                                                <Divider
                                                                    type="vertical"
                                                                    style={{
                                                                        height: 'auto',
                                                                    }}
                                                                />
                                                                <div
                                                                    style={{
                                                                        width: 234,
                                                                    }}
                                                                >
                                                                    <Picker />
                                                                </div>
                                                            </div>
                                                        )}
                                                    />
                                                </Col>
                                            </Space>
                                        </Row>
                                        <Rate style={{ marginTop: "2%", marginLeft: "5%" }} />
                                    </div>
                                    <Row style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginBottom: "5%" }}>
                                        <Col span={12}>
                                            <Slider
                                                min={1}
                                                max={20}
                                                onChange={onChange}
                                                value={typeof inputValue === 'number' ? inputValue : 0}
                                            />
                                        </Col>
                                    </Row>
                                    <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                        {contextHolder}
                                        <Button type="primary" onClick={openNotification}>
                                            Abir caixa de notificação
                                        </Button>
                                    </div>
                                </div>
                            </Div>
                            <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='48%' $height='350px' $radius='12px'
                                $border='1px solid rgba(var(--primary_color), .5)' $padding='20px 20px'>
                                <div className={style.Calendar}>
                                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                                </div>
                            </Div>
                        </div>
                        <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='100%' $height='350px' $radius='12px'
                            $border='1px solid rgba(var(--primary_color), .5)' $padding='20px 20px'>
                            <div className={style.Loader}><Loader /></div>


                        </Div>
                        <div className={style.Section1}>
                            <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='48%' $height='350px' $radius='12px'
                                $border='1px solid rgba(var(--primary_color), .5)' $padding='20px 20px'>
                                <div className={style.Loader}><Loader /></div>


                            </Div>
                            <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='48%' $height='350px' $radius='12px'
                                $border='1px solid rgba(var(--primary_color), .5)' $padding='20px 20px'>
                                <div className={style.Loader}><Loader /></div>


                            </Div>
                        </div>

                        <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='100%' $height='350px' $radius='12px'
                            $border='1px solid rgba(var(--primary_color), .5)' $padding='20px 20px'>
                            <div className={style.Loader}><Loader /></div>

                        </Div>
                    </div>
                </div>
            </div >
            <FloatButton.BackTop />
        </div >
    );
};
export default Home;