import { Line } from "./playerInfo.view";

export const PLAYERS = [{
    title: "Luka Doncic",
    points: 28.4,
    rebounts: 9.1,
    assists: 8.7
},
{
    title: "Nikola Jokic",
    points: 27.1,
    rebounts: 13.8,
    assists: 7.9
},
{
    title: "Jayson Tatum",
    points: 26.9,
    rebounts: 8.0,
    assists: 4.4
}];

const PlayerInfo = () => {
    return (
        <div className="effective-line">
            <Line percentage={0.1} type="bad"/>
            <Line percentage={0.5} type="good"/>
            <Line percentage={0.76} />
            <div className="inner-line" style={{ width: "10%"}}></div>
        </div>
    )
}

export default PlayerInfo