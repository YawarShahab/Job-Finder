import express from "express";

import {submitApplication, getAllApps } from "../Controllers/applicationcontroller.js";

const arouter = express.Router();

arouter.post('/', submitApplication );
arouter.get('/', getAllApps);      


export default arouter;