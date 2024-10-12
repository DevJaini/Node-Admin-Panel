const md5 = require('md5');
const multer = require('multer');
const path = require('path');
const { body, validationResult } = require('express-validator');
const { GeneralError, NotFound } = require("../public/middleware/error");

var model = require('../models/user-model');

const storage = multer.diskStorage({
    destination: './public/assets/uploads',
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + 
        path.extname(file.originalname));
    }
   });

const upload = multer({
    storage: storage
}).array('image', 10);

 exports.add = [ 
    body('username', 'Username is required').trim().isLength({ min: 1 }).escape(),
    body('email', 'Email is required').trim().isLength({ min: 1 }).escape(),
    body('password', 'password must contains lower case, upper case and between 6 and 16 characters').trim().isLength({ min: 1 }).escape(),
    body('confirm_password', 'Password and confirm password do not match').trim().isLength({ min: 1 }).escape(),
    body('mobile_no', 'Mobile Number is required').trim().isLength({ min: 1 }).escape(),
    body('city', 'city is required').trim().isLength({ min: 1 }).escape(),
    body('state', 'state is required').trim().isLength({ min: 1 }).escape(),
    body('position', 'position is required').trim().isLength({ min: 1 }).escape(),
    body('starting_date', 'starting_date is required').trim().isLength({ min: 1 }).escape(),
    body('salary', 'salary is required').trim().isLength({ min: 1 }).escape(),
    body('address', 'address is required').trim().isLength({ min: 1 }).escape(),
    body('age', 'age is required').trim().isLength({ min: 1 }).escape(),
    body('gender', 'gender is required').trim().isLength({ min: 1 }).escape(),
    body('pincode', 'pincode is required').trim().isLength({ min: 1 }).escape(),
     (req, res, next) => {
try{
    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            var err1 = errors.array();

            console.log("Value inside try block",err1);
            res.render('user_add', {
                error: err1
            });
        }
    upload(req, res, (err) => {
        if(err){
            res.render('user_add', {
                msg: err
            });
        }
        const files = req.files;
        let index, len;
          for (index = 0, len = files.length; index < len; ++index)
         { 
                 model.add(req.body,files[index].filename,(err, results) => {
                       if(err)   {
                        next(new NotFound('Incomplete information'));
                                var error1 = [];
                                error1.push({ msg: 'Incomplete information' });
                                console.log(error1);
                                res.render('user_add', {
                                    error: error1
                            });
                        }
                     });          
                  } 
                });
                
    }
  
catch (err) {
    var error1 = [];
    error1.push({ msg: 'Please try again' });
    console.log(error1);
    next(new GeneralError('error while getting users information'))
    res.render('user_add', {
        error: error1
    });
}}
 ];

        exports.update = (req, res, next) => {
try{
            upload(req, res, (err) => {
                if(err){
                    res.render('edit', {
                        msg: err
                    });
                }

                
        
            if (req.files.length > 0) {
                if (req.files[0].fieldname == "image") {   
                    let password = md5(req.body.password);
                let confirm_password = md5(req.body.confirm_password);                
                    user1 = {
                        username: req.body.username,
                        email: req.body.email, 
                        password: password, 
                        confirm_password: confirm_password, 
                        mobile_no: req.body.mobile_no, 
                        city: req.body.city, 
                        state: req.body.state, 
                        position: req.body.position, 
                        starting_date: req.body.starting_date,
                        salary: req.body.salary, 
                        address: req.body.address, 
                        age: req.body.age, 
                        gender: req.body.gender,
                        pincode: req.body.pincode, 
                        image: req.files[0].filename
                    }
                   model.imageupdate(user1,req.body.id,(err, results) => {
                        if(err) throw err;
                        res.redirect('/user');
                        });
                    }
                    }
    
            else {
                let password = md5(req.body.password);
                let confirm_password = md5(req.body.confirm_password);
                
                user1 = {
                    username: req.body.username,
                    email: req.body.email, 
                    password: password, 
                    confirm_password: confirm_password, 
                    mobile_no: req.body.mobile_no, 
                    city: req.body.city, 
                    state: req.body.state, 
                    position: req.body.position, 
                    starting_date: req.body.starting_date,
                    salary: req.body.salary, 
                    address: req.body.address, 
                    age: req.body.age, 
                    gender: req.body.gender,
                    pincode: req.body.pincode
                }
                model.updatefeed(user1,req.body.id,(err, results) => {                   
                   if(err) throw err;
                    res.redirect('/user');
                    });
                }
                });
            }
            catch (err) {
                next(new GeneralError('error while getting users list'))
            }
        }

            exports.index = (req, res) => {
                res.render('index', {
                    title : 'Qrioustech'
                });
            }

            exports.add_user = (req, res,next) => {
                try{
                model.add_user( (err, rows) => {
                    if(err) throw err;
                    res.render('user', {
                        users : rows
            
                    });
                });
            }
            
            catch (err) {
                next(new GeneralError('error while getting users list'))
            }
        }
            exports.user_details = (req, res) => {
                try{
                model.user_details(req.query.userId, (err, rows) => {
                    if(err) throw err;
                    res.render('user-details', {
                        users : rows[0]
                    });
                });
            }
            catch (err) {
                next(new GeneralError('error while getting users list'))
            }
        }
            
            exports.edit = (req, res,next) => {
                try{
                model.edit(req.query.userId, (err, rows) => {
                    if(err) throw err;
                    res.render('edit', {
                        users : rows[0]
                    });
                });
            }
            catch (err) {
                next(new GeneralError('error while getting users list'))
            }
        }
            
            exports.delete_detail = (req, res, next) => {
                try{
                model.delete(req.query.userId,(err, result) => {
                    if(err) throw err;
                    res.redirect('/user');
                });
            }
            catch (err) {
                next(new GeneralError('error while getting users list'))
            }
        }

        exports.user = (req, res, next) => {
            try{
            model.user((err, rows) => {
                if(err) throw err;
                res.render('user', {
                    users : rows,
                });
            });
        }
        catch (err) {
            next(new GeneralError('error while getting users list'))
        }
    }  

            exports.email = (req, res) => {
                res.render('email');
            }
            
            exports.chat = (req, res) => {
                res.render('chat');
            }
            
            exports.change_password = (req, res) => {
                res.render('change-password');
            }
            
            exports.compose_email = (req, res) => {
                res.render('compose-email');
            }
            
            exports.profile = (req, res) => {
                res.render('profile');
            }
            
            exports.read =(req, res) => {
                res.render('read');
            }
            
            exports.user_add = (req, res) => {
                res.render('user_add');
            }
            
            exports.footer = (req, res) => {
                res.render('partials/navbar');
            }
            
            exports.header = (req, res) => {
                res.render('partials/header');
            }
            
            exports.navbar = (req, res) => {
                res.render('partials/navbar');
            }
            
            exports.sidebar = (req, res) => {
                res.render('partials/sidebar');
            }

            exports.currency_ratio = (req, res, next) => {
                try{
                model.user((err, rows) => {
                    if(err) throw err;
                    res.render('currency_ratio', {
                        users : rows,
                    });
                });
            }
            catch (err) {
                next(new GeneralError('error while getting users list'))
            }
        }  

        exports.currency_ratio_add = (req, res,next) => {
            try{
            model.add_user( (err, rows) => {
                if(err) throw err;
                res.render('currency_ratio_add', {
                    users : rows
        
                });
            });
        }
        
        catch (err) {
            next(new GeneralError('error while getting users list'))
        }
    }
                

