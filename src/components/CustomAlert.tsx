const CustomAlert = ({ message }: { message: string }) => {
	return (
		<div className="custom-alert alert alert-warning" role="alert">
			<div className="icon">
				<i />
			</div>
			<div className="divider"></div>
			<div className="message">{message}</div>
		</div>
	);
};

export default CustomAlert;
