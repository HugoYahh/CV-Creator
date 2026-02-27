import BasicsForm from '../BasicsForm/BasicsForm';
import EducationForm from '../EducationForm/EducationForm';
import ExperienceForm from '../ExperienceForm/ExperienceForm';
import './CVFormDisplay.css';

export default function CVFormDisplay(){
    return(
        
        <div className="cv-form-display-container">
            <BasicsForm></BasicsForm>
            <EducationForm></EducationForm>
            <ExperienceForm></ExperienceForm>
        </div>
        
    )
}