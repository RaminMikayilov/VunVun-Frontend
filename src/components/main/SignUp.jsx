import React, { useState } from "react";
// icons
import Logo from "../../assets/Modal/Logo.svg";
import {
  AiOutlineCloseCircle,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";

const SignUp = ({ closeModal, setLogMode }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSetLogMode = (mode) => () => {
    setLogMode(mode);
  };

  return (
    <div className="w-full h-full relative bg-white rounded-md py-6 px-10 sm:py-8 sm:px-16 md:py-12 md:px-20 text-xs sm:text-sm 400:px-8 400:text-[10px]">
      <span
        className="absolute top-1 right-1 text-3xl md:text-4xl text-btn-orange cursor-pointer"
        onClick={closeModal}
      >
        <AiOutlineCloseCircle />
      </span>
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
        Bizə qoşulun!
      </h1>
      <div className="flex items-center justify-center gap-2 font-bold w-full border-2 rounded-sm my-4 sm:my-5 md:my-6 p-2 text-center cursor-pointer hover:bg-slate-100 duration-200">
        <img src={Logo} />
        Google ilə qeydiyyatdan keçin
      </div>

      <form>
        <div className="flex items-center">
          <hr className="flex-1" />
          <p className="font-semibold text-center p-1 md:p-2">
            Mail ilə qeydiyyatdan keçin
          </p>
          <hr className="flex-1" />
        </div>

        <div className="flex flex-col py-3">
          <label htmlFor="mail" className="font-semibold py-1">
            Mail ünvanınız
          </label>
          <input
            id="mail"
            type="text"
            placeholder="Mail ünvanınızı daxil edin"
            className="border-gray-300 border-2 rounded-sm px-3 py-2 outline-gray-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="font-semibold py-1">
            Parolunuz
          </label>
          <div className="w-full relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Parolunuzu daxil edin"
              className="w-full border-gray-300 border-2 rounded-sm px-3 py-2 outline-gray-400"
            />
            <span
              className="text-xl text-gray25 cursor-pointer absolute right-2 top-[50%] -translate-y-[50%]"
              onClick={handleTogglePassword}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-5">
          <div className="flex items-center gap-1">
            <input type="checkbox" id="stayAccount" />
            <label htmlFor="stayAccount">Hesabda qalın</label>
          </div>
          <button className="bg-transparent underline border-none outline-none font-bold text-dark-blue hover:text-gray25 duration-200">
            Şifrəni unutdunuz?
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-btn-orange font-bold hover:bg-white hover:text-btn-orange duration-300 border-2 border-btn-orange rounded-md my-4 sm:my-6"
        >
          Qeydiyyatdan keçin
        </button>
      </form>

      <div className="flex gap-3">
        <p className="text-gray25">Artıq hesabınız var?</p>
        <button
          className="bg-transparent underline border-none outline-none font-bold text-dark-blue hover:text-gray25 duration-200"
          onClick={handleSetLogMode("login")}
        >
          Daxil olun
        </button>
      </div>
    </div>
  );
};

export default SignUp;
