import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { ListService } from 'src/services/list.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
