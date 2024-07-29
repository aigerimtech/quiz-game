import React, { useState } from 'react';


const Password = ({password, setPassword}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    
    <div className="  mt-[12px] w-[426px] h-[64px] rounded-[30px] bg-[#f6f0f0]">
      <input 
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
        className="w-[141px] h-[21px] mt-[21px] ml-[34px] font-semibold"
        placeholder="Password"
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="ml-auto mr-[36px] px-2 py-1 poppins-regular text-lg"
      >
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default Password;