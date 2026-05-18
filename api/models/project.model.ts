import { Schema, model } from 'mongoose';

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    link: { type: String, required: true },
    img: { type: String, required: true },
    imgName: { type: String, required: true },
    description: { type: String, required: true },
    skills: { type: [Object], required: true },
  },
  { collection: 'projects' },
);

export const Project = model('Project', projectSchema);
