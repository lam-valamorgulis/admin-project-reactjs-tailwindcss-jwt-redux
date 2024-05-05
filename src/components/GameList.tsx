import { useLoaderData } from 'react-router-dom';
import GameRow from './GameRow';
import TableHeader from './TableHeader';

export default function GameList() {
  const { games } = useLoaderData() as { games: any[] };
  return (
    <div className="mt-6 max-h-96 overflow-y-scroll rounded-2xl bg-[#ffffff] px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Users
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
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
                  <GameRow game={game} gameIdx={gameIdx} games={games} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
