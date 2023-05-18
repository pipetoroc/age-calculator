import { useState } from 'react'
import './App.css'

function App () {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [yearResult, setYearResult] = useState('')
  const [monthResult, setMonthResult] = useState('')
  const [dayResult, setDayResult] = useState('')

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

    const date = new Date()
    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth()
    const currentDay = date.getDate()

    let dayResult = 0
    let monthResult = 0

    if (day < currentDay) {
      dayResult = currentDay - day
    }
    if (month < currentMonth) {
      monthResult = currentMonth - month
    }
    const yearResult = currentYear - year

    setYearResult(yearResult)
    setMonthResult(monthResult)
    setDayResult(dayResult)
  }
  return (
    <>
      <article>
        <form className='Form' onSubmit={handleSubmit}>
          <label className='Form-label'> day
            <input className='Form-input' type='number' name='day' pattern="^(0[1-9]|1[0-2])$" required onChange={handleChangeDay}></input>
          </label>
          <label className='Form-label'> month
            <input className='Form-input' type='number' name='month' pattern="^(0[1-9]|[12][0-9]|3[01])$" required onChange={handleChangeMonth}></input>
          </label>
          <label className='Form-label'> year
            <input className='Form-input' type='number' name='year' pattern="^\d{4}$" required onChange={handleChangeYear}></input>
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
