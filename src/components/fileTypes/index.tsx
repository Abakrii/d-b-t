import React from "react";
import { Tag } from "antd";
import { useTranslation } from "react-i18next";

const baseKey = "common";
const FileTypes = ({ gist }: any) => {
  const { t } = useTranslation();
  const { files } = gist;
  const fileTypes = Object.keys(files).map((fileKey) => {
    const file = files[fileKey];
    return file.language ? file.language : file.type;
  });
  return (
    <>
      {fileTypes.map((fileType) => {
        return (
          <div>
            {t(`${baseKey}.mainLang`)}
            <Tag>{fileType}</Tag>
          </div>
        );
      })}
    </>
  );
};

export default FileTypes;
