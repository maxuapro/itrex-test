import { useState, useEffect } from 'react'
import Header from "./UI/Header";
import MainContainer from "./UI/MainContainer"
import Table from './components/Table'
import ItemOutput from "./components/ItemOutput";
import SearchBar from './components/SearchBar';

const url = 'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json'

function App() {
  const [data, setData] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  const [filteredByState, setFilteredByState] = useState([])
  const [stateFilter, setStateFilter] = useState('--')
  const [searchName, setSearchName] = useState('')
  const [timer, setTimer] = useState(false)

  const chooseItemToShow = item => {
    setSelectedItem(item)
  }

  // --------------------SEARCH BAR EVENTS --------------------//
  const chooseState = event => {
    console.log('ONCHANGE', event.target.value)
    setStateFilter(event.target.value)
  }

  let searchWord = ''
  const getSearchName = event => {
    searchWord = event.target.value
    if (!timer) {
      setTimer(true)
    }

  }

  console.log('searchName is:', searchName)

  useEffect(() => {
    if (!timer) {
      return
    }

    const nowSaveSearchWord = async () => {
      console.log('...ddd...', searchWord)
      setSearchName(searchWord)
    }

    const sdf = setTimeout(() => {
      console.log('from sdf = setTimeout')
      nowSaveSearchWord()
      setTimer(false)
    }, 1500)

    return () => clearTimeout(sdf)
  }, [timer, searchWord])
  // -------------------/SEARCH BAR EVENTS --------------------//


  // FETCH DATA
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })

  }, [])

  // COPY DATA
  useEffect(() => {
    setFilteredByState([...data])
  }, [data])

  // FILTER DATA BY STATE
  // useEffect(() => {
  //   if (stateFilter !== '--') {
  //     let filtered = data.filter(el => el.adress.state === stateFilter)
  //     setFilteredByState(filtered)
  //   } else {
  //     setFilteredByState([...data])
  //   }

  // }, [stateFilter, data])

  // we always apply name search to 'filteredByState'
  useEffect(() => {

    let matches

    if (searchName !== '') {
      matches = data.filter(el => el.firstName === searchName)
    } else {
      matches = [...data]
    }

    let bystate

    if (stateFilter !== '--') {
      bystate = matches.filter(el => el.adress.state === stateFilter)
      setFilteredByState(bystate)

    } else {
      setFilteredByState([...matches])
    }


  }, [searchName, data, stateFilter])


  return (
    <>
      <Header />
      <MainContainer>
        <SearchBar onChooseState={chooseState} onChangeSearchName={getSearchName} />
        <Table onChooseItem={chooseItemToShow} data={filteredByState} />
        <ItemOutput item={selectedItem} />
      </MainContainer>
    </>
  );
}

export default App;
