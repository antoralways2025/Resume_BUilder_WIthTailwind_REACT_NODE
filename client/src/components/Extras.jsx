import React, { useContext } from 'react';
import { formContext } from '../Data/DataProvider';

const Extras = ( ) => {

  const data =   useContext(formContext) ;

  const {formData ,setFormData}=data || {}

  //  extra_1: "",
    // extra_2: "",


  return (
    <div className="container mx-auto">
        
    <div className="px-8 pt-6 pb-8 mb-4  bg-slate-900  rounded-md      w-full md:w-8/12 mx-auto    ">
      <div className="flex flex-col md:flex-row  space-x-2 justify-between items-center">
        <div className="mb-4   w-full">
          <label
            className="inline-block text-[#32CD32]  font-semibold  first-line:px-4"
            htmlFor=""
          >
            Languages you can speak:
          </label>
          <input
            className=" border border-[#32CD32] text-slate-400 bg-slate-800  
             shadow-sm shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
            type="text"
            placeholder="Bengali, Hindi, English" 
            value={formData.extra_1} 
            onChange={(e)=> setFormData({...formData,extra_1:e.target.value})}
          />
        </div>

        <div className="mb-4   w-full">
          <label
            className="inline-block font-semibold text-[#32CD32]   px-4"
            htmlFor=""
          >
            Things you like to do:
          </label>
          <input
            className=" border border-[#32CD32] text-slate-400 bg-slate-800  shadow-inner shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
            type="text"
            placeholder="Your Hobbies" 
            value={formData.extra_2} 
            onChange={(e)=> setFormData({...formData,extra_2:e.target.value})}
          />
        </div>
      </div>

 
    </div>
   
   </div>
  )
}

export default Extras