import { Helmet } from "react-helmet"

const Meta = (props) => {
    return (
        <div className="application">
            <Helmet>
                <title>{props.title}</title>
                <meta name='title' content={props.title} />
                <meta name="description" content={props.description} />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={props.title} />
                <meta property="og:description" content={props.description} />
                {/* <meta property="og:image" content={props.image} /> */}

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={props.title} />
                <meta property="twitter:description" content={props.description} />
                {/* <meta property="twitter:image" content={props.image} /> */}
            </Helmet>
        </div>
    )
}

export default Meta
