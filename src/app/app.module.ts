import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { MapComponent } from './map/map.component';
import { FeaturesComponent } from './features/features.component';
import { AppStateService } from './state/appstate.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { FeaturesService } from './features/features.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatureComponent } from './feature/feature.component';
import { AppComponent } from './app.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, 
    FeaturesComponent, 
    MapComponent, 
    FeatureComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule, 
    NgbModule, 
    ReactiveFormsModule
  ],
  entryComponents:[
    FeatureComponent
  ],
  providers: [
    AppStateService, 
    HttpErrorHandler, 
    MessageService, 
    FeaturesService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
