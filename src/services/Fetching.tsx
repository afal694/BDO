import axios from "axios";

const uri = "http://localhost:3001";

export const fetchInfo = async (options = {}) => {
	try {
		const response = await axios.post(`${uri}`, { nit: "800220154" });
		return response;
	} catch (error) {}
};
