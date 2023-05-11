import axios from 'axios';

export default async function handler(req, res) {
  const { topic } = req.query;

  try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${topic}`);
    const repositories = response.data.items;
    res.status(200).json(repositories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch repositories' });
  }
}
