"use client";

import { postRequest } from "@/utils/request";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { Button, Flex, Form, Input, message, Spin } from "antd";
import { redirect, useRouter } from "next/navigation";
import { startTransition, useActionState } from "react";
import { ENDPOINTS } from "@/constants/endpoints";
import logo from "@/public/logo.png";
import Image from "next/image";
const ForgotPassword = () => {
  const router = useRouter();
  const [, forgotPassword, isPending] = useActionState(
    async (_: unknown, values: { email: string; redirectURL: string }) => {
      const response = await postRequest<{
        email: string;
        redirectURL: string;
      }>({
        endpoint: ENDPOINTS.forgotpassword,
        body: {
          ...values,
          redirectURL:
            process.env.NEXT_PUBLIC_ADMIN_PANEL_URL + "/reset-password",
        },
      });
      if (response.success) {
        message.success(response.message);
        redirect("/");
      } else {
        message.error(response.message);
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
            Forgot your password?
          </h3>
          <p className="font-normal text-[14px] text-gray">
            We’ll email instructions on how to reset it
          </p>
        </Flex>
      </Flex>
      <Spin spinning={isPending}>
        <Form
          name="login"
          autoComplete="off"
          layout="vertical"
          className="w-full"
          onFinish={(values) => {
            startTransition(() => forgotPassword(values));
          }}
        >
          <Form.Item
            label="Your email please!"
            name="email"
            required={false}
            rules={[
              { required: true, message: "Email is required!" },
              {
                type: "email",
                message: "invalid email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item className="mb-[14px!important]">
            <Button type="primary" htmlType="submit" block>
              Send Reset Password Link
            </Button>
          </Form.Item>
          <Flex justify="center">
            <Button
              type="text"
              icon={<IconArrowNarrowLeft size={18} className="mt-[5px]" />}
              block
              onClick={() => router.push("/login")}
            >
              Back
            </Button>
          </Flex>
        </Form>
      </Spin>
    </>
  );
};

export default ForgotPassword;
