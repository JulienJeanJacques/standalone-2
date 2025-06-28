import { Injectable, Type } from '@angular/core';
    //
    import { C12E1qComponent } from '../../../../components/unity/c/c12/c12-e1q/c12-e1q';
import { C12E1rComponent } from '../../../../components/unity/c/c12/c12-e1r/c12-e1r';
import { C12E1iComponent } from '../../../../components/unity/c/c12/c12-e1i/c12-e1i';
import { C12E2qComponent } from '../../../../components/unity/c/c12/c12-e2q/c12-e2q';
import { C12E2rComponent } from '../../../../components/unity/c/c12/c12-e2r/c12-e2r';
import { C12E2iComponent } from '../../../../components/unity/c/c12/c12-e2i/c12-e2i';
import { C12E3qComponent } from '../../../../components/unity/c/c12/c12-e3q/c12-e3q';
import { C12E3rComponent } from '../../../../components/unity/c/c12/c12-e3r/c12-e3r';
import { C12E3iComponent } from '../../../../components/unity/c/c12/c12-e3i/c12-e3i';
import { C12E4qComponent } from '../../../../components/unity/c/c12/c12-e4q/c12-e4q';
import { C12E4rComponent } from '../../../../components/unity/c/c12/c12-e4r/c12-e4r';
import { C12E4iComponent } from '../../../../components/unity/c/c12/c12-e4i/c12-e4i';
import { C12E5qComponent } from '../../../../components/unity/c/c12/c12-e5q/c12-e5q';
import { C12E5rComponent } from '../../../../components/unity/c/c12/c12-e5r/c12-e5r';
import { C12E5iComponent } from '../../../../components/unity/c/c12/c12-e5i/c12-e5i';
import { C12E6qComponent } from '../../../../components/unity/c/c12/c12-e6q/c12-e6q';
import { C12E6rComponent } from '../../../../components/unity/c/c12/c12-e6r/c12-e6r';
import { C12E6iComponent } from '../../../../components/unity/c/c12/c12-e6i/c12-e6i';
import { C12E7qComponent } from '../../../../components/unity/c/c12/c12-e7q/c12-e7q';
import { C12E7rComponent } from '../../../../components/unity/c/c12/c12-e7r/c12-e7r';
import { C12E7iComponent } from '../../../../components/unity/c/c12/c12-e7i/c12-e7i';
import { C12E8qComponent } from '../../../../components/unity/c/c12/c12-e8q/c12-e8q';
import { C12E8rComponent } from '../../../../components/unity/c/c12/c12-e8r/c12-e8r';
import { C12E8iComponent } from '../../../../components/unity/c/c12/c12-e8i/c12-e8i';
import { C12E9qComponent } from '../../../../components/unity/c/c12/c12-e9q/c12-e9q';
import { C12E9rComponent } from '../../../../components/unity/c/c12/c12-e9r/c12-e9r';
import { C12E9iComponent } from '../../../../components/unity/c/c12/c12-e9i/c12-e9i';
import { C12E10qComponent } from '../../../../components/unity/c/c12/c12-e10q/c12-e10q';
import { C12E10rComponent } from '../../../../components/unity/c/c12/c12-e10r/c12-e10r';
import { C12E10iComponent } from '../../../../components/unity/c/c12/c12-e10i/c12-e10i';
import { C12E11qComponent } from '../../../../components/unity/c/c12/c12-e11q/c12-e11q';
import { C12E11rComponent } from '../../../../components/unity/c/c12/c12-e11r/c12-e11r';
import { C12E11iComponent } from '../../../../components/unity/c/c12/c12-e11i/c12-e11i';
import { C12E12qComponent } from '../../../../components/unity/c/c12/c12-e12q/c12-e12q';
import { C12E12rComponent } from '../../../../components/unity/c/c12/c12-e12r/c12-e12r';
import { C12E12iComponent } from '../../../../components/unity/c/c12/c12-e12i/c12-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingC12 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'c12_1q': C12E1qComponent,
        'c12_1r': C12E1rComponent,
        'c12_1i': C12E1iComponent,
        'c12_2q': C12E2qComponent,
        'c12_2r': C12E2rComponent,
        'c12_2i': C12E2iComponent,
        'c12_3q': C12E3qComponent,
        'c12_3r': C12E3rComponent,
        'c12_3i': C12E3iComponent,
        'c12_4q': C12E4qComponent,
        'c12_4r': C12E4rComponent,
        'c12_4i': C12E4iComponent,
        'c12_5q': C12E5qComponent,
        'c12_5r': C12E5rComponent,
        'c12_5i': C12E5iComponent,
        'c12_6q': C12E6qComponent,
        'c12_6r': C12E6rComponent,
        'c12_6i': C12E6iComponent,
        'c12_7q': C12E7qComponent,
        'c12_7r': C12E7rComponent,
        'c12_7i': C12E7iComponent,
        'c12_8q': C12E8qComponent,
        'c12_8r': C12E8rComponent,
        'c12_8i': C12E8iComponent,
        'c12_9q': C12E9qComponent,
        'c12_9r': C12E9rComponent,
        'c12_9i': C12E9iComponent,
        'c12_10q': C12E10qComponent,
        'c12_10r': C12E10rComponent,
        'c12_10i': C12E10iComponent,
        'c12_11q': C12E11qComponent,
        'c12_11r': C12E11rComponent,
        'c12_11i': C12E11iComponent,
        'c12_12q': C12E12qComponent,
        'c12_12r': C12E12rComponent,
        'c12_12i': C12E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    