import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {getCurrencies, getGames, getProviders, getSingleGame} from "./apiDataInteractor";
import {FilterValue, GameType, IGame} from "types/GameType";
import {BaseEndpoint} from "constants/endpoint";


export const gamesApi = createApi({
    reducerPath: 'gamesApi',
    baseQuery: fetchBaseQuery({
        // API URL недоступна, поэтому использовал данные из файла, а здесь просто моковый запрос
        baseUrl: BaseEndpoint,
        }),
    endpoints: (builder) => ({
        getGames: builder.query<IGame[], {page: number, filterCurrency: string, filterProvider: string}>({
            query: (page) => ``,
            transformResponse: (response: GameType[], meta, arg) => {
                return getGames(arg.page, arg.filterCurrency, arg.filterProvider)
            },

        }),
        getSingleGame: builder.query<GameType, string>({
            query: (id) => ``,
            transformResponse: (response: GameType, meta, arg) => {
                return getSingleGame(arg)
            },
        }),
        getCurrencies: builder.query<FilterValue<string>, string>({
            query: (id) => ``,
            transformResponse: (response: FilterValue<string>, meta, arg) => {
                return getCurrencies()
            },
        }),
        getProviders: builder.query<FilterValue<string>, string>({
            query: (id) => ``,
            transformResponse: (response: FilterValue<string>, meta, arg) => {
                return getProviders()
            },
        }),
    }),
})

export const { useGetGamesQuery, useGetSingleGameQuery, useGetCurrenciesQuery, useGetProvidersQuery } = gamesApi