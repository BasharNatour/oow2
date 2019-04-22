import React, { useState } from "react";

import PropTypes from "prop-types";

function DeleteLink({ onDelete, args }) {
    const [confirmed, setConfirmed] = useState(false);

    const onClick = confirmed ? () => onDelete(...args) : () => setConfirmed(true);

    return <a onClick={ onClick }>{ confirmed ? "Sure?" : "Delete" }</a>;
}

DeleteLink.propTypes = {
    onDelete : PropTypes.func.isRequired,
    args     : PropTypes.array
};

export default DeleteLink;