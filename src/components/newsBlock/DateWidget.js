export default function DateWidget() {
	const date = new Date().toLocaleString();

	return (
		<div className="date-widget">
			{date}
		</div>
	)
}