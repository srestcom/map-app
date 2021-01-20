export interface Feature {
    type: string;
    geometry: any;
    properties: Properties;
  }

  export interface Properties {
    geom_id: string;
    address: string;
    city: string;
    country: string;
    roof_material: string;
    roof_type: string;
    area: number;
    storeys: number;
    height: number;
  }
  