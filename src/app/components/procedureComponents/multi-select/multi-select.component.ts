import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface Named {
  id: number;
  name: string;
}

interface ItemData<TEntity extends Named> {
  item : TEntity,
  selected: boolean;
}

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.sass']
})
export class MultiSelectComponent<T extends Named> implements OnInit {

  @Output() result = new EventEmitter<{ key: string, data: Array<T>, isChanged: boolean}>();
  
  @Input() placeholder: string = 'Select specializations';
  @Input() data: Array<T> = [];
  @Input() alreadySelected: Array<T> = [];
  @Input() key: string = '';
  
  selectControl = new FormControl();
  
  rawData: Array<ItemData<T>> = [];
  selectData: Array<ItemData<T>> = [];
  
  filteredData: Observable<Array<ItemData<T>>>;
  filterString: string = '';

  constructor() {
    this.filteredData = this.selectControl.valueChanges.pipe(
      startWith<string>(''),
      map(value => typeof value === 'string' ? value : this.filterString),
      map(filter => this.filter(filter))
    );    
  }

  ngOnInit(): void {
    if(this.alreadySelected == undefined) this.alreadySelected = [];
    this.data.forEach((item: T) => {
      this.rawData.push({ item, selected: false });
      if(this.alreadySelected.length > 0 && this.alreadySelected.find((as) => as.id === item.id)){
        this.toggleSelection(this.rawData[this.rawData.length - 1], true);
      }
    });
  }

  ngAfterViewInit(): void{
  }

  filter(filter: string): Array<ItemData<T>>{
    this.filterString = filter;
    if (filter.length > 0) {
      return this.rawData.filter(option => {
        return option.item.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0;
      });
    } else {
      return this.rawData.slice();
    }
  };
  
  displayFn = (): string => '';

  optionClicked = (data: ItemData<T>, event: Event): void => {
    event?.stopPropagation();
    this.toggleSelection(data);
  };

  toggleSelection(data: ItemData<T>, initializing: boolean = false): void {
    data.selected = !data.selected;
  
    if (data.selected === true) {
      this.selectData.push(data);
    } else {
      const i = this.selectData.findIndex(value => value.item === data.item);
      this.selectData.splice(i, 1);
    }
  
    this.selectControl.setValue(this.selectData);
    if(!initializing) this.emitAdjustedData();
  };

  emitAdjustedData = (): void => {
    const results: Array<T> = []
    this.selectData.forEach((data: ItemData<T>) => {
      results.push(data.item);
    });
    this.result.emit({ key: this.key, data: results, isChanged: true });
  };

  removeChip = (data: ItemData<T>): void => {
    this.toggleSelection(data);
  };
}
