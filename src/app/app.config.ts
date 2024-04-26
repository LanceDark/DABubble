import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'da-bubble-58fa2',
          appId: '1:25842217870:web:b34b86392152e9da16aadf',
          storageBucket: 'da-bubble-58fa2.appspot.com',
          apiKey: 'AIzaSyBp8iKKC9okcRYyLdCUb9h92m_NeeqhtLc',
          authDomain: 'da-bubble-58fa2.firebaseapp.com',
          messagingSenderId: '25842217870',
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideAuth(() => getAuth())),
  ],
};
