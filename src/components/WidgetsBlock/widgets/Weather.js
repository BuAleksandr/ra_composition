export default function Weather(props) {
	const { data } = props;

	return (
		<div className="weather-container">
			<img className="weather-icon" src={data.icon} alt="icon"/>
			<span className="weather-value">{data.value}</span>
		</div>
	)
}