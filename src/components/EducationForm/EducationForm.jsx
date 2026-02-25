import AddButton from '../AddButton/AddButton'
import './EducationForm.css'

export default function EducationForm(){
    function handleNewEduc(){
        
    }
    return(
        <div className='education-form-container'>
            <h1>Education</h1>
            <div className="education-form">
                <AddButton onClick={handleNewEduc}></AddButton>
            </div>
        </div>
    )
}