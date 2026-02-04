"use client";
import { Col, Flex, message, Row, Spin } from "antd";
import Roles from "./_components/roles";
import Permissions from "./_components/permissions";
import { startTransition, useActionState, useEffect, useState } from "react";
import { getRequest } from "@/utils/request";
import { ENDPOINTS } from "@/constants/endpoints";
import AuthChecker from "@/utils/authchecker";
import { permissions } from "@/constants/permissions";
const AccessControl = () => {
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState<string | null>(null);
  const [view, setView] = useState<string | null>(null);
  const [[roles, permissions], getRolesAndPermissions, isPending] =
    useActionState(async () => {
      const [roles, permissions] = await Promise.all([
        getRequest({
          endpoint: ENDPOINTS.roles,
          credentials: "include",
        }),
        getRequest({
          endpoint: ENDPOINTS.getpermissions,
          credentials: "include",
        }),
      ]);

      if (roles.success && permissions.success) {
        return [roles.data, permissions.data];
      } else {
        message.error("Failed to fetch roles or permissions");
        return [[], []];
      }
    }, [[], []]);

  useEffect(() => {
    startTransition(() => {
      getRolesAndPermissions();
    });
  }, []);

  
  return (
    <AuthChecker permission={permissions["access control"].view}>
    <Flex vertical gap={20}>
      <h3 className="text-3xl font-medium !text-[var(--text-primary)]">
        Access Control
      </h3>
  {
    isPending?<Spin/>:(
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12} lg={8}>
            <Roles
              setAdd={setAdd}
              edit={edit}
              add={add}
              view={view}
              roles={roles}
              setEdit={setEdit}
              setView={setView}
              getRolesAndPermissions={()=>startTransition(()=>getRolesAndPermissions())}
            />
          </Col>
          <Col xs={24} md={12} lg={16}>
            <Permissions
              edit={edit}
              add={add}
              view={view}
              setAdd={setAdd}
              permissions={permissions}
              getRolesAndPermissions={getRolesAndPermissions}
              setEdit={setEdit}
              setView={setView}
            />
          </Col>
        </Row>)
  }   
    
    </Flex>
    </AuthChecker>
  );
};

export default AccessControl;
