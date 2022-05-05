import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCostRowComponent } from './table-cost-row.component';

describe('TableCostRowComponent', () => {
  let component: TableCostRowComponent;
  let fixture: ComponentFixture<TableCostRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCostRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCostRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
