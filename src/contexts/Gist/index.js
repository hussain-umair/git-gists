import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { getPublicGists, getGistForUser } from "../../services/gistService";

const GistContext = createContext()
const { Provider } = GistContext

const useGistProvider = () => {
  const [page, setPage] = useState(1)
  const [gists, setGists] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const getGists = useCallback(async (params = {}) => {
    setIsLoading(true)
    setError('')
    try {
      const gistsResp = await getPublicGists(params)
      const { data } = gistsResp
      return data
    } catch(err) {
      setIsLoading(false)
      setError(err)
    }
  }, [])

  const getMoreGists = useCallback(async () => {
    if (page < 100) {
      const newGists = await getGists({ page: page + 1 }) || []
      setPage(prevPage => prevPage + 1)
      setGists(prevGists => [...prevGists, ...newGists])
      setIsLoading(false)
    }
  }, [getGists, page])

  const getUserGist = useCallback(async (username) => {
    setPage(1)
    setIsLoading(true)
    setError('')
    try {
      const userGistsResp = await getGistForUser(username)
      const { data } = userGistsResp
      setIsLoading(false)
      setGists(data)
    }
    catch(err) {
      setIsLoading(false)
      setError(err)
      setGists([])
    }
  }, [])

  useEffect(() => {
    getGists()
    .then((data = []) => {
      setGists(data)
      setIsLoading(false)
    })
    .catch(err => console.error(err))
  }, [getGists])

  return {
    gists,
    isLoading,
    error,
    setGists,
    getGists,
    getMoreGists,
    getUserGist
  }
}

export const useGist = () => useContext(GistContext)
export const GistProvider = ({ children }) => {
  const value = useGistProvider()
  return <Provider value={value}>{children}</Provider>
}
