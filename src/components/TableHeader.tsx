const TableHeader = ({ text, className, hidden = false }: any) => (
  <th
    scope="col"
    className={`sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ${className} ${hidden ? 'hidden' : ''}`}
  >
    {text}
  </th>
);

export default TableHeader;
