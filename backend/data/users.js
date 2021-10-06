import bcrypt from 'bcrypt';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Avi Cohen',
        email: 'avi@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Dana Levi',
        email: 'dana@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users;