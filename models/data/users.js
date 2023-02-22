import User from "../User.js";
import 'dotenv/config.js'
import '../../config/database.js'

let users = [
    {
        mail: "alejandro@mh.com.ar",
        password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
        is_author: true,
        is_company: false,
        is_admin: false,
        is_verified: true,
        verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
        is_online: false,
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
    },{
        mail: "lucas@mh.com.ar",
        password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
        is_author: true,
        is_company: false,
        is_admin: false,
        is_verified: true,
        verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
        is_online: false,
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
    },{
        mail: "jose@mh.com.ar",
        password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
        is_author: true,
        is_company: false,
        is_admin: false,
        is_verified: true,
        verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
        is_online: false,
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
    },{
        mail: "eric@mh.com.ar",
        password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
        is_author: true,
        is_company: false,
        is_admin: false,
        is_verified: true,
        verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
        is_online: false,
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
    },{
        mail: "igna@mh.com.ar",
        password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
        is_author: true,
        is_company: false,
        is_admin: false,
        is_verified: true,
        verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
        is_online: false,
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
    },{
        mail: "silvina@mh.com.ar",
        password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
        is_author: true,
        is_company: false,
        is_admin: false,
        is_verified: true,
        verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
        is_online: false,
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
    },{
        mail: "purple@team.com.ar",
        password: "chau7890",
        is_author: false,
        is_company: true,
        is_admin: false,
        is_verified: true,
        verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
        is_online: false,
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
    },{
        mail: "blue@team.com.ar",
        password: "chau7890",
        is_author: false,
        is_company: true,
        is_admin: false,
        is_verified: true,
        verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
        is_online: false,
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
    },{
        mail: "orange@team.com.ar",
        password: "chau7890",
        is_author: false,
        is_company: true,
        is_admin: false,
        is_verified: true,
        verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
        is_online: false,
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
    },{
        mail: "red@team.com.ar",
        password: "chau7890",
        is_author: false,
        is_company: false,
        is_admin: false,
        is_verified: true,
        verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
        is_online: false,
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
    }
]

User.insertMany(users)