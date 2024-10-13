import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-binary-converter',
  standalone: true,
  imports: [FormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  templateUrl: './binary-converter.component.html',
  styleUrl: './binary-converter.component.css'
})
export class BinaryConverterComponent {

  binaryInput: string = '';
  decimalOutput: number | string = '';

  onBinaryInputChange() {
    if(/^[01]+$/.test(this.binaryInput)) {
      this.decimalOutput = parseInt(this.binaryInput, 2);
    } else {
      this.decimalOutput = 'Invalid binary input!';
    }
  }

  convert() {
    this.onBinaryInputChange();
  }
}
