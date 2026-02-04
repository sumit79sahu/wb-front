"use client";
import FormSection from "@/app/(admin-panel)/_components/formsection";
import { Form, Button, Flex } from "antd";
import { redirect } from "next/navigation";
import { JSX } from "react";
import { FormInstance } from "antd";
const UserForm = ({
  onfinish,
  form,
  children,
}: {
  onfinish: (values: {
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    dob?:string;
    gender?:string;
  }) => void;
  form?:FormInstance
  children: JSX.Element;
}) => {
  return (
    <Form layout="vertical" onFinish={onfinish} form={form}>
      {children}
      <FormSection withoutCard>
        <Flex align="center" justify="flex-end" className="" gap={8}>
          <Button onClick={() => redirect("/list-users")}>Cancel</Button>

          <Button type="primary" htmlType="submit">
            Add User
          </Button>
        </Flex>
      </FormSection>
    </Form>
  );
};

export default UserForm;
