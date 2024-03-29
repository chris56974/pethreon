import { ChangeEvent } from 'react';

import styles from "./FormField.module.scss"

interface FormFieldProps {
  className: string,
  value: string,
  placeholder?: string,
  disabled?: boolean,
  address?: boolean,
  autoFocus?: boolean,
  setValue: ((event: ChangeEvent<HTMLInputElement>) => void),
}

export const FormField = ({
  className,
  value,
  setValue,
  placeholder = "0",
  address = false,
  disabled = false,
  autoFocus = false,
}: FormFieldProps
) => {
  return (
    <input
      required
      min="0"
      className={`${className} ${styles.input}`}
      disabled={disabled}
      autoFocus={autoFocus}
      type={disabled || address ? "text" : "number"}
      placeholder={address ? "0x000000000000" : placeholder}
      onChange={setValue}
      value={disabled ? "ALL" : value}
      spellCheck={false}
    />
  )
}
