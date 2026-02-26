import { useState,useEffect} from 'react'
import './EducationPopup.css'

const emptyForm = {
    schoolName : "",
    startDate : "",
    endDate : "",
    details : "",
}

export default function EducationPopup({show, initialValues=emptyForm,onSave,onClose}){
    
    const [formInput, setFormInput] = useState(initialValues)
    useEffect(() => {
    setFormInput(initialValues);
    }, [initialValues]);
    if(!show) return null;

    function handleChange(e){
        const {name, value} = e.target;
        setFormInput((prev)=>({...prev,[name]:value}));
    }

    function handleSave(){
        onSave(formInput);
        onClose();
    }

    return(
        <div className="popup-overlay">
            <div className="popup">

                <h2>New Education</h2>

                <input
                name="schoolName"
                value={formInput.schoolName}
                onChange={handleChange}
                placeholder="School name"
                />

                <input
                type="date"
                name="startDate"
                value={formInput.startDate}
                onChange={handleChange}
                />

                <input
                type="date"
                name="endDate"
                value={formInput.endDate}
                onChange={handleChange}
                />

                <textarea
                name="details"
                value={formInput.details}
                onChange={handleChange}
                placeholder="Details"
                />

                <div className="actions">
                <button onClick={handleSave}>Save</button>
                <button onClick={onClose}>Cancel</button>
                </div>

            </div>
        </div>
    );



}