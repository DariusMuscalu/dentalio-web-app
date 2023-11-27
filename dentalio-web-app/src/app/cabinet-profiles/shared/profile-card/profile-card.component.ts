import { Component, Input } from '@angular/core';
import { CabinetProfileM } from '../../models/cabinet-profile.model';
@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  @Input() cabinetProfile: CabinetProfileM | undefined;

  constructor() {}
}
