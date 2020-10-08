const bcrypt=require('bcryptjs');

const salt = bcrypt.genSaltSync(10)

const users=[
    {
        name:"Admin",
        email:"admin@admin.com",
        password:bcrypt.hashSync("xxxx",salt),
        isAdmin:true
    },
    {
        name:"Hien",
        email:"lvhien1505@gmail.com",
        password:bcrypt.hashSync("xxxx",salt),
    },
    {
        name:"Le",
        email:"hien@gmail.com",
        password:bcrypt.hashSync("xxxx",salt),
    }
]


module.exports=users;