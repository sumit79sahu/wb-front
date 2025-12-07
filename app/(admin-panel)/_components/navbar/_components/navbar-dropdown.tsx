import { IconLogout, IconSettings } from "@tabler/icons-react";
import { Avatar, Dropdown,Button, Flex } from "antd";
import type { MenuProps } from "antd";
import { useActionState } from "react";
const NavbarDropdown = () => {



  const items: MenuProps["items"] = [
    { key: "3", label: <button className="bg-none">Logout</button>, icon: <IconLogout size={20}/> },
  ];

  return (
    <Dropdown
      className="border"
      menu={{
        items:items,
      }}
      trigger={["click"]}
    >
      <Flex
        align="center"
        justify="center"
        gap={15}
        className="!bg-[#136ae317] !w-fit  !px-[6px] rounded-full cursor-pointer"
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
  );
};

export default NavbarDropdown;
