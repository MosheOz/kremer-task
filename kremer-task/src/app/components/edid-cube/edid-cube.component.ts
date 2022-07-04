import { Component, Input } from '@angular/core';
import { IEdid } from 'src/app/types/edid.interface';

@Component({
  selector: 'app-edid-cube',
  templateUrl: './edid-cube.component.html',
  styleUrls: ['./edid-cube.component.scss'],
})
export class EdidCubeComponent {
  title = 'kremer-task';
  isClicked = false;

  @Input() edidCube!: IEdid;
}
