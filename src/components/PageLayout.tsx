import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface PageLayoutProps {
	name?: string;
	children?: JSX.Element;
}

const PageLayout: React.FC<PageLayoutProps> = ({
	name = "andres",
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
