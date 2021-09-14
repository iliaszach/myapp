import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Provider } from '../../ProviderComponents/provider';
import { ProviderService } from '../../ProviderComponents/provider.service';



@Component({
  selector: 'app-ngbd-modal',
  templateUrl: './ngbd-modal.component.html',
  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./ngbd-modal.component.css']
})


export class NgbdModalComponent {
  
  constructor(config: NgbModalConfig, private modalService: NgbModal, private providerService:ProviderService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content:any) {
    this.modalService.open(content);
  }
  
  
}
