import {
  IconChevronDown,
  IconChevronUp,
  IconLayoutSidebarLeftCollapse,
} from "@tabler/icons-react";
import { Button, Drawer, Flex } from "antd";
import { Activity, Dispatch, SetStateAction, use, useState } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import { MENU } from "@/constants/menu";
import { MENU_ICON } from "@/constants/menu-icon";

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
        <SidebarItem collapsed={collapsed} />
      </div>

      <Drawer open={open} onClose={() => setOpen(false)} placement="left">
        <SidebarItem collapsed={collapsed} />
      </Drawer>
    </>
  );
};

export default Sidebar;

const SidebarItem = ({ collapsed }: { collapsed: boolean }) => {
  const [subMenu, setSubMenu] = useState(false);
  return (
    <Flex className="!px-[10px] !py-[30px]" gap={2} vertical>
      {MENU.map(({ label, key, children }) => {
        if (children && children.length) {
          return (
            <>
              <button
                key={key}
                onClick={() => setSubMenu(!subMenu)}
                className={`!flex items-center justify-between w-full text-[#00033DCC] gap-[10px] rounded-md text-sm font-medium hover:bg-[#136ae317] hover:text-[#0096FF] ${
                  collapsed ? "justify-center" : "pl-[13px] pr-[15px]"
                } py-[10px]`}
              >
                <Flex gap={10}>
                  {MENU_ICON[label]}
                  {collapsed ? "" : label}
                </Flex>
                {collapsed ? (
                  ""
                ) : subMenu ? (
                  <IconChevronUp size={16} className="mt-[2px]" />
                ) : (
                  <IconChevronDown size={16} className="mt-[2px]" />
                )}
              </button>
              <Activity mode={subMenu ? "visible" : "hidden"}>
                {children.map(({ label, key }) => (
                  <button
                    key={key}
                    className={`!flex items-center w-full text-[#00033DCC] gap-[10px] rounded-md text-sm font-medium hover:bg-[#136ae317] hover:text-[#0096FF] ${
                      collapsed ? "justify-center" : "px-[40px]"
                    } py-[5px]`}
                  >
                    <div className="w-[10px] border-[1.5px] border-[#194F82] h-[10px] rounded-full bg-[#FFC10D]"></div>
                    {label}
                  </button>
                ))}
              </Activity>
            </>
          );
        }
        return (
          <button
            key={key}
            className={`!flex items-center w-full text-[#00033DCC] gap-[10px] rounded-md text-sm font-medium hover:bg-[#136ae317] hover:text-[#0096FF] ${
              collapsed ? "justify-center" : "px-[13px]"
            } py-[10px]`}
          >
            {MENU_ICON[label]}
            {collapsed ? "" : label}
          </button>
        );
      })}
    </Flex>
  );
};
