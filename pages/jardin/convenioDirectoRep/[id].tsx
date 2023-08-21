function unidades(num) {
  switch (num) {
    case 1:
      return "Un";
    case 2:
      return "Dos";
    case 3:
      return "Tres";
    case 4:
      return "Cuatro";
    case 5:
      return "Cinco";
    case 6:
      return "Seis";
    case 7:
      return "Siete";
    case 8:
      return "Ocho";
    case 9:
      return "Nueve";
    default:
      return "";
  }
}

function decenasY(strSin, numUnidades) {
  if (numUnidades > 0) {
    return strSin + " y " + unidades(numUnidades);
  }

  return strSin;
}

function decenas(num) {
  var numDecena = Math.floor(num / 10);
  var numUnidad = num - numDecena * 10;

  switch (numDecena) {
    case 1:
      switch (numUnidad) {
        case 0:
          return "Diez";
        case 1:
          return "Once";
        case 2:
          return "Doce";
        case 3:
          return "Trece";
        case 4:
          return "Catorce";
        case 5:
          return "Quince";
        default:
          return "Dieci" + unidades(numUnidad).toLowerCase();
      }
    case 2:
      switch (numUnidad) {
        case 0:
          return "Veinte";
        default:
          return "Veinti" + unidades(numUnidad).toLowerCase();
      }
    case 3:
      return decenasY("Treinta", numUnidad);
    case 4:
      return decenasY("Cuarenta", numUnidad);
    case 5:
      return decenasY("Cincuenta", numUnidad);
    case 6:
      return decenasY("Sesenta", numUnidad);
    case 7:
      return decenasY("Setenta", numUnidad);
    case 8:
      return decenasY("Ochenta", numUnidad);
    case 9:
      return decenasY("Noventa", numUnidad);
    case 0:
      return unidades(numUnidad);
    default:
      return "";
  }
}

function centenas(num) {
  var numCentenas = Math.floor(num / 100);
  var numDecenas = num - numCentenas * 100;

  switch (numCentenas) {
    case 1:
      if (numDecenas > 0) {
        return "Ciento " + decenas(numDecenas);
      }
      return "Cien";
    case 2:
      return "Doscientos " + decenas(numDecenas);
    case 3:
      return "Trescientos " + decenas(numDecenas);
    case 4:
      return "Cuatrocientos " + decenas(numDecenas);
    case 5:
      return "Quinientos " + decenas(numDecenas);
    case 6:
      return "Seiscientos " + decenas(numDecenas);
    case 7:
      return "Setecientos " + decenas(numDecenas);
    case 8:
      return "Ochocientos " + decenas(numDecenas);
    case 9:
      return "Novecientos " + decenas(numDecenas);
    default:
      return decenas(numDecenas);
  }
}

function seccion(num, divisor, strSingular, strPlural) {
  var numCientos = Math.floor(num / divisor);
  var numResto = num - numCientos * divisor;

  var letras = "";

  if (numCientos > 0) {
    if (numCientos > 1) {
      letras = centenas(numCientos) + " " + strPlural;
    } else {
      letras = strSingular;
    }
  }

  if (numResto > 0) {
    letras += "";
  }

  return letras;
}

function miles(num) {
  var divisor = 1000;
  var numCientos = Math.floor(num / divisor);
  var numResto = num - numCientos * divisor;
  var strMiles = seccion(num, divisor, "Un Mil", "Mil");
  var strCentenas = centenas(numResto);

  if (strMiles === "") {
    return strCentenas;
  }

  return (strMiles + " " + strCentenas).trim();
}

function millones(num) {
  var divisor = 1000000;
  var numCientos = Math.floor(num / divisor);
  var numResto = num - numCientos * divisor;
  var strMillones = seccion(num, divisor, "Un Millón de", "Millones de");
  var strMiles = miles(numResto);

  if (strMillones === "") {
    return strMiles;
  }

  return (strMillones + " " + strMiles).trim();
}

