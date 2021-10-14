const bcrypt = require('bcryptjs')
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      const {username, email, firstName, lastName, password} = req.body
      const salt = bcrypt.genSaltSync(7)
      const passwordHash = bcrypt.hashSync(password, salt)
      let newUser = {
        username,
        email,
        firstName,
        lastName,
        passwordHash
      }
        
        users.push(newUser)
        let returnUser = {...newUser}
        delete returnUser.passwordHash
        res.status(200).send(returnUser)
    }
}