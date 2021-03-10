import { useContext, useState } from 'react'
import axios from 'axios'
import sanitizeHtml from 'sanitize-html'

import { AppError } from './app-error'
import { AppFeeds } from './app-feeds'
import { AppFooter } from './app-footer'
import { AppForm } from './app-form'
import { AppFormButton } from './app-form-button'
import { AppHeader } from './app-header'
import { AppLoader } from './app-loader'

import { FeedUI, ResponseUI } from './../interfaces/interfaces'

import { GlobalState } from './../state/state'

export function App() {
  const [feeds, setFeeds] = useState<FeedUI[]>([])
  const [websiteURL, setWebsiteURL] = useState('')
  const [error, setError] = useState('')
  const [isLoaderVisible, setIsLoaderVisible] = useState(false)
  const { state, handleDarkMode } = useContext(GlobalState)

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
      setIsLoaderVisible(true)

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
        .finally(() => {
          setIsLoaderVisible(false)
        })
    }
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-end py-3">
        <button className={`btn btn-link ${state.isDarkModeOn ? 'link-light' : 'link-dark'}`} onClick={handleDarkMode}>
          <span className={`h5 bi bi-lightbulb${state.isDarkModeOn ? '' : '-fill'}`} />
        </button>
      </div>

      <div className="app-main-content row justify-content-center pt-5">
        <div className="col-sm-10 col-md-7 col-lg-6 col-xl-5">

          <AppHeader />

          <AppForm
            websiteURL={websiteURL}
            handleURLInput={handleURLInput}
          />

          <AppFormButton handleFeedURsFetching={handleFeedURsFetching} />

          {isLoaderVisible && (
            <AppLoader />
          )}

          {feeds.length > 0 && (
            <AppFeeds feeds={feeds} />
          )}

          {error.length > 0 && (
            <AppError error={error} />
          )}
        </div>
      </div>

      <AppFooter />
    </div>
  )
}
