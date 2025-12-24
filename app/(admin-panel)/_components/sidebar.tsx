import {
  IconChevronDown,
  IconChevronUp,
  IconLayoutSidebarLeftCollapse,
  IconX,
} from "@tabler/icons-react";
import { Button, Drawer, Flex } from "antd";
import { Activity, Dispatch, SetStateAction, useState } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import { MENU } from "@/constants/menu";
import { MENU_ICON } from "@/constants/menu-icon";
import React from "react";

const Sidebar = ({
  collapsed,
  expandFn,
  open,
  setOpen,
}: {
  collapsed: boolean;
  expandFn: () => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div
        className={`border-r border-gray-300 hidden md:block  h-[100svh]    ${
          collapsed ? "!min-w-[80px]" : "!min-w-[250px]"
        }`}
      >
        <Flex
          align="center"
          justify={collapsed ? "center" : "space-between"}
          className={`!py-[6.2px] ${
            collapsed ? "" : "!px-[20px]"
          } border-b border-gray-300`}
        >
          <Image
            src={logo}
            alt="logo"
            width={60}
            height={60}
            className="!px-[5px]"
          />
          <Activity mode={collapsed ? "hidden" : "visible"}>
            <Button
              onClick={expandFn}
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
        <SidebarItem collapsed={collapsed} drawer={false} />
      </div>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        placement="left"
        closable={false}
        className="sidebar"
        title={
          <Flex align="center" justify="space-between">
            <Image
              src={logo}
              alt="logo"
              width={50}
              height={50}
              className="!px-[5px]"
            />
            <Button
              icon={<IconX className="mt-[5px]" size={22} color="#00033DCC" />}
              type="text"
              onClick={() => setOpen(false)}
            />
          </Flex>
        }
      >
        <SidebarItem collapsed={collapsed} drawer={true} />
      </Drawer>
    </>
  );
};

export default Sidebar;

const SidebarItem = ({
  collapsed,
  drawer = false,
}: {
  collapsed: boolean;
  drawer: boolean;
}) => {
  const [subMenu, setSubMenu] = useState(null);
  return (
    <Flex className="!px-[10px] !py-[30px]" gap={2} vertical>
      {MENU.map(({ label, key, children }) => {
        if (children && children.length) {
          return (
            <React.Fragment key={key}>
              <button
                key={key}
                onClick={() =>
                  setSubMenu((pre) => {
                    if (pre === label) return null;
                    return label;
                  })
                }
                className={`!flex items-center justify-between w-full text-[#00033DCC] gap-[10px] rounded-md text-sm font-medium hover:bg-[#136ae317] hover:text-[#0096FF] ${
                  collapsed && !drawer
                    ? "justify-center"
                    : "pl-[13px] pr-[15px]"
                } py-[10px]`}
              >
                <Flex gap={10}>
                  {MENU_ICON[label]}
                  {collapsed && !drawer ? "" : label}
                </Flex>
                {collapsed && !drawer ? (
                  ""
                ) : subMenu === label ? (
                  <IconChevronUp size={16} className="mt-[2px]" />
                ) : (
                  <IconChevronDown size={16} className="mt-[2px]" />
                )}
              </button>
              <Activity mode={subMenu === label ? "visible" : "hidden"}>
                {collapsed && !drawer ? (
                  <div className="relative" key={key}>
                    <div className="absolute top-[-40px] left-full ml-5 px-[2px] py-[2px] w-36 bg-white rounded-md shadow-lg  font-medium  z-50">
                      {children.map(({ label, key }) => (
                        <button
                          className="w-full text-left px-3 py-2 text-sm hover:!bg-[#136ae317] rounded-md"
                          key={key}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  children.map(({ label, key }) => (
                    <button
                      key={key}
                      className={`!flex items-center w-full text-[#00033DCC] gap-[10px] rounded-md text-sm font-medium hover:bg-[#136ae317] hover:text-[#0096FF] ${
                        collapsed && !drawer ? "justify-center" : "px-[40px]"
                      } py-[5px]`}
                    >
                      <div className="w-[10px] border-[1.5px] border-[#194F82] h-[10px] rounded-full bg-[#FFC10D]"></div>
                      {label}
                    </button>
                  ))
                )}
              </Activity>
            </React.Fragment>
          );
        }
        return (
          <button
            key={label}
            className={`!flex items-center w-full text-[#00033DCC] gap-[10px] rounded-md text-sm font-medium hover:bg-[#136ae317] hover:text-[#0096FF] ${
              collapsed && !drawer ? "justify-center" : "px-[13px]"
            } py-[10px]`}
          >
            {MENU_ICON[label]}
            {collapsed && !drawer ? "" : label}
          </button>
        );
      })}
    </Flex>
  );
};
