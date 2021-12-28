import { Nav } from "react-bootstrap"
import { NavLink, Link } from 'react-router-dom'
import styles from '../../style/Navigation.module.css'
import styled from "styled-components"

const NavLinkStyle = styled.div`
    .navLink {
        text-decoration: none;
        margin-left: 20px;
        color: white;
        font-weight: bold;
        font-size: 22px;
        padding: 5px 15px;
        border-radius: 10px;
    }
    .navLink:hover {
        color: #b3c4ff;
        border: 1px solid #b3c4ff;
    }

    .active {
        color: #FADC22;
        border: 1px solid #FADC22;
    }
`

const NavigationBar = (props) => {
    const handleLogout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
    };

    return (
        <div className={styles.mainNav}>
            <div className={styles.navControls}>
                <NavLink to='/'>
                    <img 
                        src='https://upload.wikimedia.org/wikipedia/commons/6/61/Xilam_-_Logo.png'
                        alt="Logo"
                        className={styles.logoImg}
                    />
                </NavLink>
                <NavLinkStyle className="ms-5">
                    <Nav className="">
                        <NavLink to='/' className='navLink'>Home</NavLink>
                        <NavLink to='/movies' className='navLink'>Movies</NavLink>
                        <NavLink to='/tvseries' className='navLink'>TV Series</NavLink>
                    </Nav>
                </NavLinkStyle>
            </div>  
            <div className="me-5">
                {
                    props.user ? 
                    <div className={styles.userInfo}>
                        <img 
                            src={props.user.photos[0].value}
                            alt="avatar_user"
                            className={styles.avatarUser}
                        />
                        <div className={styles.nameUser}>{props.user.displayName}</div>
                        <div onClick={handleLogout}>Logout</div>
                    </div> :
                    <>
                        <Link to='/login' className={styles.btnNav}>Login</Link>
                        <Link to='/register' className={styles.btnNav}>Register</Link>
                    </>
                }
            </div>
        </div>   
    )
}

export default NavigationBar
