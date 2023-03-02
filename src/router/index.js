import express, { Router } from "express";
var router = express.Router()
import {getindex}  from '../controller/homeController'

const initRouter = app=>{

    app.get('/', getindex)
    app.use('/',router)
}

export default initRouter 
