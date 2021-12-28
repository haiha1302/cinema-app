import { BsDiscord, BsTwitter, BsFacebook, BsYoutube } from "react-icons/bs"
import styled from "styled-components"

const FooterStyle = styled.div`
    background-color: #042633;
    color: white;

    .icons {
        color: white;
    }
    .icons:hover {
        color: #FFCC73;
    }
`

const Footer = () => {
    return (
        <FooterStyle className="d-flex justify-content-between align-items-center mt-4">
            <div className="mb-2 ms-5 mt-2 text-light">Copyright HALO © 2021</div>
            <div className="d-flex me-5 mb-2 mt-2">
                <span>Contact me:</span>
                <div className="d-flex"> 
                    <div className="ms-3">
                        <a 
                            href="https://www.facebook.com/profile.php?id=100012022389679" 
                            target="_blank" 
                            rel="noreferrer noopener" 
                        >
                            <BsFacebook size={25} className="icons" />
                        </a>
                    </div>
                    <div className="ms-3">
                        <a 
                            href="https://twitter.com/Ha____lo" 
                            target="_blank" 
                            rel="noreferrer noopener" 
                            className="text-light"
                        >
                            <BsTwitter size={25} className="icons" />
                        </a>
                    </div>
                    <div className="ms-3">
                        <a 
                            href="https://discord.gg/tgpZ9V4C" 
                            target="_blank" 
                            rel="noreferrer noopener" 
                            className="text-light"
                        >
                            <BsDiscord size={25} className="icons" />
                        </a>
                    </div>
                    <div className="ms-3">
                        <a 
                            href="https://www.youtube.com/channel/UCRHkMxwKUNgU_uiZaDfCp-g" 
                            target="_blank" 
                            rel="noreferrer noopener" 
                            className="text-light"
                        >
                            <BsYoutube size={25} className="icons" />
                        </a>
                    </div>
                </div>
            </div>
        </FooterStyle>
    )
}

export default Footer
