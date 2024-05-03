/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";
const ScheduleApp = ({userId})=>{
    const [body, setBody] = useState({
        date:"",
        time:"",
        userId:''
    });

    useEffect(()=>{
        setBody({
            ...body,
            userId
        })
    }, []);

    const onSchedule = (e)=>{
        e.preventDefault()
        console.log(body);
        body.date = new Date(body.date)
        body.time = new Date(body.date)
        console.log(body);

        const url = `http://localhost:3000/appointment/schedule`;
        axios.post(url, body).then(resp=>{
            console.log(resp.data);
        });
    }

    const handleChange = (e)=>{
        e.preventDefault()
        setBody({
            ...body,
            [e.target.name]:e.target.value
        })
    }
    return(
        <form className="row g-3 mt-4">
            <h1>Schedule Appointment</h1>

            {/* BIRTHDAY */}
            <div className="col-auto">
                <input 
                    type="date" 
                    className="form-control" 
                    name="date" 
                    placeholder="birthdate"
                    onChange={handleChange}
                />
            </div>

            {/* BIRTHDAY */}
            <div className="col-auto">
                <input 
                    type="time" 
                    className="form-control" 
                    name="time" 
                    placeholder="birthdate"
                    onChange={handleChange}
                />
            </div>

            <div className="col-auto">
                <button
                    type="submit"
                    className="btn btn-primary mb-3"
                    onClick={onSchedule}
                >Schedule</button>
            </div>
        </form>
    )
}

export default ScheduleApp;