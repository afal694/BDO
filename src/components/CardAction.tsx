import React from "react";

const CardAction = ({
	icon,
	details,
	button: { text, onAction },
}: {
	icon: string;
	details: string;
	button: {
		text: string;
		onAction: () => void;
	};
}) => {
	return (
		<div className="card-action">
			<div className="icon">{icon}</div>
			<div className="details">{details}</div>
			<div className="button-cta" onClick={onAction}>
				<button type="button">{text}</button>
			</div>
		</div>
	);
};

export default CardAction;
