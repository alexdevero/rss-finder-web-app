import { AppErrorUI } from './../interfaces/interfaces'

export const AppError = (props: AppErrorUI) => (
  <div>{props.error}</div>
)
