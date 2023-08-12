import { GistProvider } from "./Gist"

export const AppProvider = ({ children }) => {
  return <GistProvider>{children}</GistProvider>
}