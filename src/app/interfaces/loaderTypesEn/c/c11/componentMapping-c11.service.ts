import { Injectable, Type } from '@angular/core';
    //
import { C11E1qComponent } from '../../../../components/unity/c/c11/c11-e1q/c11-e1q';
import { C11E1rComponent } from '../../../../components/unity/c/c11/c11-e1r/c11-e1r';
import { C11E1iComponent } from '../../../../components/unity/c/c11/c11-e1i/c11-e1i';
import { C11E2qComponent } from '../../../../components/unity/c/c11/c11-e2q/c11-e2q';
import { C11E2rComponent } from '../../../../components/unity/c/c11/c11-e2r/c11-e2r';
import { C11E2iComponent } from '../../../../components/unity/c/c11/c11-e2i/c11-e2i';
import { C11E3qComponent } from '../../../../components/unity/c/c11/c11-e3q/c11-e3q';
import { C11E3rComponent } from '../../../../components/unity/c/c11/c11-e3r/c11-e3r';
import { C11E3iComponent } from '../../../../components/unity/c/c11/c11-e3i/c11-e3i';
import { C11E4qComponent } from '../../../../components/unity/c/c11/c11-e4q/c11-e4q';
import { C11E4rComponent } from '../../../../components/unity/c/c11/c11-e4r/c11-e4r';
import { C11E4iComponent } from '../../../../components/unity/c/c11/c11-e4i/c11-e4i';
import { C11E5qComponent } from '../../../../components/unity/c/c11/c11-e5q/c11-e5q';
import { C11E5rComponent } from '../../../../components/unity/c/c11/c11-e5r/c11-e5r';
import { C11E5iComponent } from '../../../../components/unity/c/c11/c11-e5i/c11-e5i';
import { C11E6qComponent } from '../../../../components/unity/c/c11/c11-e6q/c11-e6q';
import { C11E6rComponent } from '../../../../components/unity/c/c11/c11-e6r/c11-e6r';
import { C11E6iComponent } from '../../../../components/unity/c/c11/c11-e6i/c11-e6i';
import { C11E7qComponent } from '../../../../components/unity/c/c11/c11-e7q/c11-e7q';
import { C11E7rComponent } from '../../../../components/unity/c/c11/c11-e7r/c11-e7r';
import { C11E7iComponent } from '../../../../components/unity/c/c11/c11-e7i/c11-e7i';
import { C11E8qComponent } from '../../../../components/unity/c/c11/c11-e8q/c11-e8q';
import { C11E8rComponent } from '../../../../components/unity/c/c11/c11-e8r/c11-e8r';
import { C11E8iComponent } from '../../../../components/unity/c/c11/c11-e8i/c11-e8i';
import { C11E9qComponent } from '../../../../components/unity/c/c11/c11-e9q/c11-e9q';
import { C11E9rComponent } from '../../../../components/unity/c/c11/c11-e9r/c11-e9r';
import { C11E9iComponent } from '../../../../components/unity/c/c11/c11-e9i/c11-e9i';
import { C11E10qComponent } from '../../../../components/unity/c/c11/c11-e10q/c11-e10q';
import { C11E10rComponent } from '../../../../components/unity/c/c11/c11-e10r/c11-e10r';
import { C11E10iComponent } from '../../../../components/unity/c/c11/c11-e10i/c11-e10i';
import { C11E11qComponent } from '../../../../components/unity/c/c11/c11-e11q/c11-e11q';
import { C11E11rComponent } from '../../../../components/unity/c/c11/c11-e11r/c11-e11r';
import { C11E11iComponent } from '../../../../components/unity/c/c11/c11-e11i/c11-e11i';
import { C11E12qComponent } from '../../../../components/unity/c/c11/c11-e12q/c11-e12q';
import { C11E12rComponent } from '../../../../components/unity/c/c11/c11-e12r/c11-e12r';
import { C11E12iComponent } from '../../../../components/unity/c/c11/c11-e12i/c11-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingC11 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
        'c11_1q': C11E1qComponent,
        'c11_1r': C11E1rComponent,
        'c11_1i': C11E1iComponent,
        'c11_2q': C11E2qComponent,
        'c11_2r': C11E2rComponent,
        'c11_2i': C11E2iComponent,
        'c11_3q': C11E3qComponent,
        'c11_3r': C11E3rComponent,
        'c11_3i': C11E3iComponent,
        'c11_4q': C11E4qComponent,
        'c11_4r': C11E4rComponent,
        'c11_4i': C11E4iComponent,
        'c11_5q': C11E5qComponent,
        'c11_5r': C11E5rComponent,
        'c11_5i': C11E5iComponent,
        'c11_6q': C11E6qComponent,
        'c11_6r': C11E6rComponent,
        'c11_6i': C11E6iComponent,
        'c11_7q': C11E7qComponent,
        'c11_7r': C11E7rComponent,
        'c11_7i': C11E7iComponent,
        'c11_8q': C11E8qComponent,
        'c11_8r': C11E8rComponent,
        'c11_8i': C11E8iComponent,
        'c11_9q': C11E9qComponent,
        'c11_9r': C11E9rComponent,
        'c11_9i': C11E9iComponent,
        'c11_10q': C11E10qComponent,
        'c11_10r': C11E10rComponent,
        'c11_10i': C11E10iComponent,
        'c11_11q': C11E11qComponent,
        'c11_11r': C11E11rComponent,
        'c11_11i': C11E11iComponent,
        'c11_12q': C11E12qComponent,
        'c11_12r': C11E12rComponent,
        'c11_12i': C11E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    