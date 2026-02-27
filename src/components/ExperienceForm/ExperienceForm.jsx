import './ExperienceForm.css';
import { useState } from 'react';
import AddButton from '../AddButton/AddButton';
import ExperiencePopup from '../ExperiencePopup/ExperiencePopup';

const emptyForm = {
  businessName: "",
  startDate: "",
  endDate: "",
  details: "",
};

export default function ExperienceForm(){
    const [experience, setExperience] = useState([]);
    const [showPopup, setShowPopup] = useState(false)
    const [editingExperience, setEditingExperience] = useState(null)

    function handleNewExperience(){
        setEditingExperience(null)
        setShowPopup(true)
    }

    function handleEdit(index){
        setEditingExperience(experience[index]);
        setShowPopup(true);
    }

    function handleDelete(index){
        setExperience(prev=> prev.filter((_,i)=> i!==index))
    }

    function handleSave(data){
        if (editingExperience) {
            setExperience(prev =>
                prev.map(e => (e === editingExperience? data : e))
            );
            } else {
            setExperience(prev => [...prev, data]);
            }
            setShowPopup(false);
    }

    return(
        <div className="experience-form-container">
            <h2>Experience</h2>
            <div className="experience-form">
                <AddButton onClick={handleNewExperience}></AddButton>
            </div>
            <div className="experience-list">
                {experience.length===0 && <h2>No Experience Yet !</h2>}
                {experience.map((exp,index)=>(
                    <div key={index} className='experience-item'>
                        <h3>{exp.businessName}</h3>
                        <p>{exp.startDate} - {exp.endDate}</p>
                        <p>{exp.details}</p>
                        <div className="actions">
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            <ExperiencePopup>
                show={showPopup}
                initialValues={editingExperience ?? emptyForm}
                onSave={handleSave}
                onClose={()=> setShowPopup(false)}

            </ExperiencePopup>

        </div>
    )
}