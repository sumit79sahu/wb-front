"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import React, { useRef } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { AppStore, makeStore } from "../lib/store";

const Provider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const storeRef = useRef<AppStore>(null);
  if (storeRef.current === null) {
    storeRef.current = makeStore();
  }
  return (
    <AntdRegistry>
      <ConfigProvider>
        <ReduxProvider store={storeRef.current}>{children}</ReduxProvider>
      </ConfigProvider>
    </AntdRegistry>
  );
};

export default Provider;
