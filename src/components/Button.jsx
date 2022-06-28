const defaultClass = `
  justify-center 
  py-2 
  px-4 
  mt-8 
  border 
  border-transparent 
  rounded-md 
  shadow-sm 
  text-sm 
  font-medium 
  text-white
`;

const Button = ({ ...props }) => {
  return (
    <>
      <button
        {...props}
        className={`
          ${props.className} 
          ${defaultClass} 
          ${props.full && 'w-full'} 
          ${props.primary && 'bg-blue-600 hover:bg-blue-700 active:bg-blue-600'} 
          ${props.secondary && 'bg-gray-400 hover:bg-gray-500 active:bg-gray-400'} 
          ${props.danger && 'bg-red-600 hover:bg-red-700 active:bg-red-600'} 
          ${props.success && 'bg-green-600 hover:bg-green-700 active:bg-green-600'} 
          ${props.disabled && 'cursor-not-allowed bg-gray-300'}
        `}
      >
        {props.children}
      </button>
    </>
  );
}

export default Button;
