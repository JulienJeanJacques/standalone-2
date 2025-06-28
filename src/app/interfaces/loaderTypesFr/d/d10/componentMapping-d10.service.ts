import { Injectable, Type } from '@angular/core';
    //
    import { D10E1qComponent } from '../../../../components/unity/d/d10/d10-e1q/d10-e1q';
import { D10E1rComponent } from '../../../../components/unity/d/d10/d10-e1r/d10-e1r';
import { D10E1iComponent } from '../../../../components/unity/d/d10/d10-e1i/d10-e1i';
import { D10E2qComponent } from '../../../../components/unity/d/d10/d10-e2q/d10-e2q';
import { D10E2rComponent } from '../../../../components/unity/d/d10/d10-e2r/d10-e2r';
import { D10E2iComponent } from '../../../../components/unity/d/d10/d10-e2i/d10-e2i';
import { D10E3qComponent } from '../../../../components/unity/d/d10/d10-e3q/d10-e3q';
import { D10E3rComponent } from '../../../../components/unity/d/d10/d10-e3r/d10-e3r';
import { D10E3iComponent } from '../../../../components/unity/d/d10/d10-e3i/d10-e3i';
import { D10E4qComponent } from '../../../../components/unity/d/d10/d10-e4q/d10-e4q';
import { D10E4rComponent } from '../../../../components/unity/d/d10/d10-e4r/d10-e4r';
import { D10E4iComponent } from '../../../../components/unity/d/d10/d10-e4i/d10-e4i';
import { D10E5qComponent } from '../../../../components/unity/d/d10/d10-e5q/d10-e5q';
import { D10E5rComponent } from '../../../../components/unity/d/d10/d10-e5r/d10-e5r';
import { D10E5iComponent } from '../../../../components/unity/d/d10/d10-e5i/d10-e5i';
import { D10E6qComponent } from '../../../../components/unity/d/d10/d10-e6q/d10-e6q';
import { D10E6rComponent } from '../../../../components/unity/d/d10/d10-e6r/d10-e6r';
import { D10E6iComponent } from '../../../../components/unity/d/d10/d10-e6i/d10-e6i';
import { D10E7qComponent } from '../../../../components/unity/d/d10/d10-e7q/d10-e7q';
import { D10E7rComponent } from '../../../../components/unity/d/d10/d10-e7r/d10-e7r';
import { D10E7iComponent } from '../../../../components/unity/d/d10/d10-e7i/d10-e7i';
import { D10E8qComponent } from '../../../../components/unity/d/d10/d10-e8q/d10-e8q';
import { D10E8rComponent } from '../../../../components/unity/d/d10/d10-e8r/d10-e8r';
import { D10E8iComponent } from '../../../../components/unity/d/d10/d10-e8i/d10-e8i';
import { D10E9qComponent } from '../../../../components/unity/d/d10/d10-e9q/d10-e9q';
import { D10E9rComponent } from '../../../../components/unity/d/d10/d10-e9r/d10-e9r';
import { D10E9iComponent } from '../../../../components/unity/d/d10/d10-e9i/d10-e9i';
import { D10E10qComponent } from '../../../../components/unity/d/d10/d10-e10q/d10-e10q';
import { D10E10rComponent } from '../../../../components/unity/d/d10/d10-e10r/d10-e10r';
import { D10E10iComponent } from '../../../../components/unity/d/d10/d10-e10i/d10-e10i';
import { D10E11qComponent } from '../../../../components/unity/d/d10/d10-e11q/d10-e11q';
import { D10E11rComponent } from '../../../../components/unity/d/d10/d10-e11r/d10-e11r';
import { D10E11iComponent } from '../../../../components/unity/d/d10/d10-e11i/d10-e11i';
import { D10E12qComponent } from '../../../../components/unity/d/d10/d10-e12q/d10-e12q';
import { D10E12rComponent } from '../../../../components/unity/d/d10/d10-e12r/d10-e12r';
import { D10E12iComponent } from '../../../../components/unity/d/d10/d10-e12i/d10-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingD10 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'd10_1q': D10E1qComponent,
        'd10_1r': D10E1rComponent,
        'd10_1i': D10E1iComponent,
        'd10_2q': D10E2qComponent,
        'd10_2r': D10E2rComponent,
        'd10_2i': D10E2iComponent,
        'd10_3q': D10E3qComponent,
        'd10_3r': D10E3rComponent,
        'd10_3i': D10E3iComponent,
        'd10_4q': D10E4qComponent,
        'd10_4r': D10E4rComponent,
        'd10_4i': D10E4iComponent,
        'd10_5q': D10E5qComponent,
        'd10_5r': D10E5rComponent,
        'd10_5i': D10E5iComponent,
        'd10_6q': D10E6qComponent,
        'd10_6r': D10E6rComponent,
        'd10_6i': D10E6iComponent,
        'd10_7q': D10E7qComponent,
        'd10_7r': D10E7rComponent,
        'd10_7i': D10E7iComponent,
        'd10_8q': D10E8qComponent,
        'd10_8r': D10E8rComponent,
        'd10_8i': D10E8iComponent,
        'd10_9q': D10E9qComponent,
        'd10_9r': D10E9rComponent,
        'd10_9i': D10E9iComponent,
        'd10_10q': D10E10qComponent,
        'd10_10r': D10E10rComponent,
        'd10_10i': D10E10iComponent,
        'd10_11q': D10E11qComponent,
        'd10_11r': D10E11rComponent,
        'd10_11i': D10E11iComponent,
        'd10_12q': D10E12qComponent,
        'd10_12r': D10E12rComponent,
        'd10_12i': D10E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    