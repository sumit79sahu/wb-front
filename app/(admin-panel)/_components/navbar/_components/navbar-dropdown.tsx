"user client";
import { ENDPOINTS } from "@/constants/endpoints";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { loggedUser } from "@/lib/slices/user.slice";
import { getRequest } from "@/utils/request";
import { IconLogout, IconSettings } from "@tabler/icons-react";
import { Avatar, Dropdown, Flex, message } from "antd";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";

const NavbarDropdown = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const router = useRouter();
  const items: MenuProps["items"] = [
    {
      key: "3",
      label: "Logout",
      onClick: async () => {
        dispatch(loggedUser({ loading: true, user: null }));
        const response = await getRequest({
          endpoint: ENDPOINTS.logout,
          credentials: "include",
        });
        if (response?.success) {
          dispatch(loggedUser({ loading: false, user: null }));
          message.success(response?.message);
          router.push("/login");
        } else {
          message.error(response?.message);
        }
      },
      icon: <IconLogout size={20} />,
    },
  ];

  return (
    <Dropdown
      className="border"
      menu={{
        items: items,
      }}
      trigger={["click"]}
    >
      <Flex
        role="button"
        aria-label="User menu"
        tabIndex={0}
        align="center"
        justify="center"
        gap={15}
        className="!bg-[#136ae317] !w-fit  !px-[6px] rounded-full cursor-pointer "
      >
        <Avatar
          style={{ background: "#FDDA0D" }}
          size={"default"}
          className="!mt-[5px] !mb-[6px]"
        >
          {user?.first_name.charAt(0)?.toUpperCase()}
        </Avatar>
        <IconSettings size={24} color="#0096FF" />
      </Flex>
    </Dropdown>
  );
};

export default NavbarDropdown;
