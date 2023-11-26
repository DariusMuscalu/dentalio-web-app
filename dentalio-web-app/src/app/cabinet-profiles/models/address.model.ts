export class AddressM {
  county: string;
  city: string;
  address: string;
  observations: string;
  sector?: string;

  constructor({
    county,
    city,
    address,
    observations,
    sector,
  }: {
    county: string;
    city: string;
    address: string;
    observations: string;
    sector?: string;
  }) {
    this.county = county;
    this.city = city;
    this.address = address;
    this.observations = observations;
    this.sector = sector;
  }

  static fromJson(json: any): AddressM {
    return new AddressM({
      county: json.county,
      city: json.city,
      address: json.address,
      observations: json.observations,
      sector: json.sector,
    });
  }

  toJson(): any {
    return {
      county: this.county,
      city: this.city,
      address: this.address,
      observations: this.observations,
      sector: this.sector,
    };
  }
}
