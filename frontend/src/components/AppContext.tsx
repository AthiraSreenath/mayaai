import React, { ReactElement, createContext, useState } from "react";


interface AppContextType {
    models: any[],
    datasets: any[]
}

const AppContext = createContext<AppContextType>({
    models: [],
    datasets: []
});
export default AppContext;


interface Props {
    children: ReactElement;
}
export const ContextHandler = ({children}: Props): JSX.Element => {
    const [models, setModels] = useState<any[]>([]);
    const [datasets, setDatasets] = useState<any[]>([]);

    const context = {
        models,
        setModels,

        datasets,
        setDatasets
    };

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    );
};
