import { Injectable } from '@angular/core';
//
import { Item} from '../classes/item'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  name(nameOfItem:string):string{return nameOfItem}

  level(nameOfItem:string):string {
    let item = new Item(nameOfItem);
    return item.level}
  
  chapter(nameOfItem:string):string{ 
    let item = new Item(nameOfItem);
    return item.chapter}

  question(nameOfItem:string):string{ 
    let item = new Item(nameOfItem);
    return item.question}
  
  nature(nameOfItem:string):string{ 
    let item = new Item(nameOfItem);
    return item.nature}

  language(nameOfItem:string):string{ 
    let item = new Item(nameOfItem);
    return item.language}

  beforeUnderScore(nameOfItem:string):string{ 
    let item = new Item(nameOfItem);
    return item.beforeUnderScore}

  afterUnderScore (nameOfItem:string):string{ 
    let item = new Item(nameOfItem);
    return item.afterUnderScore}


  repPosition   (nameOfItem:string):number{ 
    let item = new Item(nameOfItem);
    return item.repPosition }


  ////////////////////////////////

  changeLevel(nameOfItem:string,level:string):string {
     let item = new Item(nameOfItem);
     const newName = level + item.chapter + '_' + item.question + item.nature + '_' + item.language;
  return newName }
  
  changeChapter(nameOfItem:string,chapter:string):string{ 
    let item = new Item(nameOfItem)
    const newName = item.level + chapter + '_' + item.question + item.nature + '_' + item.language;
    return newName }

  changeQuestion(nameOfItem:string,question:string):string{ 
    let item = new Item(nameOfItem)
    const newName = item.level + item.chapter + '_' + question + item.nature + '_' + item.language
    return newName }
  
  changeNature(nameOfItem:string,nature:string):string{ 
    let item = new Item(nameOfItem)
    const newName = item.level + item.chapter + '_' + item.question + nature + '_' + item.language;
    return newName }

  changeLanguage(nameOfItem:string,language:string):string{ 
    let item = new Item(nameOfItem);
    const newName = item.level + item.chapter + '_' + item.question + item.nature + '_' + language;
    return newName }
}
