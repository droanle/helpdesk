import React, { useState } from "react";
import style from "./setores.module.scss";
import Sidebar from "../../assets/components/sideBar/sideBar";
import { Div } from "../../assets/elements/common";
import { Briefcase, SquaresFour, PlusSquare } from "@phosphor-icons/react";
import { FloatButton, Timeline, Modal, Upload } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import { Link } from "react-router-dom";
import Search from "antd/es/input/Search";
import Loader from "../../assets/components/Loader/Loader";

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

function Setores() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "logo_white.png",
      status: "done",
      url: "./img/logo_white.png",
    },
    {
      uid: "-2",
      name: "logo_black.png",
      status: "done",
      url: "./img/logo_black.png",
    },
    {
      uid: "-3",
      name: "logo_green.png",
      status: "done",
      url: "./img/logo_green.png",
    },
    {
      uid: "-4",
      name: "image.png",
      status: "error",
    },
  ]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusSquare size={32} weight="duotone" color="#f8f9fc75" />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

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
              <Briefcase
                className={style.IconPage}
                size={32}
                weight="duotone"
              />
              <h1>Setores</h1>
            </div>
            <Div
              className={style.content}
              $primary
              $colorBG="#f8f9fc1d"
              $width="100%"
              $height="80px"
              $radius="12px"
              $border="1px solid rgba(var(--primary_color), .5)"
            >
              <div className={style.Seach}>
                <Search
                  style={{ width: "40%" }}
                  placeholder="Busque por um Arquivo"
                  size="large"
                />
              </div>
            </Div>
            <div className={style.Section1}>
              <Div
                className={style.content}
                $primary
                $colorBG="#f8f9fc1d"
                $width="49%"
                $height="370px"
                $radius="12px"
                $border="1px solid rgba(var(--primary_color), .5)"
                $padding="20px 20px"
              >
                <div className={style.TimeLine}>
                  <h1>Time Line dos Setores</h1>
                  <Timeline
                    style={{ marginTop: "5%" }}
                    items={[
                      {
                        children:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      },
                      {
                        children:
                          "Lorem ipsum etur adipiscing elit dolor sit amet, consect.",
                      },
                      {
                        children:
                          "Lorem similique esse sit corrupti aspernatur voluptate. Dicta, enim? Omnis doloribus nostrum minus error.",
                      },
                      {
                        children: "Lorem bitis deserunt iure adipisci ipsu",
                      },
                      {
                        children:
                          "Lorem intum solelis elit, blandit ullamcorper accumsan vitae, pulvinar in dui.",
                      },
                      {
                        children:
                          "Lorem entum dolor quis dignissim. Proin porttitor venenatis malesuada. Vivalis arc",
                      },
                    ]}
                  />
                </div>
              </Div>
              <Div
                className={style.content}
                $primary
                $colorBG="#f8f9fc1d"
                $width="49%"
                $height="370px"
                $radius="12px"
                $border="1px solid rgba(var(--primary_color), .5)"
              >
                <div className={style.UploadImg}>
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    {fileList.length >= 15 ? null : uploadButton}
                  </Upload>
                  <Modal
                    open={previewOpen}
                    title={previewTitle}
                    footer={null}
                    onCancel={handleCancel}
                  >
                    <img
                      alt="example"
                      style={{ width: "100%" }}
                      src={previewImage}
                    />
                  </Modal>
                </div>
              </Div>
            </div>
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

export default Setores;
