import {useQuery} from "@tanstack/react-query";
import {getAverageQueries} from "../api/applicationApi.js";

function AverageQueries() {

    const {data} = useQuery({
        queryKey: ["getAverageQueries"],
        queryFn: () => getAverageQueries()
    });

    return (
        <div className="h-full w-full flex">
            <div className="flex flex-col w-4/5 h-4/5
                                        justify-center items-center
                                        rounded-md bg-gray-100 shadow-md drop-shadow-md
                                        m-auto
                                        text-red-600 ">
                <p className="text-gray-500">Average queries:</p>
                <h2 className="font-bold text-2xl text-gray-700">{data?.averageQueries}</h2>
            </div>
        </div>

    );
}

export default AverageQueries;