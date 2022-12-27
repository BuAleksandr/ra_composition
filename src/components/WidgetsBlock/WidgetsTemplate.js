export default function WidgetsTemplate(props) {
	const { title } = props;

	return (
		<div className="widget">
			<h5 className="widget-header">{title}</h5>
			<div className="widget-body">
				{props.children}
			</div>
		</div>
	)
}