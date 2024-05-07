import GameList from './GameList';
import GamesFilter from './GamesFilter';
import Pagination from './Pagination';

export default function Games() {
  return (
    <div>
      <GamesFilter />
      <GameList />
      <Pagination />
    </div>
  );
}
