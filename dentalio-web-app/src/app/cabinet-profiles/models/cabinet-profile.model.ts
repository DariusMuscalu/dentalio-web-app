import { AddressM } from './address.model';
import { ReviewM } from './review.model';
import { ServiceM } from './service.model';
import { StaffMemberM } from './staff-member.model';

//   interface NotificationM {
//     // Define the properties for NotificationM
//   }

//   interface GeoPoint {
//     // Define the properties for GeoPoint
//   }

export class CabinetProfileM {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  avatarUrl: string;
  numOfReviews: number;
  staff: StaffMemberM[];
  reviews: ReviewM[];
  address: AddressM;
  // location: GeoPoint;
  gallery: string[];
  // notifications?: NotificationM[];
  services: ServiceM[];

  // TODO Add contact
  // TODO Add schedule

  constructor({
    id,
    name,
    email,
    phoneNumber,
    avatarUrl,
    numOfReviews,
    staff,
    reviews,
    address,
    //   location,
    gallery,
    services,
  }: //   notifications,
  {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    avatarUrl: string;
    numOfReviews: number;
    staff: StaffMemberM[];
    reviews: ReviewM[];
    address: AddressM;
    //   location: GeoPoint;
    gallery: string[];
    services: ServiceM[];
    //   notifications?: NotificationM[];
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.avatarUrl = avatarUrl;
    this.numOfReviews = numOfReviews;
    this.staff = staff;
    this.reviews = reviews;
    this.address = address;
    //   this.location = location;
    this.gallery = gallery;
    this.services = services;
    //   this.notifications = notifications;
  }

  static fromJson(json: any): CabinetProfileM {
    const servicesList: ServiceM[] = (json.services || []).map((service: any) =>
      ServiceM.fromJson(service)
    );

    return new CabinetProfileM({
      id: json.id,
      name: json.name,
      email: json.email,
      phoneNumber: json.phoneNumber,
      avatarUrl: json.avatarUrl,
      numOfReviews: json.numOfReviews,
      staff: (json.staff || []).map((staffMember: any) =>
        StaffMemberM.fromJson(staffMember)
      ),
      reviews: (json.reviews || []).map((review: any) =>
        ReviewM.fromJson(review)
      ),
      address: AddressM.fromJson(json.address),
      // location: json.location,
      gallery: json.gallery || [],
      // notifications: json.notifications
      //   ? json.notifications.map(
      //       (notification: any) => NotificationM.fromJson(notification)
      //     )
      //   : undefined,
      services: servicesList,
    });
  }
}
