import axios from "axios";

var refererUrl = "process.env.NEXTAUTH_URL";

export const postRequest = async (url, token, data) => {
 if (typeof window !== "undefined") {
  refererUrl = window.location.href;
 }
 const options = {
  method: "POST",
  url: `${process.env.NEXT_PUBLIC_URL}${url}`,
  headers: {
   "Content-Type": "application/json",
   Authorization: `Bearer ${token}`,
   Refererurl: refererUrl,
   country: process.env.NEXT_PUBLIC_COUNTRYID,
  },

  data: data,
 };

 const response = await axios
  .request(options)
  .then(function (response) {
   return { value: true, data: response.data };
  })
  .catch(function (error) {
   if (error.response) {
    return { value: false, data: error.response.data };
   }
   return { value: false, data: { message: "Network Error" } };
  });

 return response;
};

export const getRequest = async (url, filter, token) => {
 const options = {
  method: "GET",
  url: `${process.env.NEXT_PUBLIC_URL}${url}`,
  params: filter,

  headers: {
   "Content-Encoding": "gzip",
   Authorization: `Bearer ${token}`,
   country: process.env.NEXT_PUBLIC_COUNTRYID,
  },
 };

 const response = await axios
  .request(options)
  .then(function (response) {
   return { value: true, data: response.data };
  })
  .catch(function (error) {
   if (error.response) {
    return { value: false, data: error.response.data };
   }
   return { value: false, data: { message: "Network Error" } };
  });

 return response;
};

export const patchRequest = async (url, token, data) => {
 if (typeof window !== "undefined") {
  refererUrl = window.location.href;
 }
 const options = {
  method: "PATCH",
  url: `${process.env.NEXT_PUBLIC_URL}${url}`,

  headers: {
   "Content-Type": "application/json",
   Authorization: `Bearer ${token}`,
   Refererurl: refererUrl,
   country: process.env.NEXT_PUBLIC_COUNTRYID,
  },
  data: data,
 };

 const response = await axios
  .request(options)
  .then(function (response) {
   return { value: true, data: response.data };
  })
  .catch(function (error) {
   if (error.response) {
    return { value: false, data: error.response.data };
   }
   return { value: false, data: { message: "Network Error" } };
  });

 return response;
};

export const putRequest = async (url, token, data) => {
 if (typeof window !== "undefined") {
  refererUrl = window.location.href;
 }
 const options = {
  method: "PUT",
  url: `${process.env.NEXT_PUBLIC_URL}${url}`,

  headers: {
   "Content-Type": "application/json",
   Authorization: `Bearer ${token}`,
   Refererurl: refererUrl,
   country: process.env.NEXT_PUBLIC_COUNTRYID,
  },
  data: data,
 };

 const response = await axios
  .request(options)
  .then(function (response) {
   return { value: true, data: response.data };
  })
  .catch(function (error) {
   if (error.response) {
    return { value: false, data: error.response.data };
   }
   return { value: false, data: { message: "Network Error" } };
  });

 return response;
};

export const deleteRequest = async (url, token, formData) => {
 if (typeof window !== "undefined") {
  refererUrl = window.location.href;
 }
 let options = {
  method: "DELETE",
  url: `${process.env.NEXT_PUBLIC_URL}${url}`,

  headers: {
   Accept: "application/json",
   Authorization: `Bearer ${token}`,
   Refererurl: refererUrl,
   country: process.env.NEXT_PUBLIC_COUNTRYID,
  },
 };
 if (formData) {
  options = { ...options, data: formData };
 }
 const response = await axios
  .request(options)
  .then(function (response) {
   return { value: true, data: response.data };
  })
  .catch(function (error) {
   if (error.response) {
    return { value: false, data: error.response.data };
   }
   return { value: false, data: { message: "Network Error" } };
  });

 return response;
};

export const uploadFile = async (file, token, name) => {
 let formData = new FormData();
 var foldername = name ? name : "mega-we-care-global";
 formData.append("name", foldername);
 formData.append("file", file);

 const options = {
  method: "POST",
  url: `${process.env.NEXT_PUBLIC_URL}media/file_upload`,
  headers: {
   Accept: "application/json",
   "Content-Type": "multipart/form-data",
   Authorization: `Bearer ${token}`,
   country: process.env.NEXT_PUBLIC_COUNTRYID,
  },

  data: formData,
 };

 const response = await axios
  .request(options)
  .then(function (response) {
   return { value: true, data: response.data };
  })
  .catch(function (error) {
   if (error.response) {
    return { value: false, data: error.response.data };
   }
   return { value: false, data: { message: "Network Error" } };
  });

 return response;
};

export const uploadMultipleImage = async (files, token, name) => {
 let formData = new FormData();
 var foldername = name ? name : "mega-we-care-global";
 formData.append("name", foldername);
 for (let i = 0; i < files.length; i += 1) {
  formData.append("files", files[i]);
 }
 //  formData.append("files", file);

 const options = {
  method: "POST",
  url: `${process.env.NEXT_PUBLIC_URL}media/multi_upload`,
  headers: {
   // "Content-Type": "application/json",
   Authorization: `Bearer ${token}`,
   country: process.env.NEXT_PUBLIC_COUNTRYID,
  },

  data: formData,
 };

 const response = await axios
  .request(options)
  .then(function (response) {
   return { value: true, data: response.data };
  })
  .catch(function (error) {
   if (error.response) {
    return { value: false, data: error.response.data };
   }
   return { value: false, data: { message: "Network Error" } };
  });

 return response;
};
