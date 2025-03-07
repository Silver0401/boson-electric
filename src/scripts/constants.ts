// Solutions Imgs
import crane from "@/assets/Crane.jpg";
import fan from "@/assets/Fan.jpg";
import packages from "@/assets/Packages.jpg";
import plastic from "@/assets/Plastic.jpg";
import tool from "@/assets/Tool.jpg";
import textile from "@/assets/Textile.jpg";
import stairs from "@/assets/Staris.jpg";
import slicing from "@/assets/Slicing.jpg";

export const Products: productsIndexed = {
  PLC: {
    route: "",
  },
  HMI: {
    route: "",
  },
  "Controlador CNC": {
    route: "",
  },
  "Servo Drive": {
    route: "",
  },
  "Invertidor de Frecuencia": {
    route: "",
  },
  "Motor Spindle": {
    route: "",
  },
  "Motor AC Servo": {
    route: "",
  },
  Accesorios: {
    route: "",
  },
  Sensor: {
    route: "",
  },
};

export const Solutions: solutionsIndexed = {
  "Empaques e Impresiones": {
    img: packages,
  },
  "Maquina de Herramientas CNC": {
    img: tool,
  },
  Textiles: {
    img: textile,
  },
  "Ventiladores y Bombas": {
    img: fan,
  },
  Conversiones: {
    img: slicing,
  },
  Elevador: {
    img: stairs,
  },
  Grúa: {
    img: crane,
  },
  "Industria de Plásticos": {
    img: plastic,
  },
};

export const Footers: footersIndexed = {
  "Acerca de Boson": {
    list: [
      { name: "Descripción de la Empresa", route: "" },
      { name: "Visión y Misión", route: "" },
      { name: "Historia de Crecimiento", route: "" },
    ],
  },
  Productos: {
    list: [
      { name: "Controlador CNC", route: "" },
      { name: "Servo Drive", route: "" },
      { name: "Invertidor de Frecuencia", route: "" },
      { name: "Motor Spindle", route: "" },
      { name: "Motor AC Servo", route: "" },
      { name: "Accesorios", route: "" },
      { name: "Sensor", route: "" },
    ],
  },
  Soluciones: {
    list: [
      { name: "Empaques e Impresiones", route: "" },
      { name: "Maquina de Herramientas CNC", route: "" },
      { name: "Textiles", route: "" },
      { name: "Ventiladores y Bombas", route: "" },
      { name: "Conversiones", route: "" },
      { name: "Elevador", route: "" },
      { name: "Grúa", route: "" },
      { name: "Industria de Plásticos", route: "" },
    ],
  },
  Servicios: {
    list: [
      { name: "Descargar", route: "" },
      { name: "FaQ", route: "" },
      { name: "Garantías", route: "" },
    ],
  },
};

export const Navs: NavsIndexed = {
  Inicio: { route: "" },
  Productos: { route: "" },
  Soluciones: { route: "" },
  Servicios: { route: "" },
  "Acerca de Boson": { route: "" },
};
