import {useAuthentication} from "../contexts/AuthContext.jsx";

function Navbar() {

    const {username, isAuthenticated, isNew} = useAuthentication();

    return (
        <nav className="flex h-[5%] min-h-16 w-4/5 min-w-[922px] mx-auto bg-white rounded-2xl shadow-md">
            <div className="flex w-full justify-evenly items-center ml-4 mr-4">
                <div className="flex flex-grow items-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" viewBox="0 0 128 128">
                        <path fill="#a41e11"
                              d="M121.8 93.1c-6.7 3.5-41.4 17.7-48.8 21.6s-11.5 3.8-17.3 1S13 98.1 6.3 94.9c-3.3-1.6-5-2.9-5-4.2V78s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9v12.5c0 1.3-1.5 2.7-4.9 4.4"/>
                        <path fill="#d82c20"
                              d="M121.8 80.5C115.1 84 80.4 98.2 73 102.1s-11.5 3.8-17.3 1S13 85.4 6.3 82.2C-.3 79-.5 76.8 6 74.3c6.5-2.6 43.2-17 51-19.7c7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.9"/>
                        <path fill="#a41e11"
                              d="M121.8 72.5C115.1 76 80.4 90.2 73 94.1c-7.4 3.8-11.5 3.8-17.3 1S13 77.4 6.3 74.2c-3.3-1.6-5-2.9-5-4.2V57.3s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9V68c0 1.3-1.5 2.7-4.9 4.5"/>
                        <path fill="#d82c20"
                              d="M121.8 59.8c-6.7 3.5-41.4 17.7-48.8 21.6c-7.4 3.8-11.5 3.8-17.3 1S13 64.7 6.3 61.5s-6.8-5.4-.3-7.9c6.5-2.6 43.2-17 51-19.7c7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.9"/>
                        <path fill="#a41e11"
                              d="M121.8 51c-6.7 3.5-41.4 17.7-48.8 21.6c-7.4 3.8-11.5 3.8-17.3 1C49.9 70.9 13 56 6.3 52.8c-3.3-1.6-5.1-2.9-5.1-4.2V35.9s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9v12.5c.1 1.3-1.4 2.6-4.8 4.4"/>
                        <path fill="#d82c20"
                              d="M121.8 38.3C115.1 41.8 80.4 56 73 59.9c-7.4 3.8-11.5 3.8-17.3 1S13 43.3 6.3 40.1s-6.8-5.4-.3-7.9c6.5-2.6 43.2-17 51-19.7c7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.8"/>
                        <path fill="#fff"
                              d="m80.4 26.1l-10.8 1.2l-2.5 5.8l-3.9-6.5l-12.5-1.1l9.3-3.4l-2.8-5.2l8.8 3.4l8.2-2.7L72 23zM66.5 54.5l-20.3-8.4l29.1-4.4z"/>
                        <ellipse cx="38.4" cy="35.4" fill="#fff" rx="15.5" ry="6"/>
                        <path fill="#7a0c00" d="m93.3 27.7l17.2 6.8l-17.2 6.8z"/>
                        <path fill="#ad2115" d="m74.3 35.3l19-7.6v13.6l-1.9.8z"/>
                    </svg>
                    <a href="/">Redis Assignment</a>
                </div>
                {isAuthenticated &&
                    <div className={`flex flex-grow items-center justify-center gap-2 ${isNew?"ml-16":""}`}>
                        <p className="text-center">{username}</p>
                        {isNew &&
                            <span className="bg-red-600 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded">New</span>
                        }
                    </div>}

                <p className="flex-grow text-right">Leonidis Dimitrios - mai24028</p>
                </div>
        </nav>
    );
}

export default Navbar;