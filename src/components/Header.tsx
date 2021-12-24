import React from "react";
import * as Icon from "react-bootstrap-icons";
import Logo from "../assets/logo.png";

const AvatarComponent = () => {
	return (
		<div className="avatar-component">
			<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
		</div>
	);
};

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
				{/* <Icon.List /> */}
				<AvatarComponent />
			</div>
		</header>
	);
};

export default Header;
