import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import {
  AvailableNodesComponent,
  AvailableNodesImpureComponent
} from './available-nodes.component';
import { NodeAsyncMessageComponent } from './node-async-message.component';
import { NodeBirthdayComponent } from './node-birthday1.component';
import { NodeBirthday2Component } from './node-birthday2.component';
import { NodeListComponent } from './node-list.component';
import { PowerBoosterComponent } from './power-booster.component';
import { PowerBoostCalculatorComponent } from './power-boost-calculator.component';
import {
  AvailableNodesPipe,
  AvailableNodesImpurePipe
} from './available-nodes.pipe';
import { FetchJsonPipe } from './fetch-json.pipe';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';
import { NodesService } from './api/nodes.service';
@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    AvailableNodesComponent,
    AvailableNodesImpureComponent,
    NodeAsyncMessageComponent,
    NodeBirthdayComponent,
    NodeBirthday2Component,
    NodeListComponent,
    PowerBoosterComponent,
    PowerBoostCalculatorComponent,
    AvailableNodesPipe,
    AvailableNodesImpurePipe,
    FetchJsonPipe,
    ExponentialStrengthPipe
  ],
  exports:      [],
  providers: [NodesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 


    }
