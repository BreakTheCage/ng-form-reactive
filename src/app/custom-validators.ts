import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/Observable";

export class CustomVAlidators {

    static invalidProjectName(control: FormControl): {[s: string]: boolean}{
        console.log('project Name: ',control.value);
        if(control.value === 'Test'){
          return {'InvalidProjectName': true};
        }
        return null;
    }

    static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject)=> {
            setTimeout(()=>{
                if(control.value === 'TestProject'){
                    resolve({'InvalidProjectName': true});
                }else{
                    resolve(null);
                }
            }, 1500);
        });
        return promise;
    }
}