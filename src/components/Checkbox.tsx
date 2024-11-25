import * as React from 'react';
import { CheckboxProps } from './types';

export const Checkbox: React.FC<CheckboxProps> = ({ label, required = false, id }) => {
  return (
    <div className="group flex items-start gap-3 py-1">
      <div className="relative flex-shrink-0 w-5 h-5">
        <input
          type="checkbox"
          id={id}
          required={required}
          className="
            peer
            absolute opacity-0 w-5 h-5 cursor-pointer
          "
        />
        <div className="
          absolute top-0 left-0
          w-5 h-5
          border-2 border-white/30
          rounded
          transition-all duration-200
          peer-checked:border-orange-400
          peer-checked:bg-orange-400
          group-hover:border-orange-400/50
        "/>
        <svg
          className="
            absolute top-0.5 left-0.5
            w-4 h-4
            text-white
            transition-transform duration-200
            scale-0 peer-checked:scale-100
          "
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <label
        htmlFor={id}
        className="
          text-sm text-white/70
          leading-relaxed
          cursor-pointer
          transition-colors duration-200
          group-hover:text-white/90
        "
      >
        {label}
        {required && <span className="text-orange-400 ml-1">*</span>}
      </label>
    </div>
  );
};
