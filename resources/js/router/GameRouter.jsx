import {Route, Routes } from 'react-router-dom';
import {GameRouterContext} from "./GameRouterContext";
import {Home} from "../game-store/components/home/Home";
import {Header} from "../game-store/components/layout/Header";
import {Footer} from "../game-store/components/layout/Footer";
import {Catalogue} from "../game-store/components/catalogue/Catalogue";
import {Login} from "../game-store/auth/Login";
import {CatalogueDetails} from "../game-store/components/catalogue/CatalogueDetails";
import {ShoppingCart} from "../game-store/components/shopping-cart/ShoppingCart";
import {CompaniesAdd} from "../game-store/components/catalogue/CompaniesAdd";
import {CatalogueAdd} from "../game-store/components/catalogue/CatalogueAdd";

export const GameRouter = () => {
    return (
        <GameRouterContext>
            <Header/>
            <Routes>
                <Route path='/'>
                    <Route index element={<Home/>}/>
                    <Route path='catalogue'>
                        <Route path='' element={<Catalogue/>}/>
                        <Route path=':id/details' element={<CatalogueDetails/>}/>
                    </Route>
                    <Route path='shopping-cart' element={<ShoppingCart/>}/>
                    <Route path='catalogue-add' element={<CatalogueAdd/>}/>
                    <Route path='company-add' element={<CompaniesAdd/>}/>
                    <Route path='auth' element={<Login/>}/>
                </Route>
            </Routes>
            <Footer/>
        </GameRouterContext>
    );
}
