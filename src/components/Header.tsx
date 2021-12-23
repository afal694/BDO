import React from "react";
import * as Icon from "react-bootstrap-icons";
import Logo from "../assets/logo.png";

const Header = ({}) => {
	return (
		<header>
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
};

export default Header;
