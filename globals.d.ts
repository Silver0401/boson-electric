import { StaticImageData } from "next/image";

export declare global {
  //  ---------------------------- Products Types --------------------------------

  type products =
    | "PLC"
    | "HMI"
    | "Controlador CNC"
    | "Servo Drive"
    | "Invertidor de Frecuencia"
    | "Motor Spindle"
    | "Motor AC Servo"
    | "Accesorios"
    | "Sensores";

  interface productItemProps {
    title: string;
    mainImg: StaticImageData;
    overview: string;
    features: string;
    parametersImg: string;
    dimensionsImg: string;
  }

  interface productProps {
    route: string;
    itemsList: Array<productItemProps>;
    description: string;
  }

  type productsIndexed = {
    [key in products]: productProps;
  };

  //  ---------------------------- Solutions Types --------------------------------

  type solutions =
    | "Empaques e Impresiones"
    | "Maquina de Herramientas CNC"
    | "Textiles"
    | "Ventiladores y Bombas"
    | "Conversiones"
    | "Elevador"
    | "Grua"
    | "Industria de Plásticos";

  interface solutionProps extends productProps {
    img: StaticImageData;
  }

  type solutionsIndexed = {
    [key in solutions]: solutionProps;
  };

  //  ---------------------------- Footer Types --------------------------------

  type footers = "Acerca de Boson" | "Productos" | "Soluciones" | "Servicios";

  interface footersProps {
    list: Array<{
      name: string;
      route: string;
    }>;
  }

  type footersIndexed = {
    [key in footers]: footersProps;
  };

  //  ---------------------------- Nav Types --------------------------------

  type Navs = "Inicio" | "Productos" | "Soluciones" | "Acerca de Boson";

  interface NavsProps {
    route: string;
  }

  type NavsIndexed = {
    [key in Navs]: NavsProps;
  };
}
