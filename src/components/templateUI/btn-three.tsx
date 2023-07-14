import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-react'
import { ChangeEvent } from 'react'

type Props = {
  at: string
  color: string
  bg_color: string
  isDisabled: boolean
  inputValue: string
  onInputChange: (input: string) => void
  onBtnClick: () => void
}

export default function BtnOne({
  at,
  color,
  bg_color,
  isDisabled,
  inputValue,
  onInputChange,
  onBtnClick,
}: Props) {
  return (
    <div
      style={{ borderColor: bg_color }}
      className="w-full h-12 max-w-xs m-2 rounded-full border text-xs flex"
    >
      <Input
        disabled={isDisabled}
        type="email"
        placeholder="Email"
        className="w-full h-full pl-3 rounded-l-full focus-visible:mr-1"
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onInputChange(e.target.value)
        }}
      />

      <Button
        disabled={isDisabled}
        style={{ color: color, backgroundColor: bg_color }}
        className="w-fit h-full px-4 rounded-none rounded-r-full flex justify-center items-center whitespace-nowrap"
        onClick={onBtnClick}
      >
        {isDisabled ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </>
        ) : (
          <>{at}</>
        )}
      </Button>
    </div>
  )
}
