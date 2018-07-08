import {Component, OnInit, TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {AuthenticationService} from "./authentication.service";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    mail = 'Dias@dwexpress.kz';
    pass = '123';

    isDialog = false;
    modalRef: BsModalRef;

    config = {
        animated: true
    }

    constructor(public router: Router,
                private toastr: ToastrService,
                private authService: AuthenticationService,
                private modalService: BsModalService) {}
    ngOnInit() {}

    checkForAutheriation() {

        this.authService.login(this.mail, this.pass).subscribe
        (result => {
            if (result === true) {
                // login successful
                this.router.navigate(['/list-parsel']);
            } else {
                // login failed
                this.toastr.warning(result);
            }
        }, error => {
            this.toastr.error('Please try again!');
        });
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    closeAndOpen(template: TemplateRef<any>) {
        this.modalRef.hide();
        this.modalRef = this.modalService.show(template);
    }
}
