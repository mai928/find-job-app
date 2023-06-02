import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (endpoint, query) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const options = {
		method: "GET",
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,

		headers: {
			"content-type": "application/octet-stream",
			"X-RapidAPI-Key": "a160d7f7bamshe617180946ba6b7p16eab2jsndbb948c9804a",
			"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
		},
		params: {
			...query,
		},
	};

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const response = await axios.request(options);
			setData(response.data.data);
			setIsLoading(false)
		} catch (error) {
			setError(error);
			alert("there is an error");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const refetch = () => {
		setIsLoading(true);
		fetchData();
	};

	return { data, isLoading, error, refetch };
};

export default useFetch;
