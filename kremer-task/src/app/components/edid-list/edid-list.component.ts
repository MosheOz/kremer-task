import { Component, OnInit } from '@angular/core';
import { EDIDService } from 'src/app/edid.service';

import { IEdid } from '../../types/edid.interface';

@Component({
  selector: 'app-edid-list',
  templateUrl: './edid-list.component.html',
  styleUrls: ['./edid-list.component.scss'],
})
export class EdidListComponent implements OnInit {
  title = 'kremer-task';
  edidListCubes$!: Promise<IEdid[]>;
  search: any;

  constructor(private edidService: EDIDService) {}

  ngOnInit(): void {
    this.edidListCubes$ = this.edidService.getData();
  }
}
