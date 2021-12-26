const IconButton = ({
	onClick,
	icon,
}: {
	onClick: () => void;
	icon: string;
}) => {
	return (
		<div className="icon-button">
			<button className="icon-button__button" onClick={onClick}>
				<i className={icon} />
			</button>
		</div>
	);
};
export default IconButton;
