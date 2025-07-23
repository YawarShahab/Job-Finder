import company from "../Models/company.js";

export const companyReg =async (req, res) => {
  try{
    const newComp = new company(req.body);
    await newComp.save();
    res.status(201).json({message: "Company registered succesfully!"});
  }
  catch(error){
    res.status(400).json({error: "Failed to register the company" + error.message});
  }
};


export const getAllComp = async (req, res) => {
  try {
    const companys = await company.find();
    res.status(200).json(companys);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

