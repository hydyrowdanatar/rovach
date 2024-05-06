import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { GlobalOutlined } from "@ant-design/icons";
import styled from "styled-components";
import React from "react";
import { changeLanguage } from "../utils/language";

const StyledSelect = styled("div")`
  & .ant-select-dropdown {
    width: 120px !important;
    color: white;
  }
  & .ant-select-selector {
    padding: 2px !important;
    color: white;
  }
  & .ant-select-selection-item {
    padding: 0 !important;
    color: white;
  }
`;
const { Option } = Select;

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <StyledSelect style={{ display: "flex", alignItems: "center" }}>
      <GlobalOutlined style={{ fontSize: "16px", marginRight: 8 }} />
      <Select
        suffixIcon={null}
        variant={"borderless"}
        defaultValue={i18n.language}
        onChange={changeLanguage}
        size="middle"
        value={i18n.language}
        style={{
          lineHeight: "unset",
          paddingInlineEnd: "0",
          padding: "0 !important",
          width: "120px",
        }}
      >
        <Option value="tm">{t("Turkmen")}</Option>
        <Option value="en">{t("English")}</Option>
        <Option value="ru">{t("Russian")}</Option>
      </Select>
    </StyledSelect>
  );
};

export default React.memo(LanguageSelect);
