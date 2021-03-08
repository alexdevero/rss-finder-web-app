interface AppErrorUI {
  error: string;
}

export const AppError = (props: AppErrorUI) => (
  <div>{props.error}</div>
)
