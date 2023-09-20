export interface ITariffData {
  map(arg0: (item: any) => any): unknown;
  id: number;
  time: {
    start: string;
    finish: string;
  };
  "travel time": {
    hours: number;
    minutes: number;
  };
  city: {
    start: string;
    finish: string;
  };
  station: {
    start: string;
    finish: string;
  };
  company: string;
  comfort: {
    internet: boolean;
    film: boolean;
    "charging the device": boolean;
  };
  price: number;
  "number of seats": number;
  "sale of seats": number;
  transfer: number;
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