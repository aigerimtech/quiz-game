import React, { useEffect } from 'react';
import Button from '../components/button';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/counterSlice';
import { changeColor, changeSize } from '../store/buttonState';
import ButtonStartQuiz from '../components/buttonStartQuiz';
import { useLocation } from 'react-router-dom';


const Dashboard = () => {

  const location=useLocation();

  useEffect(()=>{
    console.log(location);
  },[]);



  return (
    <div className='bg-[#FBF9F9] w-screen h-screen'>
      
      <div className='flex' >
          <div className= 'w-[150px] h-[49px] mt-[43px] ml-[25px]'>
          <p className='poppins-extrabold text-2xl text-[#696F79]'> Quiz Time</p>
          </div>

          <div>
            <button className='ml-[115px] bg-[#ffffff] mt-[33px] w-[356px] h-[64px] rounded-full flex flex-row gap-3'>
              <svg className='mt-[21px] ml-[27px]' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.6564 21.5516L16.7564 15.6516C18.1742 13.9495 18.8812 11.7663 18.7303 9.55617C18.5795 7.34607 17.5823 5.27921 15.9464 3.78556C14.3104 2.29191 12.1616 1.48646 9.94695 1.53678C7.73227 1.58711 5.62226 2.48932 4.05584 4.05573C2.48942 5.62215 1.58721 7.73217 1.53689 9.94684C1.48657 12.1615 2.29201 14.3103 3.78566 15.9463C5.27932 17.5822 7.34618 18.5793 9.55628 18.7302C11.7664 18.8811 13.9496 18.1741 15.6517 16.7562L21.5517 22.6562L22.6564 21.5516ZM3.12511 10.1562C3.12511 8.7656 3.53748 7.40618 4.31009 6.2499C5.08269 5.09361 6.18082 4.1924 7.46561 3.66022C8.75041 3.12804 10.1642 2.9888 11.5281 3.2601C12.892 3.5314 14.1449 4.20107 15.1282 5.1844C16.1115 6.16774 16.7812 7.42059 17.0525 8.78452C17.3238 10.1484 17.1846 11.5622 16.6524 12.847C16.1202 14.1318 15.219 15.2299 14.0627 16.0025C12.9064 16.7751 11.547 17.1875 10.1564 17.1875C8.29219 17.1854 6.50496 16.444 5.18679 15.1258C3.86863 13.8076 3.12717 12.0204 3.12511 10.1562Z" fill="#8692A6"/>
              </svg>
              <p className='mt-[17px] w-[75px] h-[29px] text-xl poppins-regular text-[#696F79] leading-7'>Search..</p>  
            </button> 
          </div>
          <div className='mt-[33px]'>
            <ButtonStartQuiz className=' ml-[180px] mt-[33px]' header={'Start Quiz'}/>
          </div>
      
      </div>

      
      <div className='mt-[45px] flex flex-col gap-4'>
      <Button active={location.pathname==='/dashboard' ? true : false} name={'Dashboard'} icon={<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.375 21.875H5.20833C4.0625 21.875 3.125 20.9375 3.125 19.7917V5.20833C3.125 4.0625 4.0625 3.125 5.20833 3.125H9.375C10.5208 3.125 11.4583 4.0625 11.4583 5.20833V19.7917C11.4583 20.9375 10.5208 21.875 9.375 21.875ZM15.625 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V14.5833C21.875 13.4375 20.9375 12.5 19.7917 12.5H15.625C14.4792 12.5 13.5417 13.4375 13.5417 14.5833V19.7917C13.5417 20.9375 14.4792 21.875 15.625 21.875ZM21.875 8.33333V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125H15.625C14.4792 3.125 13.5417 4.0625 13.5417 5.20833V8.33333C13.5417 9.47917 14.4792 10.4167 15.625 10.4167H19.7917C20.9375 10.4167 21.875 9.47917 21.875 8.33333Z" fill="white"/>
      </svg>}/> 

      <Button active={location.pathname==='/support' ? true : false}  name={'Support'} icon={<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5002 2.08337C5.75641 2.08337 1.0835 6.75629 1.0835 12.5V16.8157C1.0835 17.8823 2.01787 18.75 3.16683 18.75H4.2085C4.48476 18.75 4.74971 18.6403 4.94507 18.4449C5.14042 18.2496 5.25016 17.9846 5.25016 17.7084V12.3511C5.25016 12.0748 5.14042 11.8099 4.94507 11.6145C4.74971 11.4192 4.48476 11.3094 4.2085 11.3094H3.26266C3.84183 7.27817 7.31058 4.16671 11.5002 4.16671C15.6897 4.16671 19.1585 7.27817 19.7377 11.3094H18.7918C18.5156 11.3094 18.2506 11.4192 18.0553 11.6145C17.8599 11.8099 17.7502 12.0748 17.7502 12.3511V18.75C17.7502 19.899 16.8158 20.8334 15.6668 20.8334H13.5835V19.7917H9.41683V22.9167H15.6668C17.9647 22.9167 19.8335 21.048 19.8335 18.75C20.9825 18.75 21.9168 17.8823 21.9168 16.8157V12.5C21.9168 6.75629 17.2439 2.08337 11.5002 2.08337Z" fill="white"/>
      </svg>}/> 
      
      <Button active={location.pathname==='/notification' ? true : false} name={'Notification'} icon={<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.4167 22.9167C11.7258 22.914 11.0641 22.694 10.5744 22.3041C10.0847 21.9143 9.80632 21.386 9.79949 20.8334H15.0078C15.0106 21.1119 14.9442 21.3881 14.8125 21.6459C14.6441 21.955 14.3863 22.2276 14.0603 22.4413C13.7343 22.6551 13.3495 22.8037 12.9375 22.875H12.8763C12.725 22.9002 12.5712 22.9142 12.4167 22.9167ZM22.8334 19.7917H2V17.7084L4.60417 16.6667V10.9375C4.53557 9.46787 4.95044 8.00955 5.8073 6.70837C6.22896 6.11178 6.80395 5.59349 7.49434 5.18769C8.18473 4.7819 8.97483 4.49782 9.81251 4.35421V2.08337H15.0208V4.35421C18.3789 4.99379 20.2292 7.33129 20.2292 10.9375V16.6667L22.8334 17.7084V19.7917Z" fill="white"/>
      </svg>}/>
      </div>


      {/* <h1>Dashboard: {counter}</h1>
      <button onClick ={()=> dispatch(increment())}>Increment</button>
      <button onClick ={()=> dispatch(decrement())}>Decrement</button> 
       <h2>Dashboard: {button.color} {button.size}</h2>
      <button onClick={()=>dispatch(changeSize())}> Change Size of button</button>
      <button onClick={()=>dispatch(changeColor())}>Change Color of button</button>  */}
    </div>
  );
};

export default Dashboard;