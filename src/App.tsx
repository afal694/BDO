import React from "react";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import PageInfo from "./components/PageInfo";
import PageLayout from "./components/PageLayout";

function App() {
	//media queries

	const isDesktop = useMediaQuery({ minWidth: 992 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
	const isMobile = useMediaQuery({ maxWidth: 767 });
	const isNotMobile = useMediaQuery({ minWidth: 768 });

	const queries = { isDesktop, isTablet, isMobile, isNotMobile };
	return (
		<PageLayout>
			<PageInfo queries={queries} />
		</PageLayout>
	);
}

export default App;
