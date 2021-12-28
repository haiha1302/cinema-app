import styled from 'styled-components'
import { BsFacebook, BsTwitter, BsGoogle, BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const FormLoginStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    .title {
        margin: 100px 0 0 0;
    }

    .style-input {
        display: flex;
        flex-direction: column;
        margin: 5px 0;
    }

    .style-input > input {
        width: 300px;
        border-radius: 10px;
        padding-left: 10px;
        font-size: 20px;
        border: none;
    }

    .btnSubmit {
        padding: 8px 20px;
        border-radius: 10px;
        border: none;
        font-weight: bold;
        margin: 5px 0;
    }

    .btn-login-social {
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
        border-radius: 10px;
        padding: 5px 0;
    }

    .btnFb {
        background-color: #2b3e66;
    }

    .btnGg {
        background-color: #d64135;
    }

    .btnTw {
        background-color: #1c96e8;
    }

    .btnGh {
        background-color: #1a1e22;
    }

    .btnDc {
        background-color: #535fee;
    }
`

const Login = () => {
    const LoginGoogle = () => window.open(`http://localhost:5000/auth/google`, '_self')

    const LoginGithub = () => window.open(`http://localhost:5000/auth/github`, '_self')

    // const LoginDiscord = () => window.open('http://localhost:5000/auth/discord', '_self')

    return (
        <FormLoginStyle>
            <h3 className='title'>Create your account</h3>
            <div className='style-input'>
                <label>Username</label>
                <input type='text' placeholder="Username" />
            </div>
            <div className='style-input'>
                <label>Password</label>
                <input type='password' placeholder="Password" />
            </div>
            <div>
                <button className='btnSubmit'>Submit</button>
            </div>
            <div>
                Click here to <Link to='/register'>Register</Link>
            </div>
            <div className='mt-4'>
                <div 
                    className='btn-login-social btnFb'>
                    <BsFacebook />
                    Login with Facebook
                </div>
                <div className='btn-login-social btnGg' onClick={LoginGoogle}>
                    <BsGoogle />
                    Login with Google
                </div>
                <div className='btn-login-social btnTw'>
                    <BsTwitter />
                    Login with Twitter
                </div>
                <div className='btn-login-social btnGh' onClick={LoginGithub}>
                    <BsGithub />
                    Login with Github
                </div>
            </div>
        </FormLoginStyle>
    )
}

export default Login