function NumerosALetras(num) {
  var data = {
    numero: num,
    enteros: Math.floor(num),
    centavos: Math.round(num * 100) - Math.floor(num) * 100,
    letrasCentavos: "",
    letrasMonedaPlural: "DOLARES DE NORTEAMERICA",
    letrasMonedaSingular: "DOLARES DE NORTEAMERICA",
    letrasMonedaCentavoPlural: "/100 CTVS",
    letrasMonedaCentavoSingular: "/100 CTVS",
  };

  if (data.centavos >= 0) {
    data.letrasCentavos = (function () {
      if (data.centavos >= 1 && data.centavos <= 9) {
        return "0" + data.centavos + data.letrasMonedaCentavoSingular;
      }

      if (data.centavos === 0) {
        return "00" + data.letrasMonedaCentavoSingular;
      }

      return data.centavos + data.letrasMonedaCentavoPlural;
    })();
  }

  if (data.enteros === 0) {
    return (
      "Cero " +
      data.letrasMonedaPlural +
      " " +
      data.letrasCentavos
    ).trim();
  }

  if (data.enteros === 1) {
    return (
      millones(data.enteros) +
      " " +
      data.letrasMonedaSingular +
      " " +
      data.letrasCentavos
    ).trim();
  }

  return (
    millones(data.enteros) +
    " " +
    data.letrasMonedaPlural +
    " " +
    data.letrasCentavos
  ).trim();
}

