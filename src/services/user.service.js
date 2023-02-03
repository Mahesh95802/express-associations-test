const { where } = require("sequelize")
const { User, Task } = require("../models")

const getUsers = async () => {
    // const userCreate = await User.create({
    //     name: "John",
    //     email: "john@gmail.com"
    // })
    // const taskCreate1 = await Task.create({
    //     name: "Task 1",
    //     UserId: userCreate.id
    // })
    // const taskCreate2 = await Task.create({
    //     name: "Task 2",
    //     UserId: userCreate.id
    // })
    // const taskCreate3 = await Task.create({
    //     name: "Task 3",
    //     UserId: userCreate.id
    // })
    // const taskCreate4 = await Task.create({
    //     name: "Task 4",
    //     UserId: userCreate.id
    // })
    // return { userCreate, taskCreate1, taskCreate2, taskCreate3, taskCreate4 }
    
    // const users = await User.findAll({
    //     include: Task,
    //     where: {
    //         id: 1
    //     }
    // })
    // const tasks = await Task.findAll({
    //     include: User,
    // })
    // return { users: users, tasks: tasks }
}

const postUser = () => {
    console.log('POST /user service called')
    return { message: "user created" }
}

module.exports = { getUsers, postUser }