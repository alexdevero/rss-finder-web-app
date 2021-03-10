import { AppFormUI } from './../interfaces/interfaces'

export const AppForm = (props: AppFormUI) => (
  <div className="input-group mb-4">
    <label htmlFor="urlInput" className="input-group-text">
      <i className="bi bi-link-45deg" />
    </label>

    <input
      type="text"
      name="urlInput"
      id="urlInput"
      className="form-control"
      placeholder="Website URL"
      aria-label="Website URL"
      aria-describedby="urlInput"
      defaultValue={props.websiteURL}
      onChange={(event) => props.handleURLInput(event.target.value)}
    />
  </div>
)
