import swr from "swr";
import axios from "axios";

export default function useSWR(url) {
  const { data, error } = swr(url, async (url) => {
    const response = await axios.get(url);
    return response.data;
  });

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}
