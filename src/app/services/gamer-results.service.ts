import { Injectable } from '@angular/core';
import { Results,IndexLevel, Row145 } from '../interfaces/types';

@Injectable({
  providedIn: 'root'
})
export class GamerResultsService {
  
// const allD = this.gamerResultsService.results.getLevel('d');
constructor() {
    // expose explicitly pour plus de clarté : .get fait la même chose que fn()
    this.fn.get = (levels, index) => this.data[levels][index];
    this.fn.set = (levels, index, value) => {this.data[levels][index] = value;};
    this.fn.set = (l, i, v) => { this.data[l][i] = v; };
    this.fn.getLevel = (l) => this.data[l];
  }

  private data: Record<IndexLevel, Row145> = {
    d: Array(145).fill(0) as Row145,
    c: Array(145).fill(0) as Row145,
    e: Array(145).fill(0) as Row145,
  };

  private fn= ((indexLevel: IndexLevel, index: number): number => {
    return this.data[indexLevel][index];
  }) as Results;

  public get results(): Results {
    return this.fn;
  };

  // public response(level: string, position: number): number  {
  //   console.log('gamer-result-service-response-level',level);
  //   console.log('gamer-result-service-response-level',position);
  //   const arrayLevel = this.data[level as IndexLevel];
  //   const response   = arrayLevel[position];
  //   console.log('gamer-result-service-response-level',response);
  //   return response
  // }
}

