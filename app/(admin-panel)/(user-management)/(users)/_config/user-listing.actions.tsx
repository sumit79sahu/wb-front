"use client";
import { ENDPOINTS } from "@/constants/endpoints";
import { permissions } from "@/constants/permissions";
import AuthChecker from "@/utils/authchecker";
import downloadCSV from "@/utils/downloadcsv";
import { getRequest } from "@/utils/request";
import { IconCloudDownload, IconPlus } from "@tabler/icons-react";
import Button from "antd/es/button";
import { redirect } from "next/navigation";
import { JSX, startTransition, useActionState } from "react";

const DownloadUsersCSV = () => {
  const [_, download, isPending] = useActionState(async () => {
    const response = await getRequest({
      endpoint: ENDPOINTS["export-users"],
      credentials: "include",
      type: "blob",
    });
    downloadCSV(response, "users");
  }, null);

  return (
    <Button
      loading={isPending}
      onClick={() =>
        startTransition(() => {
          download();
        })
      }
      icon={<IconCloudDownload size={18} className="mt-[4px]" />}
    >
      Export
    </Button>
  );
};

export const useractions: JSX.Element[] = [
  <AuthChecker key={"export-users"} permission={permissions.user.view}>
    <DownloadUsersCSV />
  </AuthChecker>,
  <AuthChecker key={"add-users"} permission={permissions.user.create}>
    <Button
      type="primary"
      onClick={() => redirect("/add-user")}
      icon={<IconPlus size={18} className="mt-[4px]" />}
    >
      Add User
    </Button>
  </AuthChecker>,
];
