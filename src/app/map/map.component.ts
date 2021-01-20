import { Component, OnInit, Input, Output,  SimpleChanges, EventEmitter } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';


// Maps features can be implemented as per example presented https://openlayers.org/en/latest/examples/
@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{

  private map: Map;

  constructor() {
  }

  ngOnInit() {
    this.map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: olProj.fromLonLat([7.0785, 51.4614]),
          zoom: 5
        })
      });
  }

  
}