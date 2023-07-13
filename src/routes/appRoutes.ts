import { LazyExoticComponent, lazy } from "react";
import NoLazy from "../01-lazzyload/pages/NoLazy";

type JSXComponent = () => JSX.Element

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout"*/'../01-lazzyload/layout/LazyLayout'))
// const Lazy1 = lazy(() => import(/*webpackChunkName: "LazyPage1"*/'../01-lazzyload/pages/LazyPage1'))
// const Lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/'../01-lazzyload/pages/LazyPage2'))
// const Lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/'../01-lazzyload/pages/LazyPage3'))

export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'Dashboard'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: NoLazy,
        name: 'No Lazy'
    }

]