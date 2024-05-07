import { customFetch } from '../../utils';

type QueryParams = {
  search?: string;
  genres?: string;
  developers?: string;
  creators?: string;
  platforms?: string;
  publishers?: string;
  page_size?: number;
  page?: number;
};

const allGamesQuery = (queryParams: QueryParams) => {
  const {
    search,
    genres,
    developers,
    creators,
    platforms,
    publishers,
    page_size,
    page,
  } = queryParams;

  return {
    queryKey: [
      'games',
      search ?? '',
      genres ?? '',
      developers ?? 'ubisoft',
      creators ?? '',
      platforms ?? '',
      publishers ?? '',
      page_size ?? 100,
      page ?? 1,
    ],
    queryFn: () =>
      customFetch({
        params: queryParams,
      }),
  };
};

type QueryClient = {
  ensureQueryData: (query: any) => Promise<any>;
};

type Request = {
  url: string;
};

type Game = {
  // define the properties of a game here
};

type ResponseData = {
  next: any;
  previous: any;
  count: any;
  results: Game[];
  // meta: any; // uncomment and replace `any` with the actual type if needed
};

type LoaderResponse = {
  games: Game[];
  params: Record<string, string>;
  count: number;
};

export const gamesLoader =
  (queryClient: QueryClient) =>
  async ({ request }: { request: Request }): Promise<LoaderResponse> => {
    const entries = [...new URL(request.url).searchParams.entries()];
    let params = Object.fromEntries(
      entries.filter(([, value]) => value !== ''),
    );

    params = {
      developers: params.developers || 'ubisoft',
      page: params.page || '1',
      page_size: params.page_size || '50',
      ...params,
    };

    const response = (await queryClient.ensureQueryData(
      allGamesQuery(params),
    )) as { data: ResponseData };
    const games = response.data.results;
    const count = response.data.count;
    return { games, params, count };
  };
