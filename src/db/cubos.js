import uuid from "react-uuid";

// Imagenes cubos 2x2
import img2x2_1 from "../assets/img/2x2-1.webp";
import img2x2_2 from "../assets/img/2x2-2.webp";
import img2x2_3 from "../assets/img/2x2-3.webp";
import img2x2_4 from "../assets/img/2x2-4.webp";
import img2x2_5 from "../assets/img/2x2-5.webp";
import img2x2_6 from "../assets/img/2x2-6.webp";
import img2x2_7 from "../assets/img/2x2-7.webp";
import img2x2_8 from "../assets/img/2x2-8.webp";

// Imagenes cubos 3x3
import img3x3_1 from "../assets/img/3x3-1.webp";
import img3x3_2 from "../assets/img/3x3-2.webp";
import img3x3_3 from "../assets/img/3x3-3.webp";
import img3x3_4 from "../assets/img/3x3-4.webp";

// Imagenes cubos 4x4
import img4x4_1 from "../assets/img/4x4-1.webp";
import img4x4_2 from "../assets/img/4x4-2.webp";
import img4x4_3 from "../assets/img/4x4-3.webp";
import img4x4_4 from "../assets/img/4x4-4.webp";
import img4x4_5 from "../assets/img/4x4-5.webp";
import img4x4_6 from "../assets/img/4x4-6.webp";
import img4x4_7 from "../assets/img/4x4-7.webp";
import img4x4_8 from "../assets/img/4x4-8.webp";

// Imagenes cubos 5x5
import img5x5_1 from "../assets/img/5x5-1.webp";
import img5x5_2 from "../assets/img/5x5-2.webp";
import img5x5_3 from "../assets/img/5x5-3.webp";
import img5x5_4 from "../assets/img/5x5-4.webp";
import img5x5_5 from "../assets/img/5x5-5.webp";
import img5x5_6 from "../assets/img/5x5-6.webp";
import img5x5_7 from "../assets/img/5x5-7.webp";
import img5x5_8 from "../assets/img/5x5-8.webp";

// Seccion cubos nuevos Imagenes
import imgnuevo1 from "../assets/img/3x3-5-nuevos.webp";
import imgnuevo2 from "../assets/img/3x3-6-nuevos.webp";
import imgnuevo3 from "../assets/img/3x3-7-nuevos.webp";
import imgnuevo4 from "../assets/img/mat1-nuevos.webp";
import imgnuevo5 from "../assets/img/6x6-1-nuevos.webp";
import imgnuevo6 from "../assets/img/6x6-2-nuevos.webp";
import imgnuevo7 from "../assets/img/3x3-8-nuevos.webp";
import imgnuevo8 from "../assets/img/3x3-9-nuevos.webp";

// Imagenes cubos 6x6
import img6x6_3 from "../assets/img/6x6-3.webp";
import img6x6_4 from "../assets/img/6x6-4.webp";
import img6x6_5 from "../assets/img/6x6-5.webp";
import img6x6_6 from "../assets/img/6x6-6.webp";
import img6x6_7 from "../assets/img/6x6-7.webp";
import img6x6_8 from "../assets/img/6x6-8.webp";

// Cubos 7x7
import img7x7_1 from "../assets/img/7x7-1.webp";
import img7x7_2 from "../assets/img/7x7-2.webp";
import img7x7_3 from "../assets/img/7x7-3.webp";
import img7x7_4 from "../assets/img/7x7-4.webp";
import img7x7_5 from "../assets/img/7x7-5.webp";
import img7x7_6 from "../assets/img/7x7-6.webp";
import img7x7_7 from "../assets/img/7x7-7.webp";
import img7x7_8 from "../assets/img/7x7-8.webp";

