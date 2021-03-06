// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const rssFinder = require('rss-finder')

export default async (req, res) => {
  try {
    const data = await rssFinder('http://www.nytimes.com')

    res.status(200).json({
      data: data
    })
  }
  catch (err) {
    res.status(500).json({
      data: err
    })
  }
}
