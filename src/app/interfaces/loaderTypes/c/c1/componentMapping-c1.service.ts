import { Injectable, Type } from '@angular/core';
    //
import { C1E1qComponent } from '../../../../components/unity/c/c1/c1-e1q/c1-e1q';
import { C1E1rComponent } from '../../../../components/unity/c/c1/c1-e1r/c1-e1r';
import { C1E1iComponent } from '../../../../components/unity/c/c1/c1-e1i/c1-e1i';
import { C1E2qComponent } from '../../../../components/unity/c/c1/c1-e2q/c1-e2q';
import { C1E2rComponent } from '../../../../components/unity/c/c1/c1-e2r/c1-e2r';
import { C1E2iComponent } from '../../../../components/unity/c/c1/c1-e2i/c1-e2i';
import { C1E3qComponent } from '../../../../components/unity/c/c1/c1-e3q/c1-e3q';
import { C1E3rComponent } from '../../../../components/unity/c/c1/c1-e3r/c1-e3r';
import { C1E3iComponent } from '../../../../components/unity/c/c1/c1-e3i/c1-e3i';
import { C1E4qComponent } from '../../../../components/unity/c/c1/c1-e4q/c1-e4q';
import { C1E4rComponent } from '../../../../components/unity/c/c1/c1-e4r/c1-e4r';
import { C1E4iComponent } from '../../../../components/unity/c/c1/c1-e4i/c1-e4i';
import { C1E5qComponent } from '../../../../components/unity/c/c1/c1-e5q/c1-e5q';
import { C1E5rComponent } from '../../../../components/unity/c/c1/c1-e5r/c1-e5r';
import { C1E5iComponent } from '../../../../components/unity/c/c1/c1-e5i/c1-e5i';
import { C1E6qComponent } from '../../../../components/unity/c/c1/c1-e6q/c1-e6q';
import { C1E6rComponent } from '../../../../components/unity/c/c1/c1-e6r/c1-e6r';
import { C1E6iComponent } from '../../../../components/unity/c/c1/c1-e6i/c1-e6i';
import { C1E7qComponent } from '../../../../components/unity/c/c1/c1-e7q/c1-e7q';
import { C1E7rComponent } from '../../../../components/unity/c/c1/c1-e7r/c1-e7r';
import { C1E7iComponent } from '../../../../components/unity/c/c1/c1-e7i/c1-e7i';
import { C1E8qComponent } from '../../../../components/unity/c/c1/c1-e8q/c1-e8q';
import { C1E8rComponent } from '../../../../components/unity/c/c1/c1-e8r/c1-e8r';
import { C1E8iComponent } from '../../../../components/unity/c/c1/c1-e8i/c1-e8i';
import { C1E9qComponent } from '../../../../components/unity/c/c1/c1-e9q/c1-e9q';
import { C1E9rComponent } from '../../../../components/unity/c/c1/c1-e9r/c1-e9r';
import { C1E9iComponent } from '../../../../components/unity/c/c1/c1-e9i/c1-e9i';
import { C1E10qComponent } from '../../../../components/unity/c/c1/c1-e10q/c1-e10q';
import { C1E10rComponent } from '../../../../components/unity/c/c1/c1-e10r/c1-e10r';
import { C1E10iComponent } from '../../../../components/unity/c/c1/c1-e10i/c1-e10i';
import { C1E11qComponent } from '../../../../components/unity/c/c1/c1-e11q/c1-e11q';
import { C1E11rComponent } from '../../../../components/unity/c/c1/c1-e11r/c1-e11r';
import { C1E11iComponent } from '../../../../components/unity/c/c1/c1-e11i/c1-e11i';
import { C1E12qComponent } from '../../../../components/unity/c/c1/c1-e12q/c1-e12q';
import { C1E12rComponent } from '../../../../components/unity/c/c1/c1-e12r/c1-e12r';
import { C1E12iComponent } from '../../../../components/unity/c/c1/c1-e12i/c1-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingC1 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'c1_1q': C1E1qComponent,
        'c1_1r': C1E1rComponent,
        'c1_1i': C1E1iComponent,
        'c1_2q': C1E2qComponent,
        'c1_2r': C1E2rComponent,
        'c1_2i': C1E2iComponent,
        'c1_3q': C1E3qComponent,
        'c1_3r': C1E3rComponent,
        'c1_3i': C1E3iComponent,
        'c1_4q': C1E4qComponent,
        'c1_4r': C1E4rComponent,
        'c1_4i': C1E4iComponent,
        'c1_5q': C1E5qComponent,
        'c1_5r': C1E5rComponent,
        'c1_5i': C1E5iComponent,
        'c1_6q': C1E6qComponent,
        'c1_6r': C1E6rComponent,
        'c1_6i': C1E6iComponent,
        'c1_7q': C1E7qComponent,
        'c1_7r': C1E7rComponent,
        'c1_7i': C1E7iComponent,
        'c1_8q': C1E8qComponent,
        'c1_8r': C1E8rComponent,
        'c1_8i': C1E8iComponent,
        'c1_9q': C1E9qComponent,
        'c1_9r': C1E9rComponent,
        'c1_9i': C1E9iComponent,
        'c1_10q': C1E10qComponent,
        'c1_10r': C1E10rComponent,
        'c1_10i': C1E10iComponent,
        'c1_11q': C1E11qComponent,
        'c1_11r': C1E11rComponent,
        'c1_11i': C1E11iComponent,
        'c1_12q': C1E12qComponent,
        'c1_12r': C1E12rComponent,
        'c1_12i': C1E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    