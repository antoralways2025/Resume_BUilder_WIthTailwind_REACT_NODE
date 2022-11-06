import { saveAs } from 'file-saver';
import React, { useContext, useState } from "react";
import { formContext } from "../Data/DataProvider";
import axiosInstance from "../utils/axios";

import Education from "./Education";
import Experience from "./Experience";
import Extras from "./Extras";
import Personal from "./Personal";
 
import Projects from "./Projects";
import Error from "./ui/Error";

const Form = () => {


  const [page, setPage] = useState(0);
  const [isSucess,setIsSucess]=useState(false) ;
  const [error,setError]=useState('') ;

  const [isLoading,setIsLoading]=useState(false)
  console.log(isLoading)
 
  const data =   useContext(formContext) || {} ;

  const {formData }=data || {} ;

  const FormTitle = [
    "Personal Details",
    "Education",
    "Experience",
    "Projects",
    "Extras",
  ];

  const pageShow = () => {
    if (page === 0) {
      return <Personal   />;
    }
    if (page === 1) {
      return <Education   />;
    }
    if (page === 2) {
      return <Experience   />;
    }
    if (page === 3) {
      return <Projects   />;
    }
    if (page === 4) {
      return <Extras  />;
    }
  };

//   this is width controller for progressbar
  const progressWidth=()=>{

             if(page ===0){
                return "20%"
             }
             else if(page===1){
                return "40%"
             } else if(page===2){
                return "60%"
             } else if(page===3){
                return "80%"
             } else{
                return "100%"
             }
                  
            
              
  }


  // submitHandler
   const submitHandler=async(e)=>{
          e.preventDefault()

            try {
                   
                setIsLoading(true)

               const res = await axiosInstance.post('/create-resume',formData)  ;
               
                 if(res?.data){
                  const res = await axiosInstance.get('/fetch-resume',{responseType:'blob'})  ;

                   if(res?.data){
                      
                      const pdfBlob =  new Blob([res.data],{type:'application/pdf'}) ;
                      saveAs(pdfBlob,"Resume.pdf")

                       console.log({"pdfBlob":pdfBlob})
                        if(res.status===200){
                          setIsSucess(true) ;
                        }
                      
                   }
                  
                 }
               
            } catch (error) {

              setError(error.message)
                
            }

     
   }


   const previousPage=()=>{
     if(error){
      setError('')
     }
    setPage((curr) => curr - 1)
   }
   

  return (
    <div className="pt-6 md:pt-10">
      <div className="flex justify-center mb-2 ">
        <h1 className="font-extrabold text-3xl px-4 py-1 rounded-lg mb-2 text-[#32CD32]  bg-slate-800/100">
          {FormTitle[page]}
        </h1>
      </div>

            <div className="w-full  mt-4  bg-gray-200 rounded-full h-2.5">
         <div style={{ border:'2px dashed red',width:progressWidth()}} className="bg-[lime] px-20 h-2.5 rounded-full dark:bg-purple-500"  ></div>
          </div>


               
          
            <form onSubmit={submitHandler} className="rounded-2xl p-4   ">
              
              {pageShow()}



                <div className="flex  justify-center">

                 {
                    page === FormTitle.length - 1 &&
                
                 <button
                   
                    type="submit"
          className="px-4 py-1  disabled:bg-slate-500 disabled:text-gray-400 bg-slate-800 font-medium text-2xl  text-[#32CD32]  rounded-md"
        >
          {" "}
                  Dwonload Your Resume ! 
                </button>
                   } 
                </div>

                {error&& <Error message={error} />}

            </form>
         
       {/* next and preve buttton  */}
         

      <div className="flex  justify-center space-x-2 ">
        <button
          onClick={previousPage}
          disabled={page === 0}
          className="px-4 py-1 disabled:bg-slate-500 disabled:text-gray-400 bg-slate-800 text-2xl font-medium  text-[#32CD32]   rounded-md"
        >
          {" "}
          Prev
        </button>



        {
         page  !== FormTitle.length - 1 &&
       
        <button
          onClick={() => setPage((curr) => curr + 1)}
          className="px-4 py-1  disabled:bg-slate-500 disabled:text-gray-400 bg-slate-800 font-medium text-2xl  text-[#32CD32]  rounded-md"
        >
          {" "}
          Next
        </button>
         }

      </div>


     


    </div>
  );
};

export default Form;
