import { Component, Injector, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentBase } from '../../app-component-base';


@Component({
    templateUrl: './account.component.html',
    styleUrls: [
        './account.component.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class AccountComponent extends AppComponentBase implements OnInit {


    public constructor(
        injector: Injector,
        private _router: Router,

    ) {
        super(injector);
    }



    ngOnInit(): void {
    }
}
