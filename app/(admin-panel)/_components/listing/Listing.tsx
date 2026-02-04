"use client";
import { message, Pagination, Table, Flex, Select, Card } from "antd";
import ListingHeader from "./_components/listing-header";
import type { ColumnsType } from "antd/es/table";
import { Activity, JSX, useEffect, useRef, useState } from "react";
import { getRequest } from "@/utils/request";
import ListingSearch from "./_components/listing-search";
import ListingFilter from "./_components/listing-filter";

type ListingProps<T> = {
  columns: ColumnsType<T>;
  endpoint: string;
  title: string;
  filters: {
    name: string;
    identifier: string;
    allowedFilters: {
      id: string;
      name: string;
      valueField: string;
    }[];
  }[];
  actions?: JSX.Element[];
};

function Listing<T>({
  columns,
  endpoint,
  title,
  filters,
  actions,
}: ListingProps<T>) {
  const [listingData, setListingData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string[]>([]);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const fetchData = async (flt?: string[]) => {
    setLoading(true);
    const data = await getRequest({
      endpoint:
        endpoint +
        `?page=${page}&limit=${limit}${search ? "&search=" + search : ""}${flt ? "&" + flt.reduce((acc, val, i) => acc + val + `${i === flt.length - 1 ? "" : "&"}`, "") : ""}`,
      credentials: "include",
    });
    if (data?.success) {
      if (flt && flt.length > 0) {
        setFilter(flt);
        setPage(1);
      }
      setListingData(data?.data?.users);
      setTotal(parseInt(data?.data?.total));
      setLoading(false);
    } else {
      setLoading(false);
      message.error(data?.message);
    }
  };

  useEffect(() => {
    if (search) {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        fetchData();
        setPage(1);
      }, 500);
    }
    return () => clearTimeout(debounceRef.current!);
  }, [search]);

  useEffect(() => {
    if (!search && filter.length === 0) fetchData();
  }, [page, limit, search]);
  return (
    <>
      <ListingHeader title={title} actions={actions}>
        <>
          <ListingFilter
            filters={filters}
            loading={loading}
            setFilter={(flt: string[]) => {
              fetchData(flt);
            }}
          />
          <div className="border mb-[20px]  overflow-hidden rounded-[8px] border-[#d9dee0]">
            <Table
              rowKey={"_id"}
              size="small"
              title={() => (
                <ListingSearch search={search} setSearch={setSearch}  />
              )}
              columns={columns}
              dataSource={listingData}
              pagination={false}
              loading={loading}
            />
          </div>
          <Activity mode={total <= 10 ? "hidden" : "visible"}>
            <Flex justify="space-between" wrap="wrap" align="center">
              <Flex gap={10} align="center">
                <span>Items Per Page</span>
                <Select
                  value={limit}
                  onChange={(e) => {
                    setLimit(e);
                  }}
                  options={[
                    { label: "10 / page", value: 10 },
                    { label: "20 / page", value: 20 },
                    { label: "50 / page", value: 50 },
                  ]}
                />
              </Flex>

              <Pagination
                pageSize={limit}
                defaultCurrent={page}
                total={total}
                onChange={(page) => setPage(page)}
              />
            </Flex>
          </Activity>
        </>
      </ListingHeader>
    </>
  );
}

export default Listing;
