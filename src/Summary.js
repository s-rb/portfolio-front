import React from "react";

export const Summary = ({description}) => {
    return (<React.Fragment>
        {description && description.length > 0 && description?.map((o, idx) => <p key={`pac${idx}`}>{o}</p>)}
    </React.Fragment>)
}