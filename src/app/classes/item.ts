export class Item {
        name:             string;// d1_2q_en
        level:            string;// d
        chapter:          string;// 1
        question:         string;// 2
        nature:           string;// q=question r=réponse i=information
        language:         string;// en
        beforeUnderScore: string;// d1
        afterUnderScore:  string;//2q
        repPosition    :  number;//
        //isDone:           boolean;//

  constructor(nameOfItem:string) {
      this.name             = nameOfItem;
      this.level            = '';
      this.chapter          = '';
      this.question         = '';
      this.nature           = '';
      this.language         = '';
      this.beforeUnderScore = '';
      this.afterUnderScore  = '';
      this.repPosition      = 1; 
      //this.isDone           = false;
      let  elements:string[]
      if  (nameOfItem !== ""){
           elements     = this.parseItemName(nameOfItem)
          this.level    = elements[0];
          this.chapter  = elements[1];
          this.question = elements[2];
          this.nature   = elements[3];
          this.language = elements[4];
          //
          this.beforeUnderScore = this.level   + this.chapter;
          this.afterUnderScore = this.question + this.nature; 
          //
          this.repPosition = parseInt(this.chapter, 10)*parseInt(this.question, 10) };
          //
    }

    
// changeChapter(newChapter:string)
// { this.chapter = newChapter;
//   this.beforeUnderScore =this.level + this.chapter;
//   this.name = this.beforeUnderScore + '_'+this.afterUnderScore;
//   //
//   if (this.level === 'd'){this.repPosition = 1*parseInt(this.chapter, 10)*parseInt(this.question, 10)  };
//   if (this.level === 'c'){this.repPosition = 2*parseInt(this.chapter, 10)*parseInt(this.question, 10)  };
//   if (this.level === 'e'){this.repPosition = 3*parseInt(this.chapter, 10)*parseInt(this.question, 10)  };     
// }

// changeLevel(newLevel:string)
// { this.level = newLevel;
//   this.beforeUnderScore =this.level + this.chapter;
//   this.name = this.beforeUnderScore + '_'+this.afterUnderScore; 
//   if (this.level === 'd'){this.repPosition = 1*parseInt(this.chapter, 10)*parseInt(this.question, 10)  };
//   if (this.level === 'c'){this.repPosition = 2*parseInt(this.chapter, 10)*parseInt(this.question, 10)  };
//   if (this.level === 'e'){this.repPosition = 3*parseInt(this.chapter, 10)*parseInt(this.question, 10)  };         
// }

// changeQuestion(newQuestion:string)
// { this.question = newQuestion;
//   this.afterUnderScore =this.question + this.nature;
//   this.name = this.beforeUnderScore + '_'+this.afterUnderScore;
//   if (this.level === 'd'){this.repPosition = 1*parseInt(this.chapter, 10)*parseInt(this.question, 10)  };
//   if (this.level === 'c'){this.repPosition = 2*parseInt(this.chapter, 10)*parseInt(this.question, 10)  };
//   if (this.level === 'e'){this.repPosition = 3*parseInt(this.chapter, 10)*parseInt(this.question, 10)  };          
// }

// changeNature(newNature:string)
// { this.nature = newNature;
//   this.afterUnderScore  = this.question + this.nature;  
//   this.name = this.beforeUnderScore + '_'+this.afterUnderScore;
//   if (this.level === 'd'){this.repPosition = 1*parseInt(this.chapter, 10)*parseInt(this.question, 10)  };
//   if (this.level === 'c'){this.repPosition = 2*parseInt(this.chapter, 10)*parseInt(this.question, 10)  };
//   if (this.level === 'e'){this.repPosition = 3*parseInt(this.chapter, 10)*parseInt(this.question, 10)  };      
// }

// changeItemFor(nameOfNewItem:string){
//   let newItem   = new Item(nameOfNewItem);
//   this.name     = newItem.name; 
//   this.level    = newItem.level;
//   this.chapter  = newItem.chapter;
//   this.question = newItem.question;
//   this.nature   = newItem.nature;
//   this.beforeUnderScore = newItem.beforeUnderScore;
//   this.afterUnderScore  = newItem.afterUnderScore; 
//   if (this.level === 'd'){this.repPosition = 1*parseInt(this.chapter, 10)*parseInt(this.question, 10)  };
//   if (this.level === 'c'){this.repPosition = 2*parseInt(this.chapter, 10)*parseInt(this.question, 10)  };
//   if (this.level === 'e'){this.repPosition = 3*parseInt(this.chapter, 10)*parseInt(this.question, 10)  };     
// }

// changeLanguage(newLanguage:string){
//   this.language = newLanguage;
// }

// private procedure ////////////////////////////////////////////////
private  parseItemName(input: string): string[] {
  const regex = /^([dce])(\d{1,2})_(\d{1,2})([a-zA-Z])_(en|fr)$/;
  const match = input.match(regex);
  
 if (!match) {
    // Valeurs par défaut cohérentes : level vide, chapter '0', question '0', nature vide, language vide
    return ['d', '1', '1', 'q', 'en'];
  }

  const [, level, chapter, question, nature, language] = match;
  return [level, chapter, question, nature, language];
}


}