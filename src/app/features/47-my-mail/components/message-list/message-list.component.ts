import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { includes } from 'lodash';

export interface ListItem {
  id: number;
  title: string;
  [key: string]: any;
}

@Component({
  selector: 'nts-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent<T extends ListItem> implements OnInit {

  @Input() items: T[];
  @Input() selectedIds: number[] = [];

  @Output() selectItem = new EventEmitter<number[]>();

  selectMessagesHandler($event) {
    const ids = $event.source.selectedOptions.selected.map((o) => o.value);
    this.selectItem.emit(ids);
  }

  isSelected(item: ListItem): boolean {
    return includes(this.selectedIds, item.id);
  }

  ngOnInit() {
  }

}
