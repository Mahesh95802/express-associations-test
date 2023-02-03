const userService = require('../services/user.service')

const getUsers = async (req, res) => {
    console.log('GET /users controller called')
    const response = await userService.getUsers()
    res.json(response)
}

const postUser = (req, res) => {
    console.log('POST /user controller called')
    const response = userService.postUser()
    res.json(response)
}

module.exports = { getUsers, postUser }