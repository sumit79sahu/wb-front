import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { Flex, Button } from "antd";
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
      className={`border-b  w-full border-gray-300 !py-[10px] !px-[20px] ${
        collapsed ? "justify-between" : "justify-end"
      }`}
    >
      <Activity mode={collapsed ? "visible" : "hidden"}>
        <Button
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
      </Activity>
      <NavbarDropdown />
    </Flex>
  );
};

export default Navbar;
