import {Injectable} from "@angular/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmationDialogComponent} from "./confirmation-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  constructor( private modalService: NgbModal ) {}

  public confirm(
    message:string = 'Press OK to confirm.',
    title:string = 'Confirm',
    okLabel:string = 'Ok',
    cancelLabel:string = 'Cancel' ) : Promise<any> {

    const dialog = this.modalService.open(
      ConfirmationDialogComponent,
      {
        size:'sm'
      }
    ) ;

    dialog.componentInstance.title = title ;
    dialog.componentInstance.message = message ;
    dialog.componentInstance.okLabel = okLabel ;
    dialog.componentInstance.cancelLabel = cancelLabel ;

    return dialog.result ;
  }
}
