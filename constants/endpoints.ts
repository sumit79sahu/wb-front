
export enum ENDPOINTS {
    login = "/user/login",
    forgotpassword = "/user/send-reset-password-link",
    resetpassword = "/user/reset-password",
    logout = "/user/logout",
    me = "/user/me",
    "users-list" = "/user/get-users",
    "export-users"="/user/export-users",
    roles="/role/get-roles",
    createrole="/role/create-role",
    getpermissions="/permission/get-permissions",
    getrolepermissions="/permission/get-permissions-by-role",
    editrole="/role/edit-role",
    deleterole="/role/delete-role",
    "create-user"="/user/create-user",
    "get-user"="/user/get-user",
    "edit-user"="/user/edit-user",
    "change-user-status"="/user/change-user-status"
}