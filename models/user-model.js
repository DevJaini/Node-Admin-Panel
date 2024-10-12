
var db = require('./database.js');

module.exports={

add : function(body,result,callback)
        {
            username =body.username;
            email =body.email;
            password =body.password;
            confirm_password =body.confirm_password;
            mobile_no= body.mobile_no; 
            city= body.city;
            state= body.state;  
            position= body.position; 
            starting_date= body.starting_date;
            salary= body.salary; 
            address= body.address; 
            age= body.age;
            gender= body.gender;
            pincode= body.pincode;
    let sql ="INSERT INTO add_user (username,email,password,confirm_password,mobile_no,city,state,position,starting_date,salary,address,age,gender,pincode,image) VALUES ('"+username+"','"+email+"','"+password+"','"+confirm_password+"','"+mobile_no+"','"+city+"','"+state+"','"+position+"','"+starting_date+"','"+salary+"','"+address+"','"+age+"','"+gender+"','"+pincode+"','"+result+"')";
   console.log(sql);
    db.query(sql,(err,res)=>{
        if(err)
        {
            callback(err);
        }
        
    });
         },
    
         user : function(callback)
         {
            db.query("SELECT * FROM add_user",callback);
         },

add_user : function(callback)
    {
       db.query('SELECT * from add_user',callback);
    },


imageupdate : function(req,callback)
    {
        db.query("Update add_user SET `username`='"+req.username+"',  email='"+req.email+"', password='"+req.password+"',  confirm_password='"+req.confirm_password+"', mobile_no='"+req.mobile_no+"', city='"+req.city+"',  state='"+req.state+"', position='"+req.position+"', starting_date='"+req.starting_date+"',  salary='"+req.salary+"', address='"+req.address+"', age='"+req.age+"',  gender='"+req.gender+"', pincode='"+req.pincode+"',image='"+req.image+"' where id='"+req.userId+"' ",callback);
    },

updatefeed : function(req,userId,callback)
    {
        console.log("Update add_user SET `username`='"+req.username+"',  email='"+req.email+"', password='"+req.password+"',  confirm_password='"+req.confirm_password+"', mobile_no='"+req.mobile_no+"', city='"+req.city+"',  state='"+req.state+"', position='"+req.position+"', starting_date='"+req.starting_date+"',  salary='"+req.salary+"', address='"+req.address+"', age='"+req.age+"',  gender='"+req.gender+"', pincode='"+req.pincode+"' where id='"+userId+"' ");
        db.query("Update add_user SET `username`='"+req.username+"',  email='"+req.email+"', password='"+req.password+"',  confirm_password='"+req.confirm_password+"', mobile_no='"+req.mobile_no+"', city='"+req.city+"',  state='"+req.state+"', position='"+req.position+"', starting_date='"+req.starting_date+"',  salary='"+req.salary+"', address='"+req.address+"', age='"+req.age+"',  gender='"+req.gender+"', pincode='"+req.pincode+"' where id='"+userId+"' ",callback);
    },

user_details : function(userId, callback)
    {
   db.query("Select * from add_user where id = '"+userId+"'",callback);
    },

edit : function(userId, callback)
    {
   db.query("Select * from add_user where id = '"+userId+"'",callback);
    },

delete : function (userId, callback)
    {
   db.query("DELETE from add_user where id  = '"+userId+"'",callback);
    },

}