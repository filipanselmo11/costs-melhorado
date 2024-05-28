import loading from "../../assets/img/loading.svg";


export default function Loading() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <img
                className="w-14"
                src={loading}
                alt="Loading"
            />
        </div>
    );
}