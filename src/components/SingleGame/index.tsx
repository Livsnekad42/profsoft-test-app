import {useNavigate, useParams} from "react-router-dom";
import React from "react";
import { useGetSingleGameQuery } from "redux/api/gamesApi";
import * as ST from "./styled";

const SingleGame = () => {

    const {firstid, secondid} = useParams()
    const { data }  = useGetSingleGameQuery(`${firstid}/${secondid}`)
    const navigate = useNavigate()

    return (
        <ST.GameContainer>
            <ST.Button onClick={(e: any) => navigate('/')}>
                Вернуться на главную
            </ST.Button>
            <ST.GameCard>
                {data && <ST.GameCardTitle>{data.title}</ST.GameCardTitle>}
            </ST.GameCard>
        </ST.GameContainer>
    )
}

export default SingleGame