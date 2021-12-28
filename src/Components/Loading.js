import Loader from "react-loader-spinner";

const Loading = (props) => {
    return (
        <div className={`vh-100 d-flex justify-content-center align-items-${props.position}`}>
            <Loader
                type={props.typeLoad}
                color="#00BFFF"
                height={100}
                width={100}
            />
        </div>
    )
}

export default Loading
