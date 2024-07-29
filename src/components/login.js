import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Password from './password'
import { setUserCredentials } from '../store/userSlice';
import { useDispatch } from 'react-redux';
import { useMyContext } from './MyContext';

const Login =() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLogin, setEmail: setUserEmail } = useMyContext();
  const navigate = useNavigate();
  const dispatch= useDispatch();

  const isValidEmail = (email) => {
    return email.includes('@');
  };

  const isValidPassword = (password) => {
    const minLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    return minLength && hasNumber && hasUppercase && hasLowercase;
  };


  function handleSubmit(e) {
    e.preventDefault();
    if (isValidEmail(email) && isValidPassword(password)) {
      setIsLogin(true);
      setUserEmail(email);
      dispatch(setUserCredentials({email, password}));
      navigate('/dashboard');
    } else {
      console.log("Error")
    }
  } 

  return (
    <div className='w-screen h-screen flex'>
        <div className='w-[45%] h-full relative'>
          <img src='./img_left.png' className='object-cover w-full h-full blur-md' />
          <div style={{transform: "translateY(-50%)"}} className='absolute top-[50%] right-10'>
            <p className=' text-lg leading-10 text-[#FFFFFF] left-0 top-0 poppins-regular'>
              Those people who develop the <br /> ability to continuously acquire <br /> new and better forms of <br /> knowledge that they can apply <br /> to their work and to their lives will <br /> be the movers and shakers in <br /> our society for the indefinite <br /> future
            </p>
            <p className='poppins-regular left-0 top-0 text-lg text-[#ffffff] '>Brian Tracy</p>
          </div>
        </div>
        <div className='w-[50%] h-full flex flex-col mt-[120px] items-center '>
        <div className='w-[50%]'>
        <p className=' font-bold text-3xl'>Login to your Account</p>
        <p className='mt-[2px]  text-[#8692A6] poppins-regular text-lg'> with your registered Email Address</p>
        <div className='mt-[29px] text-[#696F79] poppins-medium text-base'>Email address*</div>
        <form onSubmit={handleSubmit} className='mt-[12px] w-[426px] h-[64px] rounded-[30px] bg-[#f6f0f0]'>
          <input
            className='w-[141px] h-[21px] mt-[21px] ml-[34px] font-semibold'
            id="email"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className='mt-[29px] text-[#696F79] poppins-medium text-base'>Enter password*</div>
            <Password password={password} setPassword={setPassword}/>
          <p className='text-[#696F79] poppins-semibold text-base  mt-[21px] '>Remember my password</p>
          <button type="submit" className='w-[426px] h-[64px] bg-[#8692A6] mt-[37px]  text-[#FFFFFF] rounded-full poppins-semibold'>Login</button>
          {/* <p className=' mt-[25px] text-[#BABABA]'>Or</p> */}
          <button type="button" className='w-[426px] h-[64px]  mt-[25px] rounded-full bg-[#d5d1d1] text-[#000000] items-center poppins-semibold-italic'>Login with Google</button>
        </form>
        </div>
        
      </div>
    </div>
    
      
      
)};


    
export default Login;