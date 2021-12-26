import React from "react";

const CardAction = ({
	icon,
	details,
	button: { text, onAction },
	disabled,
}: {
	icon: string;
	details: string;
	button: {
		text: string;
		onAction: () => void;
	};
	disabled?: boolean;
}) => {
	return (
		<div className={`card-action ${disabled ? "disabled" : ""}`}>
			<div className="icon d-flex justify-content-center align-items-center">
				{<i className={icon} />}
			</div>
			<div className="details">{details}</div>
			<div className="button-cta" onClick={onAction}>
				<button type="button">{text}</button>
			</div>
		</div>
	);
};

export default CardAction;
