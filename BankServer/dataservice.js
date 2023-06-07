
const jwt=require('jsonwebtoken')
const db=require('./db')

database =
    {
      1000: { acno: 1000, uname: "Vignesh", password: 1000, Balance: 10000,transaction:[] }
    }
    



    const register=(acno,uname,password)=>{

      return db.User.findOne({acno})
      .then(user=>{                     //promise is used with then and catch
        if(user){
          return{
            statusCode:404,
            status:false,
            message:"already a user"
          }
        }else{
          const newUser= new db.User({
            acno,
            uname,                //to match with content in db.js 
             password,
            balance:0,
            transaction:[]
    
          })
          newUser.save()                //save newUser to database
          return{
            statusCode:200,
            status:true,
            message:"registered successfully"
          }
        }
      })
    }



    
      //   if(acno in database){
      //     return {
      //       "statuscode":422,
      //       "status":false,
      //       "message":"user already exist"
      //     }
      //   }else{
      //     database[acno]={
      //       acno,
      //       uname,
      //       password,
      //       balance:0
      //     }
      //     console.log(database);
          
      //     return {
      //       "statuscode":203,
      //       "status":true,
      //       "message":"registered successfully"
      //     }
      //   }  
      // }

     const login=(acno,password) =>
  {
return db.User.findOne({"acno":acno,"password":password})
.then(user=>{
  if(user){
    currentname=user.uname
    currentacno=acno
    

    // if (acno in database) 
    // {
    //   if (pswd== database[acno]['password'])  {
    //      var username=database[acno]["uname"]
    //      var accountnumber=database[acno]["acno"]
         const token=jwt.sign({currentacno:acno}
          ,"superkey@123")

        return{
            statusCode:200,
            status:true,
            message:"successfull",
           currentname,
           currentacno,
            token
        }
        
      }
      else 
      {
        
        return {
            statusCode:400,
            status:false,
            message:"Password incorrect"
        }
      }
    }
    // else 
    // {
      
    //   return {
        
    //     statusCode:400,
    //     status:false,
    //     message:"Not registered"
    //   }
    // }
)}



// const deposit=(acno,password,amount) =>{
 

//   if (acno in database) {
//     if (password== database[acno]["password"]) {
//       database[acno]["Balance"] = Number(database[acno]["Balance"]) + Number(amount)
//       database[acno]['transaction'] = {
//         'Mode': "online",
//         "Type": "Deposit",
//         "Balance": amount
//       }
//       console.log("DATABASE", database)
//       return{
//         statusCode:200,
//         status:false,
//         message:`Amount ${amount} addedd successfully ,Current balance is ${database[acno]["Balance"]}`
//       }
//     }
//     else {
//       return{
//         statusCode:400,
//         status:true,
//         message:"password incorrect"
//       }
//     }
//   }
//   else {
//     alert("No such acounts")
//   }
// }



//  const withdraw=(acno,password,amount)=> {


//   if (acno in database) {
//     if (password == database[acno]["password"]) {
//       if (Number(amount) < Number(database[acno]["Balance"]))
//       {

//         database[acno]["Balance"] = Number(database[acno]["Balance"]) - Number(amount)
//         database[acno]['transaction'] = {
//           'Mode': "online",
//           "Type": "Deposit",
//           "Balance": amount
//         }
//         console.log("DATABASE", database)
//         return{
//           statusCode:200,
//           status:true,
//           message:`Amount ${amount} debited successfully ,Current balance is ${database[acno]["Balance"]}`
//         }
//       }
//       else {
//         return{
//           statusCode:400,
//           status:false,
//           message:"insufficient balance"
//         }
//       }
//     }
//     else {
//       return{
//         statusCode:400,
//         status:false,
//         message:'password incorrect'
//       }
//     }

//   }
//   else {
//     return{
//       statuscode:400,
//       status:false,
//       message:'no such accounts'
//     }
//   }
// }




      module.exports={register,login}

      
    
    