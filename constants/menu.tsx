import { permissions } from "./permissions";

export const MENU = [
  {
    key: "user-managment",
    label: "User Management",
    permissions: [permissions.user.view, permissions["access control"].view],
    children: [
      {
        key: "user",
        label: "Users",
        path: "/list-users",
        permission: permissions.user.view,
      },
      {
        key: "access-control",
        label: "Access Control",
        path: "/access-control",
        permission: permissions["access control"].view,
      },
    ],
  },
];
