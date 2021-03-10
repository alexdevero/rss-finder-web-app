import { AppFooterUI } from './../interfaces/interfaces'

export const AppFooter = (props: AppFooterUI) => (
  <footer className="pb-3">
    <ul className="list-unstyled d-flex justify-content-center">
      <li className="me-3">
        <a href="https://github.com/alexdevero/rss-finder-web-app" target="_blank" rel="noopener noreferrer" className="link-secondary">
          <span className="h5 bi bi-github" />
        </a>
      </li>

      <li className="me-3">
        <a href="https://twitter.com/AlexDevero" target="_blank" rel="noopener noreferrer" className="link-secondary">
          <span className="h5 bi bi-twitter" />
        </a>
      </li>

      <li className="me-3">
        <a href="https://devero.io" target="_blank" rel="noopener noreferrer" className="link-secondary">
          <span className="h5 bi bi-globe" />
        </a>
      </li>

      <li className="me-3">
        <a href="https://paypal.me/alexdevero" target="_blank" rel="noopener noreferrer" className="link-secondary">
          <span className="h5 bi bi-wallet2" />
        </a>
      </li>

      <li>
        <a href="https://buymeacoffee.com/alexdevero" target="_blank" rel="noopener noreferrer" className="link-secondary">
          <span className="h5 bi bi-cup-straw" />
        </a>
      </li>
    </ul>

    <p className="h6 font-weight-normal text-center pt-1">
      Created by
      {' '}
      <a href="https://devero.io" target="_blank" rel="noopener noreferrer" className={`link-${props.isDarkModeOn ? 'light' : 'dark'}`}>Alex Devero</a>,
      {' '}
      <a href="https://devero.io" target="_blank" rel="noopener noreferrer" className={`link-${props.isDarkModeOn ? 'light' : 'dark'}`}>Devero Corp.</a>
    </p>
  </footer>
)
