const cors =require ('cors');
const express =require ('express');
const pdf =require ('html-pdf');
const cvFormat =require ('./pdfSample/index.js');
 
const port=process.env.PORT || 9000 ;

const app = express() ;

// middlwares 
app.use(cors()) ;
app.use(express.json()) ;
app.use(express.urlencoded({extended:true})) ;

 
app.post('/create-resume',async (req,res)=>{

  console.log("His ",req.baseUrl)

         pdf.create(cvFormat(req.body) ,{}).toFile('Resume.pdf',(err)=>{
                   if(err){
                       res.status(400).json("Something wrong.......") 
                       console.log(err)
                   }
                  
                  res.status(201).json("Alrights")
                
                   
         })  

           
          
})

app.get('/fetch-resume',(req,res)=>{
   res.sendFile(`${__dirname}/Resume.pdf`)
    
   
})

// app.post("/create-pdf", (req, res) => {
//     pdf.create(pdfSample(req.body), {}).toFile("Resume.pdf", (err) => {
//       if (err) {
//         res.send(Promise.reject());
//         console.log(err);
//       }
//       res.send(Promise.resolve());
//       console.log("Success");
//     });
//   });
  
//   app.get("/fetch-pdf", (req, res) => {
//     res.sendFile(`${__dirname}/Resume.pdf`);
//   });
  
  app.use(express.static("../client/build"));
  
0
 app.listen(port,()=>console.log(`http://localhost:${port}`))



