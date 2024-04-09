import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {HeaderProvider} from "./game-store/context/HeaderContext";
import {GameRouter} from "./router/GameRouter";

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <HeaderProvider>
                    <GameRouter/>
                </HeaderProvider>
            </BrowserRouter>
        </>
    );
}

