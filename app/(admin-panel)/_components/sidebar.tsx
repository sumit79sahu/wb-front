"use client";
import { IconLayoutSidebarLeftCollapse } from "@tabler/icons-react";
import { Button, Col, Flex, Row } from "antd";
import React, { Activity, useState } from "react";
import Navbar from "./navbar";
import logo from "@/public/logo.png";
import Image from "next/image";

const Sidebar = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Row>
      <Col xs={0} md={2} lg={collapsed ? 1 : 4}>
        <div className="border border-gray-300  h-[100svh]">
          <Flex
            align="center"
            justify={collapsed ? "center" : "space-between"}
            className={`!py-[6.2px] ${
              collapsed ? "" : "!px-[20px]"
            } border-b border-gray-300`}
          >
            <Image src={logo} alt="logo" width={50} height={50} className="!" />
            <Activity mode={collapsed ? "hidden" : "visible"}>
              <Button
                onClick={() => setCollapsed(true)}
                icon={
                  <IconLayoutSidebarLeftCollapse
                    size={22}
                    color="#0096FF"
                    className="!mt-[4px]"
                  />
                }
                className="!rounded-full !bg-[#136ae317] !p-[18px] !border-none"
              />
            </Activity>
          </Flex>
        </div>
      </Col>
      <Col xs={24} md={22} lg={collapsed ? 23 : 20}>
        <Navbar collapsed={collapsed} expandFn={() => setCollapsed(false)} />
        {children}
      </Col>
    </Row>
  );
};

export default Sidebar;
