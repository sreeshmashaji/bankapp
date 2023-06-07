const ds=require("./dataservice")
const dab=require("./db")

const deposit=(acno,password,amount) =>{
  var amt=parseInt(amount)
  return dab.User.findOne({"acno":acno,"password":password})
  .then(user =>{
    console.log("USER",user)
  if(user){
    user.balance+=amt
    user.transaction.push({
      "amount":amt,

      "type":"deposit",
      "status":"success",
      "Date": new Date()

    })
    user.save()
    return{
     statusCode:220,
      status:true,
      message:`Rupees ${amt} successfully credited to your account and your balance is ${user.balance}`
    }
  } else{
    return{
      statusCode:400,
      status:false,
      message:"transaction failed"
    }

  }
  
  })
}
 

  //   if (acno in database) {
  //     if (password== database[acno]["password"]) {
  //       database[acno]["Balance"] = Number(database[acno]["Balance"]) + Number(amount)
  //       database[acno]['transaction'].push( {
  //         'Mode': "online",
  //         "Type": "Deposit",
  //         "Balance": amount
  //       })
  //       console.log("DATABASE", database)
  //       console.log(database[acno]['transaction'])
  //       return{
  //         statusCode:200,
  //         status:false,
  //         message:`Amount ${amount} addedd successfully ,Current balance is ${database[acno]["Balance"]}`,
  //         "transacton":database[acno]['transaction']
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
  //       return{
  //           statusCode:400,
  //           status:true,
  //           message:"no such accounts",
  //           // "transacton":database[acno]['transaction']
  //         }
  //   }
  // }
  const withdraw=(acno,password,amount)=> {
    var amt=parseInt(amount)
    
    return dab.User.findOne({"acno":acno,"password":password})
    .then(user=>{
      console.log("USER",user)
  if(user){
    user.balance-=amt
    user.transaction.push({
      "amount":amt,

      "type":"withdraw",
      "status":"success",
      "Date": new Date()

    })
    user.save()
    return{
     statusCode:220,
      status:true,
      message:`Rupees ${amt} successfully credited to your account and your balance is ${user.balance}`
    }
  } else{
    return{
      statusCode:400,
      status:false,
      message:"transaction failed"
    }

  }
  
  })
}

    
  

  //   if (acno in database) {
  //     if (password == database[acno]["password"]) {
  //       if (Number(amount) < Number(database[acno]["Balance"]))
  //       {
  
  //         database[acno]["Balance"] = Number(database[acno]["Balance"]) - Number(amount)
  //         database[acno]['transaction'].push( {
  //           'Mode': "online",
  //           "Type": "Deposit",
  //           "Balance": amount
  //         })
  //         console.log("DATABASE", database)
  //         console.log(database[acno]['transaction'] )
  //         return{
  //           statusCode:200,
  //           status:true,
  //           message:`Amount ${amount} debited successfully ,Current balance is ${database[acno]["Balance"]}`,
  //           "transaction":database[acno]['transaction'],
  //           "balance":database[acno]["Balance"]
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
  
  const history=(acno)=>{
    return dab.User.findOne({acno})
    .then(user=>{
      if(user){
        return{
          statusCode:200,
          status:true,
          message:"Data Recieved Successfully",
          
          transaction:user.transaction
          
        }
      }
    })
    
  }
  

  const deleteacc=(acno)=>{

    return dab.User.deleteOne({acno})
    .then(user=>{
      if(!user){
        return{
          statusCode:400,
          status:false,
          message:"operation failed",
          
        
          
        }
        
      }else{
        return{
          statusCode:200,
          status:true,
          message:" The account with account number "+acno+" is deleted successfully"
        }
      }
    })
  }




  module.exports={deposit,withdraw,history,deleteacc}