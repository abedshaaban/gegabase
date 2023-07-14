import { Btn } from '@/types/template'

export const BtnOne = ({ color, bg_color }: Btn) => {
  return (
    <div style={{ borderColor: bg_color }} className="w-36 h-9 m-2 flex border text-xs">
      <input className="w-full h-full pl-2" placeholder="Email" disabled />

      <div
        style={{ color: color, backgroundColor: bg_color }}
        className="w-fit h-full p-1 flex justify-center items-center cursor-default"
      >
        submit
      </div>
    </div>
  )
}

export const BtnTwo = ({ color, bg_color }: Btn) => {
  return (
    <div
      style={{ borderColor: bg_color }}
      className="w-36 h-9 m-2 flex border rounded-md text-xs"
    >
      <input className="w-full h-full pl-2 rounded-l-md" placeholder="Email" disabled />
      <div
        style={{ color: color, backgroundColor: bg_color }}
        className="w-fit h-full p-1 flex justify-center items-center cursor-default rounded-r-md "
      >
        submit
      </div>
    </div>
  )
}

export const BtnThree = ({ color, bg_color }: Btn) => {
  return (
    <div
      style={{ borderColor: bg_color }}
      className="w-36 h-9 m-2 flex border rounded-full text-xs"
    >
      <input className="w-full h-full pl-2 rounded-l-full" placeholder="Email" disabled />
      <div
        style={{ color: color, backgroundColor: bg_color }}
        className="w-fit h-full p-1 flex justify-center items-center cursor-default rounded-r-full"
      >
        submit
      </div>
    </div>
  )
}

export const BtnFour = ({ color, bg_color }: Btn) => {
  return (
    <div className="m-2 flex rounded-md text-xs flex-col gap-1">
      <input
        style={{ borderColor: bg_color }}
        className="w-36 h-9 pl-2 border"
        placeholder="Email"
        disabled
      />
      <div
        style={{ color: color, backgroundColor: bg_color }}
        className="w-36 h-9 p-1 flex justify-center items-center cursor-default"
      >
        submit
      </div>
    </div>
  )
}

export const BtnFive = ({ color, bg_color }: Btn) => {
  return (
    <div className="m-2 flex text-xs flex-col gap-1">
      <input
        style={{ borderColor: bg_color }}
        className="w-36 h-9 pl-2 border rounded-md"
        placeholder="Email"
        disabled
      />
      <div
        style={{ color: color, backgroundColor: bg_color }}
        className="w-36 h-9 p-1 text-white bg-black flex justify-center items-center cursor-default rounded-md"
      >
        submit
      </div>
    </div>
  )
}

export const BtnSix = ({ color, bg_color }: Btn) => {
  return (
    <div className="m-2 flex text-xs flex-col gap-1">
      <input
        style={{ borderColor: bg_color }}
        className="w-36 h-9 pl-2 border rounded-full"
        placeholder="Email"
        disabled
      />
      <div
        style={{ color: color, backgroundColor: bg_color }}
        className="w-36 h-9 p-1 flex justify-center items-center cursor-default rounded-full"
      >
        submit
      </div>
    </div>
  )
}
