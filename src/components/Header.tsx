import React from "react";
import * as Icon from "react-bootstrap-icons";
import Logo from "../assets/logo.png";

const AvatarComponent = ({
	obj,
}: {
	obj: {
		nit: string;
		nombre: string;
		capa: string;
		segmento: string;
		gerenteRelacion: string;
	};
}) => {
	return (
		<div className="avatar-component d-flex">
			<div className="data d-flex flex-column justify-content-start">
				<span className="data__name">{obj.gerenteRelacion}</span>
				<span className="text-muted ">Gerente de Relación</span>
			</div>
			<img
				src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				alt="avatar"
			/>
		</div>
	);
};

const Header = ({
	queries,
	obj,
}: {
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
}) => {
	if (queries.isDesktop) {
		return (
			<header className="d-flex flex-row justify-content-between">
				<div className="logo">
					<img src={Logo} alt="logo" />
				</div>
				<div className="last-button">
					{obj && <AvatarComponent obj={obj} />}
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

	return null;
};

export default Header;
