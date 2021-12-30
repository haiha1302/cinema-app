const StarRating = (props) => {
    return (
        <div> 
            {
                Array(10).fill('').map((_, index) => {
                    return (
                        <span
                            key={index}
                            className={`fs-5 ${index < props.stars ? 'text-warning' : 'text-secondary'}`}
                        >
                            &#9733;
                        </span>
                    )
                })
            }
            <span className="fs-5">{props.extraText}</span>
        </div>
    )
}

export default StarRating
