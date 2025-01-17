import React from "react";
import { Link } from "react-router-dom";

 function Button({ children, disabled, to, type, onClick }) {
  const base = `bg-yellow-400 text-sm uppercase font-semibold text-stone-800 inline-block tracking-wide
            rounded-full hover:bg-yellow-300 transition-colors duration-300 
           focus:outline-none focus:ring focus:ring-yellow-300 focus-offset-4 
           disabled:cursor-not-allowed `;

  const styles = {
    primary: base + " py-3 px-4 md:px-6 md:py-4",
    small: base + "py-2 md:px-5 md:py-2.5 px-2 text-xs",
    round: base+"py-1  md:px-3 md:py-2 px-3.5 text-xs mx-2"
    ,
    secondary: ` text-sm border border-2 border-stone-300 uppercase font-semibold text-stone-400 inline-block tracking-wide
            rounded-full hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 transition-colors duration-300 
           focus:outline-none focus:ring focus:ring-stone-200 focus-offset-4  focus:bg-stone-300
           disabled:cursor-not-allowed py-2.5 px-4 md:px-6 md:py-3.5  `,
  };



  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );



    
  if (onClick){
    return (
      <button className={styles[type]} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }
   

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button
