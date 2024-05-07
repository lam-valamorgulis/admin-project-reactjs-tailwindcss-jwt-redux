import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useLoaderData, useNavigate, useLocation } from 'react-router-dom';

export default function Pagination() {
  const { count, params } = useLoaderData() as {
    count: number;
    params: any;
  };

  const pageCount = Math.ceil(count / params.page_size);

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  const handlePageChange = (pageNumber: number) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber.toString());
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden"></div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end">
        <div className="">
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={() => {
                let prevPage = parseFloat(params.page) - 1;
                if (prevPage < 1) prevPage = pageCount;
                handlePageChange(prevPage);
              }}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {pages.map((pageNumber) => {
              return (
                <button
                  key={pageNumber}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                    pageNumber == params.page
                      ? 'z-10 bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                      : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            })}
            <button
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={() => {
                let nextPage = parseFloat(params.page) + 1;
                if (nextPage > pageCount) nextPage = 1;
                handlePageChange(nextPage);
              }}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
