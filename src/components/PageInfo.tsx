import React, { useEffect, useState } from "react";
import { fetchInfo } from "../services/Fetching";
import CardAction from "./CardAction";
import CustomAlert from "./CustomAlert";

interface PageInfoProps {
	obj?: {
		nit: string;
		name: string;
		layer: string;
		segment: string;
		managerRelation: string;
	};
}
const MockObj = {
	nit: "800220154",
	name: "Flotas la Macarena",
	layer: "Oro",
	segment: "A",
	managerRelation: "Carlos Gómez",
};

interface InfoKeyValueProps {
	name: string;
	value: string;
}
const InfoKeyValue: React.FC<InfoKeyValueProps> = ({
	name,
	value,
}: InfoKeyValueProps) => {
	return (
		<div className="info-key-value">
			<span className="fw-bold">{`${name}: `}</span>
			<span>{value}</span>
		</div>
	);
};

const PageInfo: React.FC<PageInfoProps> = ({ obj }: PageInfoProps) => {
	const [state, setState] = useState(null);

	const fetch = async () => {
		try {
			const res = await fetchInfo({ nit: MockObj.nit });
			console.info({ res });
			setState(res?.data);
		} catch (error) {}
	};

	useEffect(() => {
		console.info({ state });
	}, [state]);

	useEffect(() => {
		fetch();
	}, []);

	if (!state) return null;

	const {
		capa: layer,
		gerenteRelacion: managerRelation,
		nit,
		nombre: name,
		segmento: segment,
	} = state;

	return (
		<div style={{ width: "780px" }}>
			<div className="meta-data">
				<p className="fs-4 fw-bolder">{name}</p>
				<p className="fs-6 text-muted">{`NIT: ${nit}`}</p>
				<div className="info">
					<InfoKeyValue name={"Capa"} value={layer} />
					<InfoKeyValue name={"Segmento"} value={segment} />
				</div>
			</div>
			<div className="actions">
				<div className="details">
					<p>Indique la línea de crédito que quiere reconsiderar</p>
				</div>
				<div className="cards-container">
					<CardAction
						button={{ text: "Continuar", onAction: () => alert("onaction") }}
						details={"Cartera ordinaria"}
						icon=""
					/>
					<CardAction
						button={{ text: "Continuar", onAction: () => {} }}
						details={"Leasing"}
						icon=""
					/>
				</div>
			</div>
			<div className="info">
				<CustomAlert message="Las demás líneas de crédito no estarán disponibles por el momento" />
			</div>
		</div>
	);
};

export default PageInfo;
