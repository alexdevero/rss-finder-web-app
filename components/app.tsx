import { useState } from 'react'

interface feedUrlUI {
  title: string;
  url: string;
}

interface ResponseUI {
    site: {
        title: string;
        favicon: string;
        url: string
    },
    feedUrls: feedUrlUI[];
}

export function App() {
  const [feeds, setFeeds] = useState<string[]>([])
  const [websiteURL, setWebsiteURL] = useState('')

  const getFeedURs = () => {
    if (websiteURL.length > 0) {
    }
  }

  return (
    <div className="container pt-4">
      <div className="row justify-content-center">
        <div className="col-sm-10 col-md-7 col-lg-6 col-xl-5">
          <img src="/images/rss-icon.svg" className="app-logo mx-auto d-block mb-4" alt="logo" width="100" />

          <h1 className="h3 text-center mb-4">RSS Finder</h1>

          <div className="input-group mb-4">
            <label htmlFor="urlInput" className="input-group-text">
              <i className="bi bi-link-45deg" />
            </label>

            <input
              type="text"
              name="urlInput"
              id="urlInput"
              className="form-control"
              placeholder="Enter website URL"
              aria-label="Website URL"
              aria-describedby="urlInput"
              defaultValue={websiteURL}
              onChange={(event) => setWebsiteURL(event.target.value)}
            />
          </div>

          <div className="app-feeds-list">
            <h2 className="h5">Found RSS feeds:</h2>

            <ul>
              {feeds.map((feedUrl) => {
                return <li></li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
