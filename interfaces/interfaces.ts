export interface AppErrorUI {
  error: string;
}

export interface FeedUI {
  title: string;
  url: string;
}

export interface AppFeedsUI {
  feeds: FeedUI[]
}

export interface ResponseUI {
  data: {
    feeds: FeedUI[];
  }
}

export interface AppFormUI {
  isDarkModeOn: boolean;
  websiteURL: string;
  handleURLInput: (url: string) => void;
}

export interface AppFormButtonUI {
  handleFeedURsFetching: () => void;
}

export interface AppFooterUI {
  isDarkModeOn: boolean;
}
