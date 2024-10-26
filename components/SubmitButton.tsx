'use client'

import { Button } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'
import { ButtonProps } from '@nextui-org/react'

const SubmitButton = ({
  label,
  ...btnProps
}: { label: string } & ButtonProps) => {
  const { pending } = useFormStatus()
  return (
    <Button {...btnProps} type="submit" isLoading={pending}>
      {label}
    </Button>
  )
}

export default SubmitButton
