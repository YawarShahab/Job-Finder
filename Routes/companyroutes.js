import express from 'express';

import {companyReg, getAllComp } from '../Controllers/companycontroller.js';

const crouter = express.Router();

crouter.post('/', companyReg);
crouter.get('/', getAllComp);      


export default crouter;