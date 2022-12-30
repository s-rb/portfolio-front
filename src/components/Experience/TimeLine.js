import React from "react";

import {TimeLineItem} from "./TimeLineItem";

export const TimeLine = ({expData, listKey}) => {
    return (<React.Fragment>
        {expData.length > 0 && (
            <ul key={listKey} className="timeline-container">
                {expData.map((data, idx) => (
                    <TimeLineItem data={data} key={`${listKey}0${idx}`} theKey={`${listKey}${idx}`}/>
                ))}
            </ul>)
        }
    </React.Fragment>)
}

