export const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const API_URL = "http://localhost/admin/api";

export const LOCAL_URLS = {
    CATEGORIES_INDEX()          { return `/admin/categories` },
    CATEGORIES_UPDATE(category) { return `/admin/categories/${category}`; }
};