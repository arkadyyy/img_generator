import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const secretKey = process.env.JWT_SECRET_KEY
export function createUser(email,password) {

    //check if user exsists
    const user = db.prepare(`SELECT * FROM users WHERE email = ?`).get(email)
    if(user){
        throw new Error('user creation failed, invalid creation')
    }
    // if we did not found exsisting user , create one
    const hashedPassword = bcrypt.hashSync(password,12)
    const result = db.insert('INSERT INTO users (email,password) VALUES (?,?)').run(email,hashedPassword)
    const token = jwt.sign({id : result.lastInsertRowid},secretKey , {expiresIn : '1h'})

    return token
    
}

export function login(email,password){
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email)
    if(!user || !bcrypt.compareSync(password,user.password)){
        const error = new Error('invalid email or password')
        error.status = 400
        throw error
    }

    const token = jwt.sign({id : user.id},secretKey,{expiresIn : '1h'})
    return token
}