
const Input = ({label,type="text",placeholder,required=false, isTextArea=false ,onChange}) => {
  return (
    <div className="mb-4">
    <label className="block text-md font-medium  mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {isTextArea ? (
      <textarea
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
        placeholder:text-md"
        placeholder={placeholder}
        rows={4}
        required={required}
        onChange={onChange}
      />
    ) : (
      <input
        type={type}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
        placeholder:text-md"
        placeholder={placeholder}
        required={required}
      />
    )}
  </div>
  )
}

export default Input