import { useState } from 'react'
import axios from 'axios'
import sanitizeHtml from 'sanitize-html'

import { AppError } from './app-error'
import { AppFeeds } from './app-feeds'
import { AppFormButton } from './app-form-button'
import { AppForm } from './app-form'
import { AppHeader } from './app-header'

import { FeedUI, ResponseUI } from './../interfaces/interfaces'

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

          if (response.data.feeds.length === 0) {
            setError('No RSS feeds found.')
          }
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

          <AppFormButton handleFeedURsFetching={handleFeedURsFetching} />

          {feeds.length > 0 && (
            <AppFeeds feeds={feeds} />
          )}

          {error.length > 0 && (
            <AppError error={error} />
          )}
        </div>
      </div>
    </div>
  )
}
