import {Component, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent {
  constructor(public dialog: MatDialog){}
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'dialog-delete',
  standalone: true,
  imports: [MatDialogModule, ButtonComponent],
  templateUrl: 'template-delete-confirmation.html',
  styleUrl: './delete-dialog.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class DialogContentExampleDialog {
  // TODO: API GET ID TO DELETE AND DELETE
  constructor(public dialogRef: MatDialogRef<DialogContentExampleDialog>) {}

  confirmDelete(){
    console.log('deletou')
    this.dialogRef.close(true)
  }
}
