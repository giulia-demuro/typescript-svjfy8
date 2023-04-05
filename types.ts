export type Ticket = {
  departureTime: string;
  departureAirport: string;
  arrivalTime: string;
  arrivalAirport: string;
  companyLogo: string;
  companyName: string;
  aircraftType: string;
  passengers: number;
  flightClass: string;
  price: number;
};

export type cartList = Ticket[];

export type cart = {
  items: Ticket[];
  total: number;
};
