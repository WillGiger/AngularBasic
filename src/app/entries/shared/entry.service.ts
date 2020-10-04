import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Entry } from './entry.model'

@Injectable()
export class EntryService {
    constructor(private http: Http){

    }

    getEntries(): Promise<Entry[]> {
        return this.http.get('/app/entries')
        .toPromise()
        .then(response => response.json().data as Entry[]);
    }

    addComment(entryId: number, comment: {name: string; comment: string;}){
        return this.http.post(`/app/entries/${entryId}/comments`, comment)
        .toPromise();
    }
}