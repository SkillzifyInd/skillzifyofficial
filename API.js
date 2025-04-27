const express=require("express")
const app=express()
const bodyP=require("body-parser")
const compiler=require("compilex")
const options={stats:true}
compiler.init(options)
app.use(bodyP.json())
app.use("/codemirror-5.65.18",express.static("C:/Users/DELL/Documents/COMPILER/codemirror-5.65.18"))
app.get("/",function(req,res){
    compiler.flush(function(){
        console.log("deleted")
    })
    res.sendFile("C:/Users/DELL/Documents/COMPILER/index.html")
})
app.post("/compile",function(req,res){
    var code=req.body.code
    var input =req.body.input
    var lang=req.body.lang
    try{
        if(lang="python"){
            if(!input){
            var envData = { OS : "windows"};  
            compiler.compilePython( envData , code , function(data){
                if(data.output){
                    res.send(data);
                }
                else{
                    res.send({output:"error"})
                }
            });
        }
        else{
            var envData = { OS : "windows"}; 
            compiler.compilePythonWithInput( envData , code , input ,  function(data){
                if(data.output){
                    res.send(data);
                }
                else{
                    res.send({output:"error"})
                }       
    })
        }
        }

    }
    catch(e){
        console.log("error")
    }
})

app.listen(8000)