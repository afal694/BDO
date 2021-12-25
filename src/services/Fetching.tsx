import axios from "axios";
import { uri } from "../config";


export const fetchInfo = async (options = { nit: "" }) => {
	try {
		const { nit } = options;
		const response = await axios.post(`${uri}/`, { nit });
		return response;
	} catch (error) {}
};
