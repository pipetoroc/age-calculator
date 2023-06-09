import React, { useState } from 'react'

export default function Form ({ handleDateSubmit }) {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [dayError, setDayError] = useState('')
  const [monthError, setMonthError] = useState('')
  const [yearError, setYearError] = useState('')

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

    setDayError('')
    setMonthError('')
    setYearError('')

    const currentDate = new Date()

    if (!day) {
      setDayError('This field is required')
    } else if (day < 1 || day > 31) {
      setDayError('Must be a valid day')
    }

    if (!month) {
      setMonthError('This field is required')
    } else if (month < 1 || month > 12) {
      setMonthError('Must be a valid month')
    }

    if (!year) {
      setYearError('This field is required')
    } else if (year > currentDate.getFullYear()) {
      setYearError('Must be in the past')
    }
    handleDateSubmit(year, month, day)
  }

  const errorInputClass = yearError || monthError || dayError ? 'Form-input-error' : 'Form-input'
  const errorLabelClass = yearError || monthError || dayError ? 'Form-label-error' : 'Form-label'

  return (
    <form className='Form' onSubmit={handleSubmit}>
      <label className={errorLabelClass}> day
        <input className={errorInputClass} type='number' name='day' placeholder='DD' onChange={handleChangeDay}></input>
        <span className='Span-error'>{dayError}</span>
      </label>
      <label className={errorLabelClass}> month
        <input className={errorInputClass} type='number' name='month' placeholder='MM' onChange={handleChangeMonth}></input>
        <span className='Span-error'>{monthError}</span>
      </label>
      <label className={errorLabelClass}> year
        <input className={errorInputClass} type='number' name='year' placeholder='YYYY' onChange={handleChangeYear}></input>
        <span className='Span-error'>{yearError}</span>
      </label>
        <button className='Button'>  </button>
      </form>

  )
}
