import FormInput from '../Input/FormInput'
import './BasicsForm.css'
import { useState } from 'react';

export default function BasicsForm(){
    const [fullName, setFullName] = useState('');
    
    const [email,setEmail] = useState('')
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');


    return(
     
        <div className="basics-form">
            <h2>Personal Details</h2>
            <div className="fullname-input">
                <FormInput label="Full Name" value={fullName} type="text" id="full-name" required className="input" onChange={e => setFullName(e.target.value)}></FormInput>
                <FormInput label="Email" value={email} type="email" id="email" required className="input" onChange={e=>setEmail(e.target.value)}></FormInput>
                <FormInput label="Phone" value={phone} type="tel" id="phone" required className="input" onChange={e=>setPhone(e.target.value)}></FormInput>
                <FormInput label="Address" value={address} type="text" id="address" required className="input" onChange={e=>setAddress(e.target.value)}></FormInput>
            </div>
        </div>

        
    )
}