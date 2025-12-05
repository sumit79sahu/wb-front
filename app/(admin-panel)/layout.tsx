import React from "react";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import { Col, Row } from "antd";

const AdminPanelLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <Sidebar>{children}</Sidebar>;
};

export default AdminPanelLayout;
