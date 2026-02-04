import React, { JSX } from "react";
import { Flex } from "antd";
const ListingHeader = ({
  children,
  title,
  actions,
}: {
  children: React.ReactNode;
  title: string;
  actions?: JSX.Element[];
}) => {
  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-[15px] mb-[20px]">
        <h3 className="text-3xl font-medium">{title}</h3>
        <Flex gap={15} wrap="wrap" justify="flex-end">
          {actions?.map((action) => action)}
        </Flex>
      </div>

      {children}
    </>
  );
};

export default ListingHeader;
