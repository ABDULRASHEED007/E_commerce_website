const User = require("../models/user.model");
const jwtProvider = require("../config/jwtProvider.js");
const bcrypt = require("bcrypt");


const createUser = async (userData) => {
    try {
        let { firstName, lastName, email, password } = userData;

        const UserExist = await User.findOne({ email });

        if (UserExist) {
            throw new Error("User already Exist!!:", email)
        }

        password = await bcrypt.hash(password, 10);

        const user = await User.create({ firstName, lastName, email, password })

        return user;

    } catch (error) {
        throw new Error(error.message)

    }
}

const findUserById = async (userId) => {
    try {
        const user = await User.findById(userId)
        // .populate("address");
        if (!user) {
            throw new Error('No user found with this id:', userId);

        }

        return user;

    } catch (error) {
        throw new Error(error.message)

    }
}


const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('No user found with this email:', email);

        }

        return user;

    } catch (error) {
        throw new Error(error.message)

    }
}

const getUserProfileByToken = async (token) => {
    try {
        const userId = jwtProvider.getUserIdFromToken(token);
        const user = await findUserById(userId);

        if (!user) {
            throw new Error(`No user found with Id : ${userId}`);
        }

        return user;

    } catch (error) {
        throw new Error(error.message)

    }

}


const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users
    } catch (error) {
        throw new Error(error.message)

    }
}







module.exports = { createUser, findUserById, getUserByEmail, getUserProfileByToken, getAllUsers }