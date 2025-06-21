import { Injectable } from '@angular/core';
//
import { ConfigFrService } from './config-fr.service';
import { ConfigEngService } from './config-eng.service';
// my interfaces
import { Level } from '../interfaces/types'
@Injectable({
  providedIn: 'root'
})
export class TraductionService {
levelName: string = 'débutant';
natureItemText: string = 'Question :'
  constructor(
    private  configFrService:ConfigFrService,
    private configEngService:ConfigEngService,
  ) { }

  
  findLevelName(language: string, indexLevel: string): string {
    let appNameLevels: Level[] = [];
    if (language === 'fr') {
        appNameLevels = this.configFrService.appNameLevels; 
    } else if (language === 'en') {
        appNameLevels = this.configEngService.appNameLevels; 
    }
    // Utilisation de find pour récupérer l'objet correspondant
    const level = appNameLevels.find(level => level.index === indexLevel);
    // Vérifiez si level existe, puis renvoyez le nom ou une valeur par défaut
    return level ? level.name : 'Niveau non trouvé'; // ou une autre valeur par défaut appropriée
};
;


findTitleChapter(numChapter:string,language:string):string{
  let titleChapter:string = '';
  const chapterNum = parseInt(numChapter, 10); // Convertir le numChapter en entier
  if (language === 'fr') {
    // Vérifier que le chapitre existe dans le service français
    const chapter = this.configFrService.appNameChapters.find(chap => chap.num === chapterNum);
    titleChapter = chapter ? chapter.name : 'Chapitre non trouvé'; // En cas d'erreur, retourner un message
  } else if (language === 'en') {
    // Vérifier que le chapitre existe dans le service anglais
    const chapter = this.configEngService.appNameChapters.find(chap => chap.num === chapterNum);
    titleChapter = chapter ? chapter.name : 'Chapter not found'; // En cas d'erreur, retourner un message
  }
return titleChapter
}
  
findGoodLabel(language:string,frChoice:string,enChoice:string):string {
  let goodChoice:string = '';
  if (language === 'fr') {
    // Vérifier que le chapitre existe dans le service français
    goodChoice = frChoice;
  } else if (language === 'en') {
    // Vérifier que le chapitre existe dans le service anglais
    goodChoice = enChoice}
return goodChoice}
}



