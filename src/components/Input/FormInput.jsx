import './FormInput.css';

export default function FormInput({label,...props}){
    return(
        
            <div className="input-wrapper">
                <label htmlFor={props.id}>{label}</label>
                <input className={props.className} {...props} />
            </div>
        
    )
}