import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-file-rename-idle',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './file-rename-idle.component.html',
  styleUrls: ['./file-rename-idle.component.scss']
})
export class FileRenameIdleComponent implements OnInit, AfterViewInit {
  //TODO: recieve info from backend
  
  isEdit:boolean = false;
  @ViewChild('renameFileRef') renameFileRef!: ElementRef<HTMLInputElement>;
  formModel = {
    fileName: 'Untitled Document.md',
  };
  fileNameForm: FormGroup = new FormGroup({
    fileName: new FormControl(this.formModel.fileName, [
      Validators.required,
      Validators.minLength(3),
    ])
  });

  constructor(private http: HttpClient, ){}

  ngOnInit(): void {
    this.updateFormStatus();
  }



  ngAfterViewInit(): void {
    if(this.isEdit) this.renameFileRef.nativeElement.focus()
  }


  handleEdit(){
    console.log('ping')
    this.isEdit = !this.isEdit
    this.updateFormStatus()
    console.log('click')
  }
  updateFormStatus() {
    if (this.isEdit === false) {
      this.fileNameForm.disable();
    } else {
      this.fileNameForm.enable();
    }
  }

  onSubmit() {
    // Aqui você pode adicionar a lógica para processar o envio do formulário
    this.handleEdit()
    console.log(this.isEdit);
  }

}
