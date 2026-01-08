"use client";
import { message, Table } from "antd";
import ListingHeader from "./_components/listing-header";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { getRequest } from "@/utils/request";

type ListingProps<T> = {
  columns: ColumnsType<T>;
  endpoint: string;
};

function Listing<T>({ columns, endpoint }: ListingProps<T>) {
  const [listingData, setListingData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const data = await getRequest({
      endpoint: endpoint,
      credentials: "include",
    });
    if (data?.success) {
      setListingData(data?.data);
      setLoading(false);
    } else {
      setLoading(false);
      message.error(data?.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <ListingHeader>
        <div className="border overflow-hidden rounded-[8px] border-[#d9dee0]">
          <Table
            rowKey={"_id"}
            title={<>
            </>}
            columns={columns}
            dataSource={listingData}
            pagination={false}
            loading={loading}
          />
        </div>
      </ListingHeader>
    </>
  );
}

export default Listing;
