
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import'./App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const StepTwo = () => {
  const  navigate= useNavigate();
  const initialFormData = {
    education: '',
    degree:'',
    college: '',
    specialization: '',
    passedOutYear: '',
    percentage:''
   };
  const [formData, setFormData] = useState({...initialFormData });

    
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  const requiredFields = ['education', 'degree', 'college', 'specialization', 'passedOutYear', 'percentage'];

  if (requiredFields.every(field => formData[field] && formData[field].trim() !== '')) {
    console.log(formData);

    axios.post('https://jsonplaceholder.typicode.com/users', formData)
      .then(response => {
        console.log(response.data);
        navigate('/step-three');
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
  const handlepre=()=>{
    navigate('/step-one');
  }


  return (
  
  < div id="top">
   <h5>Step2 :Educational Details</h5>

    <div className='form-container'>
    <div className='form2'>
    
      <form  className="form p-5"  id="form2"onSubmit={handleSubmit}>
        <label className='form-lable '>Education Type</label><br></br>
        <select className='' id="education" value={formData.education} onChange={handleChange} name="education"  required>
          <option value="UnderGraduate">UnderGraduate</option>
          <option value="PostGraduate">PostGraduate</option>
          <option value="Dipolama">Diploma</option>
          <option value="12">12th std</option>
          </select> <br></br>
      <label className='form-lable '>Degree</label><br></br>
      <select className=''id="degree"  value={formData.degree} onChange={handleChange} name="degree"  required>
    <option value="">Select a degree</option>
    <option value="BCA">BCA</option>
    <option value="BSC">BSc</option>
    <option value="BCOM">BCom</option>
    <option value="BBA">BBA</option>
    <option value="BA">BA</option>
    <option value="MSC">MSc</option>
    <option value="MCOM">MCom</option>
    <option value="MCA">MCA</option>
    <option value="BTECH">BTech</option>
    <option value="BE">BE</option>
</select><br></br>
      <label className='form-lable '>Specialization</label><br></br>
      <select className='' id="special" value={formData.specialization} onChange={handleChange} name='specialization'  required>
        <option value="accounting">accounting</option>
        <option value="finance">Finance</option>
        <option value="computer">computer Applications</option>
        <option value="robotics">Robotics</option>
        <option value="managment">management Studies</option>
      </select><br></br>
      <div className='in'>
      <label className='form-label'>College</label>
      <input type="text"className='form-control' value={formData.college} onChange={handleChange} name='college'  required />
    </div>  <label className='form-label'>Passed Out Year</label><br></br>
<select className='' id="passedYear" value={formData.passedOutYear} onChange={handleChange} name='passedOutYear'  required>
  <option value="">Select passed out year</option>
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
</select><br></br>
<div className='in'>
<label className='form-label '>Percentage/CGPA</label>
<input type="text"className='form-control' value={formData.percentage} onChange={handleChange}  name='percentage'  required/>
</div>
      <button type="button" onClick={handleReset} className='reset'>Reset</button>
<button type='button'onClick={handlepre} className='pre'>previous</button>
<button type="submit" className='sub'>Next</button>
      </form> 
     

    </div>
    </div>
    </div>
  );
};

export default StepTwo;
