import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header1() {
    return (
        <header>
            <h1 className="logo">LOGO</h1>
            <a href="javascrip:void(0);"><FontAwesomeIcon icon={faBars} /></a>
        </header>
    )
}

export default Header1;