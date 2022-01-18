import { urlEmbedMovie, urlEmbedTV } from "../utils/contants"
import styled from "styled-components"

const FrameStyle = styled.div`
    .frame {
        min-height: 70vh; 
    }
`

const Frame = (props) => {
    return (
        <FrameStyle>  
            <iframe 
                src={props.media_type === 'movie' ?
                urlEmbedMovie(props.id) :
                urlEmbedTV(props.id, props.season_id, props.episode_id)
                }
                title="Movies or TV Series"
                allowFullScreen
                className="w-100 frame"
            />
        </FrameStyle>
    )
}

export default Frame
