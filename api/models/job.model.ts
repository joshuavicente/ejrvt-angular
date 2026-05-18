import { Schema, model } from 'mongoose';

const jobSchema = new Schema(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
    skills: { type: [Object], required: true },
  },
  { collection: 'jobs' },
);

export const Job = model('Job', jobSchema);
