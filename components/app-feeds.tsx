interface FeedUI {
  title: string;
  url: string;
}

interface AppFeeds {
  feeds: FeedUI[]
}

export const AppFeeds = (props: AppFeeds) => (
  <div className="app-feeds-list mt-4">
    <h2 className="h5 mb-2">Found RSS feeds:</h2>

    <ul className="list-unstyled">
      {props.feeds.map((feedUrl: FeedUI, index: number) => {
        return <li key={index}>{feedUrl.url}</li>
      })}
    </ul>
  </div>
)
