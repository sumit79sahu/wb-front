"use client";
import { TagGiver } from "@/utils/taggiver";
import { IconCopy, IconDotsVertical } from "@tabler/icons-react";
import { Avatar, Flex, TableColumnsType } from "antd";
import dayjs from "dayjs";

export interface DataType {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  createdAt: string;
  status: string;
  role: string;
}

export const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    render: (value, record) => (
      <div className="capitalize flex items-center gap-[5px]">
        <Avatar style={{ backgroundColor: "#87d068" }} className="uppercase">
          {record.first_name.charAt(0) + record.last_name.charAt(0)}
        </Avatar>
        {record.first_name + " " + record?.last_name}
      </div>
    ),
  },

  {
    title: "Email",
    dataIndex: "email",
    render: (value) => (
      <div>
        {value}
        <span className="flex items-center gap-1 font-medium text-[#0096ff] text-[12px] cursor-pointer">
          <IconCopy size={16} color="#0096ff" />
          Copy
        </span>
      </div>
    ),
  },
  {
    title: "Create Date",
    dataIndex: "createdAt",
    render: (value) => <>{dayjs(value).format("DD MMM YYYY")}</>,
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (value) => (
      <>
        <TagGiver value={"Active"} />
      </>
    ),
  },
  {
    title: "Role",
    dataIndex: "role",
    render: (value) => (
      <>
        <TagGiver value={"Super Admin"} />
      </>
    ),
  },
  {
    title: "Actions",
    dataIndex: "actions",
    render: (value) => (
      //   <Flex justify="end">
      <IconDotsVertical size={16} />
      //   </Flex>
    ),
  },
];
