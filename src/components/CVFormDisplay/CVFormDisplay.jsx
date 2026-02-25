import BasicsForm from '../BasicsForm/BasicsForm';
import EducationForm from '../EducationForm/EducationForm';
import './CVFormDisplay.css';

export default function CVFormDisplay(){
    return(
        <>
            <BasicsForm></BasicsForm>
            <EducationForm></EducationForm>
        </>
    )
}