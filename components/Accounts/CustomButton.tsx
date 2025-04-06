import React from 'react'

interface CustomButtonProps {
    label: string;
    onClick?: () => void;
}
const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    onClick
}) => {
  return (
    <div 
        className='mb-6 py-4 px-6 cursor-pointer hover:bg-red-600 bg-gray-600 text-white rounded-xl transition'
        onClick={onClick}
    >
      {label}
    </div>
  )
}

export default CustomButton
