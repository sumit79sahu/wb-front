"use client";
import Labeler from "@/app/(admin-panel)/_components/labeler";
import { ENDPOINTS } from "@/constants/endpoints";
import AuthChecker from "@/utils/authchecker";

import { getRequest, postRequest, putRequest } from "@/utils/request";
import { Button, Card, Checkbox, Flex, Form, Input, message, Spin } from "antd";
import { useForm, useWatch } from "antd/es/form/Form";
import React, { startTransition, useActionState, useEffect } from "react";

const Permissions = ({
  edit,
  add,
  view,
  permissions,
  setAdd,
  setView,
  setEdit,
  getRolesAndPermissions,
}: {
  edit: string | null;
  add: boolean;
  view: string | null;
  permissions: Record<string, { name: string; _id: string }[]>;

  setAdd: React.Dispatch<React.SetStateAction<boolean>>;
  setEdit: React.Dispatch<React.SetStateAction<string | null>>;
  setView: React.Dispatch<React.SetStateAction<string | null>>;
  getRolesAndPermissions: () => void;
}) => {
  const [form] = useForm();
  const p = useWatch("permissions", form) || [];

  const [, createRole, isPending] = useActionState(
    async (_: unknown, values: { name: string; permissions: string[] }) => {
      const response = edit
        ? await putRequest({
            endpoint: ENDPOINTS.editrole,
            credentials: "include",
            body: values,
            id: edit,
          })
        : await postRequest({
            endpoint: ENDPOINTS.createrole,
            credentials: "include",
            body: values,
          });
      if (response.success) {
        message.success("Role created successfully");
        getRolesAndPermissions();
        setAdd(false);
      } else {
        message.error(response.message);
      }
    },
    null,
  );

  const [, getRolePermission, isLoading] = useActionState(async () => {
    const id = edit || view;
    const response = await getRequest({
      endpoint: ENDPOINTS.getrolepermissions,
      credentials: "include",
      id: id!,
    });
    if (response.success) {
      form.setFieldsValue(response.data);
    } else {
      message.error(response.message);
    }
  }, null);

  useEffect(() => {
    if (edit || view) {
      startTransition(() => getRolePermission());
    }
    if (add) form.resetFields();
  }, [edit, view, add]);

  return (
    <>
      {(add || edit || view) && (
        <Form
          form={form}
          layout="vertical"
          onFinish={(values) => {
            startTransition(() => createRole(values));
          }}
        >
          <Card
            size="small"
            title={<h6 className="text-sm font-medium">Role Details</h6>}
            extra={
              <Flex>
                <Button
                  type="link"
                  disabled={isPending || view ? true : false}
                  htmlType="submit"
                >
                  {edit ? "Update Role" : "Add Role"}
                </Button>

                <Button
                  type="link"
                  className="!text-red-500"
                  onClick={() => {
                    setAdd(false);
                    setEdit(null);
                    setView(null);
                  }}
                  disabled={isPending}
                >
                  Cancel
                </Button>
              </Flex>
            }
          >
            <Spin spinning={isPending || isLoading}>
              <Form.Item
                className="!mb-[10px]"
                label={<Labeler title="Role Title" required={true} />}
                name={"name"}
                required={false}
                rules={[{ required: true, message: "role title is required" }]}
              >
                <Input
                  className="w-full"
                  disabled={isPending || view ? true : false}
                />
              </Form.Item>

              {Object.entries(permissions).map(([module, perms]) => {
                const modulePermissionIds = perms.map((p) => p._id);

                const isAllSelected = modulePermissionIds.every((id) =>
                  p.includes(id),
                );

                return (
                  <React.Fragment key={module}>
                    <Flex align="center">
                      <h6 className="capitalize">{module}</h6>
                      <Button
                        type="link"
                        disabled={view ? true : false}
                        onClick={() => {
                          if (isAllSelected) {
                            form.setFieldValue(
                              "permissions",
                              p.filter(
                                (id) => !modulePermissionIds.includes(id),
                              ),
                            );
                          } else {
                            form.setFieldValue(
                              "permissions",
                              Array.from(
                                new Set([...p, ...modulePermissionIds]),
                              ),
                            );
                          }
                        }}
                      >
                        {isAllSelected ? "Unselect all" : "Select all"}
                      </Button>
                    </Flex>
                    <Form.Item
                      name="permissions"
                      valuePropName="value"
                      rules={[
                        {
                          validator: (_, value) =>
                            value && value.length > 0
                              ? Promise.resolve()
                              : Promise.reject(
                                  new Error(
                                    "At least one permission is required",
                                  ),
                                ),
                        },
                      ]}
                      className="!mb-[10px]"
                    >
                      <Checkbox.Group
                        disabled={view ? true : false}
                        className="w-full !flex !gap-[30px] flex-wrap"
                      >
                        {[...perms].map(({ _id, name }) => (
                          <Checkbox key={_id} value={_id}>
                            {name}
                          </Checkbox>
                        ))}
                      </Checkbox.Group>
                    </Form.Item>
                  </React.Fragment>
                );
              })}
            </Spin>
          </Card>
        </Form>
      )}
    </>
  );
};

export default Permissions;
