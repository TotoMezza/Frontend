import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { DemiComponent } from './components/demi/demi.component';
import { XplabComponent } from './components/xplab/xplab.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyComponent } from './components/proy/proy.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClient, HttpClientModule } from '@angular/common/http'
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/xplab/new-experiencia.component';
import { EditExperienciaComponent } from './components/xplab/edit-experiencia.component';
import { EducacionComponent } from './components/edu/edu.component';
import { NeweducacionComponent } from './components/edu/neweducacion.component';
import { EditeducacionComponent } from './components/edu/editeducacion.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditProyectoComponent } from './components/proy/edit-proyecto.component';
import { NewProyectoComponent } from './components/proy/new-proyecto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    DemiComponent,
    XplabComponent,
    EducacionComponent,
    SkillsComponent,
    ProyComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditProyectoComponent,
    NewProyectoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
