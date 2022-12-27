export default function Advertising(props) {
	const { img, link } = props;

	return (
		<div className="ads-container">
			<a href={link}>
				<img className="ads-img" src={img} alt="img" />
			</a>
			<div>
				{props.children}
			</div>
		</div>
	)
}