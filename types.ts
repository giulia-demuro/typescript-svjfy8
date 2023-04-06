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

export type CartList = Ticket[];

export type Cart = {
  items: Ticket[];
  total: number;
};

export type FlightInfo = {
  depTime: string;
  depAirport: string;
  arrTime: string;
  arrAirport: string;
};

export type PriceInfo = {
  price: number;
  onClick: () => void;
};

export type CartElement = {
  flight: FlightInfo;
  price: PriceInfo;
};

export type CompanyInfo = {
  companyName: string;
  companyLogo: string;
  aircraftType: string;
};

export type BookingInfo = {
  flightClass: string;
  passengers: number;
};

export type Text = {
  text: string;
  color: string;
  size: string;
  tag: string;
  style: string;
};
