import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Frontend';

  dataResponseOpenIA : any;
  dataRequestOpenIA :  any = {};
  result = false;
  programmerList: any = []
  HUList: any =[]
  messageError = '';
  isDisplayedLoading = true;

  constructor( private appService : AppService) {}

  calculateResponse(userStories : Array<string>, programmerProfiles:any){
    this.dataRequestOpenIA = {
      "user_stories" : userStories,
      "programmer_profiles": programmerProfiles
    }
    if(userStories.length != 0 && programmerProfiles.length != 0){
      this.isDisplayedLoading = false
      this.appService.postOpenIA(this.dataRequestOpenIA).subscribe( data => {
        this.dataResponseOpenIA = Object.values(data);
        this.isDisplayedLoading = true;
      }, (errorService)=>{
        this.messageError = errorService.message;
        this.modalError(this.messageError)
      });
      this.result = true;
      this.programmerList = [];
      this.HUList = [];
    }
  }

  modalError(e:string){
    Swal.fire('Ha ocurrido un error','Por favor vuelve a intentarlo','error');
    this.isDisplayedLoading = true;
    this.result = false;
  }

}
