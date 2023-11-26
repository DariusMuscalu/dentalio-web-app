import { ServiceM } from './service.model';

export class StaffMemberM {
  id: string;
  firstName: string;
  lastName: string;
  services: ServiceM[];
  avatarUrl?: string;
  //   schedule: ScheduleDayM[];

  constructor({
    id,
    firstName,
    lastName,
    services,
    // schedule,
    avatarUrl,
  }: {
    id: string;
    firstName: string;
    lastName: string;
    services: ServiceM[];
    // schedule: ScheduleDayM[];
    avatarUrl?: string;
  }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.services = services;
    // this.schedule = schedule;
    this.avatarUrl = avatarUrl;
  }

  static fromJson(json: any): StaffMemberM {
    // const scheduleList: ScheduleDayM[] = (json.schedule || []).map(
    //   (scheduleDay: any) => ScheduleDayM.fromJson(scheduleDay),
    // );

    return new StaffMemberM({
      id: json.id,
      firstName: json.firstName,
      lastName: json.lastName,
      services: (json.services || []).map((service: any) =>
        ServiceM.fromJson(service)
      ),
      avatarUrl: json.avatarUrl,
      //   schedule: scheduleList,
    });
  }

  toJson(): any {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      services: this.services.map((service) => service.toJson()),
      avatarUrl: this.avatarUrl,
      //   schedule: this.schedule.map((scheduleDay) => scheduleDay.toJson()),
    };
  }
}
