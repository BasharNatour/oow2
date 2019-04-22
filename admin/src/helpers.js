export const isFormValid = validation =>
    Object.keys(validation).every(key => validation[key]);

export const queryStringifyParam = (url, param, value) =>
    url.replace(`/${param}`, url.indexOf("?") > -1 ? `&${param}=${value}` : `?${param}=${value}`);