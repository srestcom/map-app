import { Component, Input } from '@angular/core';
import { Feature } from 'ol';
import { FeaturesService } from './features.service';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { FeatureComponent } from '../feature/feature.component';


@Component({
  selector: 'features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent  {
    features: any;
    feature: Feature; // the feature currently being edited
    modalOptions:NgbModalOptions;
    closeResult: string;

    constructor(private featuresService: FeaturesService, private modalService: NgbModal) {
        this.features = [];
        this.modalOptions = {
            backdrop:'static',
            backdropClass:'customBackdrop'
        }
    }

    ngOnInit() {
        this.getFeatures();
    }

    getFeatures(): void {
    this.featuresService.getFeatures()
        .subscribe(features => (this.features = features));
    }

    edit(feature: Feature) {
        this.feature = feature;
        const modalRef = this.modalService.open(FeatureComponent);
        modalRef.componentInstance.message = 'Update feature';
        modalRef.componentInstance.feature = feature;
    }

    add() {
        const modalRef = this.modalService.open(FeatureComponent);
        modalRef.componentInstance.message = 'Create new feature';
    }

    open(content) {
        this.modalService.open(content, this.modalOptions).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

}
