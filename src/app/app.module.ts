import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { PorteroModuloComponent } from './portero-modulo/portero-modulo.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PorteroModuloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
