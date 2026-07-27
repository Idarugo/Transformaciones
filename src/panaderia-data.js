// Datos de Panadería extraídos automáticamente del Excel 25-07-2026.xlsm
// (hoja PANADERIA + hojas de recetario de cada producto).
// insumos: materias primas (EAN). productos: panes con rendimiento KG por amasijo.
// recetas: por SKU, ingredientes con cantidad de producción y cantidad por costo
// (unidades del insumo que se descuentan por cada amasijo).
export const PANADERIA = {
  "insumos": [
    {
      "ean": "5609040075884",
      "nombre": "HARINA HALLULERA 25K"
    },
    {
      "ean": "7803000000932",
      "nombre": "LEVEDURA FRES LEFERSA 500G"
    },
    {
      "ean": "7802810005410",
      "nombre": "MANTECA CRUCINA PLUS 1KG"
    },
    {
      "ean": "7803600011246",
      "nombre": "SAL VENUS MESA 1KG"
    },
    {
      "ean": "7802613000452",
      "nombre": "HARINA SUPER PAN BOLSA PAPEL 25KG"
    },
    {
      "ean": "7809622300290",
      "nombre": "MEJORADOR TOUPAN PLUS RS CON SAL 1KG"
    },
    {
      "ean": "7790272006550",
      "nombre": "ACEITE VEGETAL PARRAL 900ML"
    },
    {
      "ean": "5609040076928",
      "nombre": "T PURAVITA PAN INTEGRAL RS - 20KL"
    },
    {
      "ean": "7802615004625",
      "nombre": "MIX EMPANADA-DOBLADAS 25 K"
    },
    {
      "ean": "7802615004618",
      "nombre": "MIX HAMB- HOT DOG- MOLDE 25 KG 461"
    },
    {
      "ean": "5609040076959",
      "nombre": "E PURAVITA MULTIGRANO  DARK RS BOLSA 10 KG"
    },
    {
      "ean": "7802615004908",
      "nombre": "MIX PIZZA ESPECIAL 25 KG 490"
    },
    {
      "ean": "7802575365026",
      "nombre": "SALSA TOMSAN REMO 200 GRS ITALIANA"
    },
    {
      "ean": "5609040095820",
      "nombre": "TEGRAL SOFTER ACTIPLUS RS 20KG"
    },
    {
      "ean": "5609040080185",
      "nombre": "T PURAVITA PAN INTEGRAL LINAZA  20 K RS"
    },
    {
      "ean": "5609040076942",
      "nombre": "T PURAVITA PAN CHIA LINAZA RS - BOLSA 10K"
    },
    {
      "ean": "7808704200244",
      "nombre": "MEJORADOR FRANCES 15X400 GRS MAGIMIX"
    },
    {
      "ean": "7802615004811",
      "nombre": "MIX DULCINO 25 KG 683"
    },
    {
      "ean": "7809622300009",
      "nombre": "CREMIVIT CREMA PASTELERA 400G"
    },
    {
      "ean": "5609040758558",
      "nombre": "MEJORADOR MM-750 KG"
    },
    {
      "ean": "8436001252230",
      "nombre": "ACEITE OLIVA EXT.VIRGEN ABRIL PET 5 LTS"
    },
    {
      "ean": "7802810000750",
      "nombre": "MANTEQUILLLA PANIFICADORA LONCOLECHE 1KG"
    },
    {
      "ean": "7802810002099",
      "nombre": "ACEITE MARAVILLA CHEF 1LT"
    },
    {
      "ean": "7801505231912",
      "nombre": "AZUCAR IANSA 1KG"
    },
    {
      "ean": "7804617470255",
      "nombre": "LECHE ENTERA PITRUFQUEN 1LT"
    },
    {
      "ean": "7808704200220",
      "nombre": "MEJORADOR MAGIMIX HALLULLAS"
    },
    {
      "ean": "2531347000005",
      "nombre": "ACEITUNA AZAPA LAMINADA DESH. KG   A.SOLIS"
    },
    {
      "ean": "7802420005565",
      "nombre": "AJO EN POLVO EDRA 1KG"
    },
    {
      "ean": "7802420005626",
      "nombre": "OREGANO ENTERO EDRA 250G"
    },
    {
      "ean": "2533005000006",
      "nombre": "QUESO GAUDA CALO PIEZA 3KG"
    },
    {
      "ean": "5609009092853",
      "nombre": "HARMONY FRIO  4.5KG    ( brillo )"
    },
    {
      "ean": "2541111000001",
      "nombre": "CANELA EN POLVO KG FFVV"
    },
    {
      "ean": "7802420005541",
      "nombre": "SESAMO TOSTADO EDRA 100G"
    },
    {
      "ean": "7801420000778",
      "nombre": "ACEITE OLIVA BANQUETE 1LT"
    },
    {
      "ean": "8410297603655",
      "nombre": "CREMA BATIR ASTURIANA"
    },
    {
      "ean": "7802615004946",
      "nombre": "MIX SOPAIPILLAS 25KG 494"
    }
  ],
  "productos": [
    {
      "sku": "2521001000007",
      "nombre": "HALLULA CORRIENTE KILO",
      "rendimientoKg": 33.25
    },
    {
      "sku": "2521131000007",
      "nombre": "HALLULLAS FLACAS",
      "rendimientoKg": 33.0
    },
    {
      "sku": "2521003000005",
      "nombre": "MARRAQUETA",
      "rendimientoKg": 32.8
    },
    {
      "sku": "2521100000007",
      "nombre": "HALLULLA INTEGRAL  CUGAT KG",
      "rendimientoKg": 27.9
    },
    {
      "sku": "2521209000007",
      "nombre": "PAN COLIZA SANDWICH",
      "rendimientoKg": 34.2
    },
    {
      "sku": "2521004000004",
      "nombre": "PAN AMASADO KILO",
      "rendimientoKg": 36.9
    },
    {
      "sku": "2521002000006",
      "nombre": "HALLULLA ESPECIAL KILO",
      "rendimientoKg": 34.2
    },
    {
      "sku": "2521010000005",
      "nombre": "HALLULLA INTEGRAL LINAZA KG",
      "rendimientoKg": 27.0
    },
    {
      "sku": "2521011000004",
      "nombre": "PAN COLIZA KILO CUGAT",
      "rendimientoKg": 34.2
    },
    {
      "sku": "2521201000005",
      "nombre": "COLIZA PERUANA KILO",
      "rendimientoKg": 35.1
    },
    {
      "sku": "2521031000008",
      "nombre": "TORTILLA TALQUINA",
      "rendimientoKg": 35.1
    },
    {
      "sku": "2521028000004",
      "nombre": "PAN DOBLADAS KG",
      "rendimientoKg": 30.4
    },
    {
      "sku": "2521008000000",
      "nombre": "PAN HOT DOG KILO",
      "rendimientoKg": 34.4
    },
    {
      "sku": "2521009000009",
      "nombre": "PAN DE HAMBURGUESA KILO",
      "rendimientoKg": 34.4
    },
    {
      "sku": "2522052000008",
      "nombre": "PAN DE MOLDE MULTIGRANO ARTESANAL 850GR",
      "rendimientoKg": 46.0
    },
    {
      "sku": "2520107000003",
      "nombre": "MOLDE BLANCO",
      "rendimientoKg": 40.0
    },
    {
      "sku": "2521259000002",
      "nombre": "MASA PIZZA 2 UN",
      "rendimientoKg": 93.0
    },
    {
      "sku": "2520110000007",
      "nombre": "MOLDE LINAZA INTEGRAL",
      "rendimientoKg": 45.71
    },
    {
      "sku": "2521606000006",
      "nombre": "PAN PITA INTEGRAL",
      "rendimientoKg": 27.0
    },
    {
      "sku": "2521203000003",
      "nombre": "PAN CHIA KG   CUGAT",
      "rendimientoKg": 14.85
    },
    {
      "sku": "2520118000009",
      "nombre": "PAN PITA BLANCA",
      "rendimientoKg": 36.0
    },
    {
      "sku": "2521007000001",
      "nombre": "PAN ESPECIAL CANAPE",
      "rendimientoKg": 33.15
    },
    {
      "sku": "2529971000003",
      "nombre": "PAN CHILOTE",
      "rendimientoKg": 34.0
    },
    {
      "sku": "2521025000007",
      "nombre": "PAN DULCE CARITA",
      "rendimientoKg": 30.94
    },
    {
      "sku": "2521081000003",
      "nombre": "PAN ITALIANO",
      "rendimientoKg": 38.25
    },
    {
      "sku": "2521210000003",
      "nombre": "PAN DE MANTEQUILLA KILO",
      "rendimientoKg": 37.2
    },
    {
      "sku": "2526600000007",
      "nombre": "PAN OLIVA   KG",
      "rendimientoKg": 36.8
    },
    {
      "sku": "2522425000000",
      "nombre": "PAN CRISTAL",
      "rendimientoKg": 34.01
    },
    {
      "sku": "2521006000002",
      "nombre": "PAN COCA ACEITUNA QUESO KG CUGAT",
      "rendimientoKg": 51.89
    },
    {
      "sku": "2521214000009",
      "nombre": "PAN COCA DULCE SALADO KG CUGAT",
      "rendimientoKg": 40.37
    },
    {
      "sku": "2526788000004",
      "nombre": "MASA SOPAIPILLA X10 UND CUGAT 60GR",
      "rendimientoKg": 48.7
    },
    {
      "sku": "2523105000006",
      "nombre": "MASA EMPANADASX10 UND CUGAT 150G",
      "rendimientoKg": 21.33
    }
  ],
  "recetas": {
    "2521001000007": {
      "ingredientes": [
        {
          "codigo": "5609040075884",
          "nombre": "HARINA HALLULERA 25K",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "",
          "nombre": "HARINA PARA EMPOLVOREAR    (PERDIDA)",
          "unidad": "",
          "cantidadProduccion": -0.5,
          "cantidadCosto": null
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7802810005410",
          "nombre": "MANTECA CRUCINA PLUS 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 2.0
        },
        {
          "codigo": "7808704200220",
          "nombre": "MEJORADOR MAGIMIX HALLULLAS",
          "unidad": "GR",
          "cantidadProduccion": 0.2,
          "cantidadCosto": 0.2
        },
        {
          "codigo": "8410297603655",
          "nombre": "CREMA BATIR ASTURIANA",
          "unidad": "lt",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803600011246",
          "nombre": "SAL VENUS MESA 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "",
          "nombre": "AGUA    (    LTS  AGUA  20  =  18,48 KG  )",
          "unidad": "LT",
          "cantidadProduccion": 9.24,
          "cantidadCosto": 9.24
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "Pesar previamente los ingredientes y aplicar Desmoldante Purawax  a las latas limpias."
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar harina en la revolvedora y revolver durante 2 minutos, luego incorporar sal y mejorador mientras se continúa revolviendo."
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar agua revolviendo a velocidad lenta durante 2 minutos y/o hasta formar la masa."
        },
        {
          "etapa": "MEZCLADO",
          "texto": "Una vez formada la masa se agrega la materia grasa y se revuelve 10 minutos (aprox.) en velocidad alta."
        },
        {
          "etapa": "",
          "texto": "Agregar levadura  frescaa los 6 minutos de iniciado este proceso."
        },
        {
          "etapa": "SOBADO",
          "texto": "Sobar la masa y sacar las tiras de 2cm de espesor. Mínimo 4 pasadas por la sobadora."
        },
        {
          "etapa": "FORMADO",
          "texto": "cortar cuadrados de masa de 20x20 (aprox) y decorar con moldes o amano utilizando un cuchillo"
        },
        {
          "etapa": "FERMENTACIÓN",
          "texto": "30 minutos, entre 35°C a 40°C y 85% a 90% de H.R."
        },
        {
          "etapa": "HORNEO",
          "texto": "10 minutos, 260°C de Temperatura Inicial y 270°C de Horneo"
        },
        {
          "etapa": "VAPOR",
          "texto": "3  a 5 segundos"
        },
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2521131000007": {
      "ingredientes": [
        {
          "codigo": "5609040075884",
          "nombre": "HARINA HALLULERA 25K  (linderos )",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7802810005410",
          "nombre": "MANTECA CRUCINA PLUS 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 2.0
        },
        {
          "codigo": "7808704200220",
          "nombre": "MEJORADOR MAGIMIX HALLULLAS",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.2
        },
        {
          "codigo": "7803600011246",
          "nombre": "SAL VENUS MESA 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": 9.0,
          "cantidadCosto": 9.0
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "Pesar previamente los ingredientes y aplicar Desmoldante Purawax  a las latas limpias."
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar harina en la revolvedora y revolver durante 3 minutos, luego incorporar sal mientras se continúa revolviendo."
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar agua revolviendo a velocidad lenta durante 2 minutos y/o hasta formar la masa."
        },
        {
          "etapa": "MEZCLADO",
          "texto": "Una vez formada la masa se agrega la materia grasa y se revuelve 10 minutos (aprox.) en velocidad alta."
        },
        {
          "etapa": "",
          "texto": "Agregar levadura  frescaa los 6 minutos de iniciado este proceso."
        },
        {
          "etapa": "SOBADO",
          "texto": "Sobar la masa y sacar las tiras de 1cm de espesor. Mínimo 4 pasadas por la sobadora."
        },
        {
          "etapa": "CORTE",
          "texto": "Picar la tira de masa con picador manual o meson de corte, cortar con molde de 10 cm de diámetro o meson de corte"
        },
        {
          "etapa": "FERMENTACIÓN",
          "texto": "30 minutos, entre 35°C a 40°C y 85% a 90% de H.R."
        },
        {
          "etapa": "HORNEO",
          "texto": "10 minutos, 290°C de Temperatura Inicial y 270°C de Horneo"
        },
        {
          "etapa": "VAPOR",
          "texto": "3  a 5 segundos"
        },
        {
          "etapa": "ALTURA",
          "texto": "1cm aprxa."
        },
        {
          "etapa": "DIAMETRO",
          "texto": "12 a 13 aprox."
        },
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2521003000005": {
      "ingredientes": [
        {
          "codigo": "7802613000452",
          "nombre": "HARINA SUPER PAN BOLSA PAPEL 25KG",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7809622300290",
          "nombre": "MEJORADOR TOUPAN PLUS RS CON SAL 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7790272006550",
          "nombre": "ACEITE VEGETAL PARRAL 900ML",
          "unidad": "ML",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.3
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": 12.0,
          "cantidadCosto": 12.0
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "Se aplica desmoldante Bakels a las latas"
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar insumo harina , polvo y sal en la batea y revolver por 2 minutos"
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar agua revolviendo a velocidad lenta durante 3 minutos asta incorporar el agua en la harina"
        },
        {
          "etapa": "MEZCLADO",
          "texto": "Batir  por 8 minutos a velocidad alta hasta lograr el gluten requerido"
        },
        {
          "etapa": "CORTE",
          "texto": "Dividir masa en bollos de 3.3 kilos y cortar en la ovilla dora"
        },
        {
          "etapa": "ENLATADO",
          "texto": "Colocar los bollos en latas de 50x80 de 4x3 aplicar aceite en los bollos y llevar a cámara de fermentación"
        },
        {
          "etapa": "PRIMERA FERMENTACION",
          "texto": "1° fermentación cámara debe estar 34°c y 80%de Hur. fermentar por 15 y 20 minutos"
        },
        {
          "etapa": "DOBLADO",
          "texto": "Pasado el tiempo de fermentación realizar el dobles y colocar en latas de 50x80 de 4x3"
        },
        {
          "etapa": "SEGUNDA FERMENTACION",
          "texto": "Dejar fermentar por 20 a 30 minutos en cámara de fermentación 34°c a 40°c con 75% a 80% humedad"
        },
        {
          "etapa": "HORNEO",
          "texto": "Hornear por 15 a 18 minutos a 260°c grados inicial  asta lograr el color deseado"
        },
        {
          "etapa": "VAPOR",
          "texto": "Aplicar 5 segundos de vapor al inicio o según condiciones del horno de la cocción"
        },
        {
          "etapa": "ALTURA",
          "texto": "largo 12cm , alto 45cm y ancho 50"
        },
        {
          "etapa": "PESO",
          "texto": "220  g cruda c/u, horneado y enfriado 190 a 200g aproX."
        },
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2521100000007": {
      "ingredientes": [
        {
          "codigo": "5609040076928",
          "nombre": "T PURAVITA PAN INTEGRAL RS - 20KL",
          "unidad": "KG",
          "cantidadProduccion": 20.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "lt",
          "cantidadProduccion": 10.0,
          "cantidadCosto": 10.0
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "Pesar previamente los ingredientes y aplicar Desmoldante Purawax  a las latas limpias."
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar harina en la revolvedora y revolver durante 3 minutos, luego incorporar sal mientras se continúa revolviendo."
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar agua revolviendo a velocidad lenta durante 2 minutos y/o hasta formar la masa."
        },
        {
          "etapa": "MEZCLADO",
          "texto": "Una vez formada la masa se agrega la materia grasa y se revuelve 10 minutos (aprox.) en velocidad alta."
        },
        {
          "etapa": "",
          "texto": "Agregar levadura  frescaa los 6 minutos de iniciado este proceso."
        },
        {
          "etapa": "SOBADO",
          "texto": "Sobar la masa y sacar las tiras de 1cm de espesor. Mínimo 4 pasadas por la sobadora."
        },
        {
          "etapa": "CORTE",
          "texto": "Picar la tira de masa con picador manual o meson de corte, cortar con molde de 10 cm de diámetro o meson de corte"
        },
        {
          "etapa": "FERMENTACIÓN",
          "texto": "30 minutos, entre 35°C a 40°C y 85% a 90% de H.R."
        },
        {
          "etapa": "HORNEO",
          "texto": "10 minutos, 290°C de Temperatura Inicial y 270°C de Horneo"
        },
        {
          "etapa": "VAPOR",
          "texto": "3  a 5 segundos"
        },
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2521209000007": {
      "ingredientes": [
        {
          "codigo": "5609040075884",
          "nombre": "HARINA HALLULERA 25K LINDERO",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7802810005410",
          "nombre": "MANTECA CRUCINA PLUS 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 3.0
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "GRAMOS",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "8410297603655",
          "nombre": "CREMA BATIR ASTURIANA",
          "unidad": "LT",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7808704200220",
          "nombre": "MEJORADOR HALLULA 15X400 GRS MAGIMIX",
          "unidad": "GRAMOS",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.2
        },
        {
          "codigo": "7803600011246",
          "nombre": "SAL VENUS MESA 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "lt",
          "cantidadProduccion": 9.0,
          "cantidadCosto": 9.0
        },
        {
          "codigo": "PRELIMINARES",
          "nombre": "aplicar Desmoldante  a las latas limpias.",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "OXIGENACION",
          "nombre": "Vaciar Harina y sal en la revolvedora y revolver durante 2 minutos.",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "PREMEZCLA",
          "nombre": "Agregar agua,  levadura revolviendo a velocidad lenta durante 2 minutos y/o hasta formar la masa.",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "MEZCLADO",
          "nombre": "Una vez formada la masa se agrega la materia grasa  y se vate por 5 minutos (aprox.) en velocidad alta .",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "FORMADO",
          "nombre": "sobar la masa y sacando bastones y cortar en mesón de corte o con mlde según sea el producto",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "",
          "nombre": "llevar a las latas colocando de 5 x 6",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "FERMENTACIÓN",
          "nombre": "15 a 20 minutos, entre 35°C a 40°C y 85% a 90% de H.R.",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "HORNEO",
          "nombre": "12 minutos, 280°C de Temperatura Inicial de Horneo",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "VAPOR",
          "nombre": "6 segundos dependiendo del estado del horno",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "DIAMETRO",
          "nombre": "9 a 10 cm",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "PESO",
          "nombre": "80 a 90 grs. c/u",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "PORCIONES",
          "nombre": "-",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        }
      ],
      "proceso": []
    },
    "2521004000004": {
      "ingredientes": [
        {
          "codigo": "5609040075884",
          "nombre": "HARINA HALLULERA 25K",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7803600011246",
          "nombre": "SAL VENUS MESA 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7802810005410",
          "nombre": "MANTECA CRUCINA PLUS 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7808704200220",
          "nombre": "MEJORADOR HALLULA 15X400 GRS MAGIMIX",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.2
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "lt",
          "cantidadProduccion": 12.0,
          "cantidadCosto": 12.0
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "Aplicar Desmoldante a las latas limpias."
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar harina en la revolvedora y revolver durante 2 minutos, luego incorporar sal mientras se continúa revolviendo."
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar agua revolviendo a velocidad lenta durante 2 minutos y/o hasta formar la masa."
        },
        {
          "etapa": "MEZCLADO",
          "texto": "Una vez formada la masa se agrega la materia grasa y se revuelve 10 minutos (aprox.) en velocidad alta."
        },
        {
          "etapa": "",
          "texto": "Agregar levadura  frescaa los 6 minutos de iniciado este proceso."
        },
        {
          "etapa": "FORMADO",
          "texto": "cortar trosos de masas de 3 kilos ovillar y pasar por la sobadora"
        },
        {
          "etapa": "CORTE",
          "texto": "utilisar la ovilla dora con corte de 100 gramos ."
        },
        {
          "etapa": "ENLATADO",
          "texto": "colocar los cortes en lata 4x6 precionar los ovillos con las manos y pinchar con tenedor"
        },
        {
          "etapa": "FERMENTACIÓN",
          "texto": "30 minutos, entre 35°C a 40°C y 85% a 90% de H.R."
        },
        {
          "etapa": "HORNEO",
          "texto": "10 minutos, 290°C de Temperatura Inicial y 270°C de Horneo"
        },
        {
          "etapa": "VAPOR",
          "texto": "3  a 5 segundos"
        },
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2521002000006": {
      "ingredientes": [
        {
          "codigo": "5609040075884",
          "nombre": "HARINA HALLULERA 25K LINDERO",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "8410297603655",
          "nombre": "CREMA BATIR ASTURIANA",
          "unidad": "LT",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7802810005410",
          "nombre": "MANTECA CRUCINA PLUS 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 3.0
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVADURA PAN 500 GRS. MATERIA PRIMA",
          "unidad": "GRAMOS",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7808704200220",
          "nombre": "MEJORADOR HALLULA 15X400 GRS MAGIMIX",
          "unidad": "GRAMOS",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.2
        },
        {
          "codigo": "7803600011246",
          "nombre": "SAL VENUS MESA 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "",
          "cantidadProduccion": 9.0,
          "cantidadCosto": 0.0
        },
        {
          "codigo": "PRELIMINARES",
          "nombre": "aplicar Desmoldante  a las latas limpias.",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "OXIGENACION",
          "nombre": "Vaciar Harina y sal en la revolvedora y revolver durante 2 minutos.",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "PREMEZCLA",
          "nombre": "Agregar agua,  levadura revolviendo a velocidad lenta durante 2 minutos y/o hasta formar la masa.",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "MEZCLADO",
          "nombre": "Una vez formada la masa se agrega la materia grasa  y se vate por 5 minutos (aprox.) en velocidad alta .",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "FORMADO",
          "nombre": "sobar la masa y sacando bastones y cortar en mesón de corte o con mlde según sea el producto",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "",
          "nombre": "llevar a las latas colocando de 5 x 6",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "FERMENTACIÓN",
          "nombre": "15 a 20 minutos, entre 35°C a 40°C y 85% a 90% de H.R.",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "HORNEO",
          "nombre": "12 minutos, 280°C de Temperatura Inicial de Horneo",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "VAPOR",
          "nombre": "6 segundos dependiendo del estado del horno",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "DIAMETRO",
          "nombre": "9 a 10 cm",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "PESO",
          "nombre": "80 a 90 grs. c/u",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "PORCIONES",
          "nombre": "-",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        }
      ],
      "proceso": []
    },
    "2521010000005": {
      "ingredientes": [
        {
          "codigo": "5609040076928",
          "nombre": "T PURAVITA PAN INTEGRAL RS - 20KL",
          "unidad": "KG",
          "cantidadProduccion": 20.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "lt",
          "cantidadProduccion": 9.0,
          "cantidadCosto": 9.0
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "Pesar previamente los ingredientes y aplicar Desmoldante Purawax  a las latas limpias."
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar harina en la revolvedora y revolver durante 3 minutos, luego incorporar sal mientras se continúa revolviendo."
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar agua revolviendo a velocidad lenta durante 2 minutos y/o hasta formar la masa."
        },
        {
          "etapa": "MEZCLADO",
          "texto": "Una vez formada la masa se agrega la materia grasa y se revuelve 10 minutos (aprox.) en velocidad alta."
        },
        {
          "etapa": "",
          "texto": "Agregar levadura  frescaa los 6 minutos de iniciado este proceso."
        },
        {
          "etapa": "SOBADO",
          "texto": "Sobar la masa y sacar las tiras de 1cm de espesor. Mínimo 4 pasadas por la sobadora."
        },
        {
          "etapa": "CORTE",
          "texto": "Picar la tira de masa con picador manual o meson de corte, cortar con molde de 10 cm de diámetro o meson de corte"
        },
        {
          "etapa": "FERMENTACIÓN",
          "texto": "30 minutos, entre 35°C a 40°C y 85% a 90% de H.R."
        },
        {
          "etapa": "HORNEO",
          "texto": "10 minutos, 290°C de Temperatura Inicial y 270°C de Horneo"
        },
        {
          "etapa": "VAPOR",
          "texto": "3  a 5 segundos"
        },
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2521011000004": {
      "ingredientes": [
        {
          "codigo": "5609040075884",
          "nombre": "HARINA HALLULERA 25K",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "8410297603655",
          "nombre": "CREMA BATIR ASTURIANA",
          "unidad": "LT",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7802810005410",
          "nombre": "MANTECA CRUCINA PLUS 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 3.0
        },
        {
          "codigo": "7808704200220",
          "nombre": "MEJORADOR MAGIMIX HALLULLAS",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.2
        },
        {
          "codigo": "7803600011246",
          "nombre": "SAL VENUS MESA 1KG",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": 9.0,
          "cantidadCosto": 20.0
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "Pesar previamente los ingredientes y aplicar Desmoldante Purawax  a las latas limpias."
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar harina en la revolvedora y revolver durante 2 minutos, luego incorporar sal y mejorador mientras se continúa revolviendo."
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar agua revolviendo a velocidad lenta durante 2 minutos y/o hasta formar la masa."
        },
        {
          "etapa": "MEZCLADO",
          "texto": "Una vez formada la masa se agrega la materia grasa y se revuelve 10 minutos (aprox.) en velocidad alta."
        },
        {
          "etapa": "",
          "texto": "Agregar levadura  frescaa los 6 minutos de iniciado este proceso."
        },
        {
          "etapa": "SOBADO",
          "texto": "Sobar la masa y sacar las tiras de 2cm de espesor. Mínimo 4 pasadas por la sobadora."
        },
        {
          "etapa": "FORMADO",
          "texto": "cortar cuadrados de masa de 20x20 (aprox) y decorar con moldes o amano utilizando un cuchillo"
        },
        {
          "etapa": "FERMENTACIÓN",
          "texto": "30 minutos, entre 35°C a 40°C y 85% a 90% de H.R."
        },
        {
          "etapa": "HORNEO",
          "texto": "10 minutos, 260°C de Temperatura Inicial y 270°C de Horneo"
        },
        {
          "etapa": "VAPOR",
          "texto": "3  a 5 segundos"
        },
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2521201000005": {
      "ingredientes": [
        {
          "codigo": "5609040075884",
          "nombre": "HARINA HALLULERA 25K",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "8410297603655",
          "nombre": "CREMA BATIR ASTURIANA",
          "unidad": "LT",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7802810005410",
          "nombre": "MANTECA CRUCINA PLUS 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 3.0
        },
        {
          "codigo": "7790272006550",
          "nombre": "ACEITE VEGETAL PARRAL 900ML",
          "unidad": "LT",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.1
        },
        {
          "codigo": "7808704200220",
          "nombre": "MEJORADOR HALLULA 15X400 GRS MAGIMIX",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.2
        },
        {
          "codigo": "7803600011246",
          "nombre": "SAL VENUS MESA 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": 9.0,
          "cantidadCosto": 9.0
        },
        {
          "codigo": "PRELIMINARES",
          "nombre": "aplicar Desmoldante  a las latas limpias.",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "OXIGENACION",
          "nombre": "Vaciar Harina y sal en la revolvedora y revolver durante 2 minutos.",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "PREMEZCLA",
          "nombre": "Agregar agua,  levadura revolviendo a velocidad lenta durante 2 minutos y/o hasta formar la masa.",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "MEZCLADO",
          "nombre": "Una vez formada la masa se agrega la materia grasa  y se vate por 5 minutos (aprox.) en velocidad alta .",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "FORMADO",
          "nombre": "sobar la masa y sacando bastones de masa de 1.5 mt",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "",
          "nombre": "colocar en mesón agregar aceite en la masa doblar en cuatro y pasar por la sobadora y cortar con cuchillo trosos de 10x10",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "EN PIEDRADO",
          "nombre": "colocar en latas de 6x5",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "FERMENTACIÓN",
          "nombre": "20 a 30 minutos, entre 35°C a 40°C y 85% a 90% de H.R.",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "HORNEO",
          "nombre": "12 minutos o hasta lograr el color deseado, 280°C de Temperatura Inicial de Horneo",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "VAPOR",
          "nombre": "6 segundos dependiendo del estado del horno",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "DIAMETRO",
          "nombre": "11a 12 cm",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "PESO",
          "nombre": "90 a 100 grs. c/u",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "PORCIONES",
          "nombre": "-",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        }
      ],
      "proceso": []
    },
    "2521031000008": {
      "ingredientes": [
        {
          "codigo": "5609040075884",
          "nombre": "HARINA HALLULERA 25K",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "8410297603655",
          "nombre": "CREMA BATIR ASTURIANA",
          "unidad": "lt",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7802810005410",
          "nombre": "MANTECA CRUCINA PLUS 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 4.0
        },
        {
          "codigo": "7803600011246",
          "nombre": "SAL VENUS MESA 1KG",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7808704200220",
          "nombre": "MEJORADOR HALLULA 15X400 GRS MAGIMIX",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.2
        },
        {
          "codigo": "2544503000009",
          "nombre": "BICARBONATO KG  ( Dimeer)",
          "unidad": "",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.6
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": 10.0,
          "cantidadCosto": 10.0
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "Pesar previamente los ingredientes y aplicar Desmoldante a las latas limpias."
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar harina y el bicarbonato revolver durante 2 minutos, luego incorporar sal mientras se continúa revolviendo."
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar agua revolviendo a velocidad lenta durante 2 minutos y/o hasta formar la masa."
        },
        {
          "etapa": "MEZCLADO",
          "texto": "Una vez formada la masa se agrega la materia grasa y se revuelve 10 minutos (aprox.) en velocidad alta."
        },
        {
          "etapa": "FORMADO",
          "texto": "cortar trosos de masa de 500gr y aser bollos los que se pasaran por la sobadora dando el grosor requerido"
        },
        {
          "etapa": "",
          "texto": "picar con tenedor"
        },
        {
          "etapa": "FERMENTACIÓN",
          "texto": "dejar reposar la masa unos 15 minutos"
        },
        {
          "etapa": "HORNEO",
          "texto": "12 minutos, 250°C de Temperatura Inicial hasta lograr el color requerido"
        },
        {
          "etapa": "VAPOR",
          "texto": "7 segundos"
        },
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2521028000004": {
      "ingredientes": [
        {
          "codigo": "7802615004625",
          "nombre": "MIX EMPANADA-DOBLADAS 25 K",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "Litros",
          "cantidadProduccion": 7.0,
          "cantidadCosto": 7.0
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "Aplicar desmoldante a las latas si es necesario."
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar harina en la revolvedora y revolver durante 2 minutos ."
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar agua revolviendo a velocidad lenta durante 3 minutos y/o hasta formar la masa."
        },
        {
          "etapa": "MEZCLADO",
          "texto": "Una vez formada la masa  se revuelve 10 minutos (aprox.) en velocidad alta o hasta lograr la masa requerida."
        },
        {
          "etapa": "SOBADO",
          "texto": "Sobar la masa y sacar las tiras de 1cm de espesor. Mínimo 4 pasadas por la sobadora."
        },
        {
          "etapa": "CORTE",
          "texto": "Picar la tira de masa y cortar con molde o con maquina cortadora de 18 cm de diámetro ."
        },
        {
          "etapa": "FERMENTACIÓN",
          "texto": "NO APLICA , SOLO REPOSAR MASA UNOS 15 MINUTOS EN CÁMARA PARA RELAJAR LA MASA,"
        },
        {
          "etapa": "VAPOR",
          "texto": "4 segundos al inicio"
        },
        {
          "etapa": "HORNEO",
          "texto": "250° temperatura inicial y hornear por 12 minutos o hasta logar color deseado"
        },
        {
          "etapa": "ALTURA",
          "texto": "2 cm"
        },
        {
          "etapa": "PESO",
          "texto": "90 a 110 grs. c/u"
        }
      ]
    },
    "2521008000000": {
      "ingredientes": [
        {
          "codigo": "7802615004618",
          "nombre": "MIX HAMB- HOT DOG- MOLDE 25 KG 461",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "KLT",
          "cantidadProduccion": 11.0,
          "cantidadCosto": 0.0
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "aplicar Desmoldante a las latas limpias."
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar harina en la revolvedora y revolver durante 2 minutos, luego continúa revolviendo."
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar agua revolviendo a velocidad lenta durante 2 minutos y/o hasta formar la masa."
        },
        {
          "etapa": "MEZCLADO",
          "texto": "Una vez formada la masa se agrega la levadura y se revuelve 10 minutos (aprox.) en velocidad alta."
        },
        {
          "etapa": "CORTE",
          "texto": "cortar trosos de masa de 3 kilos ovillar y pasar por la sovadora cortar ovillos de 100gr."
        },
        {
          "etapa": "ENLATADO",
          "texto": "colocar de 8x6 en latas y llevar a camara fermentadora"
        },
        {
          "etapa": "FERMENTACIÓN",
          "texto": "30 minutos, entre 35°C a 40°C y 85% a 90% de H.R."
        },
        {
          "etapa": "HORNEO",
          "texto": "10 minutos, 260°C de Temperatura Inicial y 270°C de Horneo"
        },
        {
          "etapa": "VAPOR",
          "texto": "3  a 5 segundos"
        },
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2521009000009": {
      "ingredientes": [
        {
          "codigo": "7802615004618",
          "nombre": "MIX HAMB- HOT DOG- MOLDE 25 KG 461",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": 11.0,
          "cantidadCosto": 0.0
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "Aplicar Desmoldante a las latas limpias."
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar harina en la revolvedora y revolver durante 2 minutos, luego continúa revolviendo."
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar agua revolviendo a velocidad lenta durante 2 minutos y/o hasta formar la masa."
        },
        {
          "etapa": "MEZCLADO",
          "texto": "Una vez formada la masa se agrega la levadura y se revuelve 10 minutos (aprox.) en velocidad alta."
        },
        {
          "etapa": "CORTE",
          "texto": "cortar trosos de masa de 3,300 gramos bajar con la mano y pasarla por la sovadora y cortar con la ovilla dora cortes de 100gr"
        },
        {
          "etapa": "ENLATADO",
          "texto": "colocar los cortes en latas lisas de 4x5 y bajar los cortes asiendo precion con las manos"
        },
        {
          "etapa": "FERMENTACIÓN",
          "texto": "30 minutos, entre 35°C a 40°C y 85% a 90% de H.R."
        },
        {
          "etapa": "HORNEO",
          "texto": "10 minutos, 260°C de Temperatura Inicial y 270°C de Horneo"
        },
        {
          "etapa": "VAPOR",
          "texto": "3  a 5 segundos"
        },
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2522052000008": {
      "ingredientes": [
        {
          "codigo": "5609040076959",
          "nombre": "E PURAVITA MULTIGRANO  DARK RS BOLSA 10 KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": null
        },
        {
          "codigo": "5609040075884",
          "nombre": "HARINA HALLULERA 25K",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": null
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "GR",
          "cantidadProduccion": 0.5,
          "cantidadCosto": null
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": 10.0,
          "cantidadCosto": null
        }
      ],
      "proceso": [
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2520107000003": {
      "ingredientes": [
        {
          "codigo": "5609040095820",
          "nombre": "TEGRAL SOFTER ACTIPLUS RS 20KG",
          "unidad": "KG",
          "cantidadProduccion": 20.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": 11.0,
          "cantidadCosto": 11.0
        }
      ],
      "proceso": [
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2521259000002": {
      "ingredientes": [
        {
          "codigo": "7802615004908",
          "nombre": "MIX PIZZA ESPECIAL 25 KG 490",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7802575365026",
          "nombre": "SALSA TOMSAN REMO 200 GRSITALIANA",
          "unidad": "GR",
          "cantidadProduccion": 0.2,
          "cantidadCosto": 4.0
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": 11.0,
          "cantidadCosto": 11.0
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "Aplicar Desmoldante a las latas limpias."
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar harina en la revolvedora y revolver durante 2 minutos."
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar agua revolviendo a velocidad lenta durante 2 minutos y/o hasta formar la masa."
        },
        {
          "etapa": "MEZCLADO",
          "texto": "Una vez formada la masa se agrega la levadura y se revuelve 10 minutos (aprox.) en velocidad alta."
        },
        {
          "etapa": "",
          "texto": "asta lograr la masa requerida para la pizza"
        },
        {
          "etapa": "SOBADO",
          "texto": "Sobar la masa y sacar las tiras de 0.5cm de espesor. Mínimo 4 pasadas por la sobadora."
        },
        {
          "etapa": "CORTE",
          "texto": "Picar la tira de masa con picador manual o mesón de corte, cortar con molde de 28 cm de diámetro o mesón de corte"
        },
        {
          "etapa": "FERMENTACIÓN",
          "texto": "30 minutos, entre 35°C a 40°C y 85% a 90% de H.R."
        },
        {
          "etapa": "HORNEO",
          "texto": "10 minutos, 260°C de Temperatura Inicial y 270°C de Horneo"
        },
        {
          "etapa": "VAPOR",
          "texto": "3  a 5 segundos"
        },
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2520110000007": {
      "ingredientes": [
        {
          "codigo": "5609040080185",
          "nombre": "T PURAVITA PAN INTEGRAL LINAZA  20 K RS",
          "unidad": "KG",
          "cantidadProduccion": 20.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": 11.0,
          "cantidadCosto": 0.0
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "Aplicar Desmoldante a Los tarros de pan molde ."
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar harina en la revolvedora y revolver durante 3 minutos."
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar agua revolviendo a velocidad lenta durante 2 minutos y/o hasta formar la masa."
        },
        {
          "etapa": "MEZCLADO",
          "texto": "Una vez formada la masa se agrega la levadura y se revuelve 10 minutos (aprox.) en velocidad alta."
        },
        {
          "etapa": "CORTE",
          "texto": "cortar trosos de 850 gr de masa y proceder a formar los moldes e introducirlos en los tarros sin tapa"
        },
        {
          "etapa": "FERMENTACIÓN",
          "texto": "30 minutos, entre 35°C a 40°C y 85% a 90% de H.R."
        },
        {
          "etapa": "HORNEO",
          "texto": "30 a 40 minutos, 180°C de Temperatura Inicial y termino colocar las tapas y hornear."
        },
        {
          "etapa": "ENFRIADO",
          "texto": "sacar de los tarros y dejar enfriar por unas 8 horas mínimo"
        },
        {
          "etapa": "CORTE",
          "texto": "utilizar cortadora de moldes y bolsa de celofan"
        }
      ]
    },
    "2521606000006": {
      "ingredientes": [
        {
          "codigo": "5609040080185",
          "nombre": "T PURAVITA INTEGRAL LINAZA 20 KILOS",
          "unidad": "KG",
          "cantidadProduccion": 20.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": 9.0,
          "cantidadCosto": 9.0
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "Pesar previamente los ingredientes y aplicar Desmoldante a las latas limpias."
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar harina en la revolvedora y revolver durante 2 minutos."
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar agua revolviendo a velocidad lenta durante 2 minutos y/o hasta formar la masa."
        },
        {
          "etapa": "",
          "texto": "Agregar levadura  frescaa los 6 minutos de iniciado este proceso."
        },
        {
          "etapa": "SOBADO",
          "texto": "Sobar la masa y sacar las tiras de 1cm de espesor. Mínimo 4 pasadas por la sobadora."
        },
        {
          "etapa": "CORTE",
          "texto": "Picar la tira de masa con picador manual , cortar con molde de 12 cm de diámetro o meson de corte"
        },
        {
          "etapa": "FERMENTACIÓN",
          "texto": "30 minutos, entre 35°C a 40°C y 85% a 90% de H.R."
        },
        {
          "etapa": "HORNEO",
          "texto": "10 minutos, 290°C de Temperatura Inicial y 270°C de Horneo"
        },
        {
          "etapa": "VAPOR",
          "texto": "3  a 5 segundos"
        },
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2521203000003": {
      "ingredientes": [
        {
          "codigo": "5609040076942",
          "nombre": "T PURAVITA PAN CHIA LINAZA RS - BOLSA 10K",
          "unidad": "KG",
          "cantidadProduccion": 10.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.3
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": 5.5,
          "cantidadCosto": null
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "Pesar previamente los ingredientes y aplicar Desmoldante  a las latas limpias."
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar harina en la revolvedora y revolver durante 2 minutos."
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar agua revolviendo a velocidad lenta durante 2 minutos y/o hasta formar la masa."
        },
        {
          "etapa": "MEZCLADO",
          "texto": "Una vez formada la masa se agrega la levadura y se revuelve 10 minutos (aprox.) en velocidad alta."
        },
        {
          "etapa": "SOBADO",
          "texto": "Sobar la masa y sacar las tiras de 1cm de espesor. Mínimo 4 pasadas por la sobadora."
        },
        {
          "etapa": "CORTE",
          "texto": "Picar la tira de masa con picador manual o meson de corte, cortar con molde de 10 cm de diámetro o meson de corte"
        },
        {
          "etapa": "FERMENTACIÓN",
          "texto": "30 minutos, entre 35°C a 40°C y 85% a 90% de H.R."
        },
        {
          "etapa": "HORNEO",
          "texto": "10 minutos, 260°C de Temperatura Inicial y 270°C de Horneo"
        },
        {
          "etapa": "VAPOR",
          "texto": "3  a 5 segundos"
        },
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2520118000009": {
      "ingredientes": [
        {
          "codigo": "5609040075884",
          "nombre": "HARINA HALLULERA 25K",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7808704200244",
          "nombre": "MEJORADOR FRANCES 15X400 GRS MAGIMIX",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.2
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7803600011246",
          "nombre": "SAL VENUS MESA 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": 12.0,
          "cantidadCosto": null
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "Pesar previamente los ingredientes y aplicar Desmoldante a las latas limpias."
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar harina en la revolvedora y revolver durante 2 minutos, luego incorporar sal y mejorador mientras se continúa revolviendo."
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar agua revolviendo a velocidad lenta durante 2 minutos y/o hasta formar la masa."
        },
        {
          "etapa": "",
          "texto": "Agregar levadura  frescaa los 6 minutos de iniciado este proceso."
        },
        {
          "etapa": "SOBADO",
          "texto": "Sobar la masa y sacar las tiras de 1cm de espesor. Mínimo 4 pasadas por la sobadora."
        },
        {
          "etapa": "CORTE",
          "texto": "cortar con molde de 12 cm de diámetro o meson de corte"
        },
        {
          "etapa": "FERMENTACIÓN",
          "texto": "30 minutos, entre 35°C a 40°C y 85% a 90% de H.R."
        },
        {
          "etapa": "HORNEO",
          "texto": "8 minutos, 260°C de Temperatura Inicial y 270°C de Horneo"
        },
        {
          "etapa": "VAPOR",
          "texto": "3  a 5 segundos"
        },
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2521007000001": {
      "ingredientes": [
        {
          "codigo": "5609040075884",
          "nombre": "HARINA HALLULERA 25K LINDERO",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVADURA PAN 500 GRS. MATERIA PRIMA",
          "unidad": "GRAMOS",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7802810005410",
          "nombre": "MANTECA CRUCINA PLUS 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7808704200220",
          "nombre": "MEJORADOR HALLULA 15X400 GRS MAGIMIX",
          "unidad": "GRAMOS",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.2
        },
        {
          "codigo": "7803600011246",
          "nombre": "SAL VENUS MESA 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "",
          "cantidadProduccion": 10.0,
          "cantidadCosto": null
        },
        {
          "codigo": "PRELIMINARES",
          "nombre": "aplicar Desmoldante  a las latas limpias.",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "OXIGENACION",
          "nombre": "Vaciar Harina y sal en la revolvedora y revolver durante 2 minutos.",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "PREMEZCLA",
          "nombre": "Agregar agua,  levadura revolviendo a velocidad lenta durante 2 minutos y/o hasta formar la masa.",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "MEZCLADO",
          "nombre": "Una vez formada la masa se agrega la materia grasa  y se vate por 5 minutos (aprox.) en velocidad alta .",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "FORMADO",
          "nombre": "sobar la masa y sacando bastones y cortar en mesón de corte o con mlde según sea el producto",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "",
          "nombre": "llevar a las latas colocando de 5 x 6",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "FERMENTACIÓN",
          "nombre": "15 a 20 minutos, entre 35°C a 40°C y 85% a 90% de H.R.",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "HORNEO",
          "nombre": "12 minutos, 280°C de Temperatura Inicial de Horneo",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "VAPOR",
          "nombre": "6 segundos dependiendo del estado del horno",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "PORCIONES",
          "nombre": "-",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        }
      ],
      "proceso": []
    },
    "2529971000003": {
      "ingredientes": [
        {
          "codigo": "5609040075884",
          "nombre": "HARINA HALLULERA 25K",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7802810005410",
          "nombre": "MANTECA CRUCINA PLUS 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803600011246",
          "nombre": "SAL VENUS MESA 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7808704200220",
          "nombre": "MEJORADOR HALLULA 15X400 GRS MAGIMIX",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.2
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": 11.0,
          "cantidadCosto": 0.0
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "Pesar previamente los ingredientes y aplicar Desmoldante Purawax  a las latas limpias."
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar harina en la revolvedora y revolver durante 3 minutos, luego incorporar sal mientras se continúa revolviendo."
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar agua revolviendo a velocidad lenta durante 2 minutos y/o hasta formar la masa."
        },
        {
          "etapa": "MEZCLADO",
          "texto": "Una vez formada la masa se agrega la materia grasa y se revuelve 10 minutos (aprox.) en velocidad alta."
        },
        {
          "etapa": "",
          "texto": "Agregar levadura  frescaa los 6 minutos de iniciado este proceso."
        },
        {
          "etapa": "SOBADO",
          "texto": "Sobar la masa y sacar las tiras de 1cm de espesor. Mínimo 4 pasadas por la sobadora."
        },
        {
          "etapa": "CORTE",
          "texto": "Picar la tira de masa con picador manual o meson de corte, cortar con molde de 10 cm de diámetro o meson de corte"
        },
        {
          "etapa": "FERMENTACIÓN",
          "texto": "30 minutos, entre 35°C a 40°C y 85% a 90% de H.R."
        },
        {
          "etapa": "HORNEO",
          "texto": "10 minutos, 290°C de Temperatura Inicial y 270°C de Horneo"
        },
        {
          "etapa": "VAPOR",
          "texto": "3  a 5 segundos"
        },
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2521025000007": {
      "ingredientes": [
        {
          "codigo": "7802615004811",
          "nombre": "MIX DULCINO 25 KG 683",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7809622300009",
          "nombre": "CREMIVIT CREMA PASTELERA 400G",
          "unidad": "GR",
          "cantidadProduccion": 0.4,
          "cantidadCosto": 2.0
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVADURA PAN 500 GRS. LEFERSA",
          "unidad": "GRS",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": 10.0,
          "cantidadCosto": 10.0
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "Pesar previamente los ingredientes y aplicar Desmoldante a las latas limpias."
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar premezcla en la revolvedora y revolver durante 3 minutos agregando el agua."
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar levadura revolviendo a velocidad lenta durante 6 minutos y/o hasta formar la masa."
        },
        {
          "etapa": "FORMADO",
          "texto": "Una vez formada la masa se corta bollos de 500 gramos y dejar reposas por 10 minutos."
        },
        {
          "etapa": "SOBADO",
          "texto": "pasar por la sobadora dándole el gruesor requerido"
        },
        {
          "etapa": "FERMENTACIÓN",
          "texto": "30 minutos o asta conseguir la fermentación requerida a una temperatura entre 35°C a 40°C y 85% a 90% de H.R."
        },
        {
          "etapa": "HORNEO",
          "texto": "12 minutos, 250°C de Temperatura Inicial asta conseguir la cocción."
        },
        {
          "etapa": "VAPOR",
          "texto": "5 segundos"
        }
      ]
    },
    "2521081000003": {
      "ingredientes": [
        {
          "codigo": "7802613000452",
          "nombre": "HARINA SUPER PAN BOLSA PAPEL 25KG",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "5609040758558",
          "nombre": "MEJORADOR NATURAL  MM-750 (MASA MADRE EN POLVO)",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7801420000778",
          "nombre": "ACEITE OLIVA BANQUETE 1LT",
          "unidad": "LT",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7803600011246",
          "nombre": "SAL VENUS MESA 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": null,
          "cantidadCosto": 18.3
        }
      ],
      "proceso": [
        {
          "etapa": "MEZCLADO y AMASADO",
          "texto": "Agregamos a la maquina harina, agua y MM-750, revolvemos por 3 min a velocidad baja, agregamos la sal y llevamos a velocidad alta por 8 min."
        },
        {
          "etapa": "1era FERMENTACIÓN",
          "texto": "Llevamos a un mesón trozos de 3 kg de masa y damos 1 plegado, dejamos reposar por 50 min mas"
        },
        {
          "etapa": "FORMADO",
          "texto": "sacamos la masa, estirandola en un mesón, cortamos en rectangulos de aprox. 10 x 6 cm y llevamos a una lata"
        },
        {
          "etapa": "2da FERMENTACIÓN",
          "texto": "el producto ya en la lata le damos una segunda fermentación por aprox. 20 min"
        },
        {
          "etapa": "VAPOR",
          "texto": "agregamos 10 seg de vapor"
        },
        {
          "etapa": "HORNEO",
          "texto": "llevamos al horno a 210°C por 15 min y luego a la misma termperatura por 5 minutos  con tiraje"
        },
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2521210000003": {
      "ingredientes": [
        {
          "codigo": "5609040075884",
          "nombre": "HARINA HALLULERA 25K",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7802810000750",
          "nombre": "MANTEQUILLLA PANIFICADORA LONCOLECHE 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7802810005410",
          "nombre": "MANTECA CRUCINA PLUS 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "GR",
          "cantidadProduccion": 0.5,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7803600011246",
          "nombre": "SAL VENUS MESA 1KG",
          "unidad": "KG",
          "cantidadProduccion": 0.5,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7808704200220",
          "nombre": "MEJORADOR HALLULA 15X400 GRS MAGIMIX",
          "unidad": "GR",
          "cantidadProduccion": 0.2,
          "cantidadCosto": 0.2
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": 9.0,
          "cantidadCosto": 9.0
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "Pesar previamente los ingredientes y aplicar Desmoldante Purawax  a las latas limpias."
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar harina en la revolvedora y revolver durante 3 minutos, luego incorporar sal mientras se continúa revolviendo."
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar agua revolviendo a velocidad lenta durante 2 minutos y/o hasta formar la masa."
        },
        {
          "etapa": "MEZCLADO",
          "texto": "Una vez formada la masa se agrega la materia grasa y se revuelve 10 minutos (aprox.) en velocidad alta."
        },
        {
          "etapa": "",
          "texto": "Agregar levadura  frescaa los 6 minutos de iniciado este proceso."
        },
        {
          "etapa": "SOBADO",
          "texto": "Sobar la masa y sacar las tiras de 1cm de espesor. Mínimo 4 pasadas por la sobadora."
        },
        {
          "etapa": "CORTE",
          "texto": "Picar la tira de masa con picador manual o meson de corte, cortar con molde de 10 cm de diámetro o meson de corte"
        },
        {
          "etapa": "FERMENTACIÓN",
          "texto": "30 minutos, entre 35°C a 40°C y 85% a 90% de H.R."
        },
        {
          "etapa": "HORNEO",
          "texto": "10 minutos, 290°C de Temperatura Inicial y 270°C de Horneo"
        },
        {
          "etapa": "VAPOR",
          "texto": "3  a 5 segundos"
        },
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2526600000007": {
      "ingredientes": [
        {
          "codigo": "5609040075884",
          "nombre": "HARINA HALLULERA 25K",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "5609040758558",
          "nombre": "MEJORADOR MM-750 KG",
          "unidad": "GR",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803000000932",
          "nombre": "LEVEDURA FRES LEFERSA 500G",
          "unidad": "gr",
          "cantidadProduccion": 0.5,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "8436001252230",
          "nombre": "ACEITE OLIVA EXT.VIRGEN ABRIL PET 5 LTS",
          "unidad": "LT",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803600011246",
          "nombre": "SAL VENUS MESA 1KG",
          "unidad": "KG",
          "cantidadProduccion": 0.5,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7802810002099",
          "nombre": "ACEITE MARAVILLA CHEF 1LT",
          "unidad": "LT",
          "cantidadProduccion": 0.5,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7801505231912",
          "nombre": "AZUCAR IANSA 1KG",
          "unidad": "KG",
          "cantidadProduccion": 0.5,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7804617470255",
          "nombre": "LECHE ENTERA PITRUFQUEN 1LT",
          "unidad": "LT",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": 11.0,
          "cantidadCosto": 11.0
        },
        {
          "codigo": "PORCIONES",
          "nombre": "-",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        }
      ],
      "proceso": []
    },
    "2522425000000": {
      "ingredientes": [
        {
          "codigo": "7802613000452",
          "nombre": "HARINA SUPER PAN BOLSA PAPEL 25KG",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "5609040758558",
          "nombre": "MEJORADOR NATURAL  MM-750 (MASA MADRE EN POLVO)",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7801420000778",
          "nombre": "ACEITE OLIVA BANQUETE 1LT",
          "unidad": "LT",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7803600011246",
          "nombre": "SAL VENUS MESA 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": 11.0,
          "cantidadCosto": 18.3
        }
      ],
      "proceso": [
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2521006000002": {
      "ingredientes": [
        {
          "codigo": "7802613000452",
          "nombre": "HARINA SUPER PAN BOLSA PAPEL 25KG",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "5609040758558",
          "nombre": "MEJORADOR NATURAL  MM-750 (MASA MADRE EN POLVO)",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803600011246",
          "nombre": "SAL VENUS MESA 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7801420000778",
          "nombre": "ACEITE OLIVA BANQUETE 1LT",
          "unidad": "LT",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": 18.3,
          "cantidadCosto": 18.3
        },
        {
          "codigo": "",
          "nombre": "INGRESDIENTES ADICIONALES",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "2531347000005",
          "nombre": "ACEITUNA AZAPA LAMINADA DESH. KG   A.SOLIS",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 6.0
        },
        {
          "codigo": "7802420005565",
          "nombre": "AJO EN POLVO EDRA 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.27
        },
        {
          "codigo": "7802420005626",
          "nombre": "OREGANO ENTERO EDRA 250G",
          "unidad": "KG",
          "cantidadProduccion": 0.1,
          "cantidadCosto": 0.14
        },
        {
          "codigo": "2533005000006",
          "nombre": "QUESO GAUDA CALO PIEZA 3KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 6.795
        }
      ],
      "proceso": [
        {
          "etapa": "MEZCLADO y AMASADO",
          "texto": "Agregamos a la maquina harina, agua y MM-750, revolvemos por 3 min a velocidad baja, agregamos la sal y llevamos a velocidad alta por 8 min."
        },
        {
          "etapa": "1era FERMENTACIÓN",
          "texto": "Llevamos a un mesón trozos de 3 kg de masa y damos 1 plegado, dejamos reposar por 50 min mas"
        },
        {
          "etapa": "FORMADO",
          "texto": "sacamos la masa, estirandola en un mesón, cortamos en rectangulos de aprox. 10 x 6 cm y llevamos a una lata"
        },
        {
          "etapa": "2da FERMENTACIÓN",
          "texto": "el producto ya en la lata le damos una segunda fermentación por aprox. 20 min"
        },
        {
          "etapa": "VAPOR",
          "texto": "agregamos 10 seg de vapor"
        },
        {
          "etapa": "HORNEO",
          "texto": "llevamos al horno a 210°C por 15 min y luego a la misma termperatura por 5 minutos  con tiraje"
        },
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2521214000009": {
      "ingredientes": [
        {
          "codigo": "7802613000452",
          "nombre": "HARINA SUPER PAN BOLSA PAPEL 25KG",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "5609040758558",
          "nombre": "MEJORADOR NATURAL  MM-750 (MASA MADRE EN POLVO)",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "7803600011246",
          "nombre": "SAL VENUS MESA 1KG",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "7801420000778",
          "nombre": "ACEITE OLIVA BANQUETE 1LT",
          "unidad": "LT",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.5
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "LT",
          "cantidadProduccion": 18.3,
          "cantidadCosto": 18.3
        },
        {
          "codigo": "",
          "nombre": "INGRESDIENTES ADICIONALES",
          "unidad": "",
          "cantidadProduccion": null,
          "cantidadCosto": null
        },
        {
          "codigo": "7801505231912",
          "nombre": "AZUCAR IANSA 1KG",
          "unidad": "KG",
          "cantidadProduccion": 0.94,
          "cantidadCosto": 1.36
        },
        {
          "codigo": "5609009092853",
          "nombre": "HARMONY FRIO  4.5KG    ( brillo )",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.27
        },
        {
          "codigo": "2541111000001",
          "nombre": "CANELA EN POLVO KG FFVV",
          "unidad": "KG",
          "cantidadProduccion": 2.0,
          "cantidadCosto": 0.14
        },
        {
          "codigo": "7802420005541",
          "nombre": "SESAMO TOSTADO EDRA 100G",
          "unidad": "KG",
          "cantidadProduccion": 1.0,
          "cantidadCosto": 0.27
        }
      ],
      "proceso": [
        {
          "etapa": "MEZCLADO y AMASADO",
          "texto": "Agregamos a la maquina harina, agua y MM-750, revolvemos por 3 min a velocidad baja, agregamos la sal y llevamos a velocidad alta por 8 min."
        },
        {
          "etapa": "1era FERMENTACIÓN",
          "texto": "Llevamos a un mesón trozos de 3 kg de masa y damos 1 plegado, dejamos reposar por 50 min mas"
        },
        {
          "etapa": "FORMADO",
          "texto": "sacamos la masa, estirandola en un mesón, cortamos en rectangulos de aprox. 10 x 6 cm y llevamos a una lata"
        },
        {
          "etapa": "2da FERMENTACIÓN",
          "texto": "el producto ya en la lata le damos una segunda fermentación por aprox. 20 min"
        },
        {
          "etapa": "VAPOR",
          "texto": "agregamos 10 seg de vapor"
        },
        {
          "etapa": "HORNEO",
          "texto": "llevamos al horno a 210°C por 15 min y luego a la misma termperatura por 5 minutos  con tiraje"
        },
        {
          "etapa": "PORCIONES",
          "texto": "-"
        }
      ]
    },
    "2526788000004": {
      "ingredientes": [
        {
          "codigo": "7802615004946",
          "nombre": "MIX SOPAIPILLAS 25KG 494",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "Litros",
          "cantidadProduccion": 9.0,
          "cantidadCosto": 9.0
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "Aplicar desmoldante a las latas si es necesario."
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar harina en la revolvedora y revolver durante 2 minutos ."
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar agua revolviendo a velocidad lenta durante 3 minutos y/o hasta formar la masa."
        },
        {
          "etapa": "MEZCLADO",
          "texto": "Una vez formada la masa se revuelve 10 minutos (aprox.) en velocidad alta o hasta lograr la masa requerida."
        },
        {
          "etapa": "SOBADO",
          "texto": "Sobar la masa y sacar las tiras de 1cm de espesor. Mínimo 4 pasadas por la sobadora."
        },
        {
          "etapa": "CORTE",
          "texto": "Picar la tira de masa y cortar con molde o con maquina cortadora de 18 cm de diámetro ."
        },
        {
          "etapa": "FERMENTACIÓN",
          "texto": "NO APLICA , SOLO REPOSAR MASA UNOS 15 MINUTOS EN CÁMARA PARA RELAJAR LA MASA,"
        },
        {
          "etapa": "VAPOR",
          "texto": "4 segundos al inicio"
        },
        {
          "etapa": "HORNEO",
          "texto": "250° temperatura inicial y hornear por 12 minutos o hasta logar color deseado"
        },
        {
          "etapa": "ALTURA",
          "texto": "2 cm"
        },
        {
          "etapa": "PESO",
          "texto": "90 a 110 grs. c/u"
        }
      ]
    },
    "2523105000006": {
      "ingredientes": [
        {
          "codigo": "7802615004625",
          "nombre": "MIX EMPANADA-DOBLADAS 25 K",
          "unidad": "KG",
          "cantidadProduccion": 25.0,
          "cantidadCosto": 1.0
        },
        {
          "codigo": "",
          "nombre": "AGUA",
          "unidad": "Litros",
          "cantidadProduccion": 7.0,
          "cantidadCosto": 7.0
        }
      ],
      "proceso": [
        {
          "etapa": "PRELIMINARES",
          "texto": "Aplicar desmoldante a las latas si es necesario."
        },
        {
          "etapa": "OXIGENACION",
          "texto": "Vaciar harina en la revolvedora y revolver durante 2 minutos ."
        },
        {
          "etapa": "PREMEZCLA",
          "texto": "Agregar agua revolviendo a velocidad lenta durante 3 minutos y/o hasta formar la masa."
        },
        {
          "etapa": "MEZCLADO",
          "texto": "Una vez formada la masa se revuelve 10 minutos (aprox.) en velocidad alta o hasta lograr la masa requerida."
        },
        {
          "etapa": "SOBADO",
          "texto": "Sobar la masa y sacar las tiras de 1cm de espesor. Mínimo 4 pasadas por la sobadora."
        },
        {
          "etapa": "CORTE",
          "texto": "Picar la tira de masa y cortar con molde o con maquina cortadora de 18 cm de diámetro ."
        },
        {
          "etapa": "FERMENTACIÓN",
          "texto": "NO APLICA , SOLO REPOSAR MASA UNOS 15 MINUTOS EN CÁMARA PARA RELAJAR LA MASA,"
        },
        {
          "etapa": "VAPOR",
          "texto": "4 segundos al inicio"
        },
        {
          "etapa": "HORNEO",
          "texto": "250° temperatura inicial y hornear por 12 minutos o hasta logar color deseado"
        },
        {
          "etapa": "ALTURA",
          "texto": "2 cm"
        },
        {
          "etapa": "PESO",
          "texto": "90 a 110 grs. c/u"
        }
      ]
    }
  }
}
