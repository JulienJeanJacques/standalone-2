import { Injectable, Type } from '@angular/core';
    //
    import { C7E1qComponent } from '../../../../components/unity/c/c7/c7-e1q/c7-e1q';
import { C7E1rComponent } from '../../../../components/unity/c/c7/c7-e1r/c7-e1r';
import { C7E1iComponent } from '../../../../components/unity/c/c7/c7-e1i/c7-e1i';
import { C7E2qComponent } from '../../../../components/unity/c/c7/c7-e2q/c7-e2q';
import { C7E2rComponent } from '../../../../components/unity/c/c7/c7-e2r/c7-e2r';
import { C7E2iComponent } from '../../../../components/unity/c/c7/c7-e2i/c7-e2i';
import { C7E3qComponent } from '../../../../components/unity/c/c7/c7-e3q/c7-e3q';
import { C7E3rComponent } from '../../../../components/unity/c/c7/c7-e3r/c7-e3r';
import { C7E3iComponent } from '../../../../components/unity/c/c7/c7-e3i/c7-e3i';
import { C7E4qComponent } from '../../../../components/unity/c/c7/c7-e4q/c7-e4q';
import { C7E4rComponent } from '../../../../components/unity/c/c7/c7-e4r/c7-e4r';
import { C7E4iComponent } from '../../../../components/unity/c/c7/c7-e4i/c7-e4i';
import { C7E5qComponent } from '../../../../components/unity/c/c7/c7-e5q/c7-e5q';
import { C7E5rComponent } from '../../../../components/unity/c/c7/c7-e5r/c7-e5r';
import { C7E5iComponent } from '../../../../components/unity/c/c7/c7-e5i/c7-e5i';
import { C7E6qComponent } from '../../../../components/unity/c/c7/c7-e6q/c7-e6q';
import { C7E6rComponent } from '../../../../components/unity/c/c7/c7-e6r/c7-e6r';
import { C7E6iComponent } from '../../../../components/unity/c/c7/c7-e6i/c7-e6i';
import { C7E7qComponent } from '../../../../components/unity/c/c7/c7-e7q/c7-e7q';
import { C7E7rComponent } from '../../../../components/unity/c/c7/c7-e7r/c7-e7r';
import { C7E7iComponent } from '../../../../components/unity/c/c7/c7-e7i/c7-e7i';
import { C7E8qComponent } from '../../../../components/unity/c/c7/c7-e8q/c7-e8q';
import { C7E8rComponent } from '../../../../components/unity/c/c7/c7-e8r/c7-e8r';
import { C7E8iComponent } from '../../../../components/unity/c/c7/c7-e8i/c7-e8i';
import { C7E9qComponent } from '../../../../components/unity/c/c7/c7-e9q/c7-e9q';
import { C7E9rComponent } from '../../../../components/unity/c/c7/c7-e9r/c7-e9r';
import { C7E9iComponent } from '../../../../components/unity/c/c7/c7-e9i/c7-e9i';
import { C7E10qComponent } from '../../../../components/unity/c/c7/c7-e10q/c7-e10q';
import { C7E10rComponent } from '../../../../components/unity/c/c7/c7-e10r/c7-e10r';
import { C7E10iComponent } from '../../../../components/unity/c/c7/c7-e10i/c7-e10i';
import { C7E11qComponent } from '../../../../components/unity/c/c7/c7-e11q/c7-e11q';
import { C7E11rComponent } from '../../../../components/unity/c/c7/c7-e11r/c7-e11r';
import { C7E11iComponent } from '../../../../components/unity/c/c7/c7-e11i/c7-e11i';
import { C7E12qComponent } from '../../../../components/unity/c/c7/c7-e12q/c7-e12q';
import { C7E12rComponent } from '../../../../components/unity/c/c7/c7-e12r/c7-e12r';
import { C7E12iComponent } from '../../../../components/unity/c/c7/c7-e12i/c7-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingC7 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'c7_1q': C7E1qComponent,
        'c7_1r': C7E1rComponent,
        'c7_1i': C7E1iComponent,
        'c7_2q': C7E2qComponent,
        'c7_2r': C7E2rComponent,
        'c7_2i': C7E2iComponent,
        'c7_3q': C7E3qComponent,
        'c7_3r': C7E3rComponent,
        'c7_3i': C7E3iComponent,
        'c7_4q': C7E4qComponent,
        'c7_4r': C7E4rComponent,
        'c7_4i': C7E4iComponent,
        'c7_5q': C7E5qComponent,
        'c7_5r': C7E5rComponent,
        'c7_5i': C7E5iComponent,
        'c7_6q': C7E6qComponent,
        'c7_6r': C7E6rComponent,
        'c7_6i': C7E6iComponent,
        'c7_7q': C7E7qComponent,
        'c7_7r': C7E7rComponent,
        'c7_7i': C7E7iComponent,
        'c7_8q': C7E8qComponent,
        'c7_8r': C7E8rComponent,
        'c7_8i': C7E8iComponent,
        'c7_9q': C7E9qComponent,
        'c7_9r': C7E9rComponent,
        'c7_9i': C7E9iComponent,
        'c7_10q': C7E10qComponent,
        'c7_10r': C7E10rComponent,
        'c7_10i': C7E10iComponent,
        'c7_11q': C7E11qComponent,
        'c7_11r': C7E11rComponent,
        'c7_11i': C7E11iComponent,
        'c7_12q': C7E12qComponent,
        'c7_12r': C7E12rComponent,
        'c7_12i': C7E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    