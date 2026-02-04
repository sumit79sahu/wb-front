import { ENDPOINTS } from "@/constants/endpoints";
import { permissions } from "@/constants/permissions";
import AuthChecker from "@/utils/authchecker";
import { deleteRequest } from "@/utils/request";
import { Button, Card, Flex, Popconfirm, Spin, message } from "antd";
import { useActionState } from "react";

const Roles = ({
  setAdd,
  add,
  edit,
  view,
  roles,
  setEdit,
  setView,
  getRolesAndPermissions,
}: {
  add: boolean;
  edit: string | null;
  view: string | null;
  setAdd: React.Dispatch<React.SetStateAction<boolean>>;
  setEdit: React.Dispatch<React.SetStateAction<string | null>>;
  setView: React.Dispatch<React.SetStateAction<string | null>>;
  roles: { name: string; _id: string }[];
  getRolesAndPermissions: () => void;
}) => {
  const [, deleteRole, isPending] = useActionState(
    async (_: unknown, id: string) => {
      const response = await deleteRequest({
        endpoint: ENDPOINTS.deleterole,
        id,
        credentials: "include",
      });
      if (response.success) {
        getRolesAndPermissions();
        message.success("deleted successfully");
      } else {
        message.error(response.message);
      }
    },
    null,
  );
  return (
    <Card
      title={<h6 className="text-sm font-medium">Roles</h6>}
      size="small"
      actions={
        add
          ? undefined
          : [
              <AuthChecker
                key={"add role"}
                permission={permissions["access control"].create}
              >
                <Button
                  type="primary"
                  className="w-full max-w-[95%]"
                  onClick={() => {
                    setAdd(true);
                    setEdit(null);
                    setView(null);
                  }}
                >
                  Add Role
                </Button>
              </AuthChecker>,
            ]
      }
      className="roles"
    >
      <Spin spinning={isPending}>
        {roles?.map((role, index) => (
          <Flex
            key={role._id}
            align="center"
            justify="space-between"
            className={`${index === roles.length - 1 ? "" : "border-b"} border-b-[#f6ebeb] !py-[4px] !px-[12px] ${role._id === edit || role._id === view ? "bg-[#136ae317]" : ""} `}
          >
            <h6 className="capitalize w-full ">{role.name}</h6>
            <Flex className="w-full">
              <AuthChecker permission={permissions["access control"].view}>
                <Button
                  type="link"
                  onClick={() => {
                    setView(role._id);
                    setEdit(null);
                    setAdd(false);
                  }}
                >
                  View
                </Button>
              </AuthChecker>
              <AuthChecker permission={permissions["access control"].update}>
                <Button
                  type="link"
                  onClick={() => {
                    setEdit(role._id);
                    setView(null);
                    setAdd(false);
                  }}
                >
                  Edit
                </Button>
              </AuthChecker>
              <AuthChecker permission={permissions["access control"].delete}>
                <Popconfirm
                  title="Delete the role"
                  description="Are you sure to delete this role?"
                  onConfirm={() => deleteRole(role._id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button type="link" className="!text-red-500">
                    Delete
                  </Button>
                </Popconfirm>
              </AuthChecker>
            </Flex>
          </Flex>
        ))}
      </Spin>
    </Card>
  );
};

export default Roles;
