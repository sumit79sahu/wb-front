"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./_components/navbar/navbar";
import Sidebar from "./_components/sidebar";
import { Flex } from "antd";

const AdminPanelLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeDrawer, setActiveDrawer] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setCollapsed(true);
        setActiveDrawer(true);
      } else {
        setCollapsed(false)
        setActiveDrawer(false)
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Flex className="">
        <Sidebar collapsed={collapsed} expandFn={() => setCollapsed(true)} open={open} setOpen={setOpen}/>
        <Flex vertical className="w-full">
          <Navbar
            collapsed={collapsed}
            expandFn={
              activeDrawer ? () => setOpen(true) : () => setCollapsed(false)
            }
          />
          {children}
        </Flex>
      </Flex>
    </>
  );
};

export default AdminPanelLayout;
