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
      icon: <IconLogout size={20} />,
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
        align="center"
        justify="center"
        gap={15}
        role="button"
        tabIndex={0}
        aria-label="User settings"
        className="!bg-[#136ae317] !w-fit !px-[6px] rounded-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#0096FF] transition-all"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            (e.currentTarget as HTMLElement).click();
          }
        }}
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
