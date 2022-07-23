import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'Calculator App'
    parentResult: number
    visibleParent: string="display-none"
    
    setResult(result:number){
        this.parentResult=result
        console.log(this.parentResult)
    }

    setVisible(visible:string){
        this.visibleParent=visible
    }
}
