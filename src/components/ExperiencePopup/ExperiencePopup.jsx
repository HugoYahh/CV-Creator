import './ExperiencePopup.css';
import { useState,useEffect } from 'react';

const emptyForm = {
  businessName: "",
  startDate: "",
  endDate: "",
  details: "",
};

export default function ExperiencePopup({show,initialValues=emptyForm,onSave,onClose}){

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

                <h2>New Experience</h2>

                <input
                name="businessName"
                value={formInput.businessName}
                onChange={handleChange}
                placeholder="Business Name"
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
    )
}