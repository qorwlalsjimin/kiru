import React, { useState } from 'react';
import { Link } from "react-router-dom"
import './signup.css'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
   <> 
    <div className="logintext">
    <Link to="/Loginpage">  <button><h1>login</h1></button> </Link>
        <Link to="/Signup"><button><h1>sign up</h1> </button> </Link>
        </div>
    <form onSubmit={handleSubmit}>
   
      <label htmlFor="email" placeholder="이메일/휴대번호">Email</label>
      <input id="email" type="email" value={email} onChange={handleEmailChange} required /> 
      <br />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" value={password} onChange={handlePasswordChange} required />
      <br />
      <label htmlFor="password-confirm">Confirm Password</label>
      <input id="password-confirm" type="password" value={passwordConfirm} onChange={handlePasswordConfirmChange} required />
      <br />
      <label htmlFor="last-name">Last Name</label>
      <input id="last-name" type="text" value={lastName} onChange={handleLastNameChange} required />

      <label htmlFor="first-name">First Name</label>
      <input id="first-name" type="text" value={firstName} onChange={handleFirstNameChange} required />
      <br />
      <label htmlFor="phone">Phone Number</label>
      <select id="phone" value={phone} onChange={handlePhoneChange} required>
        <option value="+82">+82</option>
      </select>
      <input type="tel" value={phone} onChange={handlePhoneChange} pattern="[0-9]{10,11}" required />
      <br />
      <label htmlFor="address">Address Search</label>
      <input id="address" type="text" value={address} onChange={handleAddressChange} required />
      <br />
      <button type="submit">회원가입</button>
    </form>
    </>
  );
};

export default Signup;
