import { PlayerInfo } from "./playerInfo.view";
import Input from "./common/imput";
import {useState} from "react";
import { getStats } from "./statsCalc/calc.function"

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

const KPI_NORM = 16;
const KPI_POINTS = 25;
const KPI_REBOUNTS = 6;
const KPI_ASSISTS = 6;

const Line = ({kpi, normKPI, minutes, label, point = ''}) => {
    const percentage = +(kpi * minutes/ normKPI).toFixed(0) ;
    return (
        <PlayerInfo.LineWrapper>
                <PlayerInfo.Points.Wrapper>
                    <PlayerInfo.Points.Title>
                        {label}
                    </PlayerInfo.Points.Title>
                    <PlayerInfo.Points.Value>
                        {kpi} {point}
                    </PlayerInfo.Points.Value>
                </PlayerInfo.Points.Wrapper>
                <PlayerInfo.Line percentage={percentage} />
                <PlayerInfo.Percentage>
                    {percentage}%
                </PlayerInfo.Percentage>
            </PlayerInfo.LineWrapper>
    )
}

const PlayerInfoController = ({points, rebounts, assists, title}) => {
    const [minutes, setMinutes] = useState(48);
    const kpi = getStats({points, rebounts, assists})/100 * minutes;
    return (
        <PlayerInfo.Wrapper>
            <PlayerInfo.Title>
                {title}
            </PlayerInfo.Title>
                <Input label={"Minutes"} 
                    value={minutes} 
                    points={'per game'} 
                    onChange={(event => setMinutes(event.target.value))}
                />
                <PlayerInfo.Title>
                    Average stats per match
                </PlayerInfo.Title>
                <Line label="Effective Rating"
                    kpi={kpi.toFixed(2)}
                    normKPI={KPI_NORM}
                    minutes={minutes}
                />
                <Line label="Points"
                    kpi={points.toFixed(2)}
                    normKPI={KPI_POINTS}
                    minutes={minutes}
                />
                <Line label="Rebounts"
                    kpi={rebounts.toFixed(2)}
                    normKPI={KPI_REBOUNTS}
                    minutes={minutes}
                />
                <Line label="Assists"
                    kpi={assists.toFixed(2)}
                    normKPI={KPI_ASSISTS}
                    minutes={minutes}
                />
        </PlayerInfo.Wrapper>
    )
};

export default PlayerInfoController;
