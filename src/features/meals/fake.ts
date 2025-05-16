import { Meal } from "./domain";

const fakeMeals: Meal[] = [
    {
      id: "122213f1-38c8-4110-a59b-923eee37a312",
      name: "Ensalada fresca con atún, huevo y vegetales y otras muchas cosas",
      description: "Ensalada fresca con atún, huevo y vegetales y otras muchas cosas frescas y divertidas",
      type: "lunch",
      carbohydrate: "none",
      protein: "fish",
      ingredients: [
        { name: "Atún", quantity: "150", unit: "g" },
        { name: "Lechuga", quantity: "100", unit: "g" },
        { name: "Huevo", quantity: "2", unit: "unit" },
        { name: "Tomate", quantity: "1", unit: "unit" }
      ],
      steps: [
        "Hervir los huevos durante 10 minutos",
        "Lavar y cortar la lechuga y el tomate",
        "Mezclar con el atún escurrido",
        "Añadir los huevos cortados",
        "Aliñar al gusto con aceite y sal"
      ]
    },
    {
      id: "26fe614e-2cd2-4774-b8c8-c14bdc17ee2a",
      name: "Tostadas con aguacate",
      description: "Desayuno saludable con pan integral y aguacate",
      type: "breakfast",
      carbohydrate: "bread",
      protein: "none",
      ingredients: [
        { name: "Pan integral", quantity: "2", unit: "unit" },
        { name: "Aguacate", quantity: "1", unit: "unit" },
        { name: "Sal", quantity: "1", unit: "none" }
      ],
      steps: [
        "Tostar el pan",
        "Machacar el aguacate",
        "Untar el aguacate sobre las tostadas y añadir sal"
      ]
    },
    {
      id: "dc07f236-5e72-4a07-b373-1d549b84e511",
      name: "Bocadillo de jamón",
      description: "Snack clásico español con jamón serrano",
      type: "snack",
      carbohydrate: "bread",
      protein: "meat",
      ingredients: [
        { name: "Pan", quantity: "1", unit: "unit" },
        { name: "Jamón serrano", quantity: "50", unit: "g" }
      ],
      steps: [
        "Abrir el pan",
        "Colocar las lonchas de jamón en el interior",
        "Servir al gusto"
      ]
    },
    {
      id: "2d663af5-113a-43e3-9cf3-95de024b3ea5",
      name: "Garbanzos con espinacas",
      description: "Plato tradicional andaluz con legumbres",
      type: "lunch",
      carbohydrate: "legume",
      protein: "none",
      ingredients: [
        { name: "Garbanzos cocidos", quantity: "150", unit: "g" },
        { name: "Espinacas", quantity: "100", unit: "g" },
        { name: "Ajo", quantity: "1", unit: "unit" }
      ],
      steps: [
        "Saltear el ajo y añadir las espinacas",
        "Agregar los garbanzos y calentar",
        "Servir caliente"
      ]
    },
    {
      id: "c1905bd4-a8e1-4d60-8212-25d523c9e792",
      name: "Tortilla francesa",
      description: "Tortilla sencilla de huevo, rápida de hacer",
      type: "breakfast",
      carbohydrate: "none",
      protein: "egg",
      ingredients: [
        { name: "Huevos", quantity: "2", unit: "unit" },
        { name: "Sal", quantity: "1", unit: "none" },
        { name: "Aceite", quantity: "1", unit: "ml" }
      ],
      steps: [
        "Batir los huevos con sal",
        "Verter en una sartén caliente con aceite",
        "Cocinar hasta que cuaje"
      ]
    },
    {
      id: "63887fa5-9f25-4522-9b9e-5b4b4ce442af",
      name: "Salmón a la plancha",
      description: "Salmón cocinado a la plancha con guarnición ligera",
      type: "dinner",
      carbohydrate: "none",
      protein: "fish",
      ingredients: [
        { name: "Salmón", quantity: "200", unit: "g" },
        { name: "Limón", quantity: "1", unit: "unit" },
        { name: "Pimienta", quantity: "1", unit: "none" }
      ],
      steps: [
        "Salpimentar el salmón",
        "Cocinar a la plancha por ambos lados",
        "Añadir unas gotas de limón y servir"
      ]
    },
    {
      id: "c4670bb5-e1fd-4958-9024-b4430f36f03b",
      name: "Patatas cocidas con huevo",
      description: "Plato simple con patatas y huevo duro",
      type: "lunch",
      carbohydrate: "potato",
      protein: "egg",
      ingredients: [
        { name: "Patatas", quantity: "200", unit: "g" },
        { name: "Huevos", quantity: "2", unit: "unit" },
        { name: "Aceite de oliva", quantity: "1", unit: "ml" }
      ],
      steps: [
        "Cocer las patatas y los huevos",
        "Pelar y cortar ambos",
        "Aliñar con aceite y sal"
      ]
    },
    {
      id: "d29b0f6f-be76-4655-8092-12de6e9260db",
      name: "Pasta al pesto",
      description: "Espaguetis con salsa de albahaca y piñones",
      type: "dinner",
      carbohydrate: "pasta",
      protein: "none",
      ingredients: [
        { name: "Espaguetis", quantity: "100", unit: "g" },
        { name: "Pesto", quantity: "50", unit: "g" },
        { name: "Queso parmesano", quantity: "20", unit: "g" }
      ],
      steps: [
        "Hervir la pasta",
        "Mezclar con la salsa pesto",
        "Añadir queso por encima"
      ]
    },
    {
      id: "ec062186-7727-4fba-9faa-000ce5bf83e4",
      name: "Batido de frutas",
      description: "Snack refrescante y natural",
      type: "snack",
      carbohydrate: "none",
      protein: "none",
      ingredients: [
        { name: "Plátano", quantity: "1", unit: "unit" },
        { name: "Fresas", quantity: "100", unit: "g" },
        { name: "Leche", quantity: "200", unit: "ml" }
      ],
      steps: [
        "Lavar y cortar las frutas",
        "Batir junto con la leche",
        "Servir frío"
      ]
    },
    {
      id: "db22f69b-f601-4f59-94fe-c266d7e91f8d",
      name: "Arroz con pollo",
      description: "Clásico plato de arroz cocinado con pollo",
      type: "lunch",
      carbohydrate: "rice",
      protein: "meat",
      ingredients: [
        { name: "Arroz", quantity: "100", unit: "g" },
        { name: "Pollo", quantity: "150", unit: "g" },
        { name: "Pimiento", quantity: "50", unit: "g" }
      ],
      steps: [
        "Saltear el pollo con el pimiento",
        "Añadir el arroz y agua",
        "Cocer hasta que el arroz esté hecho"
      ]
    },
    {
      id: "8da7bdc6-a08d-4ee5-ae51-0ced9cd78143",
      name: "Yogur con cereales",
      description: "Desayuno rápido con yogur natural y cereales",
      type: "breakfast",
      carbohydrate: "none",
      protein: "none",
      ingredients: [
        { name: "Yogur natural", quantity: "1", unit: "unit" },
        { name: "Cereales integrales", quantity: "50", unit: "g" }
      ],
      steps: [
        "Colocar el yogur en un bol",
        "Añadir los cereales por encima",
        "Mezclar al gusto"
      ]
    },
    {
      id: "b5fc08bc-de74-4025-9143-2d5f0374363e",
      name: "Arroz a la cubana",
      description: "Arroz blanco con plátano frito y huevo",
      type: "lunch",
      carbohydrate: "rice",
      protein: "egg",
      ingredients: [
        { name: "Arroz blanco", quantity: "100", unit: "g" },
        { name: "Plátano", quantity: "1", unit: "unit" },
        { name: "Huevo", quantity: "1", unit: "unit" },
        { name: "Aceite", quantity: "2", unit: "ml" }
      ],
      steps: [
        "Cocer el arroz en agua con sal",
        "Freír el plátano en aceite",
        "Freír el huevo al gusto",
        "Servir todo junto en un plato"
      ]
    },
    {
      id: "ae26b07e-3283-40dd-a474-eb3385eb235b",
      name: "Lentejas estofadas",
      description: "Plato caliente de lentejas con verduras y chorizo",
      type: "both",
      carbohydrate: "legume",
      protein: "meat",
      ingredients: [
        { name: "Lentejas", quantity: "150", unit: "g" },
        { name: "Chorizo", quantity: "50", unit: "g" },
        { name: "Zanahoria", quantity: "100", unit: "g" },
        { name: "Cebolla", quantity: "50", unit: "g" }
      ],
      steps: [
        "Poner las lentejas en remojo",
        "Cocerlas junto a las verduras",
        "Añadir el chorizo en rodajas",
        "Dejar cocer hasta que todo esté tierno"
      ]
    },
    {
      id: "e3239ed3-c7af-49ef-89d5-6c5d477f250e",
      name: "Macarrones con tomate",
      description: "Pasta con salsa de tomate casera",
      type: "lunch",
      carbohydrate: "pasta",
      protein: "none",
      ingredients: [
        { name: "Macarrones", quantity: "100", unit: "g" },
        { name: "Tomate triturado", quantity: "200", unit: "g" },
        { name: "Ajo", quantity: "1", unit: "unit" },
        { name: "Aceite de oliva", quantity: "1", unit: "ml" }
      ],
      steps: [
        "Hervir los macarrones al dente",
        "Sofreír el ajo y añadir el tomate",
        "Cocinar la salsa durante 10 minutos",
        "Mezclar con la pasta y servir"
      ]
    },
    {
      id: "f0a56f22-403a-4f1a-a47a-859a3a4d9786",
      name: "Tortilla de patatas",
      description: "Clásica tortilla española con cebolla",
      type: "dinner",
      carbohydrate: "potato",
      protein: "egg",
      ingredients: [
        { name: "Patatas", quantity: "300", unit: "g" },
        { name: "Huevos", quantity: "3", unit: "unit" },
        { name: "Cebolla", quantity: "50", unit: "g" },
        { name: "Aceite", quantity: "3", unit: "ml" }
      ],
      steps: [
        "Pelar y cortar las patatas y la cebolla",
        "Freírlas hasta que estén blandas",
        "Batir los huevos y mezclar con las patatas",
        "Cocinar la mezcla en una sartén hasta que cuaje"
      ]
    },
    {
        id: "b31f2dcf-3269-4153-8939-78b0267bb1c9",
        name: "Pollo al horno con patatas",
        description: "Muslos de pollo asados con patatas y especias",
        type: "dinner",
        carbohydrate: "potato",
        protein: "meat",
        ingredients: [
          { name: "Muslos de pollo", quantity: "2", unit: "unit" },
          { name: "Patatas", quantity: "200", unit: "g" },
          { name: "Aceite", quantity: "2", unit: "ml" },
          { name: "Ajo", quantity: "2", unit: "unit" }
        ],
        steps: [
          "Precalentar el horno a 200°C",
          "Colocar el pollo y las patatas en una bandeja",
          "Añadir aceite, ajo y especias",
          "Hornear durante 45 minutos"
        ]
      },
      {
        id: "849642cb-7274-44e2-866e-39b6be81ddf5",
        name: "Sopa de fideos",
        description: "Sopa caliente con fideos y pollo",
        type: "dinner",
        carbohydrate: "pasta",
        protein: "meat",
        ingredients: [
          { name: "Fideos", quantity: "50", unit: "g" },
          { name: "Pollo", quantity: "100", unit: "g" },
          { name: "Zanahoria", quantity: "50", unit: "g" },
          { name: "Caldo de ave", quantity: "500", unit: "ml" }
        ],
        steps: [
          "Cocer el pollo en el caldo",
          "Agregar la zanahoria rallada",
          "Añadir los fideos y cocer 10 minutos",
          "Servir caliente"
        ]
      },
      {
        id: "23d90c3f-7544-44c7-9031-2deb3b25bf72",
        name: "Revuelto de champiñones",
        description: "Huevos revueltos con champiñones y ajo",
        type: "dinner",
        carbohydrate: "none",
        protein: "egg",
        ingredients: [
          { name: "Huevos", quantity: "2", unit: "unit" },
          { name: "Champiñones", quantity: "100", unit: "g" },
          { name: "Ajo", quantity: "1", unit: "unit" },
          { name: "Aceite de oliva", quantity: "1", unit: "ml" }
        ],
        steps: [
          "Cortar los champiñones y el ajo",
          "Saltearlos en una sartén con aceite",
          "Añadir los huevos batidos",
          "Remover hasta que cuajen"
        ]
      },
      {
        id: "d83c5bff-d143-4cf5-a28d-a21676d24392",
        name: "Puré de calabacín",
        description: "Puré suave de calabacín con queso",
        type: "dinner",
        carbohydrate: "none",
        protein: "none",
        ingredients: [
          { name: "Calabacín", quantity: "300", unit: "g" },
          { name: "Queso crema", quantity: "50", unit: "g" },
          { name: "Cebolla", quantity: "50", unit: "g" },
          { name: "Aceite", quantity: "1", unit: "ml" }
        ],
        steps: [
          "Rehogar la cebolla en aceite",
          "Añadir el calabacín troceado y cocer con agua",
          "Triturar con queso crema hasta obtener puré",
          "Servir caliente"
        ]
      },
      {
        id: "197c897f-0499-40e7-832a-d322288582a7",
        name: "Hamburguesa casera",
        description: "Hamburguesa de carne con pan y verduras",
        type: "lunch",
        carbohydrate: "bread",
        protein: "meat",
        ingredients: [
          { name: "Carne picada", quantity: "150", unit: "g" },
          { name: "Pan de hamburguesa", quantity: "1", unit: "unit" },
          { name: "Lechuga", quantity: "30", unit: "g" },
          { name: "Tomate", quantity: "1", unit: "unit" }
        ],
        steps: [
          "Formar una hamburguesa con la carne",
          "Cocinarla en una sartén",
          "Montar la hamburguesa con el pan y las verduras",
          "Servir con salsa al gusto"
        ]
      },
      {
        id: "20f5c85f-3134-4740-8944-a174a012a021",
        name: "Espaguetis con atún",
        description: "Pasta con atún y tomate frito",
        type: "lunch",
        carbohydrate: "pasta",
        protein: "fish",
        ingredients: [
          { name: "Espaguetis", quantity: "100", unit: "g" },
          { name: "Atún", quantity: "100", unit: "g" },
          { name: "Tomate frito", quantity: "150", unit: "g" },
          { name: "Orégano", quantity: "1", unit: "none" }
        ],
        steps: [
          "Hervir los espaguetis",
          "Calentar el tomate y mezclar con el atún",
          "Añadir orégano y servir con la pasta"
        ]
      },
      {
        id: "acd04a33-fecc-4d2c-8d08-679f186bc9d1",
        name: "Croquetas de jamón",
        description: "Croquetas cremosas de jamón serrano",
        type: "dinner",
        carbohydrate: "bread",
        protein: "meat",
        ingredients: [
          { name: "Jamón serrano", quantity: "100", unit: "g" },
          { name: "Leche", quantity: "250", unit: "ml" },
          { name: "Harina", quantity: "50", unit: "g" },
          { name: "Pan rallado", quantity: "100", unit: "g" }
        ],
        steps: [
          "Hacer bechamel con harina, leche y jamón",
          "Dejar enfriar la masa",
          "Formar croquetas, empanar y freír",
          "Servir caliente"
        ]
      },
      {
        id: "a8dfb392-eae5-4f05-829b-054d5f7f2025",
        name: "Arroz con verduras",
        description: "Arroz salteado con verduras variadas",
        type: "lunch",
        carbohydrate: "rice",
        protein: "none",
        ingredients: [
          { name: "Arroz", quantity: "100", unit: "g" },
          { name: "Pimiento", quantity: "50", unit: "g" },
          { name: "Calabacín", quantity: "50", unit: "g" },
          { name: "Zanahoria", quantity: "50", unit: "g" }
        ],
        steps: [
          "Cocer el arroz",
          "Saltear las verduras",
          "Mezclar todo en la sartén",
          "Servir caliente"
        ]
      },
      {
        id: "8be0d44f-d452-43c1-a5e7-837686051b62",
        name: "Huevos a la flamenca",
        description: "Huevos al horno con tomate y guisantes",
        type: "dinner",
        carbohydrate: "none",
        protein: "egg",
        ingredients: [
          { name: "Huevos", quantity: "2", unit: "unit" },
          { name: "Tomate triturado", quantity: "150", unit: "g" },
          { name: "Guisantes", quantity: "50", unit: "g" },
          { name: "Jamón", quantity: "50", unit: "g" }
        ],
        steps: [
          "Colocar el tomate en una cazuela",
          "Añadir guisantes y jamón",
          "Cascar los huevos encima",
          "Hornear hasta que cuajen"
        ]
      },
      {
        id: "933a8364-a977-482b-b08b-6426c1b94182",
        name: "Sandwich vegetal",
        description: "Pan integral con verduras frescas y huevo duro",
        type: "lunch",
        carbohydrate: "bread",
        protein: "egg",
        ingredients: [
          { name: "Pan integral", quantity: "2", unit: "unit" },
          { name: "Lechuga", quantity: "30", unit: "g" },
          { name: "Huevo duro", quantity: "1", unit: "unit" },
          { name: "Tomate", quantity: "1", unit: "unit" }
        ],
        steps: [
          "Cocer el huevo",
          "Montar el sandwich con las verduras y el huevo cortado",
          "Aliñar con un poco de aceite si se desea"
        ]
      }
  ];
  
  export { fakeMeals };