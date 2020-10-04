import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EntryListComponent, EntryComponent, EntryService } from './entries';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryEntryService } from './backend';


@NgModule({
    imports: [BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryEntryService)
    ],
    providers: [EntryService],
    declarations:
    [AppComponent,
    EntryListComponent,
    EntryComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {


}



