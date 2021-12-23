import React from "react";

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
			<span className="fw-bold">{name}</span>
			<span >{value}</span>
		</div>
	);
};

const PageInfo: React.FC<PageInfoProps> = ({
	obj = MockObj,
}: PageInfoProps) => {
	const { name, layer, managerRelation, nit, segment } = obj;

	return (
		<div>
			<div className="meta-data">
				<p className="fs-4 fw-bolder">{name}</p>
				<p className="fs-6 text-muted">{`NIT: ${nit}`}</p>
				<div className="info">
					<InfoKeyValue name={"Capa"} value={layer} />
					<InfoKeyValue name={"Segmento"} value={segment} />
				</div>
			</div>
			<div className="actions">
				<div>
					<p>Indique la línea de crédito que quiere reconsiderar</p>
				</div>
				<div>
					<div className="action"></div>
				</div>
			</div>
			<div className="info"></div>
		</div>
	);
};

export default PageInfo;
