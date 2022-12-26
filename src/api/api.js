import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://e-commerceapp-facf9-default-rtdb.firebaseio.com",
});

export async function api(params) {
  try {
    const { data } = await axiosClient[params.method](
      params.URL,
      params.body || null
    );
    return [null, data];
  } catch (error) {
    return [error];
  }
}
