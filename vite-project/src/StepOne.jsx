
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
const StepOne = () => {
  const  navigate= useNavigate();
  const initialFormData = {
    firstname: '',
    lastname:'',
    fathersName: '',
    email: '',
    mobileNumber: '',
    gender:'',
   };
  const [formData, setFormData] = useState({...initialFormData });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: value });
    if (type === 'radio') {
    
      setFormData({ ...formData, [name]: checked ? value : '' });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const requiredFields = ['firstname','lastname', 'fathersName', 'email', 'mobileNumber'];
  
    if (requiredFields.every(field => formData[field].trim() !== '')) {
      axios.post('https://jsonplaceholder.typicode.com/users', formData)
        .then(response => {
          console.log(response.data);
          navigate('/step-two');
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      
    }
  };
  const handleReset = () => {
    setFormData({ ...initialFormData });
  };


  return (
 <div id="top"
> 
<h5>Step1:Personal Details</h5>

  <div className=' form-container'>
 
      <form  className="form p-5" id="form1"onSubmit={handleSubmit}>
        <div className=''>
       
        <label className='form-lable mx-2'>First name</label>
      <input className='form-control mx-2 my-2' type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="FirstName" required /> 
      <label className='form-lable mx-2'>Last name</label>
      <input className='form-control mx-2 my-2' type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="LastName" required />
      <label className='form-lable mx-2'>Father's Name</label>
<input className='form-control mx-2 my-2' type="text" name="fathersName" value={formData.fathersName} onChange={handleChange} placeholder="Father's Name" required />
<label className='form-lable mx-2'>Email</label>
<input className='form-control mx-2 my-2' type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
<label className='form-label'>Gender</label><br></br>
<input
  className="form-check-input mx-2" type="radio" value="Male" checked={formData.gender === 'Male'}
  onChange={handleChange} name="gender" id="flexRadioDefault1"
/><label className="form-check-label mx-2">Male</label>

<input
  className="form-check-input mx-2"type="radio"value="Female"checked={formData.gender === 'Female'}
  onChange={handleChange} name="gender" id="flexRadioDefault2"
/>
<label className="form-check-label mx-2">Female</label><br></br>




<label className='form-lable mx-2'>Mobile No</label>
<input className='form-control mx-2 my-2' type="number"
 name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Mobile Number" required />


<button type="button" onClick={handleReset} className='reset mx-2'>Reset</button>

        <button type="submit" className='sub mx-2'>Next</button>
</div>
      </form>
    </div>
</div>
  );
};

export default StepOne;
