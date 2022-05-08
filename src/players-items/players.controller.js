import { getStats } from "./statsCalc/calc.function"
import PlayerDiv from "./playerInfo.view"
import { List } from "./playerInfo.view"

export const PlayerDivController = ({points, rebounts, assists, title}) => (
    <PlayerDiv.Holder>
        <PlayerDiv.Title>{title}</PlayerDiv.Title>
        <PlayerDiv.Details>
            {getStats({points, rebounts, assists})} KPI
            <span>{points} PPG</span>
            <span>{rebounts} REB</span>
            <span>{assists} APG</span>
        </PlayerDiv.Details>
    </PlayerDiv.Holder>
)

const PlayerList = ({ players }) => {
    return (
        <List.Wrapper>
            {players.map((players) => (
                <PlayerDivController {...players} />
            ))}
        </List.Wrapper>
        )
} 

export default PlayerList