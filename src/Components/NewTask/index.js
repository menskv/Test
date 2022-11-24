import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
export const NewTask = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [file, setFile] = useState()
    function handleChange(event) {

        setFile(event.target.files[0])
    }
    return (
        <div className="Modal">
            <div className="Title-Modal" >
                <input type="Title" />
            </div>
            <div className="Description">
                <input type="text"/>
            </div>
            <div className="Date-piker">
                <DatePicker
                    selected={startDate} onChange={(date) => setStartDate(date)}
                />
            </div>
            <input type="file" onChange={handleChange}/>
            <button type="submit">Upload</button>
        </div>

    );
};
