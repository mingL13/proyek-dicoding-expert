import API_ENDPOINT from "../global/api-endpoint";

const DATA = {
  async getAllList() {
    const response = await fetch(API_ENDPOINT.ALLLIST);
    const responseJSON = response.json();
    return responseJSON;
  },
  async getDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJSON = response.json();
    return responseJSON;
  },
};

export default DATA;
