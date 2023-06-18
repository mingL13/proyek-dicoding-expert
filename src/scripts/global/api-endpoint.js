import CONFIG from "./config";

const API_ENDPOINT = {
  ALLLIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id !== null ? id : "rqdv5juczeskfw1e867"}`,
  IMAGE: (id, size) => `${CONFIG.BASE_URL}/images/${size}/${id}`,
};

export default API_ENDPOINT;
