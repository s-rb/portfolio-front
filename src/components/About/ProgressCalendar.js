import React, { useState, useEffect } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { getUserCalendarWithYear, getUserSubmitStats } from "leet-profile-lib";

function ProgressCalendar({ username }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await getUserSubmitStats(
                { params: { username } },
                {
                    send: (r) => {
                        console.log("userSubmitStats");
                        console.log(r);
                        setData(r.submitStats.acSubmissionNum)
                    },
                }
            ).catch((error) => {
                console.error(error);
            });

            await getUserCalendarWithYear(
                { params: { username, year: new Date().getFullYear() } },
                {
                    send: (r) => {
                        console.log("getUserCalendarWithYear");
                        console.log(r);
                    }
                }
            ).catch((error) => {
                console.error(error);
            });

            // setData(
            //     resp.submitStats.acSubmissionNum.map(({ date, count }) => ({
            //         date,
            //         count,
            //     }))
            // );
        }

        fetchData();
    }, [username]);

    const startDate = new Date(data[0]?.date);
    const endDate = new Date(data[data.length - 1]?.date);

    return (
        <div>
            <h1 className="project-heading">
                Прогресс <strong className="blue">по дням</strong>
            </h1>
            {/*{data.length ? (*/}
                <CalendarHeatmap
                    startDate={startDate}
                    endDate={endDate}
                    values={data}
                    showWeekdayLabels={true}
                    classForValue={(value) => {
                        if (!value) {
                            return "color-empty";
                        }
                        return `color-scale-${value.count}`;
                    }}
                />
            {/*) : (*/}
            {/*    <p>Loading...</p>*/}
            {/*)}*/}
        </div>
    );
}

export default ProgressCalendar;

