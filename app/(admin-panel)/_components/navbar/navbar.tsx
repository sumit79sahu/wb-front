import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { Flex, Button, Tooltip } from "antd";
import { Activity } from "react";
import NavbarDropdown from "./_components/navbar-dropdown";

const Navbar = ({
  collapsed,
  expandFn,
}: {
  collapsed: boolean;
  expandFn: () => void;
}) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      className={`border-b  w-full border-gray-300  !py-[9.8px] 2xl:!py-[9.7px] !px-[20px] bg-white sticky top-0 z-[100] ${
        collapsed ? "justify-between" : "justify-end"
      }`}
    >
      <Flex gap={20} align="center">
        <Activity mode={collapsed ? "visible" : "hidden"}>
          <Tooltip title="Expand Sidebar">
            <Button
              aria-label="Expand Sidebar"
              onClick={() => expandFn()}
              icon={
                <IconLayoutSidebarRightCollapse
                  size={22}
                  color="#0096FF"
                  className="!mt-[4px]"
                />
              }
              className="!rounded-full !bg-[#136ae317] !p-[18px] !border-none"
            />
          </Tooltip>
        </Activity>
      </Flex>
      <NavbarDropdown />
    </Flex>
  );
};

export default Navbar;
