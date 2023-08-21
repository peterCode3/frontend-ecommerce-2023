import fs from 'fs';

export default function handler(req, res) {
  const filePath = `blogdata/${req.query.slug}.json`;

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ error: "Data not found" });
      return;
    }
    
    console.log(req.query.slug);
    res.status(200).json(JSON.parse(data));
  });
}
