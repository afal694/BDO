import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import PageInfo from "./components/PageInfo";
import PageLayout from "./components/PageLayout";
import { fetchInfo } from "./services/Fetching";

const MockObj = {
	nit: "800220154",
	name: "Flotas la Macarena",
	layer: "Oro",
	segment: "A",
	managerRelation: "Carlos Gómez",
};

function App() {
	const [state, setState] = useState(null);

	const fetch = async () => {
		try {
			const res = await fetchInfo({ nit: MockObj.nit });
			console.info({ res });
			setState(res?.data);
		} catch (error) {}
	};

	useEffect(() => {
		console.info({ state });
	}, [state]);

	useEffect(() => {
		fetch();
	}, []);

	//media queries

	const isDesktop = useMediaQuery({ minWidth: 992 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
	const isMobile = useMediaQuery({ maxWidth: 767 });
	const isNotMobile = useMediaQuery({ minWidth: 768 });

	const queries = { isDesktop, isTablet, isMobile, isNotMobile };
	return (
		<PageLayout queries={queries} obj={state || undefined}>
			<PageInfo queries={queries} obj={state || undefined} />
		</PageLayout>
	);
}

export default App;
