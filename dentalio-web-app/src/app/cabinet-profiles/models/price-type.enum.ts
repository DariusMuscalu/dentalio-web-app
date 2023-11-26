// Define the PriceTypeE enum
export enum PriceTypeE {
  Fixed = 'fixed',
  Varied = 'varied',
  Hidden = 'hidden',
}

// Define the getPriceTypeString function
function getPriceTypeString(priceType: PriceTypeE): string {
  switch (priceType) {
    case PriceTypeE.Fixed:
      return 'Pret fix';
    case PriceTypeE.Varied:
      return 'Pret variabil';
    case PriceTypeE.Hidden:
      return 'Pret ascuns';
    default:
      return '';
  }
}