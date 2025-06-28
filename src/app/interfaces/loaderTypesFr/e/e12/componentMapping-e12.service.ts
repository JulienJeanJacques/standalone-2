import { Injectable, Type } from '@angular/core';
    //
    import { E12E1qComponent } from '../../../../components/unity/e/e12/e12-e1q/e12-e1q';
import { E12E1rComponent } from '../../../../components/unity/e/e12/e12-e1r/e12-e1r';
import { E12E1iComponent } from '../../../../components/unity/e/e12/e12-e1i/e12-e1i';
import { E12E2qComponent } from '../../../../components/unity/e/e12/e12-e2q/e12-e2q';
import { E12E2rComponent } from '../../../../components/unity/e/e12/e12-e2r/e12-e2r';
import { E12E2iComponent } from '../../../../components/unity/e/e12/e12-e2i/e12-e2i';
import { E12E3qComponent } from '../../../../components/unity/e/e12/e12-e3q/e12-e3q';
import { E12E3rComponent } from '../../../../components/unity/e/e12/e12-e3r/e12-e3r';
import { E12E3iComponent } from '../../../../components/unity/e/e12/e12-e3i/e12-e3i';
import { E12E4qComponent } from '../../../../components/unity/e/e12/e12-e4q/e12-e4q';
import { E12E4rComponent } from '../../../../components/unity/e/e12/e12-e4r/e12-e4r';
import { E12E4iComponent } from '../../../../components/unity/e/e12/e12-e4i/e12-e4i';
import { E12E5qComponent } from '../../../../components/unity/e/e12/e12-e5q/e12-e5q';
import { E12E5rComponent } from '../../../../components/unity/e/e12/e12-e5r/e12-e5r';
import { E12E5iComponent } from '../../../../components/unity/e/e12/e12-e5i/e12-e5i';
import { E12E6qComponent } from '../../../../components/unity/e/e12/e12-e6q/e12-e6q';
import { E12E6rComponent } from '../../../../components/unity/e/e12/e12-e6r/e12-e6r';
import { E12E6iComponent } from '../../../../components/unity/e/e12/e12-e6i/e12-e6i';
import { E12E7qComponent } from '../../../../components/unity/e/e12/e12-e7q/e12-e7q';
import { E12E7rComponent } from '../../../../components/unity/e/e12/e12-e7r/e12-e7r';
import { E12E7iComponent } from '../../../../components/unity/e/e12/e12-e7i/e12-e7i';
import { E12E8qComponent } from '../../../../components/unity/e/e12/e12-e8q/e12-e8q';
import { E12E8rComponent } from '../../../../components/unity/e/e12/e12-e8r/e12-e8r';
import { E12E8iComponent } from '../../../../components/unity/e/e12/e12-e8i/e12-e8i';
import { E12E9qComponent } from '../../../../components/unity/e/e12/e12-e9q/e12-e9q';
import { E12E9rComponent } from '../../../../components/unity/e/e12/e12-e9r/e12-e9r';
import { E12E9iComponent } from '../../../../components/unity/e/e12/e12-e9i/e12-e9i';
import { E12E10qComponent } from '../../../../components/unity/e/e12/e12-e10q/e12-e10q';
import { E12E10rComponent } from '../../../../components/unity/e/e12/e12-e10r/e12-e10r';
import { E12E10iComponent } from '../../../../components/unity/e/e12/e12-e10i/e12-e10i';
import { E12E11qComponent } from '../../../../components/unity/e/e12/e12-e11q/e12-e11q';
import { E12E11rComponent } from '../../../../components/unity/e/e12/e12-e11r/e12-e11r';
import { E12E11iComponent } from '../../../../components/unity/e/e12/e12-e11i/e12-e11i';
import { E12E12qComponent } from '../../../../components/unity/e/e12/e12-e12q/e12-e12q';
import { E12E12rComponent } from '../../../../components/unity/e/e12/e12-e12r/e12-e12r';
import { E12E12iComponent } from '../../../../components/unity/e/e12/e12-e12i/e12-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingE12 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'e12_1q': E12E1qComponent,
        'e12_1r': E12E1rComponent,
        'e12_1i': E12E1iComponent,
        'e12_2q': E12E2qComponent,
        'e12_2r': E12E2rComponent,
        'e12_2i': E12E2iComponent,
        'e12_3q': E12E3qComponent,
        'e12_3r': E12E3rComponent,
        'e12_3i': E12E3iComponent,
        'e12_4q': E12E4qComponent,
        'e12_4r': E12E4rComponent,
        'e12_4i': E12E4iComponent,
        'e12_5q': E12E5qComponent,
        'e12_5r': E12E5rComponent,
        'e12_5i': E12E5iComponent,
        'e12_6q': E12E6qComponent,
        'e12_6r': E12E6rComponent,
        'e12_6i': E12E6iComponent,
        'e12_7q': E12E7qComponent,
        'e12_7r': E12E7rComponent,
        'e12_7i': E12E7iComponent,
        'e12_8q': E12E8qComponent,
        'e12_8r': E12E8rComponent,
        'e12_8i': E12E8iComponent,
        'e12_9q': E12E9qComponent,
        'e12_9r': E12E9rComponent,
        'e12_9i': E12E9iComponent,
        'e12_10q': E12E10qComponent,
        'e12_10r': E12E10rComponent,
        'e12_10i': E12E10iComponent,
        'e12_11q': E12E11qComponent,
        'e12_11r': E12E11rComponent,
        'e12_11i': E12E11iComponent,
        'e12_12q': E12E12qComponent,
        'e12_12r': E12E12rComponent,
        'e12_12i': E12E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    