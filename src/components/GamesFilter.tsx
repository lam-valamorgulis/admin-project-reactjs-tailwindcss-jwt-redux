import { Form, Link } from 'react-router-dom';
import SelectField from './_ui/SelectField';
import InputField from './_ui/InputField';
import RadioGroup from './_ui/RadioGroup';
import { DEVELOPERS } from '../utils';

export default function GamesFilter() {
  return (
    <div className=" rounded-2xl bg-[#ffffff] px-4 sm:px-6 lg:px-8">
      <div className=" flow-root">
        <div className="-mx-4 my-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <Form className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <tbody className="divide-y divide-gray-200 p-5">
                <tr>
                  <InputField label="Search" id="search" />
                  <SelectField
                    label="Genres"
                    id="genres"
                    options={[
                      { value: '', label: 'All' },
                      { value: 'action', label: 'Action' },
                      { value: 'adventure', label: 'Adventure' },
                      { value: 'shooter', label: 'Shooter' },
                    ]}
                  />
                  <RadioGroup
                    label="Developers"
                    id="developers"
                    options={DEVELOPERS}
                  />
                </tr>
                <tr>
                  <SelectField
                    label="Creators"
                    id="creators"
                    options={[
                      { value: '', label: 'All' },
                      { value: 'gabe-newell', label: 'Gabe Newell' },
                      { value: 'marc-laidlaw', label: 'Marc Laidlaw' },
                      { value: 'cris-velasco', label: 'Cris Velasco' },
                      { value: 'dan-houser', label: 'Dan Houser' },
                      { value: 'mike-morasky', label: 'Mike Morasky' },
                    ]}
                  />
                  <SelectField
                    label="Platforms"
                    id="platforms"
                    options={[
                      { value: '', label: 'All' },
                      { value: '4', label: 'Pc' },
                      { value: '187', label: 'PlayStation 5' },
                      { value: '1', label: 'Xbox One' },
                      { value: '7', label: 'Nintendo Switch' },
                    ]}
                  />
                  <SelectField
                    label="Publishers"
                    id="publishers"
                    options={[
                      { value: '', label: 'All' },
                      {
                        value: 'microsoft-studios',
                        label: 'microsoft-studios',
                      },
                      { value: 'electronic-arts', label: 'electronic-arts' },
                      { value: 'square-enix', label: 'square-enix' },
                    ]}
                  />
                </tr>
              </tbody>
            </table>
            <div className="flex flex-1 justify-end gap-3">
              <Link
                to="/games"
                type="button"
                className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
              >
                Reset
              </Link>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Search
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
