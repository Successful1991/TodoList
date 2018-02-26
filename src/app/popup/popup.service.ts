import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {PopupComponent} from "./popup.component";

@Injectable()

export class PopupService {
  bsModalRef: BsModalRef;
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };
  constructor(private modalService: BsModalService) { }

  openModalWithComponent() {
    this.bsModalRef = this.modalService.show( PopupComponent, Object.assign({}, this.config, { class: 'dialog' }) );
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
