import { Icon } from "components/atoms/Icon"

export const Footer = () => {
  return (
    <footer className="flex items-center p-8 w-full footer text-base-content">
      <div className="flex flex-1 items-center">
        <p className="font-rounded text-base">©2023 m19e</p>
      </div>
      <div className="flex gap-2">
        <a
          className="w-6 h-6"
          href="https://github.com/m19e"
          target="_blank"
          rel="noreferrer"
        >
          <Icon type="github" />
        </a>
      </div>
    </footer>
  )
}
