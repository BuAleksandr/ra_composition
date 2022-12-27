import WidgetsTemplate from "./WidgetsTemplate";
import Weather from "./widgets/Weather";
import Popular from "./widgets/Popular";
import MapWidget from "./widgets/MapWidget";
import TvProgram from "./widgets/TvProgram";
import Broadcast from "./widgets/Broadcast";

export default function WidgetsBlock(props) {
	const { weather, popular, mapData, program, broadcast } = props;

	return (
		<div className="widgets-block">
			<WidgetsTemplate title="Погода">
				<Weather data={weather} />
			</WidgetsTemplate>

			<WidgetsTemplate title="Посещаемое">
				<Popular data={popular} />
			</WidgetsTemplate>

			<WidgetsTemplate title="Карта Германии">
				<MapWidget data={mapData} />
			</WidgetsTemplate>

			<WidgetsTemplate title="Телепрограмма">
				<TvProgram data={program} />
			</WidgetsTemplate>

			<WidgetsTemplate title="Эфир">
				<Broadcast data={broadcast} />
			</WidgetsTemplate>
		</div>
	)
}