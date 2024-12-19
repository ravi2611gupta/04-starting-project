// import { bootstrapApplication } from '@angular/platform-browser';


// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent).catch((err: any) => console.error(err));

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule)