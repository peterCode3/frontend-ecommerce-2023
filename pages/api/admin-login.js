import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

const secretKey = 'your-secret-key'; // Store this securely

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Replace with your actual admin credentials validation logic
    if (email === 'codewithpassion3@gmail.com' && password === 'admin123') {
      // Generate and send a JWT token on successful login
      const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' }); // Customize expiration
      res.status(200).json({ success: true, token });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
