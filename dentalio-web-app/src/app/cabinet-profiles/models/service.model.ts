import { PriceTypeE } from "./price-type.enum";

export class ServiceM {
  id: string;
  name: string;
  price?: string;
  priceType: PriceTypeE;
  description?: string;
  personal?: string[];
  timeOfCompletion?: number;

  constructor({
    id,
    name,
    priceType,
    timeOfCompletion,
    description,
    personal,
    price,
  }: {
    id: string;
    name: string;
    priceType: PriceTypeE;
    timeOfCompletion?: number;
    description?: string;
    personal?: string[];
    price?: string;
  }) {
    this.id = id;
    this.name = name;
    this.priceType = priceType;
    this.price = price;
    this.description = description;
    this.personal = personal;
    this.timeOfCompletion = timeOfCompletion;
  }

  static fromJson(json: any): ServiceM {
    return new ServiceM({
      id: json.id,
      name: json.name,
      priceType: PriceTypeE[json.priceType],
      price: json.price,
      description: json.description,
      personal: (json.personal || []).map((item: any) => item.toString()),
      timeOfCompletion: json.timeOfCompletion,
    });
  }

  toJson(): any {
    return {
      id: this.id,
      name: this.name,
      priceType: PriceTypeE[this.priceType],
      price: this.price,
      description: this.description,
      personal: this.personal,
      timeOfCompletion: this.timeOfCompletion,
    };
  }
}
