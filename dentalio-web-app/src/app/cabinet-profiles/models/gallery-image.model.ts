export interface GalleryImageM {
  imageUrl: string;
  order: number;
}

export class GalleryImageM {
  constructor(public imageUrl: string, public order: number) {}

  static fromJson(json: any): GalleryImageM {
    return new GalleryImageM(
      json['imageUrl'] as string,
      json['order'] as number
    );
  }

  toJson(): any {
    return {
      imageUrl: this.imageUrl,
      order: this.order,
    };
  }
}
