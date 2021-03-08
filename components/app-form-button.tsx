interface AppFormButtonUI {
  handleFeedURsFetching: () => void;
}

export const AppFormButton = (props: AppFormButtonUI) => (
  <div className="text-center">
    <button className="btn btn-primary" onClick={props.handleFeedURsFetching}>Get feed URLs</button>
  </div>
)
