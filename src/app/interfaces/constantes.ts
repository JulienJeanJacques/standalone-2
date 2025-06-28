// Assigner dans ton DEFAULT_SETTINGS :
import { AppSettings, Row145, IndexLevel, Results,Chapter} from "./types";

export const COLORS  = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink'];

export const APP_PARAMS_GOOD_RESPONSES_D:Row145 = [0, 4, 4, 1, 3, 1, 3, 2, 3, 1, 3, 2, 1, 1, 1, 4, 3, 2, 1, 3, 4, 3, 4, 4, 1, 4, 2, 4, 1, 4, 4, 2, 2, 3, 2, 1, 4, 2, 2, 1, 3, 4, 4, 2, 2, 2, 4, 1, 2, 3, 4, 4, 2, 2, 4, 2, 3, 4, 4, 4, 1, 4, 1, 1, 1, 3, 3, 2, 4, 2, 2, 1, 3, 4, 2, 3, 1, 3, 1, 1, 3, 3, 4, 2, 4, 1, 4, 1, 4, 3, 4, 4, 2, 2, 1, 1, 2, 1, 4, 2, 1, 4, 3, 4, 2, 1, 3, 3, 3, 1, 2, 1, 3, 4, 4, 4, 4, 1, 1, 4, 1, 2, 4, 2, 1, 1, 3, 1, 4, 4, 3, 2, 4, 4, 2, 3, 4, 2, 3, 3, 4, 3, 3, 3, 3];
export const APP_PARAMS_GOOD_RESPONSES_C:Row145 = [0, 4, 4, 1, 3, 1, 3, 2, 3, 1, 3, 2, 1, 1, 1, 4, 3, 2, 1, 3, 4, 3, 4, 4, 1, 4, 2, 4, 1, 4, 4, 2, 2, 3, 2, 1, 4, 2, 2, 1, 3, 4, 4, 2, 2, 2, 4, 1, 2, 3, 4, 4, 2, 2, 4, 2, 3, 4, 4, 4, 1, 4, 1, 1, 1, 3, 3, 2, 4, 2, 2, 1, 3, 4, 2, 3, 1, 3, 1, 1, 3, 3, 4, 2, 4, 1, 4, 1, 4, 3, 4, 4, 2, 2, 1, 1, 2, 1, 4, 2, 1, 4, 3, 4, 2, 1, 3, 3, 3, 1, 2, 1, 3, 4, 4, 4, 4, 1, 1, 4, 1, 2, 4, 2, 1, 1, 3, 1, 4, 4, 3, 2, 4, 4, 2, 3, 4, 2, 3, 3, 4, 3, 3, 3, 3];
export const APP_PARAMS_GOOD_RESPONSES_E:Row145 = [0, 4, 4, 1, 3, 1, 3, 2, 3, 1, 3, 2, 1, 1, 1, 4, 3, 2, 1, 3, 4, 3, 4, 4, 1, 4, 2, 4, 1, 4, 4, 2, 2, 3, 2, 1, 4, 2, 2, 1, 3, 4, 4, 2, 2, 2, 4, 1, 2, 3, 4, 4, 2, 2, 4, 2, 3, 4, 4, 4, 1, 4, 1, 1, 1, 3, 3, 2, 4, 2, 2, 1, 3, 4, 2, 3, 1, 3, 1, 1, 3, 3, 4, 2, 4, 1, 4, 1, 4, 3, 4, 4, 2, 2, 1, 1, 2, 1, 4, 2, 1, 4, 3, 4, 2, 1, 3, 3, 3, 1, 2, 1, 3, 4, 4, 4, 4, 1, 1, 4, 1, 2, 4, 2, 1, 1, 3, 1, 4, 4, 3, 2, 4, 4, 2, 3, 4, 2, 3, 3, 4, 3, 3, 3, 3];

export const APP_PARAMS_VERSION = 'v.1.0'


// utils.ts
function makeRow145(init: number): Row145 {
  const arr = Array(145).fill(init);
  return arr as Row145;
}

export const DEFAULT_SETTINGS: AppSettings = (() => {
  const data: Record<IndexLevel, Row145> = {
    d: makeRow145(0),
    c: makeRow145(0),
    e: makeRow145(0),
  };

  const fn = ((level: IndexLevel, index: number): number => {
    return data[level][index];
  }) as Results;

  fn.get = (level: IndexLevel, index: number): number =>
    data[level][index];

  fn.set = (level: IndexLevel, index: number, value: number): void => {
    data[level][index] = value;
  };

  return {
    count: '0',
    language: 'en',
    item: '',
    theme: 'light',
    results: fn,
    firstTime: true,
  };
})();
