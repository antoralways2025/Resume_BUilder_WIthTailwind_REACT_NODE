import React, { useContext } from "react";
import { formContext } from "../Data/DataProvider";
 
const Personal = ( ) => {

  const data =   useContext(formContext) ;

  const {formData ,setFormData}=data || {}
    
  return (
    
      <div className="container mx-auto">
        <div className="px-8 pt-6 pb-8 mb-4  bg-slate-900  rounded-md      w-full md:w-8/12 mx-auto    ">
          <div className="flex flex-col md:flex-row  space-x-2 justify-between items-center">
            <div className="mb-4   w-full">
              <label
                className="inline-block text-[#32CD32]  font-semibold  first-line:px-4"
                htmlFor=""
              >
                FullName
              </label>
              <input
                className=" border border-[#32CD32] text-slate-400 bg-slate-800  
                 shadow-sm shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
                type="text"
                 value={formData.name}
                 onChange={(e)=>setFormData({...formData,name:e.target.value})}
                placeholder="FullName"
              />
            </div>

            <div className="mb-4   w-full">
              <label
                className="inline-block font-semibold text-[#32CD32]   px-4"
                htmlFor=""
              >
                Email
              </label>
              <input
                className=" border border-[#32CD32] text-slate-400 bg-slate-800  shadow-inner shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
                type="email"
                value={formData.email}
                onChange={(e)=>setFormData({...formData,email:e.target.value})}
                placeholder="Boss@gmail.com"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row  space-x-2 justify-between items-center">
            <div className="mb-4   w-full">
              <label
                className="inline-block font-semibold  text-[#32CD32]  px-4"
                htmlFor="Phone"
              >
                Phone 
              </label>
              <input
                className=" border border-[#32CD32] text-slate-400 bg-slate-800   shadow-sm shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
                type="text"
                placeholder="+88011234567" 
                value={formData.phone}
                onChange={(e)=>setFormData({...formData,phone:e.target.value})}
                 
              />
            </div>

            <div className="mb-4   w-full">
              <label
                className="inline-block font-semibold  text-[#32CD32]  px-4"
                htmlFor="Github"
              >
                Github
              </label>
              <input
                className=" text-slate-400 bg-slate-800  border border-[#32CD32] shadow-inner shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
                type="text"
                placeholder="https://github.com/"
                value={formData.github}
                onChange={(e)=>setFormData({...formData,github:e.target.value})}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row  space-x-2 justify-between items-center">
            <div className="mb-4   w-full">
              <label
                className="inline-block font-semibold text-[#32CD32]  px-4"
                htmlFor=""
              >
                LinkedIn
              </label>
              <input
                className=" text-slate-400 bg-slate-800   border border-[#32CD32]   shadow-sm shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
                type="text"
                placeholder="http://linkedIn/"
                value={formData.linkedin}
                onChange={(e)=>setFormData({...formData,linkedin:e.target.value})}
              />
            </div>

            <div className="mb-4   w-full">
              <label
                className="inline-block font-semibold text-[#32CD32]  px-4"
                htmlFor=""
              >
                Skills
              </label>
              <input
                className=" text-slate-400 bg-slate-800  border border-[#32CD32] shadow-inner shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
                type="text"
                placeholder="Html css js."
                value={formData.skills}
                onChange={(e)=>setFormData({...formData,skills:e.target.value})}
              />
            </div>
          </div>
        </div>
       
       </div>
  );
};

export default Personal;
