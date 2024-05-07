import ArtistSearch from "./ArtistSearch.jsx";
import AverageQueries from "./AverageQueries.jsx";
import UserRecords from "./UserRecords.jsx";
import RecordsPerUser from "./RecordsPerUser.jsx";

function ContentContainer() {
    return (
        <div className=
                 "h-[93%] min-h-[650px] w-4/5 min-w-[922px] mx-auto py-3
                 flex gap-[1%] justify-evenly">
            <div className="w-[32%] h-full flex flex-col gap-4 justify-center">
                <div className="w-full h-[50%] bg-white rounded-2xl shadow-md">
                    <ArtistSearch/>
                </div>
                <div className="w-full h-[50%] bg-white rounded-2xl shadow-md">
                    <AverageQueries/>
                </div>
            </div>
            <div className="w-[32%] h-full flex flex-col justify-center items-center bg-white rounded-2xl shadow-md">
                <UserRecords/>
            </div>
            <div className="w-[32%] h-full bg-white rounded-2xl shadow-md">
                <RecordsPerUser/>
            </div>

        </div>
    );
}

export default ContentContainer;