import React from "react";
import axios from "axios";
import * as fileSaver from "file-saver";
import {
  AlignmentType,
  BorderStyle,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TabStopPosition,
  TabStopType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";
import { useAuth } from "../../../lib/hooks/use_auth";

export const getServerSideProps = async (context) => {
  const { data: oneOfert } = await axios.get(
    "https://oferta.grupoancon.com/api/newOferts/" + context.query.id
  );
  return {
    props: {
      oneOfert,
      ofertID: context.query.id,
    },
  };
};

const ConvenioDirectoREP = ({ oneOfert, ofertID }) => {
  const { auth } = useAuth();
  const names = oneOfert.data.map((ofert) => ofert.cli_name);
  const cedula = oneOfert.data.map((ofert) => ofert.cli_id);
  const representante = oneOfert.data.map((ofert) => ofert.cli_representante);
  const representanteID = oneOfert.data.map(
    (ofert) => ofert.cli_representanteID
  );
  const name2 = oneOfert.data.map((ofert) => ofert.cli_name2);
  const name2ID = oneOfert.data.map((ofert) => ofert.cli_name2ID);
  const estadoCivil = oneOfert.data.map((ofert) => ofert.cli_estadoCivil);
  const lote = oneOfert.data.map((ofert) => ofert.mae_codinv);
  const area = oneOfert.data.map((ofert) => ofert.mae_prevt4);
  const ofrecimiento = oneOfert.data.map((ofert) => ofert.cli_ofrecimiento);
  const precioLote = oneOfert.data.map((ofert) => ofert.cli_valorOferta);
  const descuento = oneOfert.data.map((ofert) => ofert.cli_descuento);
  const porcentaje = oneOfert.data.map((ofert) => ofert.cli_porcentaje);
  const descuentoAdd = oneOfert.data.map((ofert) => ofert.cli_descuentoAdd);
  const venta = oneOfert.data.map((ofert) => ofert.cli_tipoVenta);
  const precioFinal = oneOfert.data.map((ofert) => ofert.cli_totalOferta);
  const preciofinaR = precioFinal.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const nameConyu = oneOfert.data.map((ofert) => ofert.cli_conyuName);
  const idConyu = oneOfert.data.map((ofert) => ofert.cli_conyuID);

  const precioFinalText = NumerosALetras(precioFinal);
  const precioFinalTextR = precioFinalText.toLocaleUpperCase();

  class DocumentCreator {
    // tslint:disable-next-line: typedef
    public create([
      informacionAdicional,
      antecedentePrimera,
      antecedenteSegunda,
      antecedenteTercera,
      antecedenteVarios,
    ]): Document {
      const document = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "CONVENIO DE COMPRA",
                    bold: true,
                    size: 32,
                    color: "000000",
                  }),
                ],
                alignment: AlignmentType.CENTER,
                spacing: {
                  before: 200,
                  after: 200,
                },
              }),
              this.createContactFecha(),
              this.createInfoClient(),
              ...informacionAdicional
                .map((position) => {
                  const arr: Paragraph[] = [];
                  arr.push(this.createInstitutionHeader(position.company.name));
                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
              this.createTableInfoAdd(),
              this.createInfoClient2(),
              this.createContactInfo(),

              ...antecedentePrimera
                .map((position) => {
                  const arr: Paragraph[] = [];

                  arr.push(this.createInstitutionHeader(position.company.name));
                  const bulletPoints = this.splitParagraphIntoBullets(
                    position.summary
                  );

                  bulletPoints.forEach((bulletPoint) => {
                    arr.push(this.createBullet(bulletPoint));
                  });

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),

              ...antecedenteSegunda
                .map((position) => {
                  const arr: Paragraph[] = [];
                  arr.push(this.createInstitutionHeader(position.company.name));
                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
              this.createTextAntecedente2(),
              this.createTable(),

              ...antecedenteTercera
                .map((position) => {
                  const arr: Paragraph[] = [];
                  arr.push(this.createInstitutionHeader(position.company.name));
                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
              this.createTextAntecedente3pt1(),
              this.createTextAntecedente3pt2(),

              ...antecedenteVarios
                .map((position) => {
                  const arr: Paragraph[] = [];

                  arr.push(this.createInstitutionHeader(position.company.name));
                  arr.push(this.createText(position.summary));

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
              this.createContactFirmas(),
              this.createFirmas(),
              this.createFirmas2(),
              this.createFirmas3(),
              this.createFirmas4(),
              this.createFirmas5(),
              this.createFirmas6(),
            ],
          },
        ],
      });

      return document;
    }

    public createContactFecha(): Paragraph {
      const fechaActual = new Date().toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      return new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: {
          before: 200,
          after: 200,
        },
        children: [
          new TextRun("En la ciudad de Quito, hoy "),
          new TextRun({
            text: fechaActual,
            bold: true,
          }),
          new TextRun(", convienen en celebrar el siguiente convenio:"),
        ],
      });
    }

    public createInfoClient(): Paragraph {
      return new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: {
          before: 200,
          after: 200,
        },
        children: [
          new TextRun("Por una parte, el/la señor/a "),
          new TextRun({
            text: `${names[0].toUpperCase()}`,
            bold: true,
          }),
          new TextRun(", con cédula de identidad N° "),
          new TextRun({
            text: `${cedula}`,
            bold: true,
          }),
          new TextRun(", de estado civil "),
          new TextRun({
            text: `${estadoCivil}`,
            bold: true,
          }),
          new TextRun(", y en representación del señor/a "),
          new TextRun({
            text: `${representante[0].toUpperCase()} `,
            bold: true,
          }),
          new TextRun("con número de identificación "),
          new TextRun({
            text: `${representanteID}`,
            bold: true,
          }),
          new TextRun(
            ", conforme consta en los documentos que se adjuntan como habilitantes; a quien se le denominará FUTUROS ADQUIRIENTES; y"
          ),
        ],
      });
    }

    public createInfoClient2(): Paragraph {
      return new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: {
          before: 200,
          after: 200,
        },
        children: [
          new TextRun(
            `La compañía INMOBILIARIA Y CONSTRUCCIONES INMOCONSTRUCCIONES CIA. LTDA., legalmente representada por su Gerente y Representante Legal, el señor DIEGO ROBERTO ANDRADE CONTRERAS, casado, conforme consta en el documento que se adjunta al presente instrumento como habilitante; parte a la que en adelante y para efectos del presente contrato, se le denominará EL VENDEDOR.`
          ),
        ],
      });
    }

    public createTextAntecedente2(): Paragraph {
      return new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: {
          before: 200,
          after: 200,
        },
        children: [
          new TextRun(
            `Con estos antecedentes, las partes acuerdan libre y voluntariamente celebrar y suscribir el presente convenio, por el cual la COMPAÑÍA INMOBILIARIA Y CONSTRUCCIONES INMOCONSTRUCCIONES CIA. LTDA., reservan para la venta a los FUTUROS ADQUIRIENTES, el lote que forma parte de la urbanización y que se detalla a continuación:`
          ),
        ],
      });
    }

    public createTextAntecedente3pt1(): Paragraph {
      return new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: {
          before: 200,
          after: 200,
        },
        children: [
          new TextRun(`El precio del lote reservado es de `),
          new TextRun({
            text: `USD. ${preciofinaR} ${precioFinalTextR}`,
            bold: true,
          }),
          new TextRun(
            ". Este valor será cancelado de acuerdo a la tabla de pagos (Anexo 1) que forma parte integral del mismo."
          ),
        ],
      });
    }

    public createTextAntecedente3pt2(): Paragraph {
      return new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: {
          before: 200,
          after: 200,
        },
        children: [
          new TextRun(
            `En caso de mora en el pago de cualquiera de los dividendos señalados en este convenio, los FUTUROS ADQUIRIENTES pagarán adicionalmente desde la fecha de vencimiento de cada dividendo hasta la completa cancelación del mismo, el 12% de interés por financiamiento más el máximo interés moratorio vigente a la fecha de vencimiento respectivo, calculado de acuerdo a lo dispuesto en las leyes de regulaciones pertinentes, sobre el valor de la cuota vencida y no pagado. Si la mora es mayor a 30 días calendario, se rescindirá el presente convenio aplicando la multa por desistimiento.\n\nSi parte del pago se va a realizar con Crédito Hipotecario los FUTUROS ADQUIRIENTES deben presentar toda la documentación necesaria dos meses antes del vencimiento correspondiente acordado, además tienen la obligación de retransmitir al departamento de Gestión y Crédito todos los mensajes recibidos durante el proceso; recuerde que es responsabilidad del FUTURO ADQUIRIENTE la obtención del Crédito Hipotecario.`
          ),
        ],
      });
    }

    public createContactInfo(): Paragraph {
      return new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: {
          before: 200,
          after: 200,
        },
        children: [
          new TextRun(
            `Todos mayores de edad, ecuatorianos, libre y voluntariamente resuelven suscribir el convenio de compra contenido en las siguientes clausulas:`
          ),
        ],
      });
    }

    public createContactFirmas(): Paragraph {
      return new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: {
          before: 200,
          after: 200,
        },
        children: [
          new TextRun(
            `Para constancia de lo aquí estipulado, las partes suscriben el presente convenio en dos originales de igual tenor y valor.`
          ),
        ],
      });
    }

    public createInstitutionHeader(institutionName: string): Paragraph {
      return new Paragraph({
        spacing: {
          before: 200,
          after: 200,
        },
        tabStops: [
          {
            type: TabStopType.RIGHT,
            position: TabStopPosition.MAX,
          },
        ],
        children: [
          new TextRun({
            text: institutionName,
            bold: true,
          }),
        ],
      });
    }

    public createText(institutionName: string): Paragraph {
      return new Paragraph({
        spacing: {
          before: 200,
          after: 200,
        },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: institutionName,
          }),
        ],
      });
    }

    public createBullet(text: string): Paragraph {
      return new Paragraph({
        text: text,
        alignment: AlignmentType.JUSTIFIED,
        spacing: {
          before: 200,
          after: 200,
        },
        bullet: {
          level: 0,
        },
      });
    }

    public splitParagraphIntoBullets(text: string): string[] {
      return text.split("\n\n");
    }

    public createTableInfoAdd(): Table {
      const rows = [];
      // Cónyuge
      if (nameConyu || idConyu) {
        rows.push(
          new TableRow({
            children: [
              new TableCell({
                width: {
                  size: 33,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "CONYUGE",
                        bold: true,
                      }),
                    ],
                  }),
                ],
              }),
              new TableCell({
                width: {
                  size: 33,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${nameConyu[0].toUpperCase() || ""}`,
                        bold: true,
                      }),
                    ],
                  }),
                ],
              }),
              new TableCell({
                width: {
                  size: 33,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [new TextRun(`${idConyu || ""}`)],
                  }),
                ],
              }),
            ],
          })
        );
      }

      const table = new Table({
        alignment: AlignmentType.CENTER,
        width: {
          size: 100,
          type: WidthType.PERCENTAGE,
        },
        borders: {
          top: {
            style: BorderStyle.SINGLE,
            size: 1,
          },
          bottom: {
            style: BorderStyle.SINGLE,
            size: 1,
          },
          left: {
            style: BorderStyle.SINGLE,
            size: 1,
          },
          right: {
            style: BorderStyle.SINGLE,
            size: 1,
          },
        },
        rows: rows,
      });

      return table;
    }

    public createTable(): Table {
      const table = new Table({
        alignment: AlignmentType.CENTER,
        width: {
          size: 100,
          type: WidthType.PERCENTAGE,
        },
        borders: {
          top: {
            style: BorderStyle.SINGLE,
            size: 1,
          },
          bottom: {
            style: BorderStyle.SINGLE,
            size: 1,
          },
          left: {
            style: BorderStyle.SINGLE,
            size: 1,
          },
          right: {
            style: BorderStyle.SINGLE,
            size: 1,
          },
        },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: {
                  size: 50,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "LOTE:",
                        bold: true,
                      }),
                    ],
                  }),
                ],
              }),
              new TableCell({
                width: {
                  size: 50,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [new TextRun(`${lote}`)],
                  }),
                ],
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({
                width: {
                  size: 50,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "SUPERFICIE:",
                        bold: true,
                      }),
                    ],
                  }),
                ],
              }),
              new TableCell({
                width: {
                  size: 50,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [new TextRun(`AT ${area} mts`)],
                  }),
                ],
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({
                width: {
                  size: 50,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "OBSERVACIONES:",
                        bold: true,
                      }),
                    ],
                  }),
                ],
              }),
              new TableCell({
                width: {
                  size: 50,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [new TextRun(`${ofrecimiento}`)],
                  }),
                ],
              }),
            ],
          }),
        ],
      });

      return table;
    }

    public createFirmas(): Paragraph {
      return new Paragraph({
        spacing: {
          before: 1600,
        },
        children: [new TextRun("_________________________")],
      });
    }

    public createFirmas2(): Paragraph {
      const upperCaseNames = String(names).toUpperCase();

      return new Paragraph({
        children: [new TextRun({ text: upperCaseNames, bold: true })],
      });
    }
    public createFirmas3(): Paragraph {
      return new Paragraph({
        children: [new TextRun({ text: `N. º ${cedula}`, bold: true })],
      });
    }


    public createFirmas4(): Paragraph {
      return new Paragraph({
        spacing: {
          before: 1600,
        },
        children: [new TextRun("_________________________")],
      });
    }

    public createFirmas5(): Paragraph {
      return new Paragraph({
        children: [
          new TextRun({ text: `INMOCONSTRUCCIONES CIA. LTDA.`, bold: true }),
        ],
      });
    }
    public createFirmas6(): Paragraph {
      return new Paragraph({
        children: [
          new TextRun({ text: `RUC N. º. 1791714881001`, bold: true }),
        ],
      });
    }
  }

  const informacionAdicional = [
    {
      alignment: AlignmentType.JUSTIFIED,
      company: {
        name: "INFORMACIÓN ADICIONAL",
      },
    },
  ];

  const antecedentePrimera = [
    {
      alignment: AlignmentType.JUSTIFIED,
      summary:
        "Mediante escritura pública celebrada el 21 de noviembre del 2019 ante el notario primero del Cantón Pedro Vicente Maldonado Dr. Marcelo Javier Villacis Molina, la Compañía INMOBILIARIA Y CONSTRUCCIONES INMOCONSTRUCCIONES CIA. LTDA., adquirió a los cónyuges Yuri Wladimir Torres Rites y Yadira Noemi Vinueza Tamayo el lote de terreno signado con el número 6, legalmente inscrito en el Registro de la Propiedad del cantón Puerto Quito el 5 de septiembre del 2019;\n\nMediante ordenanza número 2020-008 se aprueba la urbanización “El Jardín de Puerto Quito”, otorgada el 18 de agosto del 2020 ante el notario Primero del cantón Pedro Vicente Maldonado, doctor Marcelo Javier Villacís Medina, legalmente inscrito en el registro de la propiedad de Puerto Quito el 10 de febrero del 2021, la misma que está compuesta por 263 lotes de una superficie aproximada de 700m2, con sus respectivas áreas comunales, vías, red de agua potable y red eléctrica.",
      company: {
        name: "PRIMERA. - ANTECEDENTE",
      },
    },
  ];

  const antecedenteSegunda = [
    {
      alignment: AlignmentType.JUSTIFIED,
      company: {
        name: "SEGUNDA. - OBJETO DEL CONVENIO DE RESERVA",
      },
    },
  ];

  const antecedenteTercera = [
    {
      alignment: AlignmentType.JUSTIFIED,
      summary: `En caso de mora en el pago de cualquiera de los dividendos señalados en este convenio, los FUTUROS ADQUIRIENTES pagarán adicionalmente desde la fecha de vencimiento de cada dividendo hasta la completa cancelación del mismo, el 12% de interés por financiamiento más el máximo interés moratorio vigente a la fecha de vencimiento respectivo, calculado de acuerdo a lo dispuesto en las leyes de regulaciones pertinentes, sobre el valor de la cuota vencida y no pagado. Si la mora es mayor a 30 días calendario, se rescindirá el presente convenio aplicando la multa por desistimiento.\n\nSi parte del pago se va a realizar con Crédito Hipotecario los FUTUROS ADQUIRIENTES deben presentar toda la documentación necesaria dos meses antes del vencimiento correspondiente acordado, además tienen la obligación de retransmitir al departamento de Gestión y Crédito todos los mensajes recibidos durante el proceso; recuerde que es responsabilidad del FUTURO ADQUIRIENTE la obtención del Crédito Hipotecario.`,
      company: {
        name: "TERCERA. - PRECIO Y FORMA DE PAGO",
      },
    },
  ];

  const antecedenteVarios = [
    {
      alignment: AlignmentType.JUSTIFIED,
      summary:
        "Los FUTUROS ADQUIRIENTES declaran bajo juramento no estar incursos en ninguna de las prohibiciones determinadas en la ley de Mercado de Valores y demás normas aplicables y, que los fondos con los que van a adquirir el bien determinado en este contrato, tiene un origen licito y en especial no provienen de ninguna actividad relacionada con el cultivo, fabricación, almacenamiento, transporte o tráfico ilícito de sustancias estupefacientes o psicotrópicas.",
      company: {
        name: "CUARTA. - ORIGEN DE LOS FONDOS",
      },
    },
    {
      alignment: AlignmentType.JUSTIFIED,
      summary:
        "El plazo para la transferencia de dominio y la consecuente entrega del lote, objeto de este convenio, es cuando haya sido CANCELADO EN SU TOTALIDAD el valor acordado en el anexo 1 de este documento, y una vez se inscriba en el Registro de la Propiedad la escritura de compraventa suscrita por las partes, de dicho lote. Por lo que el plazo es el previsto en el Plan de pagos.",
      company: {
        name: "QUINTA. - PLAZO",
      },
    },
    {
      alignment: AlignmentType.JUSTIFIED,
      summary:
        "Los clientes, que se encontraren al día en el pago de sus dividendos, conforme el plan de pagos,  aún  sin escritura de compraventa suscrita y en proceso pago o de registro,  pueden ingresar en calidad de visitantes del VENDEDOR, y por lo tanto se obligan a cumplir con las restricciones y condiciones de uso y goce de las áreas de la urbanización previstas en el Acuerdo Colectivo de Propietarios sobre el uso, mantenimiento y gestión de Áreas Verdes y Comunales de la Urbanización El Jardín de Puerto Quito. Para lo anterior solicitarán autorización al correo aperez@grupoancon.com con 48 HORAS de anticipación a la fecha de ingreso, con la lista de invitados, y el horario de entrada y salida y el día previsto para la visita. En caso de necesitar autorización para más de 10 personas se solicitará un pago anticipado, a partir del onceavo invitado, de USD 5,oo diario en días normales y USD. 10,oo en los feriados (incluye todos los días de feriado), que será cancelado de manera anticipada al VENDEDOR y posteriormente a la Administración (cuando el lote se encuentre entregado).En señal de aceptación, el Cliente o FUTUROS ADQUIRENTES, lo suscribe el cual deberá ser cumplido, y así lo acepta, luego de que se convierta en propietario de la Urbanización El Jardín de Puerto Quito, de esto que también se obliga a suscribir en conjunto con la escritura de compraventa del lote, la Carta de Adhesión a la Asociación de Propietarios de la Urbanización el Jardín de Puerto Quito, como habilitante para poder acceder a la Urbanización.",
      company: {
        name: "SEXTA. - VISITAS Y ACUERDO DE USO DE LA URBANIZACION:",
      },
    },
    {
      alignment: AlignmentType.JUSTIFIED,
      summary:
        "En caso de que cualquiera de las partes el VENDEDOR y/o los FUTUROS ADQUIRIENTES desistiere respectivamente de la reserva y la adquisición del inmueble materia de este instrumento, la parte que incumpla se obliga para con la otra a pagar una multa, en calidad de indemnización convencional,  multa que será pagada por la parte que incumpliere este convenio a la parte que se mantenga en el mismo,  conforme lo siguiente: UNO.- Si el incumplimiento es imputable a los FUTUROS ADQUIRIENTES, es decir que consistiera en más de un retraso  en la forma, plazos y demás condiciones estipuladas en este contrato, sus anexos,  el VENDEDOR podrá terminar unilateralmente  este contrato y hará efectivo el valor de la multa del 10% del precio del lote más el 10% de los abonos realizados, en concepto de indemnización por daños y perjuicios convencional,  ocasionados por el incumplimiento SIN DERECHO A RECLAMO ALGUNO por parte de los FUTUROS ADQUIRENTES, y se realizará una liquidación tomando en cuenta solamente el capital pagado. DOS. - Mas, si el incumplimiento es por parte del VENDEDOR, por causas imputables y no llegare a perfeccionarse y suscribirse la escritura definitiva de compra venta, encontrándose al día en sus pagos el Cliente o FUTUROS ADQUIRENTES, éste además de restituir el valor de capital pagado por los FUTUROS ADQUIRIENTES deberá pagar también una multa del 10% del precio del lote en concepto de indemnización por daños y perjuicios ocasionados por el incumplimiento. TRES. -  Se incluye como incumplimiento la no reparación de daños producidas por el Cliente o FUTUROS ADQUIRENTES en la Urbanización por eventuales visitas. CUATRO. - Se excluye de las indemnizaciones convencionales aquí pactadas, en caso fortuito o fuerza mayor comprobada.",
      company: {
        name: "SEPTIMA. - DESISTIMIENTO",
      },
    },
    {
      alignment: AlignmentType.JUSTIFIED,
      summary:
        "La escritura del lote es individual; todos los gastos e impuestos que demande la celebración de la escritura pública de compraventa serán dé cuenta de los FUTUROS ADQUIRIENTES, y en caso de existir pago de mejoras y plusvalía correrá a cargo del PROMITENTE VENDEDOR. LOS FUTUROS ADQUIRIENTES se comprometen a cancelar la alícuota comunal fijada por la Administración, una vez que el lote sea entregado, o se inicie el uso de áreas comunales.",
      company: {
        name: "OCTAVA. - GASTOS E IMPUESTOS",
      },
    },
    {
      alignment: AlignmentType.JUSTIFIED,
      summary:
        "Los FUTUROS ADQUIRIENTES y el PROMITENTE VENDEDOR, declaran que aceptan en su totalidad el contenido del presente instrumento por estar hecho en beneficio de sus intereses. Los FUTUROS ADQUIRIENTES se comprometen a cumplir las disposiciones de la Administración vigente, y aprobadas por la mayoría de los Propietarios.",
      company: {
        name: "NOVENA. - ACEPTACIÓN",
      },
    },
    {
      alignment: AlignmentType.JUSTIFIED,
      summary:
        "En caso de que existan controversias o diferencias derivadas de la ejecución de este convenio, que no puedan ser resueltas por mutuo acuerdo, las partes renuncian fuero y domicilio y deciden someterse a la decisión en derecho del Tribunal de Arbitraje de la Cámara de Comercio de Quito, que se sujetará a lo dispuesto por la Ley de Arbitraje y Mediación, el reglamento del centro de Arbitraje y Mediación de la Cámara de Comercio de Quito y cualquier otra reglamentación que se expida sobre este particular. El arbitraje se llevará a cabo en equidad.",
      company: {
        name: "DECIMA. - DOMICILIO JURISDICCIÓN Y COMPETENCIA",
      },
    },
  ];

  const generate = () => {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create([
      informacionAdicional,
      antecedentePrimera,
      antecedenteSegunda,
      antecedenteTercera,
      antecedenteVarios,
    ]);

    Packer.toBlob(doc).then((blob) => {
      fileSaver.saveAs(blob, `${lote} - ${names} - ${venta}.docx`);
    });
  };

  //Renderizado de la pagina
  return (
    <>
      <div>
        <p>
          <button onClick={generate}>Generar Convenio sin derechos</button>
        </p>
      </div>
    </>
  );
};

export default ConvenioDirectoREP;
