import React from "react";
import { Flex, Button } from "antd";
import {
  IconAdjustmentsHorizontal,
  IconCloudDownload,
  IconCloudUpload,
  IconPlus,
  IconSortDescending,
} from "@tabler/icons-react";
const ListingHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex justify-end sm:justify-between flex-wrap gap-[15px] mb-[20px]">
        {/* <h3 className="text-3xl font-medium">User List</h3> */}
        {/* <Flex gap={15}>
          <Button
            type="primary"
            icon={<IconPlus size={18} className="mt-[4px]" />}
          >
            Add New User
          </Button>
          <Button icon={<IconCloudUpload size={18} className="mt-[4px]" />}>
            Import{" "}
          </Button>
          <Button icon={<IconCloudDownload size={18} className="mt-[4px]" />}>
            Export{" "}
          </Button>
        </Flex> */}
      </div>

      {children}
    </>
  );
};

export default ListingHeader;
