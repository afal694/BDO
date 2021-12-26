import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface PageLayoutProps {
	children?: JSX.Element;
	queries: {
		isDesktop: boolean;
		isTablet: boolean;
		isMobile: boolean;
		isNotMobile: boolean;
	};
	obj?: {
		nit: string;
		nombre: string;
		capa: string;
		segmento: string;
		gerenteRelacion: string;
	};
}

const PageLayout: React.FC<PageLayoutProps> = ({
	children,
	queries,
	obj,
}: PageLayoutProps) => {
	return (
		<>
			<Header queries={queries} obj={obj} />
			<main>{children}</main>
			<Footer queries={queries} />
		</>
	);
};

export default PageLayout;
