import React, { useContext } from 'react';
import { formContext } from '../Data/DataProvider';

const Education = ( ) => {

 
  const data =   useContext(formContext) ;

  const {formData ,setFormData}=data || {}

  return (
     
            <div className="container mx-auto">
        <div className="px-8 pt-6 pb-8 mb-4  bg-slate-900  rounded-md w-full md:w-8/12 mx-auto    ">
          <div className="flex flex-col md:flex-row  space-x-2 justify-between items-center">
            <div className="mb-4   w-full">
              <label
                className="inline-block text-[#32CD32]  font-semibold  first-line:px-4"
                htmlFor=""
              >
                Enter your First Institute name
              </label>
              <input
                className=" border border-[#32CD32] text-slate-400 bg-slate-800  
                 shadow-sm shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
                type="text"
                 value={formData.edu1_school} 
                 onChange={(e)=> setFormData({...formData,edu1_school:e.target.value})}

                 
              />
            </div>

            <div className="mb-4   w-full">
              <label
                className="inline-block font-semibold text-[#32CD32]   px-4"
                htmlFor=""
              >
                Year you graduated
              </label>
              <input
                className=" border border-[#32CD32] text-slate-400 bg-slate-800  shadow-inner shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
                type="text"
                value={formData.edu1_year} 
                onChange={(e)=> setFormData({...formData,edu1_year:e.target.value})}
                 
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row  space-x-2 justify-between items-center">
            <div className="mb-4   w-full">
              <label
                className="inline-block font-semibold  text-[#32CD32]  px-4"
                htmlFor="Phone"
              >
                Degree you pursued 
              </label>
              <input
                className=" border border-[#32CD32] text-slate-400 bg-slate-800   shadow-sm shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
                type="text"

                value={formData.edu1_qualification} 
                onChange={(e)=> setFormData({...formData,edu1_qualification:e.target.value})}
                 
              />
            </div>

            <div className="mb-4   w-full">
              <label
                className="inline-block font-semibold  text-[#32CD32]  px-4"
                htmlFor="Github"
              >
                Enter a short description
              </label>
              <input
                className=" text-slate-400 bg-slate-800  border border-[#32CD32] shadow-inner shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
                type="text"
                
                value={formData.edu1_desc} 
                onChange={(e)=> setFormData({...formData,edu1_desc:e.target.value})}
                
              />
            </div>

          </div>

          <div className="flex flex-col md:flex-row  space-x-2 justify-between items-center">
            <div className="mb-4   w-full">
              <label
                className="inline-block font-semibold text-[#32CD32]  px-4"
                htmlFor=""
              >
               Enter your Second Institute name
              </label>
              <input
                className=" text-slate-400 bg-slate-800   border border-[#32CD32]   shadow-sm shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
                type="text"
                value={formData.edu2_school} 
                onChange={(e)=> setFormData({...formData,edu2_school:e.target.value})}
                 
              />
            </div>

            <div className="mb-4   w-full">
              <label
                className="inline-block font-semibold text-[#32CD32]  px-4"
                htmlFor=""
              >
                  
                     Year you graduated from your second institute
              </label>
              <input
                className=" text-slate-400 bg-slate-800  border border-[#32CD32] shadow-inner shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
                type="text" 
                value={formData.edu2_year} 
                onChange={(e)=> setFormData({...formData,edu2_year:e.target.value})}
                
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row  space-x-2 justify-between items-center">
            <div className="mb-4   w-full">
              <label
                className="inline-block font-semibold text-[#32CD32]  px-4"
                htmlFor=""
              >
            Degree you pursued
              </label>
              <input
                className=" text-slate-400 bg-slate-800   border border-[#32CD32]   shadow-sm shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
                type="text"
                value={formData.edu2_qualification } 
                onChange={(e)=> setFormData({...formData,edu2_qualification :e.target.value})}
                 
              />
            </div>

            <div className="mb-4   w-full">
              <label
                className="inline-block font-semibold text-[#32CD32]  px-4"
                htmlFor=""
              >
                  
                  Enter a short description
              </label>
              <input
                className=" text-slate-400 bg-slate-800  border border-[#32CD32] shadow-inner shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
                type="text" 
                value={formData.edu2_desc} 
                onChange={(e)=> setFormData({...formData,edu2_desc:e.target.value})}
                
              />
            </div>
          </div>
        </div>
       
       </div>  
     
  )
}

export default Education