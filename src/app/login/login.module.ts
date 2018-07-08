import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {FormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from "./authentication.service";


@NgModule({
    imports:
        [
            CommonModule,
            LoginRoutingModule,
            FormsModule,
            HttpClientModule,
            ModalModule.forRoot()],
    declarations: [LoginComponent],
    providers: [AuthenticationService]
})
export class LoginModule {}
