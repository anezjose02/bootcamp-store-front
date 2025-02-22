import React, {createContext, useContext, useMemo} from 'react';
const RouteContext = createContext();

export const GameRouterContext = ({children}) => {
    const routeData = useMemo(() => ({

    }), []);

    return (
        <RouteContext.Provider value={routeData}>
            {children}
        </RouteContext.Provider>
    );
};

export const useRoute = () => {
    return useContext(RouteContext);
};
