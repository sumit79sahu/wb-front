"use client";
import { startTransition, useActionState } from "react";
import UserAccessControlInfo from "../_components/user-access-control-info";
import UserBasicInfo from "../_components/user-basic-info";
import UserForm from "../_components/user-form";
import { message, Spin } from "antd";
import { postRequest } from "@/utils/request";
import { ENDPOINTS } from "@/constants/endpoints";
import { redirect } from "next/navigation";
import AuthChecker from "@/utils/authchecker";
import { permissions } from "@/constants/permissions";

const AddUser = () => {
  const [_, createUser, isPending] = useActionState(
    async (
      _: unknown,
      values: {
        first_name: string;
        last_name: string;
        email: string;
        role: string;
      },
    ) => {
      const response = await postRequest({
        endpoint: ENDPOINTS["create-user"],
        credentials: "include",
        body: {
          ...values,
          redirectURL:
            process.env.NEXT_PUBLIC_ADMIN_PANEL_URL + "/reset-password",
        },
      });
      if (response.success) {
        message.success(response.message);
        redirect("/list-users");
      } else {
        message.error(response.message);
      }
    },
    null,
  );
  return (
    <AuthChecker permission={permissions.user.create}>
      <Spin spinning={isPending}>
        <h4 className="text-3xl font-medium mb-[20px]">Add User</h4>
        <UserForm
          onfinish={(values) => startTransition(() => createUser(values))}
        >
          <>
            <UserBasicInfo />
            <UserAccessControlInfo />
          </>
        </UserForm>
      </Spin>
    </AuthChecker>
  );
};

export default AddUser;
