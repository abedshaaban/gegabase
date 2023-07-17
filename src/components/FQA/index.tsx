'use client'
import { useState } from 'react'

type QAProps = {
  question: string
  answer: string
  index?: number
}

type Props = {
  links: QAProps[]
}

const Question = ({ question, answer, index }: QAProps) => {
  const [selected, setselected] = useState<any>(null)

  const handleClick = () => {
    if (selected === index) {
      return setselected(null)
    }
    setselected(index)
  }

  return (
    <div
      className="w-full rounded-lg duration-500 ease-in-out md:max-w-lg"
      onClick={handleClick}
    >
      <div
        className={
          'px-5 py-2 border-2 rounded-2xl flex flex-row justify-between items-center cursor-pointer'
        }
      >
        <h4>{question}</h4>
        <span className="text-3xl font-bold text-orange-500">
          {selected === index ? '-' : '+'}
        </span>
      </div>
      <p
        className={`max-h-0 overflow-hidden py-0 px-5 duration-500 ease-out ${
          selected === index ? 'h-auto px-3 py-5 max-h-fit duration-500 ease-out' : ''
        }`}
      >
        {answer}
      </p>
    </div>
  )
}

export default function Index({ links }: Props) {
  return (
    <div className="p-7 flex flex-col items-center flex-nowrap gap-8">
      {links?.map((qa, index) => {
        return (
          <Question question={qa.question} answer={qa.answer} key={index} index={index} />
        )
      })}
    </div>
  )
}
