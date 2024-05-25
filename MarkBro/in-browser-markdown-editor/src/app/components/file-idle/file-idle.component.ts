import { Component } from '@angular/core';
import { createdAt } from 'expo-updates';

@Component({
  selector: 'app-file-idle',
  standalone: true,
  imports: [],
  templateUrl: './file-idle.component.html',
  styleUrl: './file-idle.component.scss'
})
export class FileIdleComponent {
  //TODO: get the file from api
  //TODO: implement the redirect function with the ID
  file = {
    name: 'Untitled Document.md',
    updatedAt: '25 May 2024'
  }
}
