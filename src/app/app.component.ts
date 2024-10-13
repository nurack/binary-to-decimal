import { Component } from '@angular/core';
import { BinaryConverterComponent } from './binary-converter/binary-converter.component';
import { MatCard } from '@angular/material/card';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BinaryConverterComponent,
          MatCard,
          MatInput
  ]
        
  ,
  template: '<app-binary-converter></app-binary-converter>'
})
export class AppComponent { }