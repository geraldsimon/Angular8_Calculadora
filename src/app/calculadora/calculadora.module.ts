import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent }  from './components';
import { CalculadoraService }  from './services';

@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    CalculadoraService
    ],
  exports: [
    CalculadoraComponent
  ],
})
export class CalculadoraModule { }

