import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-component-hu',
  templateUrl: './component-hu.component.html',
  styleUrls: ['./component-hu.component.css']
})

export class ComponentHUComponent {

  @Input() HU : Array<string> = []

  description = ""

  add(){
    if(this.description != "") {
      this.HU.push(this.description)
    }

    this.description = ""
  }

  delete(i:number){
    this.HU.splice(i,1)
  }

}
