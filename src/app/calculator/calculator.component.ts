import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  op1: number=0
  op2: number=0
  result: number=0
  visibleErrMsg: string="display-none"
  
  sumar(){
	this.result = this.op1 + this.op2
	this.visibleErrMsg="display-none"
  }

  restar(){
	this.result = this.op1 - this.op2
	this.visibleErrMsg="display-none"
  }
	
  multiplicar(){
	this.result = this.op1 * this.op2
	this.visibleErrMsg="display-none"
  }

  dividir(){
	if(this.op2===0){
		this.visibleErrMsg="display-flex"
		this.result = 0
	}else{
		this.result = this.op1 / this.op2
	}
  }
}
