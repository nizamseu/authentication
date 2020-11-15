import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { authContrast } from './ContrastApi';
import './style.css';


const Shipment = () => {
    const { register, handleSubmit, errors } = useForm();
    const [userInfo,setUserInfo]= useContext(authContrast);
    
    const onSubmit = data => {
        console.log("Data",data)
    
    };

  

  return (
   
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
    
      <input name="name" defaultValue={userInfo.name} ref={register({ required: true })} placeholder="Your Name " />
      {errors.name && <span className="error">This name is required</span>}

      <input name="email" defaultValue={userInfo.email} ref={register({ required: true })} placeholder="Your Email "  />
      {errors.email && <span className="error">This email is required</span>}

      <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number " />
      {errors.phone && <span className="error">This phone Number is required</span>}

      <input name="address" ref={register({ required: true })} placeholder="Your Address "  />
      {errors.address && <span className="error">This address is required</span>}

     
      
      <input type="submit" />
    </form>
  );

};

export default Shipment;