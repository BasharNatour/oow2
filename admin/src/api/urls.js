export const LOGIN             = () => ({ url : "/login", method : "POST" });
export const GET_CATEGORIES    = () => ({ url : "/categories", method : "GET" });
export const CREATE_CATEGORIES = () => ({ url : "/categories", method : "POST" });
export const DELETE_CATEGORIES = (_id) => ({ url : `/categories/${_id}`, method : "DELETE" });