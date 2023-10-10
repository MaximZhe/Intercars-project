export interface ITariffData {
  map(arg0: (item: any) => any): unknown;
  Result: {
    IsActive: boolean;
    CarrierRoutes: IItemCarrierRoutes[];
    Id: string;
    CityDeparture: number;
    CityArrival: number;
    Date: string;
    SaveDate: string;
    IsDynamic: boolean;
  };
  Error: null | string;
}

export interface IRouteItem {
  id:number,
  value:string
}
export interface IAccordionItem {
  id: number,
  title: string;
  content: string;
}
export interface ISliderRoute {
  id: number,
  value:string,
  price:number
}
export interface IItemSalesPageProps {
  id: number,
  date: Date,
  title: string,
  startSale: {
      dateStart: Date,
      timeStart: Date,
  }
}

export interface IItemNewsPageProps {
  id: number,
  date: Date,
  mainTitle: string,
  content?: Array<{
    title?: string;
    text: string;
  }>;
}




interface IItemStop {
  DateArrive: string;
  TimeArrive: string;
  City: string;
  Name: string;
  Id?: null;
  Latitude: null | string;
  Longitude: null | string;
}
interface IItemBusOptions {
  Id: number;
  Name: string;
  IsEnabled: boolean;
  Description?: null | string;
  Link: null | string;
}
interface IItemFullBusPlaces {
  Seat: number;
  IsFree: boolean;
  Row: number;
  Col: number;
  Floor: number;
}
interface IItemPrice {
  Ptar?: number;
  Etar?: number;
  Dtar?: number;
  Currency?: number;
  CurrencyName?: string;
}
interface IItemBaggagePrices {
  Currency?: number;
  CurrencyName?: string;
  Value?: number;
}
interface IItemRoutesProps {
  GuidIdentityNumber?: null;
  City1?: {
    Id: number;
    NameEng?: string;
    NameRus: string;
  };
  CitySourceId: number;
  CityTargetId: number;
  CitySourceUniqueId?: null;
  CityTargetUniqueId?: null;
  CityCodeSource?: null;
  CityCodeTarget?: null;
  StopNameSource?: null;
  StopNameTarget?: null;
  City2: {
    Id: number;
    NameEng?: string;
    NameRus: string;
  };
  Path: {
    Id: number;
    Name?: string;
    CarrierId: number;
  };
  Date: string;
  Count: number;
  FreeSeats?: null;
  RequestGetFreeSeats?: null;
  DiscountListCode?: null;
  TripCode?: null;
  TimeOfArrival?: null;
  TimeOfDeparture?: null;
  SystemId?: null;
  CarrierName?: null;
  CarrierId?: string;
  Number?: null;
  RealCarrierId?: number;
  Tariffs?: null;
  Byn?: number;
  IsChangeRoute?: boolean;
  ChangeRouteDetails?: null;
}

export interface IItemRoutes {
  SessionRouteId?: null;
  City1: string;
  City2: string;
  DepartName: string;
  ArriveName: string;
  DateDepart1?: string;
  DateArrive1?: string;
  TimeArrive: string;
  DateArrive: string;
  TimeDepart: string;
  DateDepart: string;
  DepartDateTime?: string;
  ArriveDateTime?: string;
  Hour: string;
  Minuts: string;
  FreePlace?: number;
  Price: IItemPrice[];
  BaggagePrices?: IItemBaggagePrices[];
  BaggageDescription?: string;
  Path?: string;
  Id: string;
  RouteNumber?: null;
  Routes: IItemRoutesProps[];
  Carrier: number;
  CarrierName: string;
  CarrierLogo?: null;
  RealCarrierName: string;
  RealCarrierId?: number;
  RealIsPersonalCarrier?: boolean;
  Delete?: string;
  CountFreePromos: number;
  MaxDiscountPercent?: null;
  IsSpecialRules?: boolean;
  IsInternationalAbroad?: boolean;
  Platforma?: string;
  Link?: null;
  AllStops: IItemStop[];
  IsCache: boolean;
  FullPrice?: null | string | number;
  BusId?: null | number;
  BusPlaces?: null | number;
  FreePlaces?: null | number;
  AdditionalPlace?: null | number;
  AddInfo: null | number | string;
  BusOptions?: IItemBusOptions[];
  FullBusPlaces?: IItemFullBusPlaces[];
  TicketRules?: null | string;
  UsedByArtmark?: null | string;
  HasExpressAttr?: boolean;
  IsPartnerRoute: boolean;
  SortPriority?: number;
  AnnylationRules?: string;
  Route: string;
}
export interface IItemCarrierRoutes{
  Routes: IItemRoutes[];
        CarrierId: number;
        IsActive: boolean;
}

export interface IItemNewsPageProps {
  id: number;
  date: Date;
  mainTitle: string;
  content?: Array<{
    title?: string;
    text: string;
  }>;
}