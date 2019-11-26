import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

const BETTER_STREAM_STATUS = {
  none: 'NONE',
  isLoading: 'IS_LOADING',
  isEmitting: 'IS_EMITTING',
  errorClosed: 'ERROR_CLOSED',
};

@Component({
  selector: 'nts-better-streamable-container',
  templateUrl: './better-streamable-container.component.html',
  styleUrls: ['./better-streamable-container.component.css']
})
export class BetterStreamableContainerComponent implements OnChanges, OnDestroy {

  // TODO
  dataStream: Observable<any>;

  private currentStatus = BETTER_STREAM_STATUS.none;
  private allStatuses = BETTER_STREAM_STATUS;

  private receivedData: any = null;
  private receivedError: Error = null;

  private subscription: Subscription;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dataStream && this.dataStream) {
      this.clearStream();
      // TODO: handle new data stream
    }
  }

  ngOnDestroy(): void {
    this.clearStream();
  }

  private clearStream() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
