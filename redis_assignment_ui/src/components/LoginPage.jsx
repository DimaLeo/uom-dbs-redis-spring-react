import {useAuthentication} from "../contexts/AuthContext.jsx";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {signIn} from "../api/applicationApi.js";
import {useMutation} from "@tanstack/react-query";

function LoginPage() {

    const [usernameInput, setUsernameInput] = useState("")
    const {updateAuth} = useAuthentication();

    const navigate = useNavigate();
    // const location = useLocation();

    const loginMutation = useMutation({
        mutationFn: () => signIn({username: usernameInput}),
        onSuccess: (data) => {
            updateAuth(
                data.username,
                true,
                data.newAccount,
            );

            navigate("/", {replace: true});
        },
        onError: (data) => {
            console.log(data)
        }
    })

    async function login (event){
        event.preventDefault();
        loginMutation.mutate();

    }

    return (
        <div id="content-container"
             className="h-full max-h-[90%] w-full flex justify-center items-center">
            <div className="w-96 h-72
                            bg-white rounded-2xl shadow-md
                            flex flex-col justify-center items-center">
                <form onSubmit={(event) => {login(event)}}
                      className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold mb-4">Login</h1>
                    <div className="mb-4">
                        <label htmlFor="username"
                               className="block text-gray-700">Username:</label>
                        <div className=
                                 "flex gap-[15px] items-center justify-center
                                  p-1 mt-1 w-full border border-gray-400 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="#D82C20" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
                            <input type="text"
                                   id="username"
                                   name="username"
                                   value={usernameInput}
                                   placeholder={"Enter your username"}
                                   onChange={(e) => setUsernameInput(e.target.value)}
                                   className="form-input
                                            ring-0 outline-0
                                            focus:ring-0 focus:outline-0 focus:border-transparent"/>
                        </div>
                    </div>
                    <button type="submit"
                            className="bg-red-600 text-white px-4 py-2 rounded">Login</button>
                </form>

            </div>
            <div id="error-message" className="hidden"></div>
        </div>
    );
}

export default LoginPage;