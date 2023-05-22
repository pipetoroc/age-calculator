import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Result from './components/Result'

function App () {
  const [yearResult, setYearResult] = useState('--')
  const [monthResult, setMonthResult] = useState('--')
  const [dayResult, setDayResult] = useState('--')

  const handleDateSubmit = (year, month, day) => {
    const currentDate = new Date()
    const userDate = new Date(`${year}-${month}-${day}`)

    const milisecondsPerMinute = 24 * 60 * 60 * 1000
    let difference = currentDate - userDate

    const passedYear = Math.floor(difference / (milisecondsPerMinute * 365))
    difference -= passedYear * milisecondsPerMinute * 365

    const passedMonths = Math.floor(difference / (milisecondsPerMinute * 30))
    difference -= passedMonths * milisecondsPerMinute * 30

    const passedDay = Math.floor(difference / milisecondsPerMinute)

    if (passedYear && passedYear >= 0 && year && month && day) {
      setYearResult(passedYear)
    }
    if (passedMonths && year && month && day) {
      setMonthResult(passedMonths)
    }
    if (passedDay && year && month && day) {
      setDayResult(passedDay)
    }
  }

  return (
    <>
      <article>
        <Form handleDateSubmit={handleDateSubmit}/>
        <div className='Div'>
          <Result time='years' amount={yearResult} />
          <Result time='months' amount={monthResult}/>
          <Result time='days' amount={dayResult}/>
        </div>
      </article>
    </>
  )
}

export default App
