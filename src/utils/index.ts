import axios from 'axios';

const BASE_URL = `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`;

export const customFetch = axios.create({
  baseURL: BASE_URL,
});

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const DEVELOPERS = [
  { id: 'ubisoft', title: 'Ubisoft' },
  { id: 'electronic-arts', title: 'Electronic Arts' },
  { id: 'capcom', title: 'Capcom' },
];
