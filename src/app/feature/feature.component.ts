import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';

//TODO These should be auto generated
@Component({
  selector: 'feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  @Input() feature;
  @Input() message;
  geometry: any;
  featureForm = new FormGroup({
    address: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl(''),
    roofMaterial: new FormControl(''),
    roofType: new FormControl(''),
    area: new FormControl(''),
    storeys: new FormControl(''),
    height: new FormControl(''),
  });

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    if( this.feature ) {
        this.featureForm.patchValue({
            address: this.feature.properties.address,
            city: this.feature.properties.city,
            country: this.feature.properties.country,
            roofMaterial: this.feature.properties.roof_material,
            roofType: this.feature.properties.roof_type,
            area: this.feature.properties.area,
            storeys: this.feature.properties.storeys,
            height: this.feature.properties.height
        });
        this.geometry = JSON.stringify(this.feature.geometry);
    }
  }

  onSubmit() {
    // Also need to call rest service to update the backend.
    if( this.feature ) {
        this.feature.properties.address = this.featureForm.value.address;
        this.feature.properties.city = this.featureForm.value.city;
        this.feature.properties.country = this.featureForm.value.country;
        this.feature.properties.roof_material = this.featureForm.value.roofMaterial;
        this.feature.properties.roof_type = this.featureForm.value.roofType;
        this.feature.properties.area = this.featureForm.value.area;
        this.feature.properties.storeys = this.featureForm.value.storeys;
        this.feature.properties.height = this.featureForm.value.height;
        this.activeModal.close('Close click');
    } else {
        alert('Create not implemented');
    }
  }

}