interface Option {
  id: string;
  title: string;
}

interface RadioGroupProps {
  label: string;
  id: string;
  options: Option[];
}

export default function RadioGroup({ label, id, options }: RadioGroupProps) {
  return (
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <fieldset className="mt-4">
        <legend className="sr-only">{label}</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {options.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                id={option.id}
                name={id}
                type="radio"
                value={option.id}
                defaultChecked={option.id === 'ubisoft'}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor={option.id}
                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >
                {option.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </td>
  );
}
