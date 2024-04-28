import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    redirect,
    Navigate,
  } from "react-router-dom";

import ThemeSetter from './ThemeSetter';
import { ContextHandler } from './AppContext';
import ErrorElement from './ErrorElement';
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

async function redirectHandler({request}: {request: Request}) {
    const url = new URL(request.url)
    if (url.pathname === Routes.Home) {
        return redirect(Routes.Models);
    }
    return null
}

const router = createBrowserRouter([
    {
        path: Routes.Home,
        Component: AppLayout,
        errorElement: <ErrorElement />,
        loader: redirectHandler,
        children: [
            {
                path: Routes.Models,
                element: <h1>Models Page</h1>,
            },
            {
                path: Routes.Datasets,
                element: <h1>Datasets Page</h1>,
            },
            {
                path: "*",
                element: <Navigate to="/" replace />
            }
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
