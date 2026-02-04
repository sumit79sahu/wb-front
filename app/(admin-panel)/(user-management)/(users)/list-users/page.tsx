
import Listing from "@/app/(admin-panel)/_components/listing/Listing";
import { columns, DataType } from "../_config/user-listing.colunms";
import { ENDPOINTS } from "@/constants/endpoints";

import { useractions } from "../_config/user-listing.actions";
import { filters } from "../_config/user-listing.filter";
import AuthChecker from "@/utils/authchecker";
import { permissions } from "@/constants/permissions";
const UsersLisiting = () => {
  return (
    <AuthChecker permission={permissions.user.view}>
      <Listing<DataType>
        columns={columns}
        endpoint={ENDPOINTS["users-list"]}
        title={"Users"}
        filters={filters}
        actions={useractions}
      />
    </AuthChecker>
  );
};

export default UsersLisiting;
