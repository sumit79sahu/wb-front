import Listing from "@/app/(admin-panel)/_components/listing/Listing";
import { columns, DataType } from "../_config/user-listing.colunms";
import { ENDPOINTS } from "@/constants/endpoints";
const UsersLisiting = () => {
  return (
    <>
      <Listing<DataType> columns={columns} endpoint={ENDPOINTS["user-list"]} />
    </>
  );
};

export default UsersLisiting;
