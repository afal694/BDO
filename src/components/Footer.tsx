import React from "react";
import logoAval from "../assets/Logo_Aval.png";

const Footer = ({
	queries,
}: {
	queries: {
		isDesktop: boolean;
		isTablet: boolean;
		isMobile: boolean;
		isNotMobile: boolean;
	};
}) => {
	return (
		<footer
			className={`${
				queries.isDesktop ? "justify-content-end" : "justify-content-center"
			}`}>
			<img src={logoAval} alt="logo aval" />
		</footer>
	);
};

export default Footer;
