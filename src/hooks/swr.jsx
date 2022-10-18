import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function useRequest(url) {
    const { data, error } = useSWR(url, fetcher);
    
    return {
        data,
        isLoading: !error && !data,
        isError: error,
    };
    }