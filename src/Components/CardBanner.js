import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from './Button'
import { posterOriginal, poster } from "../utils/contants";

const BannerImg = styled.div`
    margin: 30px 180px 0 0;
    .img-info {
        border-radius: 10px;
    }
    .card-banner_img {
        object-fit: cover;
    }
`;

const Info = styled.div`
    margin-left: 100px;
    margin-right: 50px;
`;

const CardBanner = (props) => {
    return (
        <div className="vh-100">
        <img
            src={
            props.backdrop
                ? `${posterOriginal}/${props.backdrop}`
                : null
            }
            alt="banner-img"
            className="w-100 h-100 card-banner-img"
        />
        <div
            className="d-flex justify-content-between align-items-center position-absolute top-0 mask h-100"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
            <Info className="d-flex flex-column text-light">
                <b className="fs-1">{props.title}</b>
                <span className="fs-5">{props.overview}</span>
                <div className="d-flex mt-2">
                    <Link to={`/${props.type}/${props.id}`}>
                        <Button name='Play Now' />
                    </Link>
                    <Link to={`/details/${props.type}/${props.id}`}>
                        <Button name='More Info' />
                    </Link>
                </div>
            </Info>
            <BannerImg>
            <img
                src={ props.poster ? `${poster}${props.poster}` : null }
                alt="img-movie"
                className="img-info"
            />
            </BannerImg>
        </div>
        </div>
    );
};

export default CardBanner;
