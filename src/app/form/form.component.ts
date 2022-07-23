import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

    op1: number
    op2: number 

    @Output() result=new EventEmitter<number>()
    @Output() visibleChild=new EventEmitter<string>()
    
    sumar(){
        this.result.emit(this.op1 + this.op2)
        this.visibleChild.emit("display-none")
    }
  
    restar(){
        this.result.emit(this.op1 - this.op2)
        this.visibleChild.emit("display-none")
    }
      
    multiplicar(){
        let operation = this.op1 * this.op2
        this.result.emit(operation)
        this.visibleChild.emit("display-none")
    }
  
    dividir(){
        if(this.op2===0){
            this.visibleChild.emit("display-flex")
            this.result.emit(0)
        }else{
            this.result.emit(this.op1 / this.op2)
        }
    }

}
