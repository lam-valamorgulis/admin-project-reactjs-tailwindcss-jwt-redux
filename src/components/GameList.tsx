import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import GameRow from './GameRow';
import TableHeader from './TableHeader';
import { useEffect } from 'react';
import SelectField from './_ui/SelectField';

export default function GameList() {
  const { games, params } = useLoaderData() as { games: any[]; params: any };
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(params);
    const newUrl = `${window.location.origin}/games?${searchParams.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [params]);

  const handlePageChange = (viewPerPage: any) => {
    const searchParams = new URLSearchParams(params);
    searchParams.set('page_size', viewPerPage.toString());
    console.log(searchParams.toString());
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="mt-6 max-h-96 overflow-y-scroll rounded-2xl bg-[#ffffff] px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="mt-4 sm:flex-auto">
          <SelectField
            label="View"
            id="view"
            options={[
              { value: 50, label: '50' },
              { value: 100, label: '100' },
            ]}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
      <div className="mt-4 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full border-separate border-spacing-0 ">
              <thead>
                <tr>
                  <TableHeader
                    text="Img"
                    className="pl-4 pr-3 sm:pl-6 lg:pl-8"
                  />
                  <TableHeader
                    text="Name"
                    className="pl-4 pr-3 sm:pl-6 lg:pl-8"
                  />
                  <TableHeader
                    text="Released"
                    className="px-3 sm:table-cell"
                    hidden
                  />
                  <TableHeader
                    text="Rating"
                    className="px-3 lg:table-cell"
                    hidden
                  />
                  <TableHeader text="Genres" className="px-3" />
                  <TableHeader
                    text={<span className="sr-only">Edit</span>}
                    className="py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"
                  />
                </tr>
              </thead>
              <tbody>
                {games.map((game, gameIdx) => (
                  <GameRow
                    game={game}
                    gameIdx={gameIdx}
                    games={games}
                    key={gameIdx}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
