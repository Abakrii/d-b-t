import React from "react";
import { Forker } from "../";
import { useTranslation } from "react-i18next";
const baseKey = "common";
const ForkersList = ({ forkers }: any) => {
  const { t } = useTranslation();

  return (
    <>
      <p> {t(`${baseKey}.avForks`)}</p>
      {(forkers.length > 0 &&
        forkers.map((forker: any) => {
          return <Forker forker={forker} />;
        })) ||
        t(`${baseKey}.applogize`)}
    </>
  );
};

export default ForkersList;
