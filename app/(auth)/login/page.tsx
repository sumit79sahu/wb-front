"use client";
import { ENDPOINTS } from "@/constants/endpoints";
import { postRequest } from "@/utils/request";
import { Input, Form, Button, Spin, message, Flex } from "antd";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useActionState, startTransition } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
const Login = () => {
  const [, loginUser, isLoading] = useActionState(
    async (_: unknown, values: { email: string; password: string }) => {
      const data = await postRequest<{ email: string; password: string }>({
        endpoint: ENDPOINTS.login,
        body: values,
        credentials: "include",
      });

      if (data?.success) {
        redirect("/");
      } else {
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
            Manage inventory with ease
          </h3>
          <p className="font-normal text-[14px] text-gray">
            Less hassle. Increased Productivity.
          </p>
        </Flex>
      </Flex>
      <Spin spinning={isLoading}>
        <Form
          name="login"
          autoComplete="off"
          layout="vertical"
          className="w-full"
          onFinish={(values) =>
            startTransition(() => {
              loginUser(values);
            })
          }
        >
          <Form.Item
            label="Your email please!"
            name="email"
            required={false}
            rules={[
              { required: true, message: "email is required!" },
              {
                type: "email",
                message: "invalid email",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <div className="mb-[24px]">
            <Form.Item
              label="Your password please!"
              name="password"
              required={false}
              rules={[{ required: true, message: "Password is required!" }]}
              className="!mb-0"
            >
              <Input.Password className="" />
            </Form.Item>
            <div className=" text-end  font-medium text-[12px]">
              <Link href={"/forgot-password"} prefetch>
                Forgot password?
              </Link>
            </div>
          </div>

          <Form.Item className="mb-[14px!important]">
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </>
  );
};

export default Login;
