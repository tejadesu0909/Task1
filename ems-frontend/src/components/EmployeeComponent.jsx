import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [technology, setTechnology] = useState('')
    const [yearsOfExperience, setYearsOfExperience] = useState('')
    const [salary, setSalary] = useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [employmentType, setEmployementType] = useState('')

    const {id} = useParams('');

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        technology: '',
        yearsOfExperience: '',
        salary: '',
        location: '',
        email: '',
        phoneNumber: '',
        employmentType: '',
    })
    

    const navigator = useNavigate();

    function handleFirstName(e){
        setFirstName(e.target.value);
    }

    function handleLastName(e){
        setLastName(e.target.value);
    }

    function handleTechnology(e){
        setTechnology(e.target.value);
    }

    function handleYearsOfExperience(e){
        setYearsOfExperience(e.target.value);
    }

    function handleSalary(e){
        setSalary(e.target.value);
    }

    function handleLocation(e){
        setLocation(e.target.value)
    }

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePhoneNumber(e){
        setPhoneNumber(e.target.value)
    }

    function handleEmploymentType(e){
        setEmployementType(e.target.value)
    }

    function saveorUpdateEmployee(e){
        e.preventDefault();

        if(validateForm())
            {
                const employee = {firstName, lastName, technology, yearsOfExperience, salary, location, email, phoneNumber, employmentType}
                console.log(employee)
                
                if(id){
                    updateEmployee(id, employee).then((response)=>{
                        console.log(response.data);
                        navigator('/employees');
                    }).catch(error => {
                        console.error(error);

                    })
                }
                else{
                    createEmployee(employee).
                then((response)=>
                    {
                    console.log(response.data);
                    navigator('/employees')
                    }
                ).catch(error => {
                    console.error(error);
                })
                }
            }
    }

    function validateForm() {
        let valid = true;
    
        // Copy the errors object to avoid direct state mutation
        const errorsCopy = { ...errors };
    
        // First Name validation
        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First Name is required';
            valid = false;
        }
    
        // Last Name validation
        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last Name is required';
            valid = false;
        }
    
        // Technology validation
        if (technology.trim()) {
            errorsCopy.technology = '';
        } else {
            errorsCopy.technology = 'Technology is required';
            valid = false;
        }
    
        // Years of Experience validation
        if (yearsOfExperience && !isNaN(yearsOfExperience) && yearsOfExperience > 0) {
            errorsCopy.yearsOfExperience = '';
        } else {
            errorsCopy.yearsOfExperience = 'Years of Experience must be a positive number';
            valid = false;
        }
    
        // Salary validation
        if (salary && !isNaN(salary) && salary > 0) {
            errorsCopy.salary = '';
        } else {
            errorsCopy.salary = 'Salary must be a positive number';
            valid = false;
        }
    
        // Location validation
        if (location.trim()) {
            errorsCopy.location = '';
        } else {
            errorsCopy.location = 'Location is required';
            valid = false;
        }
    
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() && emailRegex.test(email)) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'A valid email is required';
            valid = false;
        }
    
        // Phone Number validation
        const phoneRegex = /^[0-9]{10}$/;
        if (phoneNumber.trim() && phoneRegex.test(phoneNumber)) {
            errorsCopy.phoneNumber = '';
        } else {
            errorsCopy.phoneNumber = 'Phone Number must be a valid 10-digit number';
            valid = false;
        }
    
        // Employment Type validation
        if (employmentType.trim()) {
            errorsCopy.employmentType = '';
        } else {
            errorsCopy.employmentType = 'Employment Type is required';
            valid = false;
        }
    
        // Update state with validation errors
        setErrors(errorsCopy);
    
        return valid;
    }

   

    useEffect(()=> {
        if(id){
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setTechnology(response.data.technology);
                setYearsOfExperience(response.data.yearsOfExperience);
                setSalary(response.data.salary);
                setLocation(response.data.location);
                setEmail(response.data.email);
                setPhoneNumber(response.data.phoneNumber);
                setEmployementType(response.data.employmentType);

            }).catch(error => {
                console.error(error);
                 })
        }

    },[id])

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }
        else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }
    
 
  return (
    <div className='container'>
        <div className='row'>
            <div className='card'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name: </label>
                            <input 
                                type = 'text'
                                placeholder='Enter Employee First Name'
                                name='firstName'
                                value={firstName}
                                className={`form-control ${ errors.firstName ? 'is-invalid' : ''}`}
                                onChange={handleFirstName}
                                ></input>
                                {errors.firstName && <div className='invalid-feedback'> {errors.firstName}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name: </label>
                            <input 
                                type = 'text'
                                placeholder='Enter Employee Last Name'
                                name='lastName'
                                value={lastName}
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}

                                onChange={handleLastName}
                                ></input>
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}

                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Technology: </label>
                            <input 
                                type = 'text'
                                placeholder='Enter Technology'
                                name='technology'
                                value={technology}
                                className={`form-control ${errors.technology ? 'is-invalid' : ''}`}

                                onChange={handleTechnology}
                                ></input>
                                {errors.technology && <div className='invalid-feedback'>{errors.technology}</div>}

                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Years Of Experience: </label>
                            <input 
                                type = 'text'
                                placeholder='Enter Years Of Experience'
                                name='yearsOfExperience'
                                value={yearsOfExperience}
                                className={`form-control ${errors.yearsOfExperience ? 'is-invalid' : ''}`}

                                onChange={handleYearsOfExperience}
                                ></input>
                                {errors.yearsOfExperience && <div className='invalid-feedback'>{errors.yearsOfExperience}</div>}

                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Salary: </label>
                            <input 
                                type = 'text'
                                placeholder='Enter Salary'
                                name='salary'
                                value={salary}
                                className={`form-control ${errors.salary ? 'is-invalid' : ''}`}
                                onChange={handleSalary}

                                ></input>
                                {errors.salary && <div className='invalid-feedback'>{errors.salary}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Location: </label>
                            <input 
                                type = 'text'
                                placeholder='Enter Location'
                                name='location'
                                value={location}
                                className={`form-control ${errors.location ? 'is-invalid' : ''}`}

                                onChange={handleLocation}
                                ></input>
                                {errors.location && <div className='invalid-feedback'>{errors.location}</div>}

                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email: </label>
                            <input 
                                type = 'text'
                                placeholder='Enter Email'
                                name='email'
                                value={email}
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}

                                onChange={handleEmail}
                                ></input>
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}

                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Phone Number: </label>
                            <input 
                                type = 'text'
                                placeholder='Enter Phone Number'
                                name='phoneNumber'
                                value={phoneNumber}
                                className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}

                                onChange={handlePhoneNumber}
                                ></input>
                                {errors.phoneNumber && <div className='invalid-feedback'>{errors.phoneNumber}</div>}

                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Employment Type: </label>
                            <input 
                                type = 'text'
                                placeholder='Enter Employment Type'
                                name='employmentType'
                                value={employmentType}
                                className={`form-control ${errors.employmentType ? 'is-invalid' : ''}`}

                                onChange={handleEmploymentType}
                                ></input>
                                {errors.employmentType && <div className='invalid-feedback'>{errors.employmentType}</div>}

                        </div>   

                    <button className='btn btn-success' onClick={saveorUpdateEmployee} >Submit</button>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default EmployeeComponent
