export interface Job {
  _id: string;
  title: string;
  date: string;
  link: string;
  description: string;
  skills: String[];
}

export interface Project {
  _id: string;
  title: string;
  link: string;
  img: string;
  imgName: string;
  description: string;
  skills: String[];
}
