import { useLoaderData } from 'react-router-dom';

interface Option {
  value: string | number;
  label: string | number;
}

interface SelectFieldProps {
  label: string;
  id: string;
  options: Option[];
  handlePageChange?: (value: string | number) => void; // make it optional
}

export default function SelectField({
  label,
  id,
  options,
  handlePageChange,
}: SelectFieldProps) {
  const { params } = useLoaderData() as { params: any };
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (handlePageChange) {
      handlePageChange(event.target.value);
    }
  };

  return (
    <>
      <td className="whitespace-nowrap bg-[#F3F3F4] py-2 pl-4 pr-3 text-lg font-medium text-gray-900 sm:pl-2">
        <label htmlFor={id} className="leading-6 text-gray-900 ">
          {label}
        </label>
      </td>
      <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
        <div className="mt-2">
          <select
            id={id}
            name={id}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={
              params['page_size'] ? params['page_size'] : options[0].value
            }
            onChange={handleChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </td>
    </>
  );
}
