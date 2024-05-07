import {useState} from 'react';
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {search} from "../api/applicationApi.js";

function ArtistSearch() {

    const [searchInput, setSearchInput] = useState("");
    const [data, setData] = useState("")

    const queryClient = useQueryClient();

    const searchArtistMutation = useMutation({
        mutationFn: () => search(searchInput),
        onSuccess: (responseData) => {
            console.log("success");
            console.log(responseData);
            queryClient.refetchQueries("getAverageQueries");
            setData(responseData);
        },
        onError: (data) => {
            console.log(data)
        }
    })

    function submitSearch(event){
        event.preventDefault();
        searchArtistMutation.mutate();
    }

    return (
        <div className="flex flex-col h-full">
            <form id="artist-search-form"
                  className="w-3/4 mx-auto mt-5 focus:bg-white"
                  onSubmit={(event) => {submitSearch(event)}}
            >
                <label htmlFor="artist-search"
                       className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text"
                           id="artist-search"
                           name="record_name"
                           className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg ring-0 focus:ring-0 focus:outline-none"
                           placeholder="Search Artists..."
                           onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 font-medium rounded-lg text-sm px-4 py-2">Search
                    </button>
                </div>
            </form>
            {data &&
                <div className="flex flex-grow h-full text-center w-full">
                    {data.recordExists?
                        <div className="flex flex-col w-4/5 h-4/5
                                        justify-center items-center
                                        rounded-md bg-gray-100 shadow-md drop-shadow-md
                                        mx-auto mt-4
                                        text-red-600 ">
                            <p className="text-gray-500">Record already exists under:</p>
                            <h2 className="font-bold text-2xl text-gray-700">{data.username}</h2>
                        </div>:
                        <div className="flex flex-col w-4/5 h-4/5
                                        justify-center items-center
                                        rounded-md bg-gray-100 shadow-md drop-shadow-md
                                        mx-auto mt-4
                                        text-red-600 ">
                            <p className="text-gray-500">Record not present in the database</p>
                        </div>}
                </div>}
        </div>
    );
}

export default ArtistSearch;