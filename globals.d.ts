import { StaticImageData } from "next/image";

export declare global {
  //  ---------------------------- Products Types --------------------------------

  type products =
    | "PLC"
    | "HMI"
    | "CNCSystem"
    | "CNCMachine"
    | "Robots"
    | "Sensores"
    | "Servo";

  interface productItemProps {
    title: string;
    mainImg: StaticImageData;
    overview: string;
    features: string;
    parametersImg: string;
    dimensionsImg: string;
    numberOfDes?: number;
  }

  interface productProps {
    route: string;
    itemsList: Array<productItemProps>;
    description: string;
    icon?: React.ReactElement;
  }

  type productsIndexed = {
    [key in products]: productProps;
  };

  //  ---------------------------- Services Types --------------------------------

  type services = "Descargar" | "FaQ" | "Garantías";

  //  ---------------------------- Solutions Types --------------------------------

  type solutions =
    | "Empaques e Impresiones"
    | "Maquina de Herramientas CNC"
    | "Textiles"
    | "Ventiladores y Bombas"
    | "Conversiones"
    | "Elevador"
    | "Grua"
    | "Industria de Plasticos";

  interface solutionProps extends productProps {
    img: StaticImageData;
  }

  type solutionsIndexed = {
    [key in solutions]: solutionProps;
  };

  //  ---------------------------- Footer Types --------------------------------

  type abouts = "EnterpriseDescription" | "MisVis";

  //  ---------------------------- Footer Types --------------------------------

  type footers = "Acerca" | "Productos" | "Soluciones" | "Servicios";

  interface footersProps {
    list: Array<{
      name: solutions | products | services | abouts;
      route?: string;
    }>;
  }

  type footersIndexed = {
    [key in footers]: footersProps;
  };

  //  ---------------------------- Nav Types --------------------------------

  type Navs = "Productos" | "Soluciones" | "Acerca de Boson";

  interface NavsProps {
    route: string;
  }

  type NavsIndexed = {
    [key in Navs]: NavsProps;
  };
}
