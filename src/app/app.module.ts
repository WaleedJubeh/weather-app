import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { HomeModule } from './pages/home/home.module';
import { DetailsComponent } from './pages/details/details.component';
import { PipesModule } from './pipes/pipes.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    PipesModule,
    ComponentsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  exports:[DetailsComponent]
})
export class AppModule { }
