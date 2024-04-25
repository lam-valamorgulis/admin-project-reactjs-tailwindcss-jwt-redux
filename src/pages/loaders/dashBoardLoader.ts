import { redirect } from 'react-router-dom';
import { User } from '../../types/userType';

export const dashBoardLoader =
  (user: User | null) =>
  // eslint-disable-next-line no-empty-pattern
  async ({}) => {
    if (!user) {
      return redirect('/login');
    }
    return null;
  };
