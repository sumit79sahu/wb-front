"use client"
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import React, { useRef } from "react";
import { makeStore,AppStore } from "@/lib/store";
import { Provider as ReduxProvider } from "react-redux";

const Provider = ({ children }: Readonly<{ children: React.ReactNode }>) => {

  const storeRef=useRef<AppStore>(null)
  if(storeRef.current===null)
  {
    storeRef.current=makeStore() 
  }
  return (
    <AntdRegistry>
      <ConfigProvider >
        <ReduxProvider store={storeRef.current}>
             {children}
        </ReduxProvider>
     </ConfigProvider>
    </AntdRegistry>
  );
};

export default Provider;
