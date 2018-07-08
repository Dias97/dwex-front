import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { NewParselComponent } from './parcels/new-parsel/new-parsel.component';
import { ListParselComponent } from './parcels/list-parsel/list-parsel.component';
import { NewBatchComponent } from './batch/new-batch/new-batch.component';
import { ListBatchComponent } from './batch/list-batch/list-batch.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        FormsModule,
        TranslateModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [
        LayoutComponent,
        SidebarComponent,
        HeaderComponent,
        NewParselComponent,
        ListParselComponent,
        NewBatchComponent,
        ListBatchComponent]
})
export class LayoutModule {}
