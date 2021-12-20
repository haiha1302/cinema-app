import { Nav } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import styles from '../../style/Navigation.module.css'
import styled from "styled-components"

const ButtonNav = styled.button`
    padding: 5px 15px;
    border: none;
    margin-left: 10px;
    border-radius: 10px;
    background: transparent;
    color: white;
    font-size: 20px;
    font-weight: 700;

    :hover {
        color: #FF66CC;
        border: 1px solid #FF66CC;
    }
`

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

const NavigationBar = () => {
    return (
        <div className={styles.mainNav}>
            <div className="ms-5 d-flex align-items-center">
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
            <div className={styles.btnNav}>
                <ButtonNav>Login</ButtonNav>
                <ButtonNav>Register</ButtonNav>
            </div>
        </div>   
    )
}

export default NavigationBar
