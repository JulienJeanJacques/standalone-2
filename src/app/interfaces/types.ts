export interface ChoiceMenuSide {
    title : string,
    url   : string[],
    icon  : string,
    color : string,
}
export interface Chapter{
    num    : number,
    name   : string,
}
export interface Level{
    index  : string,
    name   : string,
}
export interface Count{
    num    : string,
    name   : string,
}

export interface NatureItem{
    index   : string,
    name   : string,
}

export type IndexLevel = 'd' | 'c' | 'e';
export type Row145 = number[] & { length: 145 };

export interface Results {
  (level: IndexLevel, index: number): number;
  get(level: IndexLevel, index: number): number;
  set(level: IndexLevel, index: number, value: number): void;
  getLevel(level: IndexLevel): Row145; 
}

export interface AppSettings {
  count: string;
  language: string;
  item: string;
  theme:  "light" | "dark";
  results: Results;
  firstTime:boolean;
}

// types for animations *****************************************
export interface Confetti {
  x: number;
  size: string;
  color: string;
  animationDuration: string;
  delay: string;
  type: 'confetti' | 'serpentins';
  angle: number; // angle de déplacement
}

export interface Balloon {
  x: number;
  speed: number;
  delay: number;
  colorGradient: string;
}





