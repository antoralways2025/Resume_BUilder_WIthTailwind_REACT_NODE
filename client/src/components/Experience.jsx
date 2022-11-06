import React, { useContext } from 'react';
import { formContext } from '../Data/DataProvider';

const Experience = ( ) => {

  const data =   useContext(formContext) ;

  const {formData ,setFormData}=data || {}

  // exp1_org: "",
  // exp1_pos: "",
  // exp1_desc: "",
  // exp1_dur: "",
  // exp2_org: "",
  // exp2_pos: "",
  // exp2_des: "",
  // exp2_dur: "",

  return (
    <div className="container mx-auto">
    <div className="px-8 pt-6 pb-8 mb-4  bg-slate-900  rounded-md      w-full md:w-8/12 mx-auto    ">

      <div className="flex flex-col md:flex-row  space-x-2 justify-between items-center">
        <div className="mb-4   w-full">
          <label
            className="inline-block text-[#32CD32]  font-semibold  first-line:px-4"
            htmlFor=""
          >
           Enter your first company name you worked for
          </label>
          <input
            className=" border border-[#32CD32] text-slate-400 bg-slate-800  
             shadow-sm shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
            type="text"
            value={formData.exp1_org  } 
            onChange={(e)=> setFormData({...formData,exp1_org  :e.target.value})}
             
          />
        </div>

        <div className="mb-4   w-full">
          <label
            className="inline-block font-semibold text-[#32CD32]   px-4"
            htmlFor=""
          >
           What was your designation?
          </label>
          <input
            className=" border border-[#32CD32] text-slate-400 bg-slate-800  shadow-inner shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
            type="text" 
            value={formData.exp1_pos } 
                onChange={(e)=> setFormData({...formData,exp1_pos:e.target.value})}
            
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row  space-x-2 justify-between items-center">
        <div className="mb-4   w-full">
          <label
            className="inline-block font-semibold  text-[#32CD32]  px-4"
            htmlFor="Phone"
          >
           How many years you worked there for?
          </label>
          <input
            className=" border border-[#32CD32] text-slate-400 bg-slate-800   shadow-sm shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
            type="text" 
            value={formData.exp1_dur  } 
            onChange={(e)=> setFormData({...formData,exp1_dur :e.target.value})}
            
          />
        </div>

        <div className="mb-4   w-full">
          <label
            className="inline-block font-semibold  text-[#32CD32]  px-4"
            htmlFor="Github"
          >
            Tell us about your job description
          </label>
          <input
            className=" text-slate-400 bg-slate-800  border border-[#32CD32] shadow-inner shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
            type="text" 
            value={formData.exp1_desc} 
            onChange={(e)=> setFormData({...formData,exp1_desc :e.target.value})}
           
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row  space-x-2 justify-between items-center">
        <div className="mb-4   w-full">
          <label
            className="inline-block font-semibold text-[#32CD32]  px-4"
            htmlFor=""
          >
           Enter your Second company name
          </label>
          <input
            className=" text-slate-400 bg-slate-800   border border-[#32CD32]   shadow-sm shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
            type="text" 
            value={formData.exp2_org } 
            onChange={(e)=> setFormData({...formData,exp2_org :e.target.value})}
           
          />
        </div>

        <div className="mb-4   w-full">
          <label
            className="inline-block font-semibold text-[#32CD32]  px-4"
            htmlFor=""
          >
           What was your designation?
          </label>
          <input
            className=" text-slate-400 bg-slate-800  border border-[#32CD32] shadow-inner shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
            type="text" 
            value={formData.exp2_pos } 
            onChange={(e)=> setFormData({...formData,exp2_pos   :e.target.value})}
            
          />
        </div>
      </div>


      <div className="flex flex-col md:flex-row  space-x-2 justify-between items-center">
        <div className="mb-4   w-full">
          <label
            className="inline-block font-semibold text-[#32CD32]  px-4"
            htmlFor=""
          >
         How many years you worked there?
          </label>
          <input
            className=" text-slate-400 bg-slate-800   border border-[#32CD32]   shadow-sm shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
            type="text" 
            value={formData.exp2_dur } 
            onChange={(e)=> setFormData({...formData,exp2_dur :e.target.value})}
           
          />
        </div>

        <div className="mb-4   w-full">
          <label
            className="inline-block font-semibold text-[#32CD32]  px-4"
            htmlFor=""
          >
           Tell us about your job description
          </label>
          <input
            className=" text-slate-400 bg-slate-800  border border-[#32CD32] shadow-inner shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
            type="text" 
            value={formData.exp2_des } 
            onChange={(e)=> setFormData({...formData,exp2_des:e.target.value})}
            
          />
        </div>
      </div>

    </div>
   
   </div>  
  )
}

export default Experience