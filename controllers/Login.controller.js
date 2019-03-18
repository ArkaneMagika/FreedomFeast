class LoginController{
    checkPassword(pass, user_pass){
        bcrypt.compare(pass, user_pass, function(err, passCheck){
    
            if(passCheck){
                const token = jwt.sign(user, process.env.JWT_SECRET,{
                    expiresIn:60*2
                });
                return token;
            }
            else{
                console.error(`Passwords do no match: ${err}`)
                return err;
            }
        })
    }
}