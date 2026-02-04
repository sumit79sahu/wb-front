import { Tag } from "antd";

export const TagGiver = ({ value }: { value: string }) => {
  if (value.toLowerCase() === "active")
    return (
      <Tag color={"success"} variant="outlined" className="!text-sm !pb-[2px]">
        Active
      </Tag>
    );
  if (value.toLowerCase() === "inactive")
    return (
      <Tag color={"red"} variant="outlined" className="!text-sm !pb-[2px]">
        In active
      </Tag>
    );

};
