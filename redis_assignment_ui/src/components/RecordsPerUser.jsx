import {useQuery} from "@tanstack/react-query";
import {getRecordsPerUser} from "../api/applicationApi.js";
import UserEntriesItem from "./UserEntriesItem.jsx";

function RecordsPerUser() {

    const {data} = useQuery({
        queryKey: ["getEntriesPerUser"],
        queryFn: () => getRecordsPerUser()
    });

    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="h-4/5 w-4/5 flex flex-col m-auto">
                <h2>Number of entries per user:</h2>
                <div className="flex-grow overflow-auto hover:overflow-y-auto">
                    <ul id="entries-per-user"
                        className="list-none p-2 flex flex-col gap-2">
                        {
                            data?.entries_per_user.map((record, index) => {
                                return (
                                    <UserEntriesItem key={`entry-${index}`} username={record.username}
                                                     entries={record.entries}/>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default RecordsPerUser;