import axios from "axios";

const uri = "http://localhost:3001";

export const fetchInfo = async (options = { nit: "" }) => {
	try {
		const { nit } = options;
		const response = await axios.post(`${uri}`, { nit });
		return response;
	} catch (error) {}
};
