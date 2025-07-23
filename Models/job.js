import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: {String},
  rating: {type: Number},
  jobType: {type: String},
  postedAt: { type: Date, default: Date.now },
  salary: String,
  description: String,
  skills: [String],
  requirements: String,
  benefits: String
},{timestamps: true});

const Job = mongoose.model('Job', jobSchema);

export default Job;
