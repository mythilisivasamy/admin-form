let express = require("express");
let cors = require("cors");
let bodyparser=require("body-parser");
let mongoose = require("mongoose");

//-----------middleware---------------------
let app=express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.json());
//------------------------------------

let uri ="mongodb://localhost:27017/adminform";
mongoose.connect(uri,{useNewUrlParser: true , useUnifiedTopology: true})
.then(res=>console.log("success with mongoose"))
.catch(error=> console.log("error: ",error));
let Schema = mongoose.Schema;
let objectId = Schema.ObjectId;

const answerSchema=new Schema({
    key:'string',
    value:'string',
    levels:[Number]
});

const contentSchema=new Schema({
    q_title:'string',
    content_type:'string',
    settings:{
        required:'string',
        max_length:'number',
    },
    answers:[answerSchema]
});

const FormSchema=new Schema({
    form_name:'string',
    category:'string',
    max_level:'number',
    contents:[contentSchema]
});

let FormModel = mongoose.model('form',FormSchema);
//CREATE Document
app.post("/addForm/:id",(req,res)=>{
   let form = new FormModel(req.body);
   if(req.params.id === 'new'){
    form.save()
    .then((form$)=>{
           res.status(200).json({'form_id':form$._id,'form_name':form$.form_name,'category':form$.category,'max_level':form$.max_level});
    })
    .catch(err=>console.log("Could be Schema mismatch",err));
   }
   else{
    FormModel.findByIdAndUpdate(req.params.id,{$push:{contents:req.body.contents}},
        (err,form$)=>{
            if(err){
                console.log(err);
            }else{
               res.status(200).json({'form_id':form$._id,'form_name':form$.form_name,'category':form$.category,'max_level':form$.max_level});
            }
        });
   }
   
})
    
//READ
app.get("/forms",(req,res)=>{
  Form.find(function(error,forms){
        if(error){
            console.log("error: ",error);
        }else{
            res.send(forms);
        }
    })
});

app.get("/getContents/:id",(req,res)=>{
    FormModel.findById({_id:req.params.id},(err,form)=>{
        if(err){
            console.log("Error on fetching contents",err)
        }else{
            console.log(form.contents)
            res.send(form.contents);
        }
    })
})

//DELETE

app.delete("/delete/:id",(req,res)=>{
  Form.findByIdAndRemove({_id:req.params.id},(err,form)=>{
        if(err){console.log("error on id :",err)}
        else{
            res.status(200).json({'message':`${form} is deleted`})
        }
    })
    })

app.listen(8000,()=>{
    console.log("server is running at 8000")
})