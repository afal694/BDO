import React from "react";

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
			<img
				src="https://depl-s3-bdo.s3.amazonaws.com/Logo_Aval.png"
				alt="logo aval"
			/>
		</footer>
	);
};

export default Footer;
