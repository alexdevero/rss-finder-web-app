import { useState } from 'react'
import axios from 'axios'
import sanitizeHtml from 'sanitize-html'

import { AppError } from './app-error'
import { AppFeeds } from './app-feeds'
import { AppFormButton } from './app-form-button'
import { AppForm } from './app-form'
import { AppHeader } from './app-header'

interface FeedUI {
  title: string;
  url: string;
}

interface ResponseUI {
  data: {
    feeds: FeedUI[];
  }
}

export function App() {
  const [feeds, setFeeds] = useState<FeedUI[]>([])
  const [websiteURL, setWebsiteURL] = useState('')
  const [error, setError] = useState('')

  const handleURLInput = (url: string) => {
    let urlSanitized = sanitizeHtml(url)

    if (urlSanitized.indexOf('http') === -1) {
      urlSanitized = 'http://' + urlSanitized
    }

    setWebsiteURL(urlSanitized)
    setError('')
  }

  const handleFeedURsFetching = () => {
    if (websiteURL.length > 0) {
      axios.post('/api/rss-finder', { websiteUrl: websiteURL })
        .then((response: ResponseUI) => {
          setFeeds(response.data.feeds)
          setError('')
        })
        .catch((error) => {
          console.log('error: ', JSON.stringify(error, null, ' '))
          setError('No RSS feeds found.')
        })
    }
  }

  return (
    <div className="container pt-4">
      <div className="row justify-content-center">
        <div className="col-sm-10 col-md-7 col-lg-6 col-xl-5">
          <AppHeader />

          <AppForm
            websiteURL={websiteURL}
            handleURLInput={handleURLInput}
          />

          {/* <div className="input-group mb-4">
            <label htmlFor="urlInput" className="input-group-text">
              <i className="bi bi-link-45deg" />
            </label>

            <input
              type="text"
              name="urlInput"
              id="urlInput"
              className="form-control"
              placeholder="Enter website URL (without http:// or https://)"
              aria-label="Website URL"
              aria-describedby="urlInput"
              defaultValue={websiteURL}
              onChange={(event) => handleURLInput(event.target.value)}
            />
          </div> */}

          <AppFormButton handleFeedURsFetching={handleFeedURsFetching} />
          {/* <div className="text-center">
            <button className="btn btn-primary" onClick={handleFeedURsFetching}>Get feed URLs</button>
          </div> */}

          {feeds.length > 0 && (
            <AppFeeds feeds={feeds} />
            /* <div className="app-feeds-list mt-4">
              <h2 className="h5 mb-2">Found RSS feeds:</h2>

              <ul className="list-unstyled">
                {feeds.map((feedUrl: FeedUI, index: number) => {
                  return <li key={index}>{feedUrl.url}</li>
                })}
              </ul>
            </div> */
          )}

          {error.length > 0 && (
            <AppError error={error} />
            /* <div>{error}</div> */
          )}
        </div>
      </div>
    </div>
  )
}
