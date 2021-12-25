import React from "react";
import * as Icon from "react-bootstrap-icons";
import Logo from "../assets/logo.png";

const AvatarComponent = () => {
	return (
		<div className="avatar-component">
			<img
				src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				alt="avatar"
			/>
		</div>
	);
};

const Header = ({
	queries,
}: {
	queries: {
		isDesktop: boolean;
		isTablet: boolean;
		isMobile: boolean;
		isNotMobile: boolean;
	};
}) => {
	if (queries.isDesktop) {
		return (
			<header className="d-flex flex-row justify-content-between">
				<div className="logo">
					<img src={Logo} alt="logo" />
				</div>
				<div className="last-button">
					<AvatarComponent />
				</div>
			</header>
		);
	}

	if (queries.isTablet || queries.isMobile) {
		return (
			<header className="d-flex flex-row justify-content-between">
				<div className="first-button">
					<Icon.ArrowLeft />
				</div>
				<div className="logo">
					<img src={Logo} alt="logo" />
				</div>
				<div className="last-button">
					<Icon.List />
				</div>
			</header>
		);
	}

	return (
		<header>
			<div className="first-button">
				<Icon.ArrowLeft />
			</div>
			<div className="logo">
				<img src={Logo} alt="logo" />
			</div>
			<div className="last-button">
				<AvatarComponent />
			</div>
		</header>
	);
};

export default Header;
