import React, { useEffect, useState } from "react";
import { fetchInfo } from "../services/Fetching";
import CardAction from "./CardAction";
import CustomAlert from "./CustomAlert";
import IconButton from "./IconButton";
import TabsComponent from "./TabsComponent";

interface PageInfoProps {
	obj?: {
		nit: string;
		nombre: string;
		capa: string;
		segmento: string;
		gerenteRelacion: string;
	};
	queries: {
		isDesktop: boolean;
		isTablet: boolean;
		isMobile: boolean;
		isNotMobile: boolean;
	};
}

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

const PageInfo: React.FC<PageInfoProps> = ({ obj, queries }: PageInfoProps) => {
	if (!obj) return null;

	const {
		capa: layer,
		gerenteRelacion: managerRelation,
		nit,
		nombre: name,
		segmento: segment,
	} = obj;

	if (queries.isDesktop)
		return (
			<div style={{ width: "780px", position: "relative" }}>
				<div className="button-panel">
					<IconButton onClick={() => alert("onBack")} icon="bi bi-arrow-left" />
				</div>
				<div className="meta-data">
					<p className="fs-4 fw-bolder">{name}</p>
					<p className="fs-6 text-muted">{`NIT: ${nit}`}</p>
					<div className="info">
						<InfoKeyValue name={"Capa"} value={layer} />
						<InfoKeyValue name={"Segmento"} value={segment} />
					</div>
				</div>
				<div className="actions">
					<TabsComponent
						tabs={[
							{
								component: (
									<>
										<div className="details">
											<p>Indique la línea de crédito que quiere reconsiderar</p>
										</div>
										<div className="cards-container">
											<CardAction
												button={{
													text: "Continuar",
													onAction: () => alert("onaction"),
												}}
												details={"Cartera ordinaria"}
												icon=""
											/>
											<CardAction
												button={{ text: "Continuar", onAction: () => {} }}
												details={"Leasing"}
												icon=""
											/>
										</div>
										<div className="info">
											<CustomAlert message="Las demás líneas de crédito no estarán disponibles por el momento" />
										</div>
									</>
								),
								title: "Operación",
							},
							{
								component: (
									<>
										<div className="details">
											<p>Indicadores</p>
										</div>
									</>
								),
								title: "Indicadores",
							},
							{
								component: (
									<>
										<div className="details">
											<p>Información Cliente</p>
										</div>
									</>
								),
								title: "Información Cliente",
							},
						]}
					/>
				</div>
			</div>
		);

	if (queries.isTablet)
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
					<TabsComponent tabs={[{ component: <>asdas</>, title: "home" }]} />
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

	if (queries.isMobile)
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

	return null;
};

export default PageInfo;
