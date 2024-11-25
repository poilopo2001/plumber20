import * as React from 'react';
import { InputFieldProps } from './types';

export const InputField: React.FC<InputFieldProps> = ({ 
  placeholder, 
  type = "text", 
  id, 
  required = false 
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <div className={`
      relative flex-1 min-w-[280px] group
      ${isFocused ? 'ring-2 ring-orange-400/50' : ''}
    `}>
      <input
        type={type}
        id={id}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder=""
        className="
          peer
          w-full px-4 py-3
          text-base text-white
          bg-white/10
          border border-white/10
          rounded-lg
          outline-none
          transition-all duration-300
          placeholder-shown:pt-3
          focus:border-orange-400/50
          focus:bg-white/[0.15]
          hover:bg-white/[0.12]
        "
        aria-label={placeholder}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-4 top-3
          text-sm text-white/50
          transition-all duration-300
          cursor-text
          peer-focus:text-xs
          peer-focus:-translate-y-2
          peer-focus:text-orange-400
          ${value ? 'text-xs -translate-y-2 text-orange-400' : ''}
        `}
      >
        {placeholder}
        {required && <span className="text-orange-400 ml-1">*</span>}
      </label>
    </div>
  );
};
