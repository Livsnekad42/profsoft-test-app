import {FilterValue, IGame} from "types/GameType";
import ApiData from 'constants/apiData.json'

export const getGames = (page: number = 1, filterCurrency: string, filterProvider: string) => {
    const pageSize = 12;
    const gamesCount = page * pageSize;
    let result: Array<IGame> = [];

    for (const game in ApiData) {
            let gameData = {
                // @ts-ignore
                [game]: ApiData[game]
            }
            result.push(gameData)
    }
    result.sort((a, b) => {
        const [[keyOfA, dataOfA], _] = Object.entries(a);
        const [[keyOfB, dataOfB], __] = Object.entries(b);
        const popularityA = dataOfA.collections.popularity;
        const popularityB = dataOfB.collections.popularity;
        if (popularityA < popularityB) {
            return -1;
        }
        if (popularityA > popularityB) {
            return 1;
        }
        return 0;
    })

    if (filterCurrency) {
        result = result.filter((game) => {
            const [[key, data], _] = Object.entries(game);
            const currencies = data.real
            return Object.keys(currencies).includes(filterCurrency)
        })
    }
    if (filterProvider) {
        result = result.filter((game) => {
            const [[key, data], _] = Object.entries(game);
            return data.provider === filterProvider
        })
    }
    console.log('hui')
    return result.slice(0, gamesCount)
}

export const getSingleGame = (id: string) => {
    // @ts-ignore
    return ApiData[id]
}

export const getCurrencies = () => {
    // @ts-ignore
    return {
        BTC: 'BTC',
        ETH: 'ETH',
        EUR: 'EUR',
        LTC: 'LTC',
        RUB: 'RUB',
        USD: 'USD',
    }
}

export const getProviders = () => {
    // @ts-ignore
    const result: FilterValue<string> = {};
    for (const gameTitle in ApiData) {
        // @ts-ignore
        const provider = ApiData[gameTitle].provider
        // @ts-ignore
        result[provider] = provider
    }
    return result
}