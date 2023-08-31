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

const ConvenioDirecto = ({ oneOfert, ofertID }) => {
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
              this.createInfoClient2(),
              this.createContactInfo(),

              ...antecedentePrimera
                .map((position) => {
                  const arr: Paragraph[] = [];

                  arr.push(this.createInstitutionHeader(position.company.name));
                  arr.push(this.createText(position.summary));
                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
              this.createAntecedentept2(),
              this.createAntecedente1pt3(),

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
              this.createTextAntecedente3pt3(),

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
          new TextRun(
            `${nameConyu[0].toUpperCase() === "" ? "" : ", con el/la señor/a "}`
          ),
          new TextRun({
            text: `${nameConyu[0].toUpperCase() === "" ? "" : nameConyu}`,
            bold: true,
          }),
          new TextRun(
            `${
              nameConyu[0].toUpperCase() === "" ? "" : ", con cedula de identidad N° "
            }`
          ),
          new TextRun({
            text: `${nameConyu[0].toUpperCase() === "" ? "" : idConyu}`,
            bold: true,
          }),
          new TextRun(
            ", por sus propios derechos, conforme consta en los documentos que se adjuntan como habilitantes; a quien se le denominará FUTUROS ADQUIRIENTES; y"
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
            `Con estos antecedentes, las partes acuerdan, libre y voluntariamente celebrar y suscribir el presente contrato, por el cual INMOCONSTUCCIONES reserva para la venta al COMPRADOR, el inmueble detallado a continuación:`
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
            `En caso de mora en el pago de cualquiera de los dividendos señalados en este convenio, los FUTUROS ADQUIRIENTES pagarán adicionalmente desde la fecha de vencimiento de cada dividendo hasta la completa cancelación del mismo, el 12% de interés por financiamiento más el máximo interés moratorio vigente a la fecha de vencimiento respectivo, calculado de acuerdo a lo dispuesto en las leyes de regulaciones pertinentes, sobre el valor de la cuota vencida y no pagado. Si la mora es mayor a 30 días calendario, se rescindirá el presente convenio aplicando la multa por desistimiento.`
          ),
        ],
      });
    }

    public createTextAntecedente3pt3(): Paragraph {
      return new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: {
          before: 200,
          after: 200,
        },
        children: [
          new TextRun(
            `Si parte del pago se va a realizar con Crédito Hipotecario los FUTUROS ADQUIRIENTES deben presentar toda la documentación necesaria dos meses antes del vencimiento correspondiente acordado, además tienen la obligación de retransmitir al departamento de Gestión y Crédito todos los mensajes recibidos durante el proceso; recuerde que es responsabilidad del FUTURO ADQUIRIENTE la obtención del Crédito Hipotecario.`
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

    public createAntecedentept2(): Paragraph {
      return new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: {
          before: 200,
          after: 200,
        },
        children: [
          new TextRun(
            `b) Sobre el terreno indicado anteriormente, se encuentra el Proyecto de Huertos Familiares “EL MIRADOR DEL LAGO”, el mismo que estará compuesto aproximadamente por 20 lotes de una superficie estimada de dos mil quinientos metros cuadrados que incluye: Portón de ingreso, conserjería, áreas comunales, vía interna empedrada, punto de luz, punto de agua potable, punto de riego, tanque biodigestor, estaca de linderos.`
          ),
        ],
      });
    }
    public createAntecedente1pt3(): Paragraph {
      return new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: {
          before: 200,
          after: 200,
        },
        children: [
          new TextRun(
            `c) Es voluntad de las partes suscribir el presente convenio por ser beneficioso para las mismas.`
          ),
        ],
      });
    }
  }

  const antecedentePrimera = [
    {
      alignment: AlignmentType.JUSTIFIED,
      summary:
        "a) Mediante Escritura de Compra y Venta celebrada el 02 de abril del año dos mil quince, ante el Notario Segundo del Cantón Otavalo, Doctor Luis Fernando Vaca Mantilla, la Compañía INMOBILIARIA Y CONSTRUCCIONES INMOCONSTRUCCIONES CIA. LTDA., adquirió al Sr. Edwar Patricio Cárdenas Cárdenas como mandatario de la señorita Gloria Maria Cárdenas el lote de terreno de la superficie total de doce punto cero cero catorce hectáreas (12.0014 has), situado en el punto denominado Moraspungo, perteneciente al sector rural de la Parroquia San Luis, Cantón Otavalo, Provincia de Imbabura.",
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
      company: {
        name: "TERCERA. - PRECIO Y FORMA DE PAGO",
      },
    },
  ];

  const antecedenteVarios = [
    {
      alignment: AlignmentType.JUSTIFIED,
      summary:
        "El COMPRADOR declara bajo juramento no estar incurso en ninguna de las prohibiciones determinadas en la ley de Mercado de Valores y demás normas aplicables y que los fondos con los que va a adquirir el bien determinado en este contrato, tienen un origen lícito y en especial no provienen de ninguna actividad relacionada con el cultivo, fabricación, almacenamiento, transporte o tráfico ilícito de sustancias estupefacientes o psicotrópicas.",
      company: {
        name: "CUARTA. - ORIGEN DE LOS FONDOS",
      },
    },
    {
      alignment: AlignmentType.JUSTIFIED,
      summary:
        "El plazo para la entrega definitiva del inmueble objeto de este contrato de compraventa es cuando el inmueble haya sido cancelado en su TOTALIDAD y ESCRITURADO. Se realizará una preentrega con el pago del 30% y se firmará un acuerdo en un centro de mediación, con esto se le otorgará el uso del inmueble.",
      company: {
        name: "QUINTA. - PLAZO",
      },
    },
    {
      alignment: AlignmentType.JUSTIFIED,
      summary:
        "En caso de que cualquiera de las partes el VENDEDOR y/o el COMPRADOR desistiere respectivamente de la compra y la adquisición del inmueble, la parte que incumpla se obliga para con la otra a: Pagar una multa del DIEZ POR CIENTO del precio total de inmueble, multa que será pagada por la parte que incumpliere este contrato a la parte que se mantenga en el mismo. Además, queda establecido: UNO.- Si el incumplimiento es imputable al COMPRADOR en la forma, plazos establecidos y demás condiciones estipuladas en este contrato, sus anexos y la ley en materia, de hecho, el Promitente Vendedor, rescindirá este contrato y hará efectivo a su favor el valor de la multa en concepto de indemnización de daños y perjuicios ocasionados por el incumplimiento, sin derecho a reclamo alguno y no se reconocerá ningún valor por trabajos realizados en el lote. DOS.- Más si el incumplimiento es por parte del VENDEDOR, por causas imputables y no llegare a perfeccionarse y suscribirse la escritura definitiva de compraventa, éste además de restituir los valores pagados por el COMPRADOR deberá pagar también una multa del DIEZ POR CIENTO en concepto de indemnización de daños y perjuicios ocasionados por el incumplimiento, se excluye de la multa el incumplimiento por razones de caso fortuito o fuerza mayor.",
      company: {
        name: "SEXTA. - DESISTIMIENTO",
      },
    },
    {
      alignment: AlignmentType.JUSTIFIED,
      summary:
        "Todos los gastos e impuestos que demande la celebración de la escritura pública de compraventa, serán de cuenta del COMPRADOR, y en caso de existir pago de mejoras y plusvalía correrá a cargo del VENDEDOR.",
      company: {
        name: "SEPTIMA. - GASTOS E IMPUESTOS",
      },
    },
    {
      alignment: AlignmentType.JUSTIFIED,
      summary:
        "El COMPRADOR y el VENDEDOR, declaran que aceptan en su totalidad el contenido del presente instrumento por estar hecho en beneficio de sus intereses. En caso de que el COS emitido por el Municipio de Otavalo sea menor al 30%, la compañía INMOBILIARIA Y CONSTRUCCIONES INMOCONSTRUCCIONES CIA LTDA, se compromete a devolver inmediatamente el valor abonado por el COMPRADOR. EL VENDEDOR está comprometido con la información personal de nuestros clientes por lo que le comunicamos que estamos cumpliendo con la Ley Orgánica de Protección de Datos Personales.",
      company: {
        name: "OCTAVA. - ACEPTACIÓN",
      },
    },
    {
      alignment: AlignmentType.JUSTIFIED,
      summary:
        "En caso de que existan controversias o diferencias derivadas de la ejecución de este contrato, que no puedan ser resueltas por mutuo acuerdo, las partes renuncian fuero y domicilio y deciden someterse a la decisión en derecho del Tribunal de Arbitraje de la Cámara de Comercio de Quito, que se sujetará a lo dispuesto por la Ley de Arbitraje y Mediación, el reglamento del Centro de Arbitraje y Mediación de la Cámara de Comercio de Quito y cualquier otra reglamentación que se expida sobre el particular.",
      company: {
        name: "NOVENA. - DOMICILIO JURISDICCIÓN Y COMPETENCIA",
      },
    },
  ];

  const generate = () => {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create([
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
          <button onClick={generate}>Generar Convenio con derechos</button>
        </p>
      </div>
    </>
  );
};

export default ConvenioDirecto;
