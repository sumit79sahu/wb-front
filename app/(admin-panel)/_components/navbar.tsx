import {
  IconLayoutSidebarRightCollapse,
  IconSettings,
} from "@tabler/icons-react";
import { Avatar, Dropdown, Flex, Button } from "antd";
import { Activity } from "react";

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
      className={`border-b  border-gray-300 !py-[10px] !px-[20px] ${
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
      <Dropdown
        className="border"
        menu={{
          items: [],
        }}
        trigger={["click"]}
      >
        <Flex
          align="center"
          justify="center"
          gap={15}
          className="!bg-[#136ae317] !w-fit  !px-[6px] rounded-full"
        >
          <Avatar
            style={{ background: "#FDDA0D" }}
            size={"default"}
            className="!mt-[5px] !mb-[6px]"
          >
            S
          </Avatar>
          <IconSettings size={24} color="#0096FF" />
        </Flex>
      </Dropdown>
    </Flex>
  );
};

export default Navbar;
