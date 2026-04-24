import{
    createRootRoute,
    createRoute,
    createRouter,
    Link,
    Outlet
}from '@tanstack/react-router';

import Home from './Home';
import CarParts from './CarParts';

const rootRoute = createRootRoute({
    component: function RootLayout(){
        return(
            <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/carparts">Repuestos</Link>
            </nav>

            <section id="center">
                <Outlet />
            </section>
            </>
        )
    }
});
const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Home
});
const repuestosRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/carparts",
    component: CarParts
});
const routeTree = rootRoute.addChildren([homeRoute, repuestosRoute]);
export const router = createRouter({ routeTree });