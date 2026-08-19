import { Component } from '@angular/core';
import { ReversePipePipe } from '../custom-pipes/reverse-pipe';
import { TruncatePipe } from '../custom-pipes/truncate-pipe';
import { MaskEmailPipe } from '../custom-pipes/mask-email-pipe';
import { TemperaturePipe } from '../custom-pipes/temperature-pipe';
import { SumImpurePipe } from '../custom-pipes/sum-impure-pipe';
import { SumPurePipe } from '../custom-pipes/sum-pure-pipe';

@Component({
  selector: 'app-simple-custom-pipes',
  imports: [ReversePipePipe, TruncatePipe, MaskEmailPipe, TemperaturePipe, SumImpurePipe, SumPurePipe],
  templateUrl: './simple-custom-pipes.html',
  styleUrl: './simple-custom-pipes.css',
})
export class SimpleCustomPipes {
  numbers = [1, 2, 3];

  addNumber(){
    this.numbers.push(4);
  }
}
