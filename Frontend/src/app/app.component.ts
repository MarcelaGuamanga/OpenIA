import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Frontend';

  dataResponseOpenIA : any;
  dataRequestOpenIA :  any = {};
  resultado = false;
  programmerList: any = []
  HUList: any =[]

  constructor( private appService : AppService) {}

  calculateResponse(userStories : Array<string>, programmerProfiles:any){

    this.dataRequestOpenIA = {
      "user_stories" : userStories,
      "programmer_profiles": programmerProfiles
    }

    // if(userStories.length == 0 || programmerProfiles.length == 0){

    // } else {
      this.appService.postOpenIA(this.dataRequestOpenIA).subscribe( data => {
        this.dataResponseOpenIA = Object.values(data);
      });
      this.resultado = true;
      this.programmerList = [];
      this.HUList = [];
    // }
  }

  
}
