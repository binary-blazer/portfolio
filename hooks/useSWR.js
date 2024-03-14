import axios from "axios";
import swr from "swr";

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
