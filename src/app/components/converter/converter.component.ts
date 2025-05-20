import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConvertService } from '../../services/convert.service';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
  inputValue = '';
  inputFormat = 'dec';
  outputFormat = 'tc';
  bitLimit = 8;
  result = '';

  constructor(private convertService: ConvertService) {}

  onConvert(): void {
    const parsedValue = this.inputFormat === 'dec' ? parseInt(this.inputValue, 10) : this.inputValue;
    this.result = this.convertService.convert(parsedValue, this.inputFormat, this.outputFormat, this.bitLimit);
  }
}
