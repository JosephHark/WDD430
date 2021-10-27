import { Component, OnInit, EventEmitter, OnDestroy, Output  } from '@angular/core';
import { Document } from '../document.model';
import { DocumentsService } from '../document.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  documents: Document[] = [];

  constructor(private documentService: DocumentsService) { }

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();
this.documentService.documentChangedEvent.subscribe((documents) => this.documents = documents.slice())
this.subscription = this.documentService.documentListChangedEvent.subscribe(
      (documents: Document[]) => {
        this.documents = documents;
      }
    )
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}