import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import React from "react";

const Provider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <AntdRegistry>
      <ConfigProvider >{children}</ConfigProvider>
    </AntdRegistry>
  );
};

export default Provider;
