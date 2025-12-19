import { IconLayoutSidebarLeftCollapse } from "@tabler/icons-react";
import { Button, Drawer, Flex, Menu } from "antd";
import { Activity, Dispatch, SetStateAction } from "react";
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

        <Flex className="!px-[10px] !py-[30px]" gap={2} vertical>
          {MENU.map(({ label, key }) => (
            <button
              key={key}
              className={`!flex items-center w-full text-[#00033DCC] gap-[10px] rounded-md text-sm font-medium hover:bg-[#136ae317] hover:text-[#0096FF] ${
                collapsed ? "justify-center" : "px-[13px]"
              } py-[10px]`}
            >
              {MENU_ICON[label]}
              {collapsed ? "" : label}
            </button>
          ))}
        </Flex>
      </div>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        placement="left"
      ></Drawer>
    </>
  );
};

export default Sidebar;
