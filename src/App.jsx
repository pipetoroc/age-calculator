import { useState } from 'react'
import './App.css'

function App () {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [yearResult, setYearResult] = useState('--')
  const [monthResult, setMonthResult] = useState('--')
  const [dayResult, setDayResult] = useState('--')
  const [errors, setErrors] = useState([])

  const handleChangeDay = evt => {
    setDay(evt.target.value)
  }
  const handleChangeMonth = evt => {
    setMonth(evt.target.value)
  }
  const handleChangeYear = evt => {
    setYear(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const milisecondsPerMinute = 24 * 60 * 60 * 1000

    const currentDate = new Date()
    const userDate = new Date(`${year}-${month}-${day}`)

    const validationErrors = []

    if (!day || !year || !month) {
      validationErrors.push('This field is required')
    }
    setErrors([validationErrors])

    let difference = currentDate - userDate

    const passedYear = Math.floor(difference / (milisecondsPerMinute * 365))

    difference -= passedYear * milisecondsPerMinute * 365

    const passedMonths = Math.floor(difference / (milisecondsPerMinute * 30))

    difference -= passedMonths * milisecondsPerMinute * 30

    const passedDay = Math.floor(difference / milisecondsPerMinute)

    setYearResult(passedYear)
    setMonthResult(passedMonths)
    setDayResult(passedDay)
  }
  return (
    <>
      <article>
        <form className='Form' onSubmit={handleSubmit}>
          <label className='Form-label'> day
            <input className='Form-input' type='number' name='day' placeholder='DD' onChange={handleChangeDay}></input>
            <span className='Span-error'>{errors}</span>
          </label>
          <label className='Form-label'> month
            <input className='Form-input' type='number' name='month' placeholder='MM' onChange={handleChangeMonth}></input>
            <span className='Span-error'>{errors}</span>
          </label>
          <label className='Form-label'> year
            <input className='Form-input' type='number' name='year' placeholder='YYYY' onChange={handleChangeYear}></input>
            <span className='Span-error'>{errors}</span>
          </label>
        <button className='Button'> x </button>
        </form>
        <div className='Div'>
          <p className='Div-p'> <span className='Div-span'>{yearResult}</span> years</p>
          <p className='Div-p'> <span className='Div-span'>{monthResult}</span> months</p>
          <p className='Div-p'> <span className='Div-span'>{dayResult}</span> days</p>
        </div>
      </article>
    </>
  )
}

export default App
