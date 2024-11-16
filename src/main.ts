import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppConfig } from './app/app.config'; // Asegúrate de usar 'AppConfig'

platformBrowserDynamic().bootstrapModule(AppConfig)
  .catch(err => console.error(err));
