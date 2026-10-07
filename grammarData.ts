/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GrammarSection } from './types';

export const GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    id: 1,
    tituloEs: '1. El verbo y las conjugaciones',
    tituloHy: '1. Բայը և խոնարհման խմբերը',
    introduccionEs: 'El verbo es la clase de palabra fundamental que expresa acciones, estados o procesos en la oración.',
    introduccionHy: 'Բայը խոսքի հիմնական մասն է, որը նախադասության մեջ արտահայտում է գործողություն, վիճակ կամ ընթացք։',
    puntos: [
      {
        es: '🇪🇸 El verbo expresa una acción, un estado o un proceso.',
        hy: '🇦🇲 Բայը ցույց է տալիս գործողություն, վիճակ կամ ընթացք։',
        tipo: 'texto',
      },
      {
        es: 'amar — սիրել։',
        hy: 'սիրել (առաջին խոնարհում, կանոնավոր)',
        tipo: 'ejemplo',
      },
      {
        es: 'temer — վախենալ։',
        hy: 'վախենալ (երկրորդ խոնարհում, կանոնավոր)',
        tipo: 'ejemplo',
      },
      {
        es: 'partir — մեկնել, բաժանել՝ կախված համատեքստից։',
        hy: 'մեկնել, բաժանել՝ կախված համատեքստից (երրորդ խոնարհում, կանոնավոր)',
        tipo: 'ejemplo',
      },
      {
        es: 'ser — լինել։',
        hy: 'լինել (անկանոն բայ)',
        tipo: 'ejemplo',
      },
      {
        es: '🇪🇸 Hay tres conjugaciones según la terminación del infinitivo.',
        hy: '🇦🇲 Ըստ անորոշ ձևի վերջավորության՝ կա խոնարհման երեք խումբ։',
        tipo: 'texto',
      },
      {
        es: '🇪🇸 Amar, temer y partir son regulares: siguen los modelos de conjugación. Ser es irregular.',
        hy: '🇦🇲 Amar, temer և partir բայերը կանոնավոր են․ խոնարհվում են համապատասխան օրինաչափությամբ։ Ser բայն անկանոն է։',
        tipo: 'alerta',
      },
    ],
    tablaResumen: {
      cabecerasEs: ['Conjugación', 'Terminación', 'Ejemplo'],
      cabecerasHy: ['Խոնարհում', 'Վերջավորություն', 'Օրինակ'],
      filas: [
        {
          es: ['Primera', '-ar', 'amar'],
          hy: ['Առաջին', '-ar', 'սիրել'],
        },
        {
          es: ['Segunda', '-er', 'temer'],
          hy: ['Երկրորդ', '-er', 'վախենալ'],
        },
        {
          es: ['Tercera', '-ir', 'partir'],
          hy: ['Երրորդ', '-ir', 'մեկնել / բաժանել'],
        },
      ],
    },
    reglaEs: 'El infinitivo termina en -ar (1.ª), -er (2.ª) o -ir (3.ª). Los verbos regulares mantienen su lexema intacto y adoptan las desinencias fijas de su modelo.',
    reglaHy: 'Անորոշ ձևի վերջավորությունն է -ar (1-ին), -er (2-րդ) կամ -ir (3-րդ)։ Կանոնավոր բայերը պահպանում են բայահիմքը և ստանում խմբի հաստատուն վերջավորությունները։',
    errorComunEs: '¡Atención! En algunos libros antiguos o gráficos erróneos se etiqueta "ser" como regular. ¡Eso es falso! El verbo "ser" es totalmente irregular (soy, fui, era).',
    errorComunHy: 'Ուշադրությո՛ւն։ Երբեմն սխալմամբ «ser» բայը ներկայացվում է որպես կանոնավոր։ Դա կոպիտ սխալ է․ «ser» բայն ամբողջությամբ անկանոն է (soy, fui, era)։',
  },
  {
    id: 2,
    tituloEs: '2. Lexema, vocal temática y desinencias',
    tituloHy: '2. Բայահիմք, թեմատիկ ձայնավոր և վերջավորություններ',
    introduccionEs: 'En los exámenes se utilizan abreviaturas gramaticales para segmentar la estructura interna de las formas verbales.',
    introduccionHy: 'Քննություններում օգտագործվում են այս քերականական հապավումները՝ բայական ձևերի ներքին կառուցվածքը վերլուծելու համար։',
    puntos: [
      {
        es: '🇪🇸 En “amar”: am- es el lexema, -a- es la vocal temática y -r es la marca de infinitivo.',
        hy: '🇦🇲 Amar բառի մեջ am- բայահիմքն է, -a-՝ թեմատիկ ձայնավորը, իսկ -r-ը՝ անորոշ ձևի ցուցիչը։',
        tipo: 'texto',
        desglose: {
          termino: 'am-a-r',
          lexema: 'am-',
          vt: '-a-',
          desinencia: '-r',
          explicacionEs: 'am- (lexema) + -a- (vocal temática de 1.ª conjugación) + -r (marca de infinitivo)',
          explicacionHy: 'am- (բայահիմք) + -a- (1-ին խոնարհման թեմատիկ ձայնավոր) + -r (անորոշ ձևի ցուցիչ)',
        },
      },
      {
        es: 'am-a-r | tem-e-r | part-i-r',
        hy: 'Բայահիմք (Lex) + Թեմատիկ ձայնավոր (Vt) + Անորոշ ձևի ցուցիչ (-r)',
        tipo: 'ejemplo',
      },
      {
        es: '🇪🇸 En “amábamos”: am- aporta el significado, -a- es la vocal temática, -ba- indica imperfecto de indicativo y -mos indica primera persona del plural.',
        hy: '🇦🇲 Amábamos ձևում am- մասն արտահայտում է հիմնական իմաստը, -a-ն թեմատիկ ձայնավորն է, -ba-ն ցույց է տալիս սահմանական եղանակի անկատար անցյալը, իսկ -mos-ը՝ հոգնակի թվի առաջին դեմքը։',
        tipo: 'texto',
        desglose: {
          termino: 'am-á-ba-mos',
          lexema: 'am-',
          vt: '-á-',
          desinencia: '-ba-mos',
          explicacionEs: 'am- (Lex) + -á- (Vt) + -ba- (tiempo pretérito imperfecto indicativo) + -mos (desinencia de 1.ª persona plural)',
          explicacionHy: 'am- (Lex) + -á- (Vt) + -ba- (անկատար անցյալի ցուցիչ) + -mos (հոգնակի 1-ին դեմքի վերջավորություն)',
        },
      },
      {
        es: '🇪🇸 El símbolo Ø significa que no aparece un elemento de forma expresa.',
        hy: '🇦🇲 Ø նշանը նշանակում է, որ տվյալ բաղադրիչը բացահայտ արտահայտված չէ (զրոյական ձևույթ)։',
        tipo: 'alerta',
      },
    ],
    tablaResumen: {
      cabecerasEs: ['Abreviatura', 'Español', 'Հայերեն'],
      cabecerasHy: ['Հապավում', 'Իսպաներեն', 'Հայերեն բացատրություն'],
      filas: [
        {
          es: ['Lex', 'Lexema', 'Raíz: aporta el significado léxico fundamental'],
          hy: ['Lex', 'Lexema', 'Բայահիմք․ կրում է հիմնական իմաստը'],
        },
        {
          es: ['Vt', 'Vocal temática', 'Indica la conjugación (-a- para 1.ª, -e- para 2.ª, -i- para 3.ª)'],
          hy: ['Vt', 'Vocal temática', 'Թեմատիկ ձայնավոր․ ցույց է տալիս խոնարհման խումբը'],
        },
        {
          es: ['D', 'Desinencias', 'Terminaciones de persona, número, tiempo y modo'],
          hy: ['D', 'Desinencias', 'Քերականական վերջավորություններ (դեմք, թիվ, ժամանակ, եղանակ)'],
        },
        {
          es: ['Ø', 'Elemento cero', 'Ausencia visible de marca morfológica'],
          hy: ['Ø', 'Զրոյական ձևույթ', 'Ցույց է տալիս, որ բաղադրիչը բացահայտ նշված չէ'],
        },
      ],
    },
    reglaEs: 'Verbo = Lexema + (Vocal temática) + Morfema de tiempo/modo/aspecto + Desinencia de persona/número.',
    reglaHy: 'Բայաձև = Բայահիմք + (Թեմատիկ ձայնավոր) + Ժամանակ/եղանակի ցուցիչ + Դեմքի/թվի վերջավորություն։',
    errorComunEs: 'No confundir la vocal temática con la desinencia: la vocal temática solo nos sitúa en la 1.ª (-a-), 2.ª (-e-) o 3.ª (-i-) conjugación.',
    errorComunHy: 'Մի՛ շփոթիր թեմատիկ ձայնավորը վերջավորության հետ․ այն միայն մատնանշում է խոնարհման խումբը։',
  },
  {
    id: 3,
    tituloEs: '3. Persona y número',
    tituloHy: '3. Դեմք և թիվ',
    introduccionEs: 'Las formas personales cambian según el sujeto gramatical en singular y plural.',
    introduccionHy: 'Բայի դիմավոր ձևերը փոխվում են ըստ քերականական ենթակայի՝ եզակի և հոգնակի թվերով։',
    puntos: [
      {
        es: '🇪🇸 En español distinguimos tres personas gramaticales en singular y tres en plural.',
        hy: '🇦🇲 Իսպաներենում տարբերակում ենք երեք քերականական դեմք եզակիում և երեքը՝ հոգնակիում։',
        tipo: 'texto',
      },
      {
        es: '🇪🇸 Usted y ustedes se refieren al interlocutor, pero llevan el verbo en tercera persona.',
        hy: '🇦🇲 Usted և ustedes ձևերով դիմում ենք զրուցակցին (հարգալից «Դուք»), բայց բայը դրվում է երրորդ դեմքով։',
        tipo: 'alerta',
      },
    ],
    tablaResumen: {
      cabecerasEs: ['Persona', 'Հայերեն', 'Análisis — Վերլուծություն'],
      cabecerasHy: ['Դեմք', 'Հայերեն', 'Քերականական վերլուծություն'],
      filas: [
        {
          es: ['yo', 'ես', '1.ª persona del singular — եզակի, առաջին դեմք'],
          hy: ['yo', 'ես', '1.ª persona del singular — եզակի, առաջին դեմք'],
        },
        {
          es: ['tú', 'դու', '2.ª persona del singular — եզակի, երկրորդ դեմք'],
          hy: ['tú', 'դու', '2.ª persona del singular — եզակի, երկրորդ դեմք'],
        },
        {
          es: ['él / ella / usted', 'նա / Դուք', '3.ª persona del singular — եզակի, երրորդ դեմք'],
          hy: ['él / ella / usted', 'նա / Դուք (հարգալից)', '3.ª persona del singular — եզակի, երրորդ դեմք'],
        },
        {
          es: ['nosotros / nosotras', 'մենք', '1.ª persona del plural — հոգնակի, առաջին դեմք'],
          hy: ['nosotros/as', 'մենք', '1.ª persona del plural — հոգնակի, առաջին դեմք'],
        },
        {
          es: ['vosotros / vosotras', 'դուք', '2.ª persona del plural — հոգնակի, երկրորդ դեմք'],
          hy: ['vosotros/as', 'դուք', '2.ª persona del plural — հոգնակի, երկրորդ դեմք'],
        },
        {
          es: ['ellos / ellas / ustedes', 'նրանք / դուք', '3.ª persona del plural — հոգնակի, երրորդ դեմք'],
          hy: ['ellos / ellas / ustedes', 'նրանք / Դուք (հոգնակի հարգալից)', '3.ª persona del plural — հոգնակի, երրորդ դեմք'],
        },
      ],
    },
    reglaEs: '¡Regla de oro! "Usted parte" y "Ustedes parten" usan la 3.ª persona del singular y plural, nunca la 2.ª.',
    reglaHy: 'Ոսկե կանոն․ «Usted parte» և «Ustedes parten» ձևերում բայը միշտ դրվում է 3-րդ դեմքով, ոչ երբեք 2-րդով։',
    errorComunEs: 'Poner el verbo en 2.ª persona con "usted": decir *usted partes es un error grave. Lo correcto es "usted parte".',
    errorComunHy: '«Usted» դերանվան հետ 2-րդ դեմքի բայ դնելը կոպիտ սխալ է․ ճիշտ է միայն «usted parte»։',
  },
  {
    id: 4,
    tituloEs: '4. Formas no personales',
    tituloHy: '4. Բայի անդեմ ձևերը',
    introduccionEs: 'Son aquellas formas que no expresan por sí mismas la persona gramatical ni el número.',
    introduccionHy: 'Այն ձևերն են, որոնք ինքնուրույն չեն ցույց տալիս քերականական դեմք և թիվ։',
    puntos: [
      {
        es: '🇪🇸 No indican por sí mismas persona ni número.',
        hy: '🇦🇲 Այս ձևերն ինքնուրույն չեն ցույց տալիս դեմք և թիվ։',
        tipo: 'texto',
      },
      {
        es: '🇪🇸 El infinitivo nombra la acción: amar.',
        hy: '🇦🇲 Անորոշ ձևը անվանում է գործողությունը՝ amar — սիրել։',
        tipo: 'ejemplo',
      },
      {
        es: '🇪🇸 El gerundio puede presentar una acción en desarrollo: está partiendo el pan.',
        hy: '🇦🇲 Գերունդիոն կարող է ներկայացնել ընթացքի մեջ գտնվող գործողություն․ նա հիմա հացն է բաժանում։',
        tipo: 'ejemplo',
      },
      {
        es: '🇪🇸 El participio forma los tiempos compuestos con haber: he amado.',
        hy: '🇦🇲 Participio-ն haber օժանդակ բայի հետ կազմում է բաղադրյալ ժամանակաձևեր՝ he amado — սիրել եմ։',
        tipo: 'ejemplo',
      },
      {
        es: '🇪🇸 Con haber, el participio no cambia: ella ha partido; ellos han partido.',
        hy: '🇦🇲 Haber-ի հետ participio-ն չի փոխվում՝ ella ha partido, ellos han partido (միշտ եզակի արական ձևով)։',
        tipo: 'alerta',
      },
    ],
    tablaResumen: {
      cabecerasEs: ['Forma — Ձև', 'Amar', 'Temer', 'Partir', 'Ser'],
      cabecerasHy: ['Ձև', 'Amar', 'Temer', 'Partir', 'Ser'],
      filas: [
        {
          es: ['Infinitivo simple', 'amar', 'temer', 'partir', 'ser'],
          hy: ['Պարզ անորոշ ձև', 'amar (սիրել)', 'temer (վախենալ)', 'partir (մեկնել)', 'ser (լինել)'],
        },
        {
          es: ['Gerundio simple', 'amando', 'temiendo', 'partiendo', 'siendo'],
          hy: ['Պարզ գերունդիո', 'amando', 'temiendo', 'partiendo', 'siendo'],
        },
        {
          es: ['Participio', 'amado', 'temido', 'partido', 'sido'],
          hy: ['Դերբայ (Participio)', 'amado', 'temido', 'partido', 'sido'],
        },
        {
          es: ['Infinitivo compuesto', 'haber amado', 'haber temido', 'haber partido', 'haber sido'],
          hy: ['Բաղադրյալ անորոշ ձև', 'haber amado', 'haber temido', 'haber partido', 'haber sido'],
        },
        {
          es: ['Gerundio compuesto', 'habiendo amado', 'habiendo temido', 'habiendo partido', 'habiendo sido'],
          hy: ['Բաղադրյալ գերունդիո', 'habiendo amado', 'habiendo temido', 'habiendo partido', 'habiendo sido'],
        },
      ],
    },
    reglaEs: 'El participio en los tiempos compuestos es invariable (termina siempre en -o). Solo concuerda en género y número cuando funciona como adjetivo pasivo (puertas abiertas).',
    reglaHy: 'Բաղադրյալ ժամանակներում participio-ն երբեք չի փոխվում (միշտ -o)։ Գոյականի հետ համաձայնում է միայն այն դեպքում, երբ հանդես է գալիս որպես ածական։',
    errorComunEs: '¡Error frecuente! Decir *ellas han partidas. ¡Incorrecto! Lo correcto es: "ellas han partido".',
    errorComunHy: 'Հաճախակի սխալ․ ասել *ellas han partidas։ Ճիշտ ձևն է՝ «ellas han partido»։',
  },
  {
    id: 5,
    tituloEs: '5. Los modos verbales',
    tituloHy: '5. Բայի եղանակները',
    introduccionEs: 'El modo refleja la actitud del hablante hacia lo que comunica.',
    introduccionHy: 'Եղանակն արտացոլում է խոսողի վերաբերմունքը հաղորդվող գործողության նկատմամբ։',
    puntos: [
      {
        es: '🇪🇸 Indicativo: Presenta la información como un hecho o una afirmación real.',
        hy: '🇦🇲 Indicativo (Սահմանական եղանակ)․ Տեղեկությունը ներկայացնում է որպես փաստ կամ պնդում։',
        tipo: 'texto',
      },
      {
        es: 'Sé que él estudia. — Գիտեմ, որ նա սովորում է։',
        hy: 'Գիտեմ, որ նա սովորում է (փաստական իրականություն)։',
        tipo: 'ejemplo',
      },
      {
        es: '🇪🇸 Subjuntivo: Se utiliza para expresar deseos, dudas, valoraciones y situaciones hipotéticas.',
        hy: '🇦🇲 Subjuntivo (Ըղձական եղանակ)․ Օգտագործվում է ցանկություն, կասկած, գնահատական և ենթադրական իրավիճակ արտահայտելու համար։',
        tipo: 'texto',
      },
      {
        es: 'Quiero que él estudie. — Ուզում եմ, որ նա սովորի։',
        hy: 'Ուզում եմ, որ նա սովորի (ցանկություն, ոչ թե հաստատված փաստ)։',
        tipo: 'ejemplo',
      },
      {
        es: '🇪🇸 Imperativo: Expresa órdenes, instrucciones, consejos o peticiones directas.',
        hy: '🇦🇲 Imperativo (Հրամայական եղանակ)․ Արտահայտում է հրաման, հրահանգ, խորհուրդ կամ խնդրանք։',
        tipo: 'texto',
      },
      {
        es: 'Estudia para el examen. — Սովորի՛ր քննության համար։',
        hy: 'Սովորի՛ր քննության համար (ուղիղ հրահանգ / հրաման)։',
        tipo: 'ejemplo',
      },
      {
        es: '🇪🇸 En estas tablas, el condicional se incluye dentro del modo indicativo.',
        hy: '🇦🇲 Այս աղյուսակներում condicional-ը ներառված է սահմանական եղանակի մեջ (ըստ Իսպանիայի Թագավորական Ակադեմիայի՝ RAE նորմի)։',
        tipo: 'alerta',
      },
    ],
    reglaEs: 'Indicativo = hechos reales; Subjuntivo = deseos, dudas e hipótesis; Imperativo = mandatos.',
    reglaHy: 'Սահմանական = իրական փաստեր, Ըղձական = ցանկություն, կասկած և ենթադրություն, Հրամայական = հրամաններ։',
    errorComunEs: 'Confundir el condicional (amaría) considerándolo un modo separado; en la gramática académica actual forma parte del indicativo.',
    errorComunHy: 'Condicional-ը (amaría) որպես առանձին եղանակ դիտարկելը հնացած է․ ակադեմիական քերականության մեջ այն indicativo-ի ժամանակաձև է։',
  },
  {
    id: 6,
    tituloEs: '6. Indicativo: tiempos simples',
    tituloHy: '6. Սահմանական եղանակի պարզ ժամանակաձևերը',
    introduccionEs: 'Constan de una sola palabra verbal con sus terminaciones personales.',
    introduccionHy: 'Բաղկացած են մեկ բայական բառից՝ իրենց անձնական վերջավորություններով։',
    puntos: [
      {
        es: '🇪🇸 Presente: Expresa acciones habituales, situaciones actuales y verdades generales.',
        hy: '🇦🇲 Presente (Ներկա)․ Արտահայտում է սովորական գործողություններ, ներկա իրավիճակներ և ընդհանուր ճշմարտություններ։',
        tipo: 'texto',
      },
      {
        es: 'Amo a mi familia. — Ես սիրում եմ իմ ընտանիքին։',
        hy: 'Ես սիրում եմ իմ ընտանիքին (ներկա սովորություն / զգացմունք)։',
        tipo: 'ejemplo',
      },
      {
        es: '🇪🇸 Pretérito imperfecto: Expresa hábitos, descripciones o acciones en desarrollo en el pasado, sin presentar sus límites.',
        hy: '🇦🇲 Pretérito imperfecto (Անկատար անցյալ)․ Արտահայտում է անցյալի սովորություններ, նկարագրություններ կամ ընթացքի մեջ գտնվող գործողություններ՝ առանց դրանց սահմանները շեշտելու։',
        tipo: 'texto',
      },
      {
        es: 'De pequeño, temía la oscuridad. — Փոքր ժամանակ վախենում էի մթությունից։',
        hy: 'Փոքր ժամանակ վախենում էի մթությունից (անցյալի տևական վիճակ)։',
        tipo: 'ejemplo',
      },
      {
        es: '🇪🇸 Pretérito perfecto simple / indefinido: Presenta una acción pasada como terminada. Los dos nombres designan el mismo tiempo.',
        hy: '🇦🇲 Pretérito perfecto simple / indefinido (Ավարտված անցյալ)․ Անցյալ գործողությունը ներկայացնում է որպես ավարտված։ Երկու անվանումներն էլ վերաբերում են նույն ժամանակաձևին։',
        tipo: 'alerta',
      },
      {
        es: 'Ayer partimos a las ocho. — Երեկ մեկնեցինք ժամը ութին։',
        hy: 'Երեկ մեկնեցինք ժամը ութին (ավարտված կոնկրետ գործողություն)։',
        tipo: 'ejemplo',
      },
      {
        es: '🇪🇸 Futuro simple: Expresa una acción venidera. Se forma con el infinitivo completo + terminaciones: -é, -ás, -á, -emos, -éis, -án.',
        hy: '🇦🇲 Futuro simple (Պարզ ապառնի)․ Արտահայտում է ապագա գործողություն։ Կազմվում է ամբողջական անորոշ ձևից և -é, -ás, -á, -emos, -éis, -án վերջավորություններից։',
        tipo: 'texto',
      },
      {
        es: 'Mañana partiré hacia Madrid. — Վաղը կմեկնեմ Մադրիդ։',
        hy: 'Վաղը կմեկնեմ Մադրիդ։',
        tipo: 'ejemplo',
      },
      {
        es: '🇪🇸 Condicional simple: Expresa una acción hipotética o una acción futura vista desde el pasado (-ía, -ías, -ía, -íamos, -íais, -ían).',
        hy: '🇦🇲 Condicional simple (Պարզ պայմանական)․ Արտահայտում է ենթադրական գործողություն կամ անցյալի տեսանկյունից ապագա գործողություն։',
        tipo: 'texto',
      },
      {
        es: 'Partiría hoy si pudiera. — Այսօր կմեկնեի, եթե կարողանայի։',
        hy: 'Այսօր կմեկնեի, եթե կարողանայի։',
        tipo: 'ejemplo',
      },
    ],
    reglaEs: 'El futuro y el condicional se forman sobre el infinitivo completo: amar-é, amar-ía.',
    reglaHy: 'Ապառնին և պայմանականը կազմվում են անորոշ ձևի հիման վրա՝ amar-é, amar-ía։',
    errorComunEs: 'Olvidar las tildes en futuro (-é, -ás, -á, -éis, -án) y en condicional (-ía, -ías, etc.). Las tildes son obligatorias.',
    errorComunHy: 'Շեշտանշանների մոռացումը futuro-ում և condicional-ում (-ía, -ías...) կոպիտ սխալ է, քանի որ դրանք փոխում են արտասանությունն ու իմաստը։',
  },
  {
    id: 7,
    tituloEs: '7. Indicativo: tiempos compuestos',
    tituloHy: '7. Սահմանական եղանակի բաղադրյալ ժամանակաձևերը',
    introduccionEs: 'Todos los tiempos compuestos se forman con el verbo auxiliar haber conjugado + participio invariable.',
    introduccionHy: 'Բոլոր բաղադրյալ ժամանակաձևերը կազմվում են խոնարհված haber օժանդակ բայից և անփոփոխ participio-ից։',
    puntos: [
      {
        es: '🇪🇸 Se forman con haber conjugado + participio (amado, temido, partido, sido).',
        hy: '🇦🇲 Կազմվում են խոնարհված haber օժանդակ բայից և participio-ից։',
        tipo: 'texto',
      },
      {
        es: 'Pretérito perfecto compuesto: Hoy he temido lo peor. (he, has, ha, hemos, habéis, han + participio)',
        hy: 'Այսօր վախեցել եմ վատթարագույնից (ներկայի հետ կապ ունեցող անցյալ)։',
        tipo: 'ejemplo',
      },
      {
        es: 'Pretérito pluscuamperfecto: Cuando llegué, ellos ya habían partido. (había, habías, había, habíamos, habíais, habían + participio)',
        hy: 'Երբ հասա, նրանք արդեն մեկնել էին (անցյալից առաջ կատարված գործողություն)։',
        tipo: 'ejemplo',
      },
      {
        es: 'Pretérito anterior: En cuanto hubo terminado, salió. (hube, hubiste, hubo, hubimos, hubisteis, hubieron + participio)',
        hy: 'Հենց ավարտեց, դուրս եկավ (մեկ այլ անցյալին անմիջապես նախորդած գործողություն, հիմնականում գրական)։',
        tipo: 'ejemplo',
      },
      {
        es: 'Futuro perfecto: Para mañana, ellos ya habrán partido. (habré, habrás, habrá, habremos, habréis, habrán + participio)',
        hy: 'Մինչև վաղը նրանք արդեն մեկնած կլինեն (ապագայի պահից առաջ ավարտված գործողություն)։',
        tipo: 'ejemplo',
      },
      {
        es: 'Condicional perfecto: Habría partido antes si hubiera podido. (habría, habrías, habría, habríamos, habríais, habrían + participio)',
        hy: 'Ավելի շուտ մեկնած կլինեի, եթե կարողացած լինեի (չկատարված ենթադրական անցյալ)։',
        tipo: 'ejemplo',
      },
    ],
    tablaResumen: {
      cabecerasEs: ['Tiempo compuesto', 'Formas de Haber (yo → ellos)'],
      cabecerasHy: ['Բաղադրյալ ժամանակաձև', 'Haber-ի ձևերը (ես → նրանք)'],
      filas: [
        {
          es: ['Pretérito perfecto compuesto', 'he, has, ha, hemos, habéis, han'],
          hy: ['Վաղակատար ներկա', 'he, has, ha, hemos, habéis, han'],
        },
        {
          es: ['Pretérito pluscuamperfecto', 'había, habías, había, habíamos, habíais, habían'],
          hy: ['Վաղակատար անցյալ', 'había, habías, había, habíamos, habíais, habían'],
        },
        {
          es: ['Pretérito anterior', 'hube, hubiste, hubo, hubimos, hubisteis, hubieron'],
          hy: ['Հարակատար անցյալ (գրական)', 'hube, hubiste, hubo, hubimos, hubisteis, hubieron'],
        },
        {
          es: ['Futuro perfecto', 'habré, habrás, habrá, habremos, habréis, habrán'],
          hy: ['Վաղակատար ապառնի', 'habré, habrás, habrá, habremos, habréis, habrán'],
        },
        {
          es: ['Condicional perfecto', 'habría, habrías, habría, habríamos, habríais, habrían'],
          hy: ['Վաղակատար պայմանական', 'habría, habrías, habría, habríamos, habríais, habrían'],
        },
      ],
    },
    reglaEs: 'Cada tiempo compuesto corresponde exactamente al tiempo simple del verbo haber + participio del verbo principal.',
    reglaHy: 'Յուրաքանչյուր բաղադրյալ ժամանակ համապատասխանում է haber-ի տվյալ պարզ ժամանակաձևին + գլխավոր բայի participio-ին։',
    errorComunEs: 'Confundir había (pluscuamperfecto) con habría (condicional perfecto). ¡La "r" marca el condicional!',
    errorComunHy: 'Շփոթել había (վաղակատար անցյալ) և habría (վաղակատար պայմանական) ձևերը։ «r» տառը մատնանշում է condicional-ը։',
  },
  {
    id: 8,
    tituloEs: '8. Subjuntivo: tiempos simples',
    tituloHy: '8. Ըղձական եղանակի պարզ ժամանակաձևերը',
    introduccionEs: 'El modo subjuntivo expresa el mundo subjetivo, las dudas, deseos y condiciones.',
    introduccionHy: 'Ըղձական եղանակն արտահայտում է խոսողի սուբյեկտիվ աշխարհը, կասկածները, ցանկություններն ու պայմանները։',
    puntos: [
      {
        es: 'Presente de subjuntivo: Espero que no temas el examen. (ame, tema, parta)',
        hy: 'Հուսով եմ՝ քննությունից չես վախենա (ներկա կամ ապագա ցանկություն)։',
        tipo: 'ejemplo',
      },
      {
        es: '🇪🇸 Pretérito imperfecto de subjuntivo: Tiene dos series de formas equivalentes (-ra y -se).',
        hy: '🇦🇲 Pretérito imperfecto de subjuntivo․ Ունի ձևերի երկու համարժեք շարք՝ -ra և -se (amara / amase, temiera / temiese, partiera / partiese)։',
        tipo: 'alerta',
      },
      {
        es: 'Quería que no temieras el examen. = Quería que no temieses el examen.',
        hy: 'Ուզում էի, որ քննությունից չվախենայիր։ Երկու ձևերն էլ լիովին ճիշտ են։',
        tipo: 'ejemplo',
      },
      {
        es: 'Si partiera mañana, llegaría el viernes.',
        hy: 'Եթե վաղը մեկներ, ուրբաթ օրը կհասներ (հիպոթետիկ պայման)։',
        tipo: 'ejemplo',
      },
      {
        es: '🇪🇸 Futuro simple de subjuntivo: Forma poco usada actualmente; conservada en leyes y refranes (amare, temiere, partiere).',
        hy: '🇦🇲 Futuro simple de subjuntivo․ Այժմ հազվադեպ գործածվող ձև է՝ պահպանված օրենքներում և ասացվածքներում (amare, temiere, partiere)։',
        tipo: 'texto',
      },
      {
        es: '🇪🇸 ¡Cuidado en el examen! No confundas amaré (futuro indicativo) con amare (futuro subjuntivo).',
        hy: '🇦🇲 Զգո՛ւյշ քննության ժամանակ․ մի՛ շփոթիր amaré (սահմանական ապառնի, շեշտով) և amare (ըղձական ապառնի, առանց շեշտի) ձևերը։',
        tipo: 'alerta',
      },
    ],
    tablaResumen: {
      cabecerasEs: ['Tiempo simple subjuntivo', 'Amar', 'Temer', 'Partir'],
      cabecerasHy: ['Ըղձականի պարզ ժամանակ', 'Amar', 'Temer', 'Partir'],
      filas: [
        {
          es: ['Presente', 'ame, ames, ame, amemos, améis, amen', 'tema, temas, tema, temamos, temáis, teman', 'parta, partas, parta, partamos, partáis, partan'],
          hy: ['Ներկա', 'ame...', 'tema...', 'parta...'],
        },
        {
          es: ['Imperfecto (serie -ra)', 'amara, amaras, amara...', 'temiera, temieras...', 'partiera, partieras...'],
          hy: ['Անկատար (-ra շարք)', 'amara...', 'temiera...', 'partiera...'],
        },
        {
          es: ['Imperfecto (serie -se)', 'amase, amases, amase...', 'temiese, temieses...', 'partiese, partieses...'],
          hy: ['Անկատար (-se շարք)', 'amase...', 'temiese...', 'partiese...'],
        },
        {
          es: ['Futuro simple', 'amare, amares, amare...', 'temiere, temieres...', 'partiere, partieres...'],
          hy: ['Պարզ ապառնի', 'amare...', 'temiere...', 'partiere...'],
        },
      ],
    },
    reglaEs: 'Amara y amase son dos variantes morfológicas del MISMO tiempo gramatical, no son tiempos distintos.',
    reglaHy: 'Amara-ն և amase-ն նույն քերականական ժամանակաձևի երկու տարբերակներն են, ոչ թե տարբեր ժամանակներ։',
    errorComunEs: 'Confundir amaré (con tilde, futuro indicativo: "yo amaré") con amare (sin tilde, futuro subjuntivo: "si alguno amare").',
    errorComunHy: 'Շփոթել amaré (շեշտով, սահմանական ապառնի՝ «ես կսիրեմ») և amare (առանց շեշտի, ըղձական ապառնի) ձևերը։',
  },
  {
    id: 9,
    tituloEs: '9. Subjuntivo: tiempos compuestos',
    tituloHy: '9. Ըղձական եղանակի բաղադրյալ ժամանակաձևերը',
    introduccionEs: 'Se forman con el subjuntivo de haber + participio.',
    introduccionHy: 'Կազմվում են haber-ի ըղձական ձևերից և participio-ից։',
    puntos: [
      {
        es: 'Pretérito perfecto de subjuntivo: Me alegra que hayas sido sincero. (haya, hayas, haya, hayamos, hayáis, hayan + participio)',
        hy: 'Ուրախ եմ, որ անկեղծ ես եղել (ներկայից գնահատվող ավարտված գործողություն)։',
        tipo: 'ejemplo',
      },
      {
        es: 'Pretérito pluscuamperfecto de subjuntivo: Si hubieras partido antes, habrías llegado a tiempo. (hubiera/hubiese partido)',
        hy: 'Եթե ավելի շուտ մեկնած լինեիր, ժամանակին հասած կլինեիր (hubieras partido = hubieses partido)։',
        tipo: 'ejemplo',
      },
      {
        es: 'Futuro perfecto de subjuntivo: hubiere amado / hubiere temido / hubiere partido / hubiere sido.',
        hy: 'Հազվադեպ գործածվող իրավական/հնաոճ ձև․ hubiere amado / sido։',
        tipo: 'texto',
      },
      {
        es: '🇪🇸 Para el examen, aprende a reconocer su estructura: hubiere… + participio.',
        hy: '🇦🇲 Քննության համար սովորի՛ր ճանաչել կառուցվածքը՝ hubiere… + participio։',
        tipo: 'alerta',
      },
    ],
    tablaResumen: {
      cabecerasEs: ['Tiempo', 'Estructura con Haber + participio'],
      cabecerasHy: ['Ժամանակաձև', 'Կառուցվածքը Haber + participio'],
      filas: [
        {
          es: ['Pretérito perfecto compuesto', 'haya, hayas, haya, hayamos, hayáis, hayan + participio'],
          hy: ['Վաղակատար ներկա', 'haya, hayas, haya... + participio'],
        },
        {
          es: ['Pretérito pluscuamperfecto (-ra)', 'hubiera, hubieras, hubiera, hubiéramos, hubierais, hubieran + participio'],
          hy: ['Վաղակատար անցյալ (-ra)', 'hubiera, hubieras... + participio'],
        },
        {
          es: ['Pretérito pluscuamperfecto (-se)', 'hubiese, hubieses, hubiese, hubiésemos, hubieseis, hubiesen + participio'],
          hy: ['Վաղակատար անցյալ (-se)', 'hubiese, hubieses... + participio'],
        },
        {
          es: ['Futuro perfecto', 'hubiere, hubieres, hubiere, hubiéremos, hubiereis, hubieren + participio'],
          hy: ['Վաղակատար ապառնի', 'hubiere, hubieres... + participio'],
        },
      ],
    },
    reglaEs: 'Hubiera y hubiese son perfectamente intercambiables en el pretérito pluscuamperfecto de subjuntivo.',
    reglaHy: 'Hubiera-ն և hubiese-ն լիովին փոխարինելի են ըղձականի վաղակատար անցյալում։',
    errorComunEs: 'Confundir hubiera (pluscuamperfecto de subjuntivo) con hubiere (futuro perfecto de subjuntivo).',
    errorComunHy: 'Շփոթել hubiera-ն (ըղձականի վաղակատար անցյալ) և hubiere-ն (ըղձականի վաղակատար ապառնի)։',
  },
  {
    id: 10,
    tituloEs: '10. Imperativo',
    tituloHy: '10. Հրամայական եղանակ',
    introduccionEs: 'El imperativo sirve para dar órdenes, consejos y peticiones. En el temario escolar destacan las formas propias afirmativas de tú y vosotros.',
    introduccionHy: 'Հրամայականը ծառայում է հրամանների, խորհուրդների և խնդրանքների համար։ Դպրոցական ծրագրում հատկապես կարևոր են tú և vosotros հաստատական ձևերը։',
    puntos: [
      {
        es: '🇪🇸 Formas afirmativas directas: tú (ama, teme, parte, sé) y vosotros (amad, temed, partid, sed).',
        hy: '🇦🇲 Հաստատական ուղիղ ձևեր՝ tú (ama, teme, parte, sé) և vosotros (amad, temed, partid, sed)։',
        tipo: 'texto',
      },
      {
        es: 'Ama a tu familia. — Parte el pan. — Sé amable. — Sed sinceros.',
        hy: 'Սիրի՛ր քո ընտանիքին։ — Բաժանի՛ր հացը։ — Բարեհամբո՛ւյր եղիր։ — Անկե՛ղծ եղեք։',
        tipo: 'ejemplo',
      },
      {
        es: '🇪🇸 El imperativo negativo NO tiene formas propias: utiliza las formas del presente de subjuntivo.',
        hy: '🇦🇲 Ժխտական հրամայականը ՉՈՒՆԻ սեփական ձևեր․ այն կազմվում է presente de subjuntivo-ի ձևերով։',
        tipo: 'alerta',
      },
      {
        es: 'No temas. — No partáis todavía. — No seas impaciente.',
        hy: 'Մի՛ վախեցիր (presente de subjuntivo)։ — Դեռ մի՛ մեկնեք։ — Անհամբեր մի՛ եղիր։',
        tipo: 'ejemplo',
      },
    ],
    tablaResumen: {
      cabecerasEs: ['Verbo', 'Tú (afirmativo)', 'Vosotros (afirmativo)', 'Negativo (con subjuntivo)'],
      cabecerasHy: ['Բայ', 'Tú (հաստատական)', 'Vosotros (հաստատական)', 'Ժխտական (ըղձականով)'],
      filas: [
        {
          es: ['amar', 'ama', 'amad', 'no ames / no améis'],
          hy: ['amar', 'ama (սիրի՛ր)', 'amad (սիրեցե՛ք)', 'մի՛ սիրիր / մի՛ սիրեք'],
        },
        {
          es: ['temer', 'teme', 'temed', 'no temas / no temáis'],
          hy: ['temer', 'teme (վախեցի՛ր)', 'temed (վախեցե՛ք)', 'մի՛ վախեցիր / մի՛ վախեցեք'],
        },
        {
          es: ['partir', 'parte', 'partid', 'no partas / no partáis'],
          hy: ['partir', 'parte (բաժանի՛ր/մեկնի՛ր)', 'partid (բաժանե՛ք/մեկնե՛ք)', 'մի՛ մեկնիր / մի՛ մեկնեք'],
        },
        {
          es: ['ser', 'sé', 'sed', 'no seas / no seáis'],
          hy: ['ser', 'sé (եղի՛ր)', 'sed (եղե՛ք)', 'մի՛ եղիր / մի՛ եղեք'],
        },
      ],
    },
    reglaEs: 'Para formar el imperativo afirmativo de vosotros, sustituye la -r del infinitivo por una -d: amar → amad, temer → temed, partir → partid, ser → sed.',
    reglaHy: 'Vosotros-ի հաստատական հրամայականը կազմելու համար անորոշ ձևի -r տառը փոխարինվում է -d տառով՝ amar → amad, temer → temed, partir → partid, ser → sed։',
    errorComunEs: 'Usar el infinitivo en vez del imperativo de vosotros (*amar en vez de amad, *venir en vez de venid). En el examen se exige la terminación normativa en -d.',
    errorComunHy: 'Vosotros-ի հրամայականի փոխարեն անորոշ ձև գործածելը սխալ է (*amar փոխարեն amad)։ Քննությանը պահանջվում է նորմատիվ -d վերջավորությունը։',
  },
  {
    id: 11,
    tituloEs: '11. SER: formas que hay que memorizar',
    tituloHy: '11. SER․ ձևեր, որոնք պետք է հիշել',
    introduccionEs: 'El verbo SER es irregular y comparte formas idénticas con el verbo IR en los pasados.',
    introduccionHy: 'SER բայն անկանոն է և անցյալ ժամանակներում ունի նույնական ձևեր IR բայի հետ։',
    puntos: [
      {
        es: '🇪🇸 El verbo SER cambia de raíz radicalmente según el tiempo: soy, era, fui, sea, fuera.',
        hy: '🇦🇲 SER բայը ժամանակաձևերում արմատապես փոխում է բայահիմքը՝ soy, era, fui, sea, fuera։',
        tipo: 'texto',
      },
      {
        es: '🇪🇸 Las formas fui, fuiste, fue, fuimos, fuisteis, fueron y fuera/fuese pertenecen tanto a SER como a IR.',
        hy: '🇦🇲 Fui, fuiste, fue, fuimos, fuisteis, fueron և fuera/fuese ձևերը պատկանում են և՛ SER, և՛ IR բային։',
        tipo: 'alerta',
      },
      {
        es: 'Fui capitán del equipo. → Verbo SER (Ես թիմի ավագն էի)։',
        hy: 'Ես թիմի ավագն էի → SER բայն է (վիճակ/դեր)։',
        tipo: 'ejemplo',
      },
      {
        es: 'Fui al estadio. → Verbo IR (Ես գնացի մարզադաշտ)։',
        hy: 'Ես գնացի մարզադաշտ → IR բայն է (տեղաշարժ դեպի տեղ)։',
        tipo: 'ejemplo',
      },
    ],
    tablaResumen: {
      cabecerasEs: ['Modo / Tiempo de SER', 'Formas (yo → ellos)'],
      cabecerasHy: ['SER-ի եղանակը / ժամանակը', 'Ձևերը (ես → նրանք)'],
      filas: [
        {
          es: ['Presente indicativo', 'soy, eres, es, somos, sois, son'],
          hy: ['Սահմանական ներկա', 'soy, eres, es, somos, sois, son'],
        },
        {
          es: ['Pretérito imperfecto ind.', 'era, eras, era, éramos, erais, eran'],
          hy: ['Սահմանական անկատար անցյալ', 'era, eras, era, éramos, erais, eran'],
        },
        {
          es: ['Pretérito perfecto simple (indefinido)', 'fui, fuiste, fue, fuimos, fuisteis, fueron'],
          hy: ['Սահմանական ավարտված անցյալ', 'fui, fuiste, fue, fuimos, fuisteis, fueron'],
        },
        {
          es: ['Futuro simple indicativo', 'seré, serás, será, seremos, seréis, serán'],
          hy: ['Սահմանական ապառնի', 'seré, serás, será, seremos, seréis, serán'],
        },
        {
          es: ['Condicional simple', 'sería, serías, sería, seríamos, seríais, serían'],
          hy: ['Պարզ պայմանական', 'sería, serías, sería, seríamos, seríais, serían'],
        },
        {
          es: ['Presente subjuntivo', 'sea, seas, sea, seamos, seáis, sean'],
          hy: ['Ըղձական ներկա', 'sea, seas, sea, seamos, seáis, sean'],
        },
        {
          es: ['Imperfecto subjuntivo (-ra / -se)', 'fuera / fuese, fueras / fueses...'],
          hy: ['Ըղձական անկատար', 'fuera / fuese...'],
        },
        {
          es: ['Compuestos con haber', 'he sido, había sido, hube sido, habré sido, habría sido, haya sido, hubiera sido'],
          hy: ['Բաղադրյալ ձևեր', 'haber-ի ձևեր + sido'],
        },
      ],
    },
    reglaEs: 'Para saber si "fui" es de SER o de IR, fíjate en el complemento: si hay preposición de lugar hacia dónde (a, para), es IR. Si hay adjetivo o sustantivo de cualidad, es SER.',
    reglaHy: 'Որոշելու համար արդյոք «fui»-ն SER է, թե IR, նայի՛ր լրացմանը․ եթե կա ուղղություն (a, para), ուրեմն IR է։ Եթե կա ածական կամ հատկանիշ, ուրեմն SER է։',
    errorComunEs: 'Confundir el imperativo "sé" (con tilde: Sé amable) con el pronombre reflexivo "se" (sin tilde: Se lava).',
    errorComunHy: 'Շփոթել հրամայական «sé»-ն (շեշտով՝ Sé amable) և անդրադարձ դերանուն «se»-ն (առանց շեշտի՝ Se lava)։',
  },
  {
    id: 12,
    tituloEs: '12. Cómo analizar un verbo en el examen',
    tituloHy: '12. Ինչպես վերլուծել բայը քննության ժամանակ',
    introduccionEs: 'Guía metódica paso a paso para obtener la máxima puntuación en las preguntas de análisis morfosintáctico.',
    introduccionHy: 'Քայլ առ քայլ ուղեցույց՝ քննության ձևաբանական վերլուծության հարցերում առավելագույն միավոր ստանալու համար։',
    puntos: [
      {
        es: '🇪🇸 Esquema obligatorio: 1. Infinitivo, 2. Conjugación, 3. Persona, 4. Número, 5. Tiempo, 6. Modo, 7. Forma simple o compuesta.',
        hy: '🇦🇲 Պարտադիր սխեման․ 1. Անորոշ ձև, 2. Խոնարհման խումբ, 3. Դեմք, 4. Թիվ, 5. Ժամանակաձև, 6. Եղանակ, 7. Պարզ կամ բաղադրյալ ձև։',
        tipo: 'texto',
      },
      {
        es: 'Ejemplo 1: "habíamos partido" → Infinitivo: partir (3.ª conj.) | 1.ª persona del plural | Pretérito pluscuamperfecto | Modo indicativo | Forma compuesta.',
        hy: 'Օրինակ 1․ «habíamos partido» → Անորոշ՝ partir (3-րդ խոն.) | Հոգնակի 1-ին դեմք | Վաղակատար անցյալ (Pretérito pluscuamperfecto) | Սահմանական եղանակ (Indicativo) | Բաղադրյալ ձև։',
        tipo: 'ejemplo',
      },
      {
        es: 'Ejemplo 2: "temieseis" → Infinitivo: temer (2.ª conj.) | 2.ª persona del plural | Pretérito imperfecto | Modo subjuntivo | Forma simple.',
        hy: 'Օրինակ 2․ «temieseis» → Անորոշ՝ temer (2-րդ խոն.) | Հոգնակի 2-րդ դեմք | Անկատար անցյալ (Pretérito imperfecto) | Ըղձական եղանակ (Subjuntivo) | Պարզ ձև։',
        tipo: 'ejemplo',
      },
      {
        es: '🇪🇸 ¡Atención a formas ambiguas! "Amamos" puede ser presente o pretérito perfecto simple. Sin contexto, ambas son válidas.',
        hy: '🇦🇲 Ուշադրությո՛ւն երկիմաստ ձևերին․ «amamos»-ը կարող է լինել ներկա կամ ավարտված անցյալ։ Առանց համատեքստի երկու մեկնաբանություններն էլ ճիշտ են։',
        tipo: 'alerta',
      },
      {
        es: '🇪🇸 "Amaba" puede ser 1.ª persona (yo amaba) o 3.ª persona (él/ella amaba). Se debe indicar la ambigüedad si no hay contexto.',
        hy: '🇦🇲 «Amaba»-ն կարող է լինել 1-ին դեմք (yo) կամ 3-րդ դեմք (él/ella/usted)։ Առանց համատեքստի անհնար է առանձնացնել մեկը։',
        tipo: 'alerta',
      },
    ],
    reglaEs: 'Sigue el orden estricto de los 7 elementos para no olvidar ninguno en la respuesta escrita.',
    reglaHy: 'Հետևի՛ր բոլոր 7 տարրերի խիստ հերթականությանը՝ քննության գրավոր պատասխանում ոչինչ բաց չթողնելու համար։',
    errorComunEs: 'Indicar solo el tiempo olvidando el modo o la conjugación. En el examen escolar se penaliza si falta algún rasgo.',
    errorComunHy: 'Միայն ժամանակը նշելը և եղանակը կամ խոնարհման խումբը մոռանալը քննությանը միավորների կորուստ է առաջացնում։',
  },
  {
    id: 13,
    tituloEs: '13. Preguntas de repaso con respuestas',
    tituloHy: '13. Կրկնության հարցեր՝ պատասխաններով',
    introduccionEs: 'Las 10 preguntas clave del temario oficial con sus respuestas desarrolladas.',
    introduccionHy: 'Պաշտոնական ծրագրի 10 առանցքային հարցերը՝ մանրամասն պատասխաններով։',
    puntos: [
      {
        es: '1. ¿Cuáles son las tres conjugaciones? → Primera: -ar; segunda: -er; tercera: -ir.',
        hy: '1. Որո՞նք են խոնարհման երեք խմբերը։ → Պատասխան․ Առաջին՝ -ar, երկրորդ՝ -er, երրորդ՝ -ir։',
        tipo: 'ejemplo',
      },
      {
        es: '2. ¿Cuáles son las formas no personales simples? → Infinitivo, gerundio y participio.',
        hy: '2. Որո՞նք են պարզ անդեմ ձևերը։ → Պատասխան․ Անորոշ ձև (infinitivo), գերունդիո (gerundio) և դերբայ (participio)։',
        tipo: 'ejemplo',
      },
      {
        es: '3. ¿Es regular el verbo ser? → No, es irregular.',
        hy: '3. Ser բայը կանոնավո՞ր է։ → Պատասխան․ Ո՛չ, անկանոն է։',
        tipo: 'ejemplo',
      },
      {
        es: '4. ¿Cómo se forman los tiempos compuestos? → Con haber conjugado y un participio.',
        hy: '4. Ինչպե՞ս են կազմվում բաղադրյալ ժամանակաձևերը։ → Պատասխան․ Խոնարհված haber օժանդակ բայով և participio-ով։',
        tipo: 'ejemplo',
      },
      {
        es: '5. Analiza “amaríamos”. → 1.ª persona del plural del condicional simple de indicativo del verbo amar.',
        hy: '5. Վերլուծի՛ր «amaríamos» ձևը։ → Պատասխան․ Amar բայի սահմանական եղանակի condicional simple, հոգնակի թվի 1-ին դեմք։',
        tipo: 'ejemplo',
      },
      {
        es: '6. ¿“Amara” y “amase” son tiempos diferentes? → No. Son dos formas del pretérito imperfecto de subjuntivo.',
        hy: '6. «Amara» և «amase» ձևերը տարբեր ժամանակաձևե՞ր են։ → Պատասխան․ Ո՛չ։ Դրանք pretérito imperfecto de subjuntivo-ի երկու տարբերակներն են։',
        tipo: 'ejemplo',
      },
      {
        es: '7. ¿Qué tiempo es “hayan temido”? → Pretérito perfecto compuesto de subjuntivo.',
        hy: '7. Ի՞նչ ժամանակաձև է «hayan temido»-ն։ → Պատասխան․ Ըղձական եղանակի pretérito perfecto compuesto։',
        tipo: 'ejemplo',
      },
      {
        es: '8. ¿Qué tiempo es “hubieron partido”? → Pretérito anterior de indicativo.',
        hy: '8. Ի՞նչ ժամանակաձև է «hubieron partido»-ն։ → Պատասխան․ Սահմանական եղանակի pretérito anterior։',
        tipo: 'ejemplo',
      },
      {
        es: '9. ¿Cuál es el imperativo de ser para tú? → Sé.',
        hy: '9. Ո՞րն է ser բայի հրամայականը tú-ի համար։ → Պատասխան․ Sé — եղի՛ր (շեշտով)։',
        tipo: 'ejemplo',
      },
      {
        es: '10. ¿Qué diferencia hay entre “amaré” y “amare”? → Amaré es futuro de indicativo; amare es futuro de subjuntivo.',
        hy: '10. Ի՞նչ տարբերություն կա «amaré» և «amare» ձևերի միջև։ → Պատասխան․ Amaré-ն սահմանական ապառնի է, amare-ն՝ ըղձական ապառնի։',
        tipo: 'ejemplo',
      },
    ],
  },
];
