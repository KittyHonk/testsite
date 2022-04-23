const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Reports} = require('../models/models')

const generateJwt = (row_id, login, role, region) => {
    return jwt.sign({row_id, login, role, region}, process.env.SECRET_KEY, {expiresIn: "24h"})
}

class userController {
    async registration(req, res, next) {
        const {login, password, role, region} = req.body
        if(!login || !password) {
            return next(ApiError.badRequest("Некорректные логин или пароль"));
        }
        const candidate = await User.findOne({where: {login}});
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({login, role, password: hashPassword, region})
        const token = generateJwt(user.row_id, user.login, role, user.region)
        return res.json({token})
    }

    async login(req, res, next) {
        const {login, password} = req.body
        const user = await User.findOne({where: {login}})
        if (!user) {
            return next(ApiError.internal("Пользователь не найден"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal("Указан неверный пароль"))
        }
        const token = generateJwt(user.row_id, user.login, user.role, user.region)
        return res.json({token})
    }

    async check(req, res) {
        const token = generateJwt(req.user.row_id, req.user.login, req.user.role, req.user.region)
        return res.json({token})
    }
}

module.exports = new userController()