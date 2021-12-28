import { Link } from "react-router-dom";
import Button from '../Button'
import { posterOriginal, poster } from "../../utils/contants";
import styles from './CardBanner.module.css'

const CardBanner = (props) => {
    const truncateOverview = (overview) => {
        if (overview.length <= 400) return overview

        const shortOverview = overview.slice(0, 399)
        return `${shortOverview}\u2026`
    }

    return (
        <div>
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
                <div className={styles.bannerContainer}>
                    <div className={styles.posterInfo}>
                        <img
                            src={ props.poster ? `${poster}${props.poster}` : null }
                            alt="img-movie"
                            className={styles.imgInfo}
                        />
                    </div>
                    <div className={styles.textInfo}>
                        <b className={styles.textInfoTitle}>{props.title}</b>
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
    );
};

export default CardBanner;
