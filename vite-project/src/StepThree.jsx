
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import'./App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const StepThree = () => {
  const  navigate= useNavigate();
  const initialValue = {
    resume: '',
    linkedin:'',
    git: '',
   
   
   };
  const [Value, setValue] = useState({...initialValue });

    
 

  const Change = (e) => {
    const { name, value } = e.target;
    setValue({ ...Value, [name]: value });
  
  };

  const requiredFields = ['resume', 'linkedin', 'git']; // Define requiredFields array

  const Submit = (e) => {
    e.preventDefault();

    if (requiredFields.every(field => Value[field].trim() !== '')) {
      console.log(Value); // Log the form data to the console

      axios.post('https://jsonplaceholder.typicode.com/users', Value)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      
    }
  };
  const Reset = () => {
    setValue({ ...initialValue });
  };
  const Previous=()=>{
    navigate('/step-two');
  }


  return (

    <div id="top">
       <h5>Step3 : Final Submission</h5>
    <div className='form-container'>
    <div className='form3'>
      <form  className="form p-5"  id="form3"onSubmit={Submit}>
      <label className='form-lable'>Linkedin Url</label>
<input type="text" className='form-control' value={Value.collage} onChange={Change} name='linkedin' />
<label className='form-lable'>Git profile Url</label>
<input type="text" className='form-control' value={Value.collage} onChange={Change} name='git' />

 <label className='form-lable '>Upload Resume</label>
 <input type="file"className='form-control' value={Value.collage} onChange={Change} name='resume' />
 <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" >
   <p>By submitting your job application, you agree to
     our<a> privacy policy</a>, consenting to the collection 
     and use of your personal information solely for the
      purpose of the application process, ensuring its
     and non-disclosure to third parties without your explicit consent."</p>
  </label>
</div>
<button type="button" onClick={Reset} className='reset mx-2'>Reset</button>
<button type='button'onClick={Previous} className='pre mx-2'>previous</button>
<button type="submit" className='sub mx-2'>Submit</button>
      </form> 
     

    </div>
    </div>
    </div>
  );
};

export default StepThree;
