import {useState} from 'react';
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {addRecord, getUserRecords} from "../api/applicationApi.js";
import {useAuthentication} from "../contexts/AuthContext.jsx";
import UserRecordItem from "./UserRecordItem.jsx";
import RecordExistsAlert from "./RecordExistsAlert.jsx";

function UserRecords() {

    const {username} = useAuthentication();
    const [recordNameInput, setRecordNameInput] = useState("");
    const [isDuplicate, setIsDuplicate] = useState(false);
    const queryClient = useQueryClient();

    const {data} = useQuery({
        queryKey: ["getUserRecords"],
        queryFn: () => getUserRecords(username)
    });

    const createUserRecord = useMutation({
        mutationFn: () => addRecord({recordName: recordNameInput, username: username}),
        onSuccess: () => {
            setIsDuplicate(false);
            queryClient.refetchQueries("getUserRecords");
        },
        onError: (data) => {
            if(data.response.status === 409){
                setIsDuplicate(true);
            }
        }
    })

    function submitForm(event){
        event.preventDefault();
        createUserRecord.mutate();
    }

    return (
        <div className="h-4/5 w-4/5 flex flex-col">
            {isDuplicate && <RecordExistsAlert/>}
            <div className="flex flex-col gap- ">
                <p>Insert the name of the artist you want to insert below:</p>
                <form id="new-record-form"
                      action="#"
                      method="post"
                      onSubmit={(event) => { submitForm(event) }}
                      className="flex w-full items-center border-b border-red-600 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        name="record_name"
                        type="text"
                        placeholder="Jane Doe"
                        aria-label="Full name"
                        onChange={(event) => setRecordNameInput(event.target.value)}
                    />
                    <button
                        className="flex-shrink-0 bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit">
                        Add
                    </button>
                </form>
            </div>
            <div className="flex-grow overflow-auto hover:overflow-y-auto">
                <ul id="user-entries-list"
                    className="list-none p-2 flex flex-col gap-2">
                    {
                        data?.records.map((record, index) => {
                            return (
                                <UserRecordItem key={`record-${index}`} recordName={record.recordName} recordQueries={record.recordQueries}/>
                            )
                        })
                    }

                </ul>
            </div>
        </div>
    );
}

export default UserRecords;