const express=require('express')//export express
// const jsonwebtoken = require('jsonwebtoken')
const ds =require('./dataservice')
const dp=require('./depositservice')
const jwt=require('jsonwebtoken')
const cors=require('cors')


//app creation
const app=express()
app.use(express.json())
app.use(cors({
    origin:'http://localhost:4200'
}))

//resolving req
// app.get('/getmethod',(req,res)=>{res.send("this is a  get method")})
// app.post('/',(req,res)=>{res.status(400).send("this is a  post method")})
const appMiddleware=(req,res,next)=>{
    console.log("Application specific Middleware")
    next()
}


const jsontokenmiddleware=((req,res,next)=>{
    try{
        const token=req.headers["x-access-token"]
        const data=jwt.verify(token,"superkey@123")
        if(req.body.acno == data.currentacno){
            next()
        }
    }
    catch{
        return{
            statusCode:400,
            status:false,
            message:"login first"
        }
    }

})

app.use(appMiddleware)


app.post('/register',(req,res)=>{

    ds.register(req.body.acno,req.body.uname,req.body.password)
    .then(user=>{
    if(user)
    {
        res.status(user.statusCode).json(user)
        
    
    }
})
    

})



app.post('/login',(req,res)=>{

    ds.login(req.body.acno,req.body.password)
    .then(user=>{
    if(user)
    {
        res.status(user.statusCode).json(user)
        
    
    }
   
})})
app.post('/deposit',jsontokenmiddleware,(req,res)=>{
    dp.deposit(req.body.acno,req.body.password,req.body.amount)
    .then(user=>{
    if(user)
    {
        console.log("STATUS SUCCESS")
        res.status(user.statusCode).json(user)
    }
})
})

app.post('/withdraw',jsontokenmiddleware,(req,res)=>{
    dp.withdraw(req.body.acno,req.body.password,req.body.amount)
    .then(user=>{
        if(user)
        {
            console.log("STATUS SUCCESS")
            res.status(user.statusCode).json(user)
        }
    })
    })
   
    app.post('/history',(req,res)=>{
        dp.history(req.body.acno,req.body.password)
        .then(user=>{
            if(user)
            {
                console.log("STATUS SUCCESS")
                res.status(user.statusCode).json(user)
            }
        })
        })

        app.delete('/deleteacc/:acno',(req,res)=>{
            dp.deleteacc(req.params.acno)
            .then(user=>{
                if(user)
                {
                   
                    res.status(user.statusCode).json(user)
                }
            })
            })
    




app.listen(3002,()=>{
    console.log("Server listening to port number 3002");
})