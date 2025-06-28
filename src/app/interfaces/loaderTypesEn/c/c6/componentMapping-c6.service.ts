import { Injectable, Type } from '@angular/core';
    //
    import { C6E1qComponent } from '../../../../components/unity/c/c6/c6-e1q/c6-e1q';
import { C6E1rComponent } from '../../../../components/unity/c/c6/c6-e1r/c6-e1r';
import { C6E1iComponent } from '../../../../components/unity/c/c6/c6-e1i/c6-e1i';
import { C6E2qComponent } from '../../../../components/unity/c/c6/c6-e2q/c6-e2q';
import { C6E2rComponent } from '../../../../components/unity/c/c6/c6-e2r/c6-e2r';
import { C6E2iComponent } from '../../../../components/unity/c/c6/c6-e2i/c6-e2i';
import { C6E3qComponent } from '../../../../components/unity/c/c6/c6-e3q/c6-e3q';
import { C6E3rComponent } from '../../../../components/unity/c/c6/c6-e3r/c6-e3r';
import { C6E3iComponent } from '../../../../components/unity/c/c6/c6-e3i/c6-e3i';
import { C6E4qComponent } from '../../../../components/unity/c/c6/c6-e4q/c6-e4q';
import { C6E4rComponent } from '../../../../components/unity/c/c6/c6-e4r/c6-e4r';
import { C6E4iComponent } from '../../../../components/unity/c/c6/c6-e4i/c6-e4i';
import { C6E5qComponent } from '../../../../components/unity/c/c6/c6-e5q/c6-e5q';
import { C6E5rComponent } from '../../../../components/unity/c/c6/c6-e5r/c6-e5r';
import { C6E5iComponent } from '../../../../components/unity/c/c6/c6-e5i/c6-e5i';
import { C6E6qComponent } from '../../../../components/unity/c/c6/c6-e6q/c6-e6q';
import { C6E6rComponent } from '../../../../components/unity/c/c6/c6-e6r/c6-e6r';
import { C6E6iComponent } from '../../../../components/unity/c/c6/c6-e6i/c6-e6i';
import { C6E7qComponent } from '../../../../components/unity/c/c6/c6-e7q/c6-e7q';
import { C6E7rComponent } from '../../../../components/unity/c/c6/c6-e7r/c6-e7r';
import { C6E7iComponent } from '../../../../components/unity/c/c6/c6-e7i/c6-e7i';
import { C6E8qComponent } from '../../../../components/unity/c/c6/c6-e8q/c6-e8q';
import { C6E8rComponent } from '../../../../components/unity/c/c6/c6-e8r/c6-e8r';
import { C6E8iComponent } from '../../../../components/unity/c/c6/c6-e8i/c6-e8i';
import { C6E9qComponent } from '../../../../components/unity/c/c6/c6-e9q/c6-e9q';
import { C6E9rComponent } from '../../../../components/unity/c/c6/c6-e9r/c6-e9r';
import { C6E9iComponent } from '../../../../components/unity/c/c6/c6-e9i/c6-e9i';
import { C6E10qComponent } from '../../../../components/unity/c/c6/c6-e10q/c6-e10q';
import { C6E10rComponent } from '../../../../components/unity/c/c6/c6-e10r/c6-e10r';
import { C6E10iComponent } from '../../../../components/unity/c/c6/c6-e10i/c6-e10i';
import { C6E11qComponent } from '../../../../components/unity/c/c6/c6-e11q/c6-e11q';
import { C6E11rComponent } from '../../../../components/unity/c/c6/c6-e11r/c6-e11r';
import { C6E11iComponent } from '../../../../components/unity/c/c6/c6-e11i/c6-e11i';
import { C6E12qComponent } from '../../../../components/unity/c/c6/c6-e12q/c6-e12q';
import { C6E12rComponent } from '../../../../components/unity/c/c6/c6-e12r/c6-e12r';
import { C6E12iComponent } from '../../../../components/unity/c/c6/c6-e12i/c6-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingC6 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'c6_1q': C6E1qComponent,
        'c6_1r': C6E1rComponent,
        'c6_1i': C6E1iComponent,
        'c6_2q': C6E2qComponent,
        'c6_2r': C6E2rComponent,
        'c6_2i': C6E2iComponent,
        'c6_3q': C6E3qComponent,
        'c6_3r': C6E3rComponent,
        'c6_3i': C6E3iComponent,
        'c6_4q': C6E4qComponent,
        'c6_4r': C6E4rComponent,
        'c6_4i': C6E4iComponent,
        'c6_5q': C6E5qComponent,
        'c6_5r': C6E5rComponent,
        'c6_5i': C6E5iComponent,
        'c6_6q': C6E6qComponent,
        'c6_6r': C6E6rComponent,
        'c6_6i': C6E6iComponent,
        'c6_7q': C6E7qComponent,
        'c6_7r': C6E7rComponent,
        'c6_7i': C6E7iComponent,
        'c6_8q': C6E8qComponent,
        'c6_8r': C6E8rComponent,
        'c6_8i': C6E8iComponent,
        'c6_9q': C6E9qComponent,
        'c6_9r': C6E9rComponent,
        'c6_9i': C6E9iComponent,
        'c6_10q': C6E10qComponent,
        'c6_10r': C6E10rComponent,
        'c6_10i': C6E10iComponent,
        'c6_11q': C6E11qComponent,
        'c6_11r': C6E11rComponent,
        'c6_11i': C6E11iComponent,
        'c6_12q': C6E12qComponent,
        'c6_12r': C6E12rComponent,
        'c6_12i': C6E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    