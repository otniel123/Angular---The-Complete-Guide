import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { PristineChangeEvent } from '@angular/forms';

@Component({
  selector: 'app-native-pipes',
  imports: [TitleCasePipe, DatePipe, CurrencyPipe, UpperCasePipe, LowerCasePipe, SlicePipe, JsonPipe],
  templateUrl: './native-pipes.html',
  styleUrl: './native-pipes.css',
})
export class NativePipes {
  user = {
    name: 'otniel marques',
    birthDate: new Date(2005, 5, 15),
    salary: 8500.5
  };

  product = {
    name: 'mechanical keyboard',
    price: 349.9,
    releaseDate: new Date()
  }

  users = [
    { name: 'John', role: 'Developer' },
    { name: 'Mary', role: 'Designer' },
    { name: 'Robert', role: 'Manager' }
  ];
}
