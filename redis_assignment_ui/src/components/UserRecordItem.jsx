import PropTypes from "prop-types";

UserRecordItem.propTypes = {
    recordName: PropTypes.string,
    recordQueries: PropTypes.number
}
function UserRecordItem(props) {
    return (
        <li className="flex bg-gray-100 rounded-md drop-shadow-md shadow-md h-16 p-1">
            <div className="flex flex-col flex-grow m-auto w-[55%]">
                <p className="p-0 m-0 text-gray-400 text-sm">Record Name:</p>
                <p>{props.recordName}</p>
            </div>
            <div className="flex flex-col flex-grow m-auto">
                <p className="p-0 m-0 text-gray-400 text-sm">Times Queried:</p>
                <p>{props.recordQueries}</p>
            </div>
        </li>
    );
}

export default UserRecordItem;