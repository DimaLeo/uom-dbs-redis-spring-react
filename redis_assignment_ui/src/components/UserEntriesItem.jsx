import PropTypes from "prop-types";

UserEntriesItem.propTypes = {
    username: PropTypes.string,
    entries: PropTypes.number
}
function UserEntriesItem(props) {
    return (
        <li className="flex bg-gray-100 rounded-md drop-shadow-md shadow-md h-16 p-1">
            <div className="flex flex-col flex-grow m-auto w-[55%]">
                <p className="p-0 m-0 text-gray-400 text-sm">Username:</p>
                <p>{props.username}</p>
            </div>
            <div className="flex flex-col flex-grow m-auto">
                <p className="p-0 m-0 text-gray-400 text-sm">Entries:</p>
                <p>{props.entries}</p>
            </div>
        </li>
    );
}

export default UserEntriesItem;