import React from "react";

const DepartmentSelection = () => {
  const departments = [
    "Patient support",
    "CLSC (Routine Care)",
    "CHSLD",
    "Cardiology",
    "Dispensary",
    "Hemodyalis",
    "Neurology",
    "Oncology",
    "Rehabilitation",
    "Acute Care",
    "Palliative care",
    "Emergency room",
    "Operating theatre",
    "CLSC (Home Care)",
    "Surgery",
    "Prison",
    "Gynaecology and Obstetrics",
    "Medicine",
    "Nephrology",
    "Paediatrics",
    "Recovery room",
    "Intensive care",
    "Psychiatry / Mental Health",
    "Vaccination"
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-12 ">
      <h2 className=" text-start text-xl font-semibold  mb-4">
        Which department(s) are you interested in? *
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {departments.map((department, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={`dept-${index}`}
              name="departments"
              className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <label
              htmlFor={`dept-${index}`}
              className="ml-2  text-md"
            >
              {department}
              
            </label>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default DepartmentSelection;