import { AddressM } from './address.model';
import { GalleryImageM } from './gallery-image.model';
import { ReviewM } from './review.model';
import { ServiceM } from './service.model';
import { StaffMemberM } from './staff-member.model';

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
  gallery: GalleryImageM[];
  services: ServiceM[];

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
    gallery,
    services,
  }: {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    avatarUrl: string;
    numOfReviews: number;
    staff: StaffMemberM[];
    reviews: ReviewM[];
    address: AddressM;
    gallery: GalleryImageM[];
    services: ServiceM[];
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
    this.gallery = gallery;
    this.services = services;
  }

  static fromJson(json: any): CabinetProfileM {
    const servicesList: ServiceM[] = (json.services || []).map((service: any) =>
      ServiceM.fromJson(service)
    );

    const galleryList: GalleryImageM[] = (json.gallery || []).map(
      (galleryImage: any) => GalleryImageM.fromJson(galleryImage)
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
      gallery: galleryList,
      services: servicesList,
    });
  }
}
