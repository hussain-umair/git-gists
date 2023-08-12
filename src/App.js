import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { useDebounce } from 'react-use';

import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import GistList from './components/GistList';
import { useGist } from './contexts/Gist';
import Loading from './components/Loading';

const App = () => {
  const [search, setSearch] = useState('')
  const { gists, getMoreGists, getUserGist, isLoading } = useGist()

  const handleSearchChange = useCallback(
    ({ target: { value } }) => {
      setSearch(value)
    }, [])

    useDebounce(() => {
      if (search) {
        getUserGist(search)
      }
      if (!search && !gists.length) {
        getMoreGists()
      }
    }, 500, [search])

  const handleScroll = useCallback((e) => {
    const isScrollNearBottom = 
      e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 200

    if (isScrollNearBottom && !isLoading && !search) {
      getMoreGists()
    }
  }, [getMoreGists, isLoading, search])

  return (
      <Wrapper onScroll={handleScroll} className="App" data-testid="app">
        <Header search={search} onSearchChange={handleSearchChange}/>
        {!isLoading && !gists.length ? 'No Gists found' : <GistList gists={gists}/>}
        {!!isLoading && <Loading />}
        <GlobalStyles />
      </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
  height: 100vh;
  overflow: auto;
`;

export default App;
