import { UserconfigComponent } from './userconfig.component';
import { LayoutModule } from '../layout/layout.module';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'; 

@NgModule({
    declarations: [
        UserconfigComponent,
    ],
    imports: [
        LayoutModule,
        MatFormFieldModule,
        MatIconModule,
    ],
    exports:[
        UserconfigComponent,
    ],
})
export class UserconfigModule{ }