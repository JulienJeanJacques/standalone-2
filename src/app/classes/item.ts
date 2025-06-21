export class Item {
        name:             string;// d1_2q
        level:            string;// d
        chapter:          string;// 1
        question:         string;// 2
        nature:           string;// q=question r=réponse i=information
        beforeUnderScore: string;// d1
        afterUnderScore:  string;//2q
        repPosition    :  string;//

  constructor(nameOfItem:string) {
      this.name             = nameOfItem;
      this.level            = 'd';
      this.chapter          = '1';
      this.question         = '1';
      this.nature           = 'q';
      this.beforeUnderScore = 'd1';
      this.afterUnderScore  = '1q';
      this.repPosition      = '1'; 
      if  (nameOfItem !==""){
      let indexOfUnderscore:number;
      indexOfUnderscore = this.findFirstOccurrence(nameOfItem,'_');
      //
      this.level = this.getFirstCharacter(nameOfItem);
      //
      this.chapter = this.extractSubstring(nameOfItem,1,indexOfUnderscore-1);
      //
      this.question = this.extractSubstring(nameOfItem,indexOfUnderscore + 1,nameOfItem.length-2);
      //
      this.nature = this.getLastCharacter(nameOfItem);
      //
      this.beforeUnderScore = this.level   + this.chapter;
      this.afterUnderScore = this.question + this.nature; 
      //
      if (this.level === 'd'){this.repPosition = 1*parseInt(this.chapter, 10)*parseInt(this.question, 10) +''  };
      if (this.level === 'c'){this.repPosition = 2*parseInt(this.chapter, 10)*parseInt(this.question, 10) +''  };
      if (this.level === 'e'){this.repPosition = 3*parseInt(this.chapter, 10)*parseInt(this.question, 10) +''  };
      }
    }

    
changeChapter(newChapter:string)
{ this.chapter = newChapter;
  this.beforeUnderScore =this.level + this.chapter;
  this.name = this.beforeUnderScore + '_'+this.afterUnderScore;
  //
  if (this.level === 'd'){this.repPosition = 1*parseInt(this.chapter, 10)*parseInt(this.question, 10) +''  };
  if (this.level === 'c'){this.repPosition = 2*parseInt(this.chapter, 10)*parseInt(this.question, 10) +''  };
  if (this.level === 'e'){this.repPosition = 3*parseInt(this.chapter, 10)*parseInt(this.question, 10) +''  };     
}

changeLevel(newLevel:string)
{ this.level = newLevel;
  this.beforeUnderScore =this.level + this.chapter;
  this.name = this.beforeUnderScore + '_'+this.afterUnderScore; 
  if (this.level === 'd'){this.repPosition = 1*parseInt(this.chapter, 10)*parseInt(this.question, 10) +''  };
  if (this.level === 'c'){this.repPosition = 2*parseInt(this.chapter, 10)*parseInt(this.question, 10) +''  };
  if (this.level === 'e'){this.repPosition = 3*parseInt(this.chapter, 10)*parseInt(this.question, 10) +''  };         
}

changeQuestion(newQuestion:string)
{ this.question = newQuestion;
  this.afterUnderScore =this.question + this.nature;
  this.name = this.beforeUnderScore + '_'+this.afterUnderScore;
  if (this.level === 'd'){this.repPosition = 1*parseInt(this.chapter, 10)*parseInt(this.question, 10) +''  };
  if (this.level === 'c'){this.repPosition = 2*parseInt(this.chapter, 10)*parseInt(this.question, 10) +''  };
  if (this.level === 'e'){this.repPosition = 3*parseInt(this.chapter, 10)*parseInt(this.question, 10) +''  };          
}

changeNature(newNature:string)
{ this.nature = newNature;
  this.afterUnderScore  = this.question + this.nature;  
  this.name = this.beforeUnderScore + '_'+this.afterUnderScore;
  if (this.level === 'd'){this.repPosition = 1*parseInt(this.chapter, 10)*parseInt(this.question, 10) +''  };
  if (this.level === 'c'){this.repPosition = 2*parseInt(this.chapter, 10)*parseInt(this.question, 10) +''  };
  if (this.level === 'e'){this.repPosition = 3*parseInt(this.chapter, 10)*parseInt(this.question, 10) +''  };      
}

changeItemFor(nameOfNewItem:string){
  let newItem   = new Item(nameOfNewItem);
  this.name     = newItem.name; 
  this.level    = newItem.level;
  this.chapter  = newItem.chapter;
  this.question = newItem.question;
  this.nature   = newItem.nature;
  this.beforeUnderScore = newItem.beforeUnderScore;
  this.afterUnderScore  = newItem.afterUnderScore; 
  if (this.level === 'd'){this.repPosition = 1*parseInt(this.chapter, 10)*parseInt(this.question, 10) +''  };
  if (this.level === 'c'){this.repPosition = 2*parseInt(this.chapter, 10)*parseInt(this.question, 10) +''  };
  if (this.level === 'e'){this.repPosition = 3*parseInt(this.chapter, 10)*parseInt(this.question, 10) +''  };     
}


private extractSubstring(inputString: string, a: number, b: number): string {
// Vérifiez si a et b sont à l'intérieur de la longueur de la chaîne
  if (a < 0 || b >= inputString.length || a > b) {
    return '';
  }
  return inputString.substring(a, b + 1);
}
// Nouvelle fonction pour trouver la première position d'une lettre
private findFirstOccurrence(inputString: string, letter: string): number 
{
  const index = inputString.indexOf(letter); // Trouve l'index de la lettre
  return index === -1 ? -1 : index ; // Return -1 if not found, else return index first place is zero
}
private getLastCharacter(inputString: string): string {
  if (inputString.length === 0) {
    return ''; // Retourne une chaîne vide si l'entrée est vide
  }
  return inputString.charAt(inputString.length - 1); // Retourne la dernière lettre
}
private getFirstCharacter(inputString: string): string {
  if (inputString.length === 0) {
    return ''; // Retourne une chaîne vide si l'entrée est vide
  }
  return inputString.charAt(0); // Retourne la première lettre
}
    }
