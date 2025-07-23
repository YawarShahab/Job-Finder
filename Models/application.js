import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String},
  resume: {type: String},
  coverLetter: {type: String},
  linkedin: {type: String},
  github: {type: String},
  portfolio: {type: String},
  startDate: {type: String},
  referral: {type: String},
  relocate: {type: Boolean}
 
}, { timestamps: true });

export default mongoose.model('Application', applicationSchema);