import { useState } from 'react';
import AddButton from '../AddButton/AddButton';
import EducationPopup from '../EducationPopup/EducationPopup';
import './EducationForm.css';

const emptyForm = {
  schoolName: "",
  startDate: "",
  endDate: "",
  details: "",
};

export default function EducationForm() {
  const [educations, setEducations] = useState([]); // tableau des entrées
  const [showPopup, setShowPopup] = useState(false);
  const [editingEducation, setEditingEducation] = useState(null); // null = add

  // ouvrir popup pour ajouter
  function handleNewEduc() {
    setEditingEducation(null);
    setShowPopup(true);
  }

  // ouvrir popup pour éditer
  function handleEdit(index) {
    setEditingEducation(educations[index]);
    setShowPopup(true);
  }

  // supprimer une entrée
  function handleDelete(index) {
    setEducations(prev => prev.filter((_, i) => i !== index));
  }

  // save depuis popup
  function handleSave(data) {
    if (editingEducation) {
      // Edit : remplacer l’entrée existante
      setEducations(prev =>
        prev.map(e => (e === editingEducation ? data : e))
      );
    } else {
      // Add : ajouter à la fin
      setEducations(prev => [...prev, data]);
    }
    setShowPopup(false);
  }

  return (
    <div className='education-form-container'>
      <h1>Education</h1>

      <div className="education-form">
        <AddButton onClick={handleNewEduc} />
      </div>

      <div className="education-list">
        {educations.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.schoolName}</h3>
            <p>{edu.startDate} - {edu.endDate}</p>
            <p>{edu.details}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>

      <EducationPopup
        show={showPopup}
        initialValues={editingEducation ?? emptyForm}
        onSave={handleSave}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
}