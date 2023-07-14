'use client'
import { ChangeEvent, useEffect, useState } from 'react'

interface Props {
  id: string
  value: string
  onChange: (color: string) => void
}

export const ColorPicker = ({ value, onChange, id }: Props) => {
  const [color, setColor] = useState(value)

  const pickerID = `color-picker_${id}`

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value)
    onChange(e.target.value)
  }

  useEffect(() => {
    setColor(value)
    onChange(value)
    // eslint-disable-next-line
  }, [value])

  return (
    <section className="flex flex-col p-5 rounded-xl">
      <input
        onChange={handleColorChange}
        type={'color'}
        id={pickerID}
        value={color}
        className={'h-0 w-0 opacity-0'}
      />

      <section className={'relative'}>
        <label htmlFor={pickerID}>
          <div
            style={{ backgroundColor: color }}
            className="w-12 absolute border h-12 rounded-xl"
          />
          <div
            style={{ backgroundColor: color }}
            className="w-12 blur-md opacity-50 h-12 rounded-xl"
          />
        </label>
      </section>
    </section>
  )
}
