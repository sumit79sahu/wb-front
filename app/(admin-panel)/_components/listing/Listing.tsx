"use client";
import { Table, TableColumnsType } from "antd";
import ListingHeader from "./_components/listing-header";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const dataSource = Array.from({ length: 8 }).map<DataType>((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));

const Listing = () => {
  return (
    <>
      <ListingHeader>
        <Table<DataType>
          bordered
          title={() => <>sumit</>}
          columns={columns}
          dataSource={dataSource}
          pagination={false}
        />
      </ListingHeader>
    </>
  );
};

export default Listing;
