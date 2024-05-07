interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
}

export default function InputField({
  label,
  id,
  type = 'text',
}: InputFieldProps) {
  return (
    <>
      <td className="whitespace-nowrap bg-[#F3F3F4] py-2 pl-4 pr-3 text-lg font-medium text-gray-900 sm:pl-2">
        <label htmlFor={id} className="leading-6 text-gray-900 ">
          {label}
        </label>
      </td>
      <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
        <div className="mt-2">
          <input
            type={type}
            name={id}
            id={id}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </td>
    </>
  );
}
