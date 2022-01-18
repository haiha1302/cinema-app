import { Link } from "react-router-dom";
import Button from '../Button'
import { posterOriginal, poster } from "../../utils/contants";
import styles from './CardBanner.module.css'
// import Genres from "../Genres";
import styled from 'styled-components'

const BannerInfo = styled.div`
    .custom-container {
        margin-top: 100px !important;
    }
`

const CardBanner = (props) => {
    const truncateOverview = (overview) => {
        if (overview.length <= 400) return overview

        const shortOverview = overview.slice(0, 399)
        return `${shortOverview}\u2026`
    }

    const getYearOfDate = (release_date) => {
        console.log(release_date);
        const year = release_date.slice(0, 4)
        return year
    }

    return (
        <BannerInfo>
            <img
                src={
                props.backdrop
                    ? `${posterOriginal}/${props.backdrop}`
                    : null
                }
                alt="banner-img"
                className="w-100 h-100"
            />
            <div
                className="position-absolute top-0 mask w-100 h-100"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
                <div className="container custom-container">
                    <div className='row flex-row-reverse align-items-center text-light'>
                        <div className='col-xl-4 col-lg-4 col-md-4'>
                            <img
                                src={ props.poster ? `${poster}${props.poster}` : null }
                                alt="img-movie"
                                className={styles.imgInfo}
                            />
                        </div>
                        <div className='col-xl-8 col-lg-8 col-md-8'>
                            <b className={styles.textInfoTitle}>{props.title}</b>
                            <div className={styles.voteDate}>
                                <span>&#9733;</span>
                                <span>{props.vote_average}</span>
                                <span>&#448;</span>
                                <span>{getYearOfDate(props.release_date)}</span>
                            </div>
                            <p className={styles.textInfoOverview}>{truncateOverview(props.overview)}</p>
                            <div className="d-flex mt-2">
                                <Link to={`/${props.type}/${props.id}`}>
                                    <Button name='Play Now' />
                                </Link>
                                <Link to={`/details/${props.type}/${props.id}`}>
                                    <Button name='More Info' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BannerInfo>
    );
};

export default CardBanner;
