import { classNames } from '../utils';

const genreColors: { [key: string]: string } = {
  Racing: 'text-red-700 bg-red-50 ring-red-600',
  Shooter: 'text-blue-700 bg-blue-50 ring-blue-600',
  Adventure: 'text-green-700 bg-green-50 ring-green-600',
  Platformer: 'text-yellow-700 bg-yellow-50 ring-yellow-600',
};

export default function GameRow({ game, gameIdx, games }: any) {
  return (
    <tr key={game.id}>
      <td
        className={classNames(
          gameIdx !== games.length - 1 ? 'border-b border-gray-200' : '',
          'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
        )}
      >
        <div className="h-11 w-11 flex-shrink-0">
          <img
            className="h-11 w-11 rounded-full"
            src={game.background_image}
            alt=""
          />
        </div>
      </td>
      <td
        className={classNames(
          gameIdx !== games.length - 1 ? 'border-b border-gray-200' : '',
          'w-32 whitespace-nowrap py-4 text-sm font-medium text-gray-900',
        )}
      >
        <div className="ml-4">
          <div className="font-medium text-gray-900">{game.name}</div>
        </div>
      </td>
      <td
        className={classNames(
          gameIdx !== games.length - 1 ? 'border-b border-gray-200' : '',
          'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell',
        )}
      >
        {game.released}
      </td>
      <td
        className={classNames(
          gameIdx !== games.length - 1 ? 'border-b border-gray-200' : '',
          'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell',
        )}
      >
        <div className="flex">
          {/* Repeat the star SVG for each full star */}
          {[...Array(Math.floor(game.rating))].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star-fill text-yellow-500"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          ))}
          {/* If there's a half star, add a half star SVG */}
          {game.rating % 1 >= 0.1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star-half text-yellow-500"
              viewBox="0 0 16 16"
            >
              <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
            </svg>
          )}
        </div>
      </td>
      <td
        className={classNames(
          gameIdx !== games.length - 1 ? 'border-b border-gray-200' : '',
          'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
        )}
      >
        <span
          className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${genreColors[game.genres[0].name] || 'bg-gray-50 text-gray-700 ring-gray-600'}`}
        >
          {game.genres[0].name}
        </span>
      </td>
      <td
        className={classNames(
          gameIdx !== games.length - 1 ? 'border-b border-gray-200' : '',
          'relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-8 lg:pr-8',
        )}
      >
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit<span className="sr-only">, {game.name}</span>
        </a>
      </td>
    </tr>
  );
}
