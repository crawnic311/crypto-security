const bcrypt = require('bcryptjs')
const users = []

module.exports = {
    login: (req, res) => {
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          const userExists = bcrypt.compareSync(password, user[i].passwordHash)
          if(userExists) {
            let returnUser = {...user[i]}
            delete returnUser.passwordHash
            res.status(200).send(returnUser)
          } 
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
        console.log(returnUser)
    }
}

