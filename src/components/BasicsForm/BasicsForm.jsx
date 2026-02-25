import FormInput from '../Input/FormInput'
import './BasicsForm.css'
import { useState } from 'react';

export default function BasicsForm(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email,setEmail] = useState('')
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');


    return(
     
        <div className="basics-form">
            <h1>Fill out information to create your CV !</h1>
            <div className="fullname-input">
                <FormInput label="First Name" value={firstName} type="text" id="first-name" required className="input" onChange={e => setFirstName(e.target.value)}></FormInput>
                <FormInput label="Last Name" value={lastName} type="text" id="last-name" required className="input" onChange={e=>setLastName(e.target.value)}></FormInput>
            </div>
            <FormInput label="Email" value={email} type="email" id="email" required className="input" onChange={e=>setEmail(e.target.value)}></FormInput>
            <FormInput label="Phone" value={phone} type="tel" id="phone" required className="input" onChange={e=>setPhone(e.target.value)}></FormInput>
            <FormInput label="Address" value={address} type="text" id="address" required className="input" onChange={e=>setAddress(e.target.value)}></FormInput>
        </div>

        
    )
}