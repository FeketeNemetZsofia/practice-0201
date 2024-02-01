import { useEffect } from 'react'
import { useState } from 'react'
import Countries from './components/Countries'
import ButtonComp from './components/ButtonComp'



function App() {

const [data, setData] = useState([])
const [load, setLoad] = useState(true)

useEffect(()=>{
  setLoad(true)
  fetch("https://restcountries.com/v3.1/all")
  .then(res => res.json())
  .then(data => setData(data))
  .then(setLoad(false))
}, [])

const handleAscend = (countries) => {

  function sortPop(a, b) {
    return a.population - b.population;
  }

  const ascendData = countries.slice().sort(sortPop)
  setData(ascendData)
 }

 const handleDescend = (countries) => {

  function sortName(a, b) {
    return b.population - a.population;
  }

  const descendData = countries.slice().sort(sortName)
  console.log(descendData)
  setData(descendData)
 }

  return (
    <>
    {!load ? 
    <><Countries countries={data}/> 
   <ButtonComp funct={"Ascend"} countries ={data} onClickHandle={handleAscend}/><ButtonComp countries={data} funct={"Descend"} onClickHandle={handleDescend}/>
    
    
    </>: <p>Loading</p>}
    </>
  )
}

export default App
