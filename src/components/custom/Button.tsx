import type { ReactNode } from 'react';

interface ButtonProps {
  id: string;
  bgColor: string;
  borderColor?: string | null;
  textColor: string;
  icon?: ReactNode | null;
  btnName: string;
}

const Button = ({ id, bgColor, icon, btnName, textColor, borderColor }: ButtonProps) => (
  <label
    htmlFor={id}
    className={`flex justify-center items-center bg-[${bgColor}] text-[${textColor}] border border-[${borderColor}] rounded-sm h-10 lg:h-8 mt-2`}
  >
    {icon}
    <button type="button" id={id} className="ml-1">
      {btnName}
    </button>
  </label>
);

export { Button };
