import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface PageLayoutProps {
	children?: JSX.Element;
}

const PageLayout: React.FC<PageLayoutProps> = ({
	children,
}: PageLayoutProps) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default PageLayout;
