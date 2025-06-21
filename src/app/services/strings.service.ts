import { Injectable } from '@angular/core';
// my interfaces
import { RESULTS } from '../interfaces/types';
// my classes
import { Item } from '../classes/item'

@Injectable({
  providedIn: 'root'
})
export class StringsService {

  constructor() { }

twoStringsHaveSameCharAtN(str1: string, str2: string, n: number): boolean {
  return str1[n-1] === str2[n-1] 
}

getNthCharacter(str: string, n: number): string {
  return str.charAt(n - 1);
  }

replaceCharAtPosition(str: string, position: number, Char: string): string {
  console.log('stringsService-replaceCharAtPosition-1-str',str.length,'  ',str);
  console.log('stringsService-replaceCharAtPosition-2-position',position);
  console.log('stringsService-replaceCharAtPosition-3-Char',Char)
  const index = position - 1; // convertit en indice 0-based
  let   strLikeArryOChar = str.split('');// transforme une chaîne de carcatères en array de ses caractères
  strLikeArryOChar[index] = Char;
  const newStr = strLikeArryOChar.join('');
  console.log('stringsService-replaceCharAtPosition-4-newStr',newStr.length,'   ',newStr);
  return newStr
}

isGoodResponse(str:string,itemName:string):boolean {
let strResults:string = '';
let item = new Item(itemName);
let position :number;
if (item.level === 'd') {strResults = RESULTS.d};
if (item.level === 'c') {strResults = RESULTS.c};
if (item.level === 'e') {strResults = RESULTS.e};
position = parseInt(item.repPosition,10)
return this.twoStringsHaveSameCharAtN(strResults,str,position);
}
}
