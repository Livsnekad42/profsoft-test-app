import {Link} from "react-router-dom";
import React, {useState} from "react";
import {useGetCurrenciesQuery, useGetGamesQuery, useGetProvidersQuery} from "redux/api/gamesApi";
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import {
    FormControl,
} from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import * as ST from "./styled";

const Main = () => {

    const [page, setPage] = useState<number>(1)
    const [filterCurrency, setFilterCurrency] = useState<string>('')
    const [filterProvider, setFilterProvider] = useState<string>('')

    const { data: games, isLoading }  = useGetGamesQuery({page, filterCurrency, filterProvider})
    const { data: currencies }  = useGetCurrenciesQuery(filterCurrency)
    const { data: providers }  = useGetProvidersQuery(filterProvider)

    console.log('dada', games)
    const handleIncreasePage = (event: React.MouseEvent<HTMLButtonElement>) => {
        setPage(page => page + 1);
    }

    const handleChangeCurrencyFilter = (event: SelectChangeEvent) => {
        setFilterCurrency(event.target.value)
        setPage(1)
    }

    const handleChangeProviderFilter = (event: SelectChangeEvent) => {
        setFilterProvider(event.target.value)
        setPage(1)
    }

    return (
        <ST.GameContainer>
            <ST.FilterSection>
                <FormControl sx={{ width: '50%' }}>
                    <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Валюта"
                        onChange={handleChangeCurrencyFilter}
                        defaultValue={''}
                    >
                        {currencies && Object.entries(currencies).map(([name, value]) => (
                            <MenuItem key={name} value={value}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl sx={{ width: '50%' }}>
                    <InputLabel id="demo-simple-select-label">Провайдер</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Провайдер"
                        onChange={handleChangeProviderFilter}
                        defaultValue={''}
                    >
                        {providers && Object.entries(providers).map(([key, value]) => (
                            <MenuItem key={key} value={value}>
                                {key}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </ST.FilterSection>
            <ST.GameSection>
                {games && games.map((game, index) => {
                    const [[key, data], _] = Object.entries(game)
                    return (
                        <Link to={key} key={key}>
                            <ST.GameCard>
                                <ST.GameCardImage id={key}></ST.GameCardImage>
                                <ST.GameCardTitle>{data.title}</ST.GameCardTitle>
                            </ST.GameCard>
                        </Link>
                    )
                })}
            </ST.GameSection>
            <ST.ButtonSection>
                {games && (
                    <ST.Button onClick={handleIncreasePage}>
                        Показать ещё
                    </ST.Button>
                )}
            </ST.ButtonSection>
        </ST.GameContainer>
    )
}

export default Main