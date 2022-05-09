import React, {useState} from 'react';
import { getStats } from "./statsCalc/calc.function"
import PlayerDiv from "./playerInfo.view"
import { List } from "./playerInfo.view"
import PlayerInfoController from './playerInfo';
import { RenderIf } from './common/renderIf';

export const PlayerDivController = ({points, rebounts, assists, title, onClick, selected}) => (
    <PlayerDiv.Holder onClick={onClick} selected={selected}>
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
    const [selectedIndex, setSelectedIndex] = useState(null);
    const onSelectedPlayer = (index, event) => setSelectedIndex(index);
    const selectedPlayer = players.find((player, index) => selectedIndex === index)
    return (
        <List.Container>
            <List.Wrapper>
                {players.map((players, index) => (
                    <PlayerDivController {...players} 
                        selected={selectedIndex === index}
                        onClick={onSelectedPlayer.bind(this, index)} />
                ))}
            </List.Wrapper>
            <List.Wrapper>
                <RenderIf condition={selectedPlayer}>
                    <PlayerInfoController {...selectedPlayer}/>
                </RenderIf>
            </List.Wrapper>
        </List.Container>
    )
} 

export default PlayerList