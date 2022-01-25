import { Injector } from "@angular/core";

export abstract class AppComponentBase {
   
    constructor(injector: Injector) {
       
    }

    isGranted(permissionName: string): boolean {
        //return this.permission.isGranted(permissionName);
        return true;
    }

    isGrantedAny(...permissions: string[]): boolean {
        if (!permissions) {
            return false;
        }

        for (const permission of permissions) {
            if (this.isGranted(permission)) {
                return true;
            }
        }

        return false;
    }

 
}