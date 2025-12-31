import { Tag } from "antd";

export const TagGiver = ({ value }: { value: string }) => {
  if (value.toLowerCase() === "active")
    return (
      <Tag color={"success"} variant="outlined" className="!text-sm !pb-[2px]">
        Active
      </Tag>
    );
  if (value.toLowerCase() === "incactive")
    return (
      <Tag color={"danger"} variant="outlined" className="!text-sm !pb-[2px]">
        In active
      </Tag>
    );
  if (value.toLowerCase() === "super admin")
    return (
      <Tag color={"purple"} variant="outlined" className="!text-sm !pb-[2px]">
        Super Admin
      </Tag>
    );
};
