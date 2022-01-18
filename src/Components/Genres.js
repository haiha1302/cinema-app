import styled from 'styled-components'

const GenresTag = styled.div`
    padding: 2px 5px;
`

const Genres = (props) => {
    return (
        <>
            {
                props.genre_ids.map(genre => {
                    <GenresTag>
                        {genre}
                    </GenresTag>
                })
            }
        </>
    )
}

export default Genres
