import React, { useCallback, useEffect, useState } from 'react';
import Calendar
    , {
//     createCalendarTheme,
    Skeleton
    // ,
    // type CalendarData,
    // type Props as CalendarProps,
}
from 'react-activity-calendar';
import {getUserCalendarWithYear, getUserSubmitStats} from "leet-profile-lib";

// import { API_URL, DEFAULT_THEME } from './constants';
// import { ApiErrorResponse, ApiResponse, Year } from './types';
// import { transformData } from './utils';

async function fetchCalendarData(username, year) {
    await getUserSubmitStats(
        { params: { username } },
        {
            send: (r) => {
                console.log("userSubmitStats");
                console.log(r);
                // setData(r.submitStats.acSubmissionNum)
            },
        }
    ).catch((error) => {
        console.error(error);
    });

    await getUserCalendarWithYear(
        { params: { username, year } },
        {
            send: (r) => {
                console.log("getUserCalendarWithYear");
                console.log(r);
            }
        }
    ).catch((error) => {
        console.error(error);
    });

    return {contributions: []};
}

const ProgressCalend = ({
                                                      username,
                                                      year = 'last',
                                                      labels,
                                                      transformDataProp,
                                                      transformTotalCount = true,
                                                      ...props
                                                  }) => {
    console.log("ProgressCalend works")
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(() => {
        setLoading(true);
        setError(null);
        fetchCalendarData(username, new Date().getFullYear())
            .then(({ contributions }) => setData(contributions))
            .catch(setError)
            .finally(() => setLoading(false));



    }, [username]);

    useEffect(fetchData, [fetchData]);

    if (error) {
        return (
            <div>
                <i>Unable to fetch contribution data. See console.</i>
            </div>
        );
    }

    if (loading || !data) {
        return <Skeleton {...props} loading />;
    }

    const theme = props.color;
        // ? undefined : props.theme ?? DEFAULT_THEME;

    const defaultLabels = {
        totalCount: `{{count}} contributions in ${year === 'last' ? 'the last year' : '{{year}}'}`,
    };

    const totalCount = transformTotalCount
        ? undefined
        : data.reduce((sum, day) => sum + day.count, 0);

    return (
        <Calendar
            data={data}
            theme={theme}
            labels={Object.assign({}, defaultLabels, labels)}
            totalCount={totalCount}
            {...props}
        />
    );
};

// export { createCalendarTheme };
export default ProgressCalend;

// const transformData = (
//     data,
//     transformFn
// ) => {
//     if (typeof transformFn !== 'function') {
//         return data;
//     }
//
//     const transformedData = transformFn(data);
//
//     if (!Array.isArray(transformedData)) {
//         throw new Error(`Passed function transformData must return a list of Day objects.`);
//     }
//
//     if (transformedData.length > 0) {
//         const testObj = transformedData[0];
//
//         if (typeof testObj.count !== 'number' || testObj.count < 0) {
//             throw new Error(
//                 `Required property "count: number" missing or invalid. Got: ${testObj.count}`,
//             );
//         }
//
//         if (!/\d{4}-\d{2}-\d{2}/.test(testObj.date)) {
//             throw new Error(
//                 `Required property "date: YYYY-MM-DD" missing or invalid. Got: ${testObj.date}`,
//             );
//         }
//
//         if (typeof testObj.level !== 'number' || testObj.level < 0 || testObj.level > 4) {
//             throw new Error(
//                 `Required property "level: 0 | 1 | 2 | 3 | 4" missing or invalid: Got: ${testObj.level}.`,
//             );
//         }
//     }
//
//     return transformedData;
// };
