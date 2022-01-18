import { useEffect } from 'react'

const Meta = props => {
    useEffect(() => document.title = props.title, [props.title])

    return (
        <></>
    )
}

export default Meta
