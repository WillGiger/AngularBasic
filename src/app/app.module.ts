import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EntryListComponent, EntryComponent, EntryService, EntryCommentFormCompnent } from './entries';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryEntryService } from './backend';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryEntryService),
        FormsModule
    ],
    providers: [EntryService],
    declarations:
    [AppComponent,
    EntryListComponent,
    EntryComponent,
    EntryCommentFormCompnent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {


}