const cubos = [
  {
    tipo: "2x2",
    type: "2x2",
    nombre: "Cubo 2x2 MGC imantado",
    precio: 9.95,
    imagen: img2x2_1,
    id: uuid(),
    nuevo: false,
  },
  {
    tipo: "2x2",
    type: "2x2",
    nombre: "YJ MGC Elite M 2x2 imantado",
    precio: 19.95,
    imagen: img2x2_2,
    id: uuid(),
    nuevo: false,
  },
  {
    tipo: "2x2",
    type: "2x2",
    nombre: "QY MS 2x2 magnetico",
    precio: 6.95,
    imagen: img2x2_3,
    id: uuid(),
    nuevo: false,
  },
  {
    tipo: "2x2",
    type: "2x2",
    nombre: "Gan 251 2x2 magnetico",
    precio: 16.95,
    imagen: img2x2_4,
    id: uuid(),
    nuevo: false,
  },
  {
    tipo: "3x3",
    type: "3x3",
    nombre: "Gan 14 Maglev Magnetic UV coated",
    precio: 77.95,
    imagen: img3x3_1,
    id: uuid(),
    nuevo: false,
  },
  {
    tipo: "3x3",
    type: "3x3",
    nombre: "X-man Tornado v3 Pioneer UV Coated Magnetic",
    precio: 44.95,
    imagen: img3x3_2,
    id: uuid(),
    nuevo: false,
  },
  {
    tipo: "3x3",
    type: "3x3",
    nombre: "Gan 12 Maglev Magnetic UV Coated",
    precio: 58.95,
    imagen: img3x3_3,
    id: uuid(),
    nuevo: false,
  },
  {
    tipo: "3x3",
    type: "3x3",
    nombre: "Facherito(Js Cuber, 2018)",
    precio: 8.95,
    imagen: img3x3_4,
    id: uuid(),
    nuevo: false,
  },
  {
    tipo: "4x4",
    type: "4x4",
    nombre: "4x4 MGC Magnetic",
    precio: 19.95,
    imagen: img4x4_1,
    id: uuid(),
    nuevo: false,
  },
  {
    tipo: "4x4",
    type: "4x4",
    nombre: "Gan 4x4  magnetic",
    precio: 54.95,
    imagen: img4x4_2,
    id: uuid(),
    nuevo: false,
  },
  {
    tipo: "4x4",
    type: "4x4",
    nombre: "Moyu 4x4 M magnetic",
    precio: 10.95,
    imagen: img4x4_3,
    id: uuid(),
    nuevo: false,
  },
  {
    type: "4x4",
    tipo: "4x4",
    nombre: "Qiyi S4M magnetic",
    precio: 11.95,
    imagen: img4x4_4,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre:
      "MoYu RS3 M V5 3x3 Magnetic (Ball-Core UV Coated + Robot Display Box)",
    type: "3x3",
    precio: 19.95,
    imagen: imgnuevo1,
    id: uuid(),
    nuevo: true,
  },
  {
    nombre:
      "GAN 12 UI Free Play 3x3 UV Coated Bluetooth Smart Cube (PowerPod Charger)",
    precio: 134.95,
    type: "3x3",
    imagen: imgnuevo2,
    id: uuid(),
    nuevo: true,
  },
  {
    nombre:
      "GAN 12 UI Free Play 3x3 UV Coated Bluetooth Smart Cube (Standard Charger)",
    type: "3x3",
    precio: 119.95,
    imagen: imgnuevo3,
    id: uuid(),
    nuevo: true,
  },
  {
    nombre: "Soup Timmy Mini Mat",
    precio: 9.95,
    type: "mat",
    imagen: imgnuevo4,
    id: uuid(),
    nuevo: true,
  },
  {
    nombre: "MoYu MeiLong 6x6 V2 (Magnetic)",
    precio: 15.95,
    type: "6x6",
    imagen: imgnuevo5,
    id: uuid(),
    nuevo: true,
  },
  {
    nombre: "MoYu MeiLong 6x6 V2 (Non-Magnetic)",
    precio: 10.95,
    type: "6x6",
    imagen: imgnuevo6,
    id: uuid(),
    nuevo: true,
  },
  {
    nombre:
      "MoYu RS3 M V5 3x3 Magnetic (Ball-Core UV Coated + Robot Display Box)",
    type: "3x3",
    precio: 42.95,
    imagen: imgnuevo7,
    id: uuid(),
    nuevo: true,
  },
  {
    nombre: "MoYu RS3 M V5 3x3 Magnetic (MagLev + Robot Display Box)",
    type: "3x3",
    precio: 47.95,
    imagen: imgnuevo8,
    id: uuid(),
    nuevo: true,
  },
  {
    nombre: "YuXin Cloud 5x5",
    precio: 8.95,
    type: "5x5",
    imagen: img5x5_1,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "MoYu MeiLong 5x5 Magnetic",
    precio: 11.95,
    type: "5x5",
    imagen: img5x5_2,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "QiYi 5x5 (Carbon Fiber)",
    type: "5x5",
    precio: 9.95,
    imagen: img5x5_3,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "YJ MGC 5x5 Magnetic",
    precio: 17.95,
    type: "5x5",
    imagen: img5x5_4,
    id: uuid(),
    nuevo: false,
  },
  {
    precio: 16.95,
    nombre: "QiYi MS 5x5 Magnetic",
    type: "5x5",
    imagen: img5x5_5,
    id: uuid(),
    nuevo: false,
  },
  {
    precio: 26.95,
    nombre: "QiYi MP 5x5 Magnetic",
    type: "5x5",
    imagen: img5x5_6,
    id: uuid(),
    nuevo: false,
  },
  {
    precio: 38.95,
    nombre: "JPerm MGC 5x5 Magnetic",
    type: "5x5",
    imagen: img5x5_7,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "DaYan NeZha 5x5 Magnetic",
    precio: 37.95,
    type: "5x5",
    imagen: img5x5_8,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "DianSheng 6x6 Magnetic",
    type: "6x6",
    imagen: img6x6_3,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "JPerm MGC 6x6 Magnetic",
    type: "6x6",
    imagen: img6x6_4,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "YJ MGC 6x6 Magnetic",
    type: "6x6",
    imagen: img6x6_5,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "YuXin Little Magic 6x6",
    type: "6x6",
    imagen: img6x6_6,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "YJ YuShi V2 6x6 Magnetic",
    type: "6x6",
    imagen: img6x6_7,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "MoYu AoShi WR M 6x6 Magnetic",
    type: "6x6",
    imagen: img6x6_8,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "ShengShou YuFeng 4x4 Magnetic",
    type: "4x4",
    imagen: img4x4_5,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "QiYi MP 4x4 Magnetic",
    type: "4x4",
    imagen: img4x4_6,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "MoYu RS4 M 4x4 Magnetic",
    type: "4x4",
    imagen: img4x4_7,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "Cyclone Boys Metallic 4x4 Magnetic",
    type: "4x4",
    imagen: img4x4_8,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "DianSheng 7x7 Magnetic",
    type: "7x7",
    imagen: img7x7_1,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "YJ MGC 7x7 Magnetic",
    type: "7x7",
    imagen: img7x7_2,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "QiYi QiXing S2 7x7",
    type: "7x7",
    imagen: img7x7_3,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "QiYi QiXing W 7x7",
    type: "7x7",
    imagen: img7x7_4,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "YuXin Little Magic 7x7",
    type: "7x7",
    imagen: img7x7_5,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "JPerm MGC 7x7 Magnetic",
    type: "7x7",
    imagen: img7x7_6,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "X-Man Spark 7x7 Magnetic",
    type: "7x7",
    imagen: img7x7_7,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "MoYu AoFu WR M 7x7 Magnetic",
    type: "7x7",
    imagen: img7x7_8,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "QiYi MP 2x2 Magnetic",
    type: "2x2",
    imagen: img2x2_5,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "ShengShou Metallic 2x2 (Magnetic)",
    type: "2x2",
    imagen: img2x2_6,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "YJ YuPo V2 2x2 Magnetic",
    type: "2x2",
    imagen: img2x2_7,
    id: uuid(),
    nuevo: false,
  },
  {
    nombre: "DianSheng Solar S 2x2 Magnetic",
    type: "2x2",
    imagen: img2x2_8,
    id: uuid(),
    nuevo: false,
  },
];

export { cubos };
