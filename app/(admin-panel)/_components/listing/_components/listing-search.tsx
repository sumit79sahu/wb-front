import { IconSearch} from "@tabler/icons-react";
import { Flex, Input } from "antd";
import { Dispatch, SetStateAction } from "react";
const ListingSearch = ({
  search,
  setSearch,

}: {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;

}) => {

  return (
    <Flex gap={15} justify="flex-end" align="end">
      <Input
        className="!w-auto"
        prefix={<IconSearch size={18} color="#02152699" />}
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Flex>
  );
};

export default ListingSearch;
