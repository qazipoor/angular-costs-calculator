import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ISubCategory } from 'src/app/interfaces/icosts.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-table-comment-row',
  templateUrl: './table-comment-row.component.html',
  styleUrls: ['./table-comment-row.component.css'],
})
export class TableCommentRowComponent implements OnInit {
  @Input() subCategory!: ISubCategory;

  options: string[] = ['Internal', 'External'];

  commentMsg: FormControl = new FormControl('');
  commentType: FormControl = new FormControl('');

  commentForm: FormGroup = new FormGroup({
    commentType: this.commentType,
    commentMsg: this.commentMsg,
  });

  constructor(public service: SharedService) {}

  ngOnInit(): void {}

  commentTypeChange(event: Event) {
    console.log(event);
  }
}
