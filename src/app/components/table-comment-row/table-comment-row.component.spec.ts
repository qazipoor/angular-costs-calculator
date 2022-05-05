import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCommentRowComponent } from './table-comment-row.component';

describe('TableCommentRowComponent', () => {
  let component: TableCommentRowComponent;
  let fixture: ComponentFixture<TableCommentRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCommentRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCommentRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
