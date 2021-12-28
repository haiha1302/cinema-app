import SliderSeasons from './SliderSeasons';

const ShowSeasons = (props) => {
    return (
        <div className='container'>
            {
                props.data.map(season => {
                    return (
                        <div key={season.id}>
                            <div className='d-flex justify-content-between'>
                                <h3 className='text-light fst-italic'>{season.name}</h3>
                            </div>
                            <SliderSeasons id={props.id} season_number={season.season_number} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShowSeasons
