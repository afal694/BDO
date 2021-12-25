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
}

const PageLayout: React.FC<PageLayoutProps> = ({
	children,
	queries,
}: PageLayoutProps) => {
	return (
		<>
			<Header queries={queries} />
			<main>{children}</main>
			<Footer queries={queries} />
		</>
	);
};

export default PageLayout;
