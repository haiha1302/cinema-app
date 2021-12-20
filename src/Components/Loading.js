import Loader from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
            />
        </div>
    )
}

export default Loading
