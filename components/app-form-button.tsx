import { AppFormButtonUI } from './../interfaces/interfaces'

export const AppFormButton = (props: AppFormButtonUI) => (
  <div className="text-center">
    <button className="btn btn-primary" onClick={props.handleFeedURsFetching}>Get feed URLs</button>
  </div>
)
