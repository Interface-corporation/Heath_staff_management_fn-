

const WorkCard = ({span,title,description}) => {
  return (
    <div className="relative">
        <div className=" p-6 shadow-lg  border border-blue-200 rounded-2xl h-full">
            <div className="bg-[#00A2E8]/20 h-12 w-12 rounded-full flex items-center justify-center mb-6">
                <span className="text-[#00A2E8] font-bold text-xl">{span}</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 ">{title}</h3>
            <p className="text-gray-600 text-lg">{description}</p>
        </div>
    </div>
   




  )
}

export default WorkCard