import fs from 'fs';

export default async function handler(req, res) {

const data= await fs.promises.readdir('blogdata');
    const allBlogs = [];
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        console.log(item);
      const myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8');
        allBlogs.push(JSON.parse(myfile)); 
    }
    res.status(200).json((allBlogs));
  };