import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './pages/auth/auth.service';
import {ServiceService} from '../app/Service/service.service';
import { ListarComponent } from './pages/color/listar/listar.component';
import { EditComponent } from './pages/color/edit/edit.component';
import { AddComponent } from './pages/color/add/add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListarComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
