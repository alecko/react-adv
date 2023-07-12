
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'

import logo from '../logo.svg'
import { routes } from './appRoutes'
import { Suspense } from 'react'
//import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazzyload/pages'



const Navigation = () => {
    return (
        <Suspense fallback={<span>Cargando...</span>}>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {routes.map(r => <li key={r.path}><NavLink to={r.to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{r.name}</NavLink></li>)}

                            {/* <li><NavLink to="/lazy1" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 1</NavLink></li>
                        <li><NavLink to="/lazy2" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 2</NavLink></li>
                        <li><NavLink to="/lazy3" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 3</NavLink></li> */}
                        </ul>
                    </nav>
                    <Routes>
                        {routes.map(r => <Route key={r.path} path={r.path} element={<r.Component />} />)}

                        {/* <Route path="lazy1" element={<LazyPage1 />} />
                    <Route path="lazy2" element={<LazyPage2 />} />
                    <Route path="lazy3" element={<LazyPage3 />} /> */}
                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}

export default Navigation
