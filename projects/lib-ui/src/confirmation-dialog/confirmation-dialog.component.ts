import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  standalone: true,
  imports: [],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.css'
})
export class ConfirmationDialogComponent {

  title: string       = 'Confirm' ;
  message: string     = 'Press OK to confirm' ;
  okLabel: string     = 'OK' ;
  cancelLabel: string = 'Cancel' ;

  constructor( private activeModal: NgbActiveModal ) {}

  public accept() {
    this.activeModal.close();
  }

  public cancel() {
    this.activeModal.dismiss();
  }
}
