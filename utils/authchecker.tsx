"use client";
import { useAppSelector } from "@/lib/hook";
import { JSX } from "react";

const AuthChecker = ({
  children,
  permission,
}: {
  children: JSX.Element;
  permission: string;
}) => {
  const { user } = useAppSelector((store) => store.user);
  return (
    <>{user && user?.permissions?.includes(permission) ? children : <></>}</>
  );
};

export default AuthChecker;
