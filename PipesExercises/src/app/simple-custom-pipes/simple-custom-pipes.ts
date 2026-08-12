import { Component } from '@angular/core';
import { ReversePipePipe } from '../custom-pipes/reverse-pipe';

@Component({
  selector: 'app-simple-custom-pipes',
  imports: [ReversePipePipe],
  templateUrl: './simple-custom-pipes.html',
  styleUrl: './simple-custom-pipes.css',
})
export class SimpleCustomPipes {}
