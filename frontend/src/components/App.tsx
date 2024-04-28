import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
  } from "react-router-dom";

import ThemeSetter from './ThemeSetter';
import { ContextHandler } from './AppContext';
import Header from './Header';


export enum Routes {
    Home = "/",
    Models = "/models",
    Datasets = "/datasets"
}

const AppLayout: () => JSX.Element = () => {
    return (
        <div className="App">
            <Header />
            <Outlet />
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: Routes.Home,
        Component: AppLayout,
        children: [
            {
                path: Routes.Models,
                element: <h1>Models Page</h1>,
            },
            {
                path: Routes.Datasets,
                element: <h1>Datasets Page</h1>,
            },
        ]
    },
]);

function App() {
  return (
    <ContextHandler>
        <ThemeSetter>
            <RouterProvider router={router} />
        </ThemeSetter>
    </ContextHandler>
  );
}

export default App;
