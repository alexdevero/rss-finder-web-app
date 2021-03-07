// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const rssFinder = require('rss-finder')

export default async (req, res) => {
  if (req.body && req.body.websiteUrl) {
    rssFinder(req.body.websiteUrl)
      .then((data) => {
        res.status(200).json({
          feeds: data.feedUrls
        })
      })
      .catch((err) => {
        res.status(500).json({
          message: err
        })
      })
  } else {
    res.status(500).json({
      message: err
    })
  }
}
