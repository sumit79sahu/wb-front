"use client";

import React, { useEffect, useState, useTransition } from "react";
import Navbar from "./_components/navbar/navbar";
import Sidebar from "./_components/sidebar";
import { Flex, message, Spin } from "antd";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { getRequest } from "@/utils/request";
import { ENDPOINTS } from "@/constants/endpoints";
import { loggedUser } from "@/lib/slices/user.slice";

const AdminPanelLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeDrawer, setActiveDrawer] = useState(false);
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { loading, user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setCollapsed(true);
        setActiveDrawer(true);
      } else {
        setCollapsed(false);
        setActiveDrawer(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    if (!user)
      startTransition(async () => {
        const response = await getRequest({
          endpoint: ENDPOINTS.me,
          credentials: "include",
        });
        if (response?.status) {
          dispatch(loggedUser({ loading: isPending, user: response?.data }));
        } else {
          message.error(response?.message);
        }
      });

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Spin spinning={isPending || loading}>
      <Flex className="">
        <Sidebar
          collapsed={collapsed}
          expandFn={() => setCollapsed(true)}
          open={open}
          setOpen={setOpen}
        />
        <Flex vertical className="w-full bg-[#F3F6F9]">
          <Navbar
            collapsed={collapsed}
            expandFn={
              activeDrawer ? () => setOpen(true) : () => setCollapsed(false)
            }
          />
          {children}
        </Flex>
      </Flex>
    </Spin>
  );
};

export default AdminPanelLayout;
