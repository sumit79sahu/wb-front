"use client";

import { postRequest } from "@/utils/request";
import { Button, Flex, Form, Input, message, Spin } from "antd";
import React, { startTransition, useActionState } from "react";
import { redirect, useSearchParams } from "next/navigation";
import { ENDPOINTS } from "@/constants/endpoints";
import Image from "next/image";
import logo from "@/public/logo.png";
const ResetPassword = () => {
  const search = useSearchParams();
  const [, resetPassword, isLoading] = useActionState(
    async (
      _: unknown,
      values: { new_password: string; confirm_password: string }
    ) => {
      const data = await postRequest<{
        new_password: string;
        confirm_password: string;
      }>({
        endpoint: ENDPOINTS.resetpassword + `?token=${search.get("token")}`,
        body: values,
        credentials: "include",
      });
      if (data?.success) {
        message.success(data?.message);
        redirect("/");
      } else {
        console.log(data)
        message.error(data?.message);
      }
    },
    null
  );
  return (
    <>
      <Flex vertical gap={16}>
        <Image src={logo} alt={"WB"} width={80} />
        <Flex vertical gap={4}>
          <h3 className="font-bold text-[20px] text-black ff-title">
            Reset Password
          </h3>
          <p className="font-normal text-[14px] text-gray">
            set a new password for your account here
          </p>
        </Flex>
      </Flex>
      <Spin spinning={isLoading}>
        <Form
          name="login"
          autoComplete="off"
          layout="vertical"
          className="w-full"
          onFinish={(values) => {
            startTransition(() => resetPassword(values));
          }}
        >
          <Form.Item
            label="New Password"
            name="new_password"
            required={false}
            rules={[{ required: true, message: "New Password is required!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirm_password"
            required={false}
            rules={[
              { required: true, message: "Confirm Password is required!" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item className="mb-[14px!important]">
            <Button type="primary" htmlType="submit" block>
              Reset Password
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </>
  );
};

export default ResetPassword;
