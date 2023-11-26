export class ReviewM {
  reviewerName: string;
  reviewerAvatarUrl: string;
  numOfStars: number;
  description: string;

  constructor({
    reviewerName,
    reviewerAvatarUrl,
    numOfStars,
    description,
  }: {
    reviewerName: string;
    reviewerAvatarUrl: string;
    numOfStars: number;
    description: string;
  }) {
    this.reviewerName = reviewerName;
    this.reviewerAvatarUrl = reviewerAvatarUrl;
    this.numOfStars = numOfStars;
    this.description = description;
  }

  static fromJson(json: any): ReviewM {
    return new ReviewM({
      reviewerName: json.reviewerName,
      reviewerAvatarUrl: json.reviewerAvatarUrl,
      numOfStars: json.numOfStars,
      description: json.description,
    });
  }

  toJson(): any {
    return {
      reviewerName: this.reviewerName,
      reviewerAvatarUrl: this.reviewerAvatarUrl,
      numOfStars: this.numOfStars,
      description: this.description,
    };
  }
}
