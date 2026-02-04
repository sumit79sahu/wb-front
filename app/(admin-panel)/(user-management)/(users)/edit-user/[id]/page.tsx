"use client";
import { ENDPOINTS } from "@/constants/endpoints";
import { getRequest, putRequest } from "@/utils/request";
import { Button, message, Spin } from "antd";
import { useForm } from "antd/es/form/Form";
import {
  startTransition,
  use,
  useActionState,
  useEffect,
  useState,
} from "react";
import UserForm from "../../_components/user-form";
import UserBasicInfo from "../../_components/user-basic-info";
import UserAccessControlInfo from "../../_components/user-access-control-info";
import UserAdditionalInformation from "../../_components/user-additional-information";
import { redirect } from "next/navigation";
import dayjs from "dayjs";
import FormSection from "@/app/(admin-panel)/_components/formsection";
import AuthChecker from "@/utils/authchecker";
import { permissions } from "@/constants/permissions";

const EditUser = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const [form] = useForm();
  const [statusToChange, setStatusToChange] = useState("");
  const [_, getUser, isPending] = useActionState(async () => {
    const response = await getRequest({
      endpoint: ENDPOINTS["get-user"],
      credentials: "include",
      id: id,
    });
    if (response.success) {
      form.setFieldsValue({ ...response?.data, dob: dayjs(response.data.dob) });
      setStatusToChange(() =>
        response?.data?.status === "active" ? "inactive" : "active",
      );
    } else {
      message.error(response.message);
    }
  }, null);
  const [, updateUser, isLoading] = useActionState(
    async (
      _: unknown,
      values: {
        first_name: string;
        last_name: string;
        email: string;
        role: string;
        dob?: string;
        gender?: string;
      },
    ) => {
      const response = await putRequest({
        endpoint: ENDPOINTS["edit-user"],
        credentials: "include",
        body: values,
        id,
      });
      if (response.success) {
        message.success(response.message);
        redirect("/list-users");
      } else {
        message.error("something went wrong");
      }
    },
    null,
  );
  const [, changeUserStatus, isChangingStatus] = useActionState(async () => {
    const response = await putRequest({
      endpoint: ENDPOINTS["change-user-status"],
      credentials: "include",
      id: id,
      body: { status: statusToChange },
    });
    if (response.success) {
      message.success("user successfully" + statusToChange);
      redirect("/list-users");
    } else {
      message.error(response.message);
    }
  }, null);
  useEffect(() => {
    startTransition(() => getUser());
  }, []);
  return (
    <AuthChecker permission={permissions.user.update}>
      <Spin spinning={isPending || isLoading || isChangingStatus}>
        <h4 className="text-3xl font-medium mb-[20px]">Edit User</h4>
        <UserForm
          form={form}
          onfinish={(values) => {
            startTransition(() => updateUser(values));
          }}
        >
          <>
            <UserBasicInfo />
            <UserAdditionalInformation />
            <UserAccessControlInfo />
            <FormSection
              title={"Account Control"}
              withoutCard
              dividerEnd
              description={"Activate or Deactivate the user account,"}
            >
              {statusToChange === "inactive" ? (
                <>
                  <h6 className="font-semibold text-xl">Deactivate</h6>
                  <p style={{ color: "#666" }}>
                    Deactivating the account will immediately log out and make
                    this profile inaccessible. All associated data will be
                    temporarily hidden from other users. Admin can reactivate
                    this account by updating the status here.
                  </p>
                  <Button
                    variant="outlined"
                    danger
                    className=" !border-red-700 !text-red-700 mt-[15px]"
                    onClick={() => startTransition(() => changeUserStatus())}
                  >
                    Deactivate
                  </Button>
                </>
              ) : (
                <>
                  <h6 className="font-semibold text-xl">Activate</h6>
                  <p style={{ color: "#666" }}>
                    Activating the account will immediately log out and make
                    this profile accessible. All associated data will be active
                    again. Admin can deactivate this account by updating the
                    status here.
                  </p>
                  <Button
                    variant="outlined"
                    danger
                    className=" !border-blue-700 !text-blue-700 mt-[15px]"
                    onClick={() => startTransition(() => changeUserStatus())}
                  >
                    Activate
                  </Button>
                </>
              )}
            </FormSection>
          </>
        </UserForm>
      </Spin>
    </AuthChecker>
  );
};

export default EditUser;
