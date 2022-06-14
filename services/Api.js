import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return axios.create({
    baseURL: "https://00672285.us-south.apigw.appdomain.cloud/demo-gapsi",
    headers: {
      "X-IBM-Client-Id": "adb8204d-d574-4394-8c1a-53226a40876e",
    },
  });
};
