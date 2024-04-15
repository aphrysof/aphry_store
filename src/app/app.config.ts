import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpLink } from 'apollo-angular/http'
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache, ApolloClientOptions, ApolloLink } from '@apollo/client/core';
import { APOLLO_OPTIONS, Apollo, ApolloModule } from 'apollo-angular';
import { myUri } from './graphql.config';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes),
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: myUri
          }),
        };
      },
      deps: [HttpLink],
    },
    Apollo
  
  ]
};
