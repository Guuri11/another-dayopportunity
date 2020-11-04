import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function Header(props) {

    const {theme, setTheme} = props

    const changeTheme = () => {
        const theme_changed = theme === 'dark' ? 'white':'dark';
        setTheme(theme_changed)
    }

    useEffect(() => {
        document.getElementById('body').className=theme
    },[changeTheme])

    return (

        <nav className={"navbar navbar-expand-lg "+theme+" navbar-light"}>
            <div className="container">
                <button className={theme+" navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={theme+" navbar-toggler-icon"}></span>
                </button>
                <div className={theme+" collapse navbar-collapse"} id="navbarNav">
                    <ul className={theme+" navbar-nav"}>
                    <li className={theme+" nav-item active"}>
                        <Link className={theme+" nav-link active"} to="/">Inicio</Link>
                    </li>
                    <li className={theme+" nav-item"}>
                        <Link className={theme+" nav-link active"} to="/about">Historia</Link>
                    </li>
                    <li className={theme+" nav-item"}>
                        <Link className={theme+" nav-link active"} to="/unsubscribe">Desuscríbete</Link>                    
                    </li>
                    <li>
                        <p onClick={() => changeTheme()} className={theme+" nav-link active pointer"}>{ theme === 'dark' ? 'White':'Dark'} mode</p>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
