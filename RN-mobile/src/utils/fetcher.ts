import { API_URL } from "constant";

interface Props {
    url: string;
}

interface ResponseProps<T> {
    status: number;
    message: string;
    data: T;
}

export function fetcher<T>({url} : Props): Promise<ResponseProps<T>> {
    return fetch(`${API_URL}${url}`).then(response => response.json())
}