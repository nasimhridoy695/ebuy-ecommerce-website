import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456',10), // 10 is the salt\
        isAdmin: true,
    },
    {
        name: 'hridoy',
        email: 'hridoy@gmail.com',
        password: bcrypt.hashSync('123456',10), // even if we have same password, it will be hashed differently
        isAdmin: false,
    },
    {
        name: 'sakib',
        email: 'sakib@gmail.com',
        password: bcrypt.hashSync('123456',10), // 10 is the salt\
        isAdmin: false,
    },
];

export default users;