import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import {RouterContent} from "./RouterContent";

const SingleGame = lazy(() =>
    import('pages/singleGamePage').then((module) => ({ default: module.SingleGamePage }))
)

const Main = lazy(() =>
    import('pages/mainPage').then((module) => ({ default: module.MainPage }))
)

export const Routing = () => {
    return (
        <Routes>
            <Route
                path={'/:firstid/:secondid'}
                element={
                    <RouterContent
                        children={<SingleGame />}
                    />
                }
            />
            <Route
                path={'/'}
                element={
                    <RouterContent
                        children={<Main />}
                    />
                }
            />
        </Routes>
)}