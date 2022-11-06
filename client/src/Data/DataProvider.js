import React, { createContext, useState } from 'react';

 export const formContext = createContext() ;



const DataProvider = ({children}) => {

    

    const initalStateData={
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        skills: "",
    
        exp1_org: "",
        exp1_pos: "",
        exp1_desc: "",
        exp1_dur: "",
        exp2_org: "",
        exp2_pos: "",
        exp2_des: "",
        exp2_dur: "",
    
        edu1_school: "",
        edu1_year: "",
        edu1_qualification: "",
        edu1_desc: "",
        edu2_school: "",
        edu2_year: "",
        edu2_qualification: "",
        edu2_desc: "",
    
        proj1_title: "",
        proj1_link: "",
        proj1_desc: "",
        proj2_title: "",
        proj2_link: "",
        proj2_desc: "",
    
    
    
        extra_1: "",
        extra_2: "",
      }
    const [formData, setFormData] = useState(initalStateData);
    

    const data={
         formData,
         setFormData
         }
         
  return (
    <formContext.Provider value={data}>
  {children}
    </formContext.Provider>
  )
}

export default DataProvider