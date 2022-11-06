import React, { useContext } from 'react';
import { formContext } from '../Data/DataProvider';

const Projects = () => {



  const data =   useContext(formContext) ;

  const {formData ,setFormData}=data || {}
  // proj1_title: "",
  // proj1_link: "",
  // proj1_desc: "",
  // proj2_title: "",
  // proj2_link: "",
  // proj2_desc: "",
  return (
    <div className="container mx-auto">

    <div className="px-8 pt-6 pb-8 mb-4  bg-slate-900  rounded-md      w-full md:w-8/12 mx-auto    ">
      <div className="flex flex-col md:flex-row  space-x-2 justify-between items-center">
        <div className="mb-4   w-full">
          <label
            className="inline-block text-[#32CD32]  font-semibold  first-line:px-4"
            htmlFor=""
          >
          Name of project
          </label>
          <input
            className=" border border-[#32CD32] text-slate-400 bg-slate-800  
             shadow-sm shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
            type="text" 
            value={formData.proj1_title } 
            onChange={(e)=> setFormData({...formData,proj1_title :e.target.value})}
           
          />
        </div>

        <div className="mb-4   w-full">
          <label
            className="inline-block font-semibold text-[#32CD32]   px-4"
            htmlFor=""
          >
           Link to project
          </label>
          <input
            className=" border border-[#32CD32] text-slate-400 bg-slate-800  shadow-inner shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
            type="Email" 
            value={formData.proj1_link } 
            onChange={(e)=> setFormData({...formData,proj1_link:e.target.value})}
             
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row  space-x-2 justify-between items-center">
        <div className="mb-4   w-full">
          <label
            className="inline-block font-semibold  text-[#32CD32]  px-4"
            htmlFor="Phone"
          >
           Description about project 
          </label>
          <input
            className=" border border-[#32CD32] text-slate-400 bg-slate-800   shadow-sm shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
            type="text" 
            value={formData.proj1_desc } 
            onChange={(e)=> setFormData({...formData,proj1_desc :e.target.value})}
             
          />
        </div>

        <div className="mb-4   w-full">
          <label
            className="inline-block font-semibold  text-[#32CD32]  px-4"
            htmlFor="Github"
          >
            Enter your Second Project Name
          </label>
          <input
            className=" text-slate-400 bg-slate-800  border border-[#32CD32] shadow-inner shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
            type="text"
            value={formData.proj2_title } 
            onChange={(e)=> setFormData({...formData,proj2_title  :e.target.value})}
             
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row  space-x-2 justify-between items-center">
        <div className="mb-4   w-full">
          <label
            className="inline-block font-semibold text-[#32CD32]  px-4"
            htmlFor=""
          >
            Link of second project
          </label>
          <input
            className=" text-slate-400 bg-slate-800   border border-[#32CD32]   shadow-sm shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
            type="text" 
            value={formData.proj2_link } 
            onChange={(e)=> setFormData({...formData,proj2_link :e.target.value})}
            
          />
        </div>

        <div className="mb-4   w-full">
          <label
            className="inline-block font-semibold text-[#32CD32]  px-4"
            htmlFor=""
          >
          Description
          </label>
          <input
            className=" text-slate-400 bg-slate-800  border border-[#32CD32] shadow-inner shadow-slate-50 focus:outline-none rounded-lg mt-2 py-2 px-4 px4 w-full"
            type="text" 
            value={formData.proj2_desc } 
            onChange={(e)=> setFormData({...formData,proj2_desc :e.target.value})}
             
          />
        </div>
      </div>
    </div>
   
   </div>
  )
}

export default Projects