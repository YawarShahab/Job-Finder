import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  companyName: {type: String, required: true},
  companyEmail: {type: String, required: true},
  industry: {type: String},
  size: {type: String},
  website: {type: String},
  contactName: {type: String},
  jobTitle: {type: String},
  phone: {type: String},
  password: {type: String},
  confirmPassword: {type: String},
  description: {type: String}
}, { timestamps: true });

export default mongoose.model('Company', companySchema);



