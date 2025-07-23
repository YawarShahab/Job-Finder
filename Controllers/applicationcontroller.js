import application from '../Models/application.js';

export const submitApplication = async (req, res) => {
  try{
    const newApp = new application(req.body);
    await newApp.save();
    res.status(201).json({message: "Application submitted succesfully"});  
  }
  catch (error){
    res.status(400).json({error: "Failed to submit application" + error.message });
  }
};

export const getAllApps = async (req, res) => {
  try {
    const applications = await application.find();
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

