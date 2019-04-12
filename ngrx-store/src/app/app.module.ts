import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App imports
import {
  AppComponent
} from './components';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Add FontAwesome icons to library
    library.add(
      faCoffee
    );
  }
}
