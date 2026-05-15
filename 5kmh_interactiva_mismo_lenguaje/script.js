const pixelWord = document.querySelector('#pixelWord');
const spiralScore = document.querySelector('#spiralScore');
const walkButtons = document.querySelector('#walkButtons');
const routeHeroTitle = document.querySelector('#routeHeroTitle');
const walkTitle = document.querySelector('#walkTitle');
const walkStats = document.querySelector('#walkStats');
const activeAgent = document.querySelector('#activeAgent');
const wordState = document.querySelector('#wordState');
const agentExplanation = document.querySelector('#agentExplanation');
const spiralInsight = document.querySelector('#spiralInsight');
const clearAgent = document.querySelector('#clearAgent');
const walkDiagnosis = document.querySelector('#walkDiagnosis');
const comparisonGrid = document.querySelector('#comparisonGrid');
const legendButtons = [...document.querySelectorAll('.legend-item')];

const baseSlots = [{"x":0.0,"y":337.6,"w":56.27,"h":56.27},{"x":0.0,"y":393.86,"w":56.27,"h":56.27},{"x":0.0,"y":450.13,"w":56.27,"h":56.27},{"x":0.0,"y":506.39,"w":56.27,"h":56.27},{"x":0.0,"y":562.66,"w":56.27,"h":56.27},{"x":0.0,"y":843.99,"w":56.27,"h":56.27},{"x":0.0,"y":900.26,"w":56.27,"h":56.27},{"x":56.27,"y":337.6,"w":56.27,"h":56.27},{"x":56.27,"y":393.86,"w":56.27,"h":56.27},{"x":56.27,"y":450.13,"w":56.27,"h":56.27},{"x":56.27,"y":506.39,"w":56.27,"h":56.27},{"x":56.27,"y":562.66,"w":56.27,"h":56.27},{"x":56.27,"y":618.93,"w":56.27,"h":56.27},{"x":56.27,"y":843.99,"w":56.27,"h":56.27},{"x":56.27,"y":900.26,"w":56.27,"h":56.27},{"x":112.53,"y":337.6,"w":56.27,"h":56.27},{"x":112.53,"y":393.86,"w":56.27,"h":56.27},{"x":112.53,"y":562.66,"w":56.27,"h":56.27},{"x":112.53,"y":618.93,"w":56.27,"h":56.27},{"x":112.53,"y":843.99,"w":56.27,"h":56.27},{"x":112.53,"y":900.26,"w":56.27,"h":56.27},{"x":168.8,"y":337.6,"w":56.27,"h":56.27},{"x":168.8,"y":393.86,"w":56.27,"h":56.27},{"x":168.8,"y":562.66,"w":56.27,"h":56.27},{"x":168.8,"y":618.93,"w":56.27,"h":56.27},{"x":168.8,"y":843.99,"w":56.27,"h":56.27},{"x":168.8,"y":900.26,"w":56.27,"h":56.27},{"x":225.06,"y":337.6,"w":56.27,"h":56.27},{"x":225.06,"y":393.86,"w":56.27,"h":56.27},{"x":225.06,"y":562.66,"w":56.27,"h":56.27},{"x":225.06,"y":618.93,"w":56.27,"h":56.27},{"x":225.06,"y":843.99,"w":56.27,"h":56.27},{"x":225.06,"y":900.26,"w":56.27,"h":56.27},{"x":281.33,"y":337.6,"w":56.27,"h":56.27},{"x":281.33,"y":393.86,"w":56.27,"h":56.27},{"x":281.33,"y":562.66,"w":56.27,"h":56.27},{"x":281.33,"y":618.93,"w":56.27,"h":56.27},{"x":281.33,"y":843.99,"w":56.27,"h":56.27},{"x":281.33,"y":900.26,"w":56.27,"h":56.27},{"x":337.6,"y":337.6,"w":56.27,"h":56.27},{"x":337.6,"y":393.86,"w":56.27,"h":56.27},{"x":337.6,"y":562.66,"w":56.27,"h":56.27},{"x":337.6,"y":618.93,"w":56.27,"h":56.27},{"x":337.6,"y":843.99,"w":56.27,"h":56.27},{"x":337.6,"y":900.26,"w":56.27,"h":56.27},{"x":393.86,"y":337.6,"w":56.27,"h":56.27},{"x":393.86,"y":393.86,"w":56.27,"h":56.27},{"x":393.86,"y":562.66,"w":56.27,"h":56.27},{"x":393.86,"y":618.93,"w":56.27,"h":56.27},{"x":393.86,"y":843.99,"w":56.27,"h":56.27},{"x":393.86,"y":900.26,"w":56.27,"h":56.27},{"x":450.13,"y":337.6,"w":56.27,"h":56.27},{"x":450.13,"y":393.86,"w":56.27,"h":56.27},{"x":450.13,"y":562.66,"w":56.27,"h":56.27},{"x":450.13,"y":618.93,"w":56.27,"h":56.27},{"x":450.13,"y":843.99,"w":56.27,"h":56.27},{"x":450.13,"y":900.26,"w":56.27,"h":56.27},{"x":506.39,"y":337.6,"w":56.27,"h":56.27},{"x":506.39,"y":393.86,"w":56.27,"h":56.27},{"x":506.39,"y":618.93,"w":56.27,"h":56.27},{"x":506.39,"y":675.19,"w":56.27,"h":56.27},{"x":506.39,"y":731.46,"w":56.27,"h":56.27},{"x":506.39,"y":787.72,"w":56.27,"h":56.27},{"x":506.39,"y":843.99,"w":56.27,"h":56.27},{"x":562.66,"y":337.6,"w":56.27,"h":56.27},{"x":562.66,"y":393.86,"w":56.27,"h":56.27},{"x":562.66,"y":675.19,"w":56.27,"h":56.27},{"x":562.66,"y":731.46,"w":56.27,"h":56.27},{"x":562.66,"y":787.72,"w":56.27,"h":56.27},{"x":787.72,"y":0.0,"w":56.27,"h":56.27},{"x":843.99,"y":0.0,"w":56.27,"h":56.27},{"x":843.99,"y":56.27,"w":56.27,"h":56.27},{"x":843.99,"y":112.53,"w":56.27,"h":56.27},{"x":843.99,"y":168.8,"w":56.27,"h":56.27},{"x":843.99,"y":225.06,"w":56.27,"h":56.27},{"x":843.99,"y":281.33,"w":56.27,"h":56.27},{"x":843.99,"y":337.6,"w":56.27,"h":56.27},{"x":843.99,"y":393.86,"w":56.27,"h":56.27},{"x":843.99,"y":450.13,"w":56.27,"h":56.27},{"x":843.99,"y":506.39,"w":56.27,"h":56.27},{"x":843.99,"y":562.66,"w":56.27,"h":56.27},{"x":843.99,"y":618.93,"w":56.27,"h":56.27},{"x":843.99,"y":675.19,"w":56.27,"h":56.27},{"x":843.99,"y":731.46,"w":56.27,"h":56.27},{"x":843.99,"y":787.72,"w":56.27,"h":56.27},{"x":843.99,"y":843.99,"w":56.27,"h":56.27},{"x":843.99,"y":900.26,"w":56.27,"h":56.27},{"x":900.26,"y":0.0,"w":56.27,"h":56.27},{"x":900.26,"y":56.27,"w":56.27,"h":56.27},{"x":900.26,"y":112.53,"w":56.27,"h":56.27},{"x":900.26,"y":168.8,"w":56.27,"h":56.27},{"x":900.26,"y":225.06,"w":56.27,"h":56.27},{"x":900.26,"y":281.33,"w":56.27,"h":56.27},{"x":900.26,"y":337.6,"w":56.27,"h":56.27},{"x":900.26,"y":393.86,"w":56.27,"h":56.27},{"x":900.26,"y":450.13,"w":56.27,"h":56.27},{"x":900.26,"y":506.39,"w":56.27,"h":56.27},{"x":900.26,"y":562.66,"w":56.27,"h":56.27},{"x":900.26,"y":618.93,"w":56.27,"h":56.27},{"x":900.26,"y":675.19,"w":56.27,"h":56.27},{"x":900.26,"y":731.46,"w":56.27,"h":56.27},{"x":900.26,"y":787.72,"w":56.27,"h":56.27},{"x":900.26,"y":843.99,"w":56.27,"h":56.27},{"x":900.26,"y":900.26,"w":56.27,"h":56.27},{"x":956.52,"y":562.66,"w":56.27,"h":56.27},{"x":956.52,"y":618.93,"w":56.27,"h":56.27},{"x":1012.79,"y":562.66,"w":56.27,"h":56.27},{"x":1012.79,"y":618.93,"w":56.27,"h":56.27},{"x":1069.05,"y":506.39,"w":56.27,"h":56.27},{"x":1069.05,"y":675.19,"w":56.27,"h":56.27},{"x":1069.05,"y":731.46,"w":56.27,"h":56.27},{"x":1125.32,"y":506.39,"w":56.27,"h":56.27},{"x":1125.32,"y":675.19,"w":56.27,"h":56.27},{"x":1125.32,"y":731.46,"w":56.27,"h":56.27},{"x":1181.59,"y":450.13,"w":56.27,"h":56.27},{"x":1181.59,"y":731.46,"w":56.27,"h":56.27},{"x":1181.59,"y":787.72,"w":56.27,"h":56.27},{"x":1237.85,"y":450.13,"w":56.27,"h":56.27},{"x":1237.85,"y":731.46,"w":56.27,"h":56.27},{"x":1237.85,"y":787.72,"w":56.27,"h":56.27},{"x":1237.85,"y":843.99,"w":56.27,"h":56.27},{"x":1294.12,"y":393.86,"w":56.27,"h":56.27},{"x":1294.12,"y":787.72,"w":56.27,"h":56.27},{"x":1294.12,"y":843.99,"w":56.27,"h":56.27},{"x":1350.39,"y":337.6,"w":56.27,"h":56.27},{"x":1350.39,"y":843.99,"w":56.27,"h":56.27},{"x":1350.39,"y":900.26,"w":56.27,"h":56.27},{"x":1406.65,"y":337.6,"w":56.27,"h":56.27},{"x":1406.65,"y":843.99,"w":56.27,"h":56.27},{"x":1406.65,"y":900.26,"w":56.27,"h":56.27},{"x":1634.59,"y":337.6,"w":56.27,"h":56.27},{"x":1634.59,"y":393.86,"w":56.27,"h":56.27},{"x":1690.86,"y":337.6,"w":56.27,"h":56.27},{"x":1690.86,"y":393.86,"w":56.27,"h":56.27},{"x":1690.86,"y":450.13,"w":56.27,"h":56.27},{"x":1690.86,"y":506.39,"w":56.27,"h":56.27},{"x":1690.86,"y":562.66,"w":56.27,"h":56.27},{"x":1690.86,"y":618.93,"w":56.27,"h":56.27},{"x":1690.86,"y":675.19,"w":56.27,"h":56.27},{"x":1690.86,"y":731.46,"w":56.27,"h":56.27},{"x":1690.86,"y":787.72,"w":56.27,"h":56.27},{"x":1690.86,"y":843.99,"w":56.27,"h":56.27},{"x":1690.86,"y":900.26,"w":56.27,"h":56.27},{"x":1747.12,"y":337.6,"w":56.27,"h":56.27},{"x":1747.12,"y":393.86,"w":56.27,"h":56.27},{"x":1747.12,"y":450.13,"w":56.27,"h":56.27},{"x":1747.12,"y":506.39,"w":56.27,"h":56.27},{"x":1747.12,"y":562.66,"w":56.27,"h":56.27},{"x":1747.12,"y":618.93,"w":56.27,"h":56.27},{"x":1747.12,"y":675.19,"w":56.27,"h":56.27},{"x":1747.12,"y":731.46,"w":56.27,"h":56.27},{"x":1747.12,"y":787.72,"w":56.27,"h":56.27},{"x":1747.12,"y":843.99,"w":56.27,"h":56.27},{"x":1747.12,"y":900.26,"w":56.27,"h":56.27},{"x":1803.39,"y":450.13,"w":56.27,"h":56.27},{"x":1803.39,"y":506.39,"w":56.27,"h":56.27},{"x":1859.66,"y":393.86,"w":56.27,"h":56.27},{"x":1859.66,"y":450.13,"w":56.27,"h":56.27},{"x":1915.92,"y":337.6,"w":56.27,"h":56.27},{"x":1915.92,"y":393.86,"w":56.27,"h":56.27},{"x":1972.19,"y":337.6,"w":56.27,"h":56.27},{"x":1972.19,"y":393.86,"w":56.27,"h":56.27},{"x":2028.45,"y":393.86,"w":56.27,"h":56.27},{"x":2028.45,"y":450.13,"w":56.27,"h":56.27},{"x":2084.72,"y":450.13,"w":56.27,"h":56.27},{"x":2084.72,"y":506.39,"w":56.27,"h":56.27},{"x":2084.72,"y":562.66,"w":56.27,"h":56.27},{"x":2140.99,"y":393.86,"w":56.27,"h":56.27},{"x":2140.99,"y":450.13,"w":56.27,"h":56.27},{"x":2197.25,"y":337.6,"w":56.27,"h":56.27},{"x":2197.25,"y":393.86,"w":56.27,"h":56.27},{"x":2253.52,"y":337.6,"w":56.27,"h":56.27},{"x":2253.52,"y":393.86,"w":56.27,"h":56.27},{"x":2309.78,"y":393.86,"w":56.27,"h":56.27},{"x":2309.78,"y":450.13,"w":56.27,"h":56.27},{"x":2309.78,"y":506.39,"w":56.27,"h":56.27},{"x":2309.78,"y":562.66,"w":56.27,"h":56.27},{"x":2309.78,"y":618.93,"w":56.27,"h":56.27},{"x":2309.78,"y":675.19,"w":56.27,"h":56.27},{"x":2309.78,"y":731.46,"w":56.27,"h":56.27},{"x":2309.78,"y":787.72,"w":56.27,"h":56.27},{"x":2309.78,"y":843.99,"w":56.27,"h":56.27},{"x":2309.78,"y":900.26,"w":56.27,"h":56.27},{"x":2366.05,"y":450.13,"w":56.27,"h":56.27},{"x":2366.05,"y":506.39,"w":56.27,"h":56.27},{"x":2366.05,"y":562.66,"w":56.27,"h":56.27},{"x":2366.05,"y":618.93,"w":56.27,"h":56.27},{"x":2366.05,"y":675.19,"w":56.27,"h":56.27},{"x":2366.05,"y":731.46,"w":56.27,"h":56.27},{"x":2366.05,"y":787.72,"w":56.27,"h":56.27},{"x":2366.05,"y":843.99,"w":56.27,"h":56.27},{"x":2366.05,"y":900.26,"w":56.27,"h":56.27},{"x":2591.11,"y":843.99,"w":56.27,"h":56.27},{"x":2591.11,"y":900.26,"w":56.27,"h":56.27},{"x":2647.38,"y":787.72,"w":56.27,"h":56.27},{"x":2647.38,"y":843.99,"w":56.27,"h":56.27},{"x":2703.65,"y":731.46,"w":56.27,"h":56.27},{"x":2703.65,"y":787.72,"w":56.27,"h":56.27},{"x":2759.91,"y":675.19,"w":56.27,"h":56.27},{"x":2759.91,"y":731.46,"w":56.27,"h":56.27},{"x":2816.18,"y":618.93,"w":56.27,"h":56.27},{"x":2816.18,"y":675.19,"w":56.27,"h":56.27},{"x":2872.45,"y":562.66,"w":56.27,"h":56.27},{"x":2872.45,"y":618.93,"w":56.27,"h":56.27},{"x":2928.71,"y":506.39,"w":56.27,"h":56.27},{"x":2928.71,"y":562.66,"w":56.27,"h":56.27},{"x":2984.98,"y":450.13,"w":56.27,"h":56.27},{"x":2984.98,"y":506.39,"w":56.27,"h":56.27},{"x":3041.24,"y":393.86,"w":56.27,"h":56.27},{"x":3041.24,"y":450.13,"w":56.27,"h":56.27},{"x":3097.51,"y":337.6,"w":56.27,"h":56.27},{"x":3097.51,"y":393.86,"w":56.27,"h":56.27},{"x":3153.78,"y":281.33,"w":56.27,"h":56.27},{"x":3153.78,"y":337.6,"w":56.27,"h":56.27},{"x":3378.84,"y":0.0,"w":56.27,"h":56.27},{"x":3378.84,"y":56.27,"w":56.27,"h":56.27},{"x":3435.11,"y":0.0,"w":56.27,"h":56.27},{"x":3435.11,"y":56.27,"w":56.27,"h":56.27},{"x":3435.11,"y":112.53,"w":56.27,"h":56.27},{"x":3435.11,"y":168.8,"w":56.27,"h":56.27},{"x":3435.11,"y":225.06,"w":56.27,"h":56.27},{"x":3435.11,"y":281.33,"w":56.27,"h":56.27},{"x":3435.11,"y":337.6,"w":56.27,"h":56.27},{"x":3435.11,"y":393.86,"w":56.27,"h":56.27},{"x":3435.11,"y":450.13,"w":56.27,"h":56.27},{"x":3435.11,"y":506.39,"w":56.27,"h":56.27},{"x":3435.11,"y":562.66,"w":56.27,"h":56.27},{"x":3435.11,"y":618.93,"w":56.27,"h":56.27},{"x":3435.11,"y":675.19,"w":56.27,"h":56.27},{"x":3435.11,"y":731.46,"w":56.27,"h":56.27},{"x":3435.11,"y":787.72,"w":56.27,"h":56.27},{"x":3435.11,"y":843.99,"w":56.27,"h":56.27},{"x":3435.11,"y":900.26,"w":56.27,"h":56.27},{"x":3491.37,"y":0.0,"w":56.27,"h":56.27},{"x":3491.37,"y":56.27,"w":56.27,"h":56.27},{"x":3491.37,"y":112.53,"w":56.27,"h":56.27},{"x":3491.37,"y":168.8,"w":56.27,"h":56.27},{"x":3491.37,"y":225.06,"w":56.27,"h":56.27},{"x":3491.37,"y":281.33,"w":56.27,"h":56.27},{"x":3491.37,"y":337.6,"w":56.27,"h":56.27},{"x":3491.37,"y":393.86,"w":56.27,"h":56.27},{"x":3491.37,"y":450.13,"w":56.27,"h":56.27},{"x":3491.37,"y":506.39,"w":56.27,"h":56.27},{"x":3491.37,"y":562.66,"w":56.27,"h":56.27},{"x":3491.37,"y":618.93,"w":56.27,"h":56.27},{"x":3491.37,"y":675.19,"w":56.27,"h":56.27},{"x":3491.37,"y":731.46,"w":56.27,"h":56.27},{"x":3491.37,"y":787.72,"w":56.27,"h":56.27},{"x":3491.37,"y":843.99,"w":56.27,"h":56.27},{"x":3491.37,"y":900.26,"w":56.27,"h":56.27},{"x":3547.64,"y":450.13,"w":56.27,"h":56.27},{"x":3547.64,"y":506.39,"w":56.27,"h":56.27},{"x":3603.9,"y":393.86,"w":56.27,"h":56.27},{"x":3603.9,"y":450.13,"w":56.27,"h":56.27},{"x":3660.17,"y":337.6,"w":56.27,"h":56.27},{"x":3660.17,"y":393.86,"w":56.27,"h":56.27},{"x":3716.44,"y":337.6,"w":56.27,"h":56.27},{"x":3716.44,"y":393.86,"w":56.27,"h":56.27},{"x":3772.7,"y":337.6,"w":56.27,"h":56.27},{"x":3772.7,"y":393.86,"w":56.27,"h":56.27},{"x":3828.97,"y":337.6,"w":56.27,"h":56.27},{"x":3828.97,"y":393.86,"w":56.27,"h":56.27},{"x":3885.23,"y":337.6,"w":56.27,"h":56.27},{"x":3885.23,"y":393.86,"w":56.27,"h":56.27},{"x":3885.23,"y":450.13,"w":56.27,"h":56.27},{"x":3941.5,"y":393.86,"w":56.27,"h":56.27},{"x":3941.5,"y":450.13,"w":56.27,"h":56.27},{"x":3941.5,"y":506.39,"w":56.27,"h":56.27},{"x":3941.5,"y":562.66,"w":56.27,"h":56.27},{"x":3941.5,"y":618.93,"w":56.27,"h":56.27},{"x":3941.5,"y":675.19,"w":56.27,"h":56.27},{"x":3941.5,"y":731.46,"w":56.27,"h":56.27},{"x":3941.5,"y":787.72,"w":56.27,"h":56.27},{"x":3941.5,"y":843.99,"w":56.27,"h":56.27},{"x":3941.5,"y":900.26,"w":56.27,"h":56.27},{"x":3997.77,"y":450.13,"w":56.27,"h":56.27},{"x":3997.77,"y":506.39,"w":56.27,"h":56.27},{"x":3997.77,"y":562.66,"w":56.27,"h":56.27},{"x":3997.77,"y":618.93,"w":56.27,"h":56.27},{"x":3997.77,"y":675.19,"w":56.27,"h":56.27},{"x":3997.77,"y":731.46,"w":56.27,"h":56.27},{"x":3997.77,"y":787.72,"w":56.27,"h":56.27},{"x":3997.77,"y":843.99,"w":56.27,"h":56.27},{"x":3997.77,"y":900.26,"w":56.27,"h":56.27}];

const routeAccents = {
  'Coyoacán': '#dc681a',
  'Colonia del Valle': '#9ba44c',
  'Centro Histórico': '#63949e',
  'Reforma': '#1c538d'
};

const colors = {
  infraestructura: '#dc681a',
  vehiculos: '#1c538d',
  humano: '#63949e',
  noHumano: '#9ba44c',
  decision: '#2ca920'


};

const agentNames = {
  infraestructura: 'Infraestructura',
  vehiculos: 'Vehículos',
  humano: 'Humano',
  noHumano: 'No humano',
  decision: 'Decisión propia'
};

const actionNames = {
  esperar: 'Esperar',
  frenar: 'Frenar',
  acelerar: 'Acelerar',
  desviarse: 'Desviarse'
};

const actionOrder = ['esperar', 'frenar', 'acelerar', 'desviarse'];
const actionIntensity = {
  esperar: 0,
  frenar: 1,
  acelerar: 2,
  desviarse: 3
};
const agentOrder = ['infraestructura', 'vehiculos', 'humano', 'noHumano', 'decision'];

const agentExplanations = {
  infraestructura: {
    title: 'Infraestructura',
    body: 'Cruces, banquetas y bordes marcan el paso antes de que el cuerpo decida. La ciudad construida aparece como ritmo impuesto.'
  },
  vehiculos: {
    title: 'Vehículos',
    body: 'El vehículo presiona el recorrido: espera, freno o aceleración aparecen como cálculo corporal frente a una fuerza móvil.'
  },
  humano: {
    title: 'Humano',
    body: 'Otros cuerpos producen corriente. No siempre bloquean: ajustan distancia, ritmo y dirección.'
  },
  noHumano: {
    title: 'No humano',
    body: 'Objetos, postes y presencias menores abren microdecisiones: rodear, esquivar, detenerse o sostener el paso.'
  },
  decision: {
    title: 'Decisión propia',
    body: 'Aquí el cuerpo reorganiza la ruta desde su propia lectura: elegir, corregir, acelerar o cambiar de dirección.'
  }
};

const generalExplanation = {
  title: 'Lectura general',
  body: 'Ciudad, cuerpos, objetos y decisiones aparecen juntos; el filtro pregunta quién toma el mando.'
};

const routeReadings = {
  'Coyoacán': 'Coyoacán no tiene un mando único: avanzar exige alternar obediencia al cruce, cálculo frente al coche y corrección ante otros cuerpos. La caminata importa porque convierte una zona barrial en sistema de negociación constante.',
  'Colonia del Valle': 'Colonia del Valle regula sin dramatismo. El desajuste está en que casi nada obliga a decidir: el cuerpo avanza porque acepta pausas pequeñas y frenos previsibles, no porque conquiste el espacio.',
  'Centro Histórico': 'Centro Histórico vuelve ambigua la multitud: no solo bloquea, también empuja. El cuerpo pierde autonomía fina y avanza por acoplamiento; la ciudad funciona más como corriente que como trayecto elegido.',
  'Reforma': 'Reforma promete continuidad, pero obliga a trabajar contra interrupciones. El corredor no acelera por sí mismo: el cuerpo debe leer bordes, esperar aperturas y desviarse para sostener el avance.'
};

const agentActionCriticalReadings = {
  infraestructura: {
    esperar: 'La infraestructura controla el tiempo antes que la dirección. El cuerpo no negocia con una persona sino con una regla espacial: para avanzar tiene que aceptar que la calle decide primero.',
    frenar: 'La infraestructura corta la continuidad sin desaparecer el camino. Ese freno importa porque vuelve visible una ciudad diseñada como permiso intermitente, no como flujo peatonal sostenido.',
    acelerar: 'Cuando la infraestructura acelera, no libera del todo: abre una ventana breve. El cuerpo avanza por oportunidad, no por comodidad; el espacio urbano administra el ritmo como turno.',
    desviarse: 'El desvío por infraestructura revela una falla de encaje entre trazo y uso. El cuerpo tiene que corregir el diseño para volverlo transitable.'
  },
  vehiculos: {
    esperar: 'El vehículo controla el movimiento mediante riesgo. La espera no es pausa neutral: es cálculo corporal frente a una fuerza que ocupa más espacio y decide el margen de cruce.',
    frenar: 'El freno vehicular reduce el paso a defensa. El cuerpo avanza midiendo amenaza, no orientación; la calle deja de ser ruta y se vuelve zona de exposición.',
    acelerar: 'Acelerar ante vehículos no significa libertad, sino urgencia. El cuerpo gana tiempo a costa de tensión: cruza porque el sistema lo obliga a resolver rápido.',
    desviarse: 'Desviarse por vehículos desplaza el derecho de paso. El cuerpo no elige otra ruta por deseo, sino para esquivar una jerarquía urbana que privilegia velocidad motorizada.'
  },
  humano: {
    esperar: 'La espera producida por otros cuerpos revela una ciudad saturada por presencia, no por obstáculo fijo. Avanzar exige leer ritmos ajenos y aceptar que el espacio común también detiene.',
    frenar: 'El freno humano comprime la autonomía del paso. La contradicción es que la vida peatonal, que debería sostener la caminata, también la vuelve fricción.',
    acelerar: 'Cuando lo humano acelera, la multitud deja de ser bloqueo y se vuelve corriente. El cuerpo avanza acoplándose, no decidiendo solo; caminar se convierte en seguir una presión colectiva.',
    desviarse: 'El desvío humano obliga a negociar proximidad. La ruta se vuelve social: avanzar depende de ceder, rodear y encontrar huecos dentro de otros cuerpos.'
  },
  noHumano: {
    esperar: 'La espera ante lo no humano desplaza el control hacia presencias menores. El sistema urbano no falla por gran infraestructura, sino por detalles que suspenden la continuidad del cuerpo.',
    frenar: 'El freno no humano obliga a mirar cerca. Esa escala importa porque rompe la abstracción del trayecto: avanzar depende de leer objetos, bordes y pequeñas presencias.',
    acelerar: 'Acelerar ante lo no humano convierte la interrupción pequeña en decisión rápida. El cuerpo no discute con el sistema; lo esquiva antes de que el detalle se vuelva bloqueo.',
    desviarse: 'El desvío no humano revela una ciudad llena de restos y microobstáculos. El cuerpo avanza componiendo ruta alrededor de lo que el diseño no registra.'
  },
  decision: {
    esperar: 'La espera decidida no es pasividad. El cuerpo recupera control suspendiendo el avance: decide cuándo no obedecer al impulso de seguir.',
    frenar: 'El freno propio vuelve la caminata táctica. El cuerpo no solo responde al entorno; regula su exposición y convierte la pausa en criterio.',
    acelerar: 'La aceleración propia marca una apropiación breve del sistema. El cuerpo toma una apertura y la convierte en avance antes de que la ciudad vuelva a cerrarla.',
    desviarse: 'El desvío decidido es la postura más activa: el cuerpo deja de adaptarse punto por punto y reescribe la ruta para sostener agencia.'
  }
};

const pairCriticalReadings = {
  'infraestructura+vehiculos': 'El cruce entre regla fija y amenaza móvil vuelve desigual el avance: la infraestructura administra permisos, mientras el vehículo administra miedo. El cuerpo progresa calculando dos autoridades a la vez.',
  'humano+infraestructura': 'Aquí chocan diseño y ocupación. La infraestructura promete orden, pero los cuerpos lo reprograman en tiempo real; avanzar exige obedecer bordes y negociar densidad simultáneamente.',
  'infraestructura+noHumano': 'El desajuste aparece entre escala grande y detalle mínimo. La ciudad regula desde cruces y banquetas, pero el cuerpo termina corrigiendo objetos y restos que el sistema no anticipa.',
  'decision+infraestructura': 'La tensión está entre límite impuesto y táctica corporal. La infraestructura marca cuándo y por dónde; la decisión propia traduce esa imposición en una ruta posible.',
  'humano+vehiculos': 'Dos flujos externos disputan el cuerpo: vehículos por velocidad, peatones por densidad. Avanzar implica cambiar de lectura constantemente, entre riesgo motorizado y presión colectiva.',
  'noHumano+vehiculos': 'La combinación junta amenaza grande y obstáculo pequeño. El cuerpo reparte atención entre lo que puede dañarlo y lo que puede torcer su trazo; caminar se vuelve vigilancia multiescala.',
  'decision+vehiculos': 'El vehículo impone urgencia, pero la decisión propia introduce táctica. El cuerpo no domina la calle: gana pequeños márgenes al elegir cuándo esperar, cruzar o apartarse.',
  'humano+noHumano': 'La ruta se desajusta entre densidad viva y detalle material. El cuerpo avanza leyendo masas y obstáculos a la vez; la ciudad común se vuelve coreografía de rodeos.',
  'decision+humano': 'La presión colectiva empuja, pero la decisión propia decide cuándo seguirla o salirse. La agencia aparece como distancia crítica frente al ritmo de otros cuerpos.',
  'decision+noHumano': 'Lo no humano interrumpe desde lo menor; la decisión propia convierte esa interrupción en ruta. El cuerpo gana agencia no eliminando obstáculos, sino reorganizando el trazo.'
};

function getAgentTotal(walk, agent) {
  return actionOrder.reduce((sum, action) => sum + (walk.counts[action][agent] || 0), 0);
}

function getSelectedAgents() {
  return agentOrder.filter(agent => selectedAgents.includes(agent));
}

function hasActiveAgents() {
  return selectedAgents.length > 0;
}

function isAgentSelected(agent) {
  return selectedAgents.includes(agent);
}

function getAgentLabelList(agents = getSelectedAgents()) {
  if (!agents.length) return 'Todos los agentes';
  return agents.map(agent => agentNames[agent]).join(' + ');
}

function getPairKey(agents) {
  return [...agents].sort().join('+');
}

function getActionTotal(walk, action, agents = null) {
  const visibleAgents = agents && agents.length ? agents : agentOrder;
  return visibleAgents.reduce((sum, key) => sum + (walk.counts[action][key] || 0), 0);
}

function getDominantAction(walk, agents = null) {
  return actionOrder
    .map(action => ({ action, amount: getActionTotal(walk, action, agents) }))
    .sort((a, b) => b.amount - a.amount)[0];
}

function getDominantAgent(walk) {
  return agentOrder
    .map(agent => ({ agent, amount: getAgentTotal(walk, agent) }))
    .sort((a, b) => b.amount - a.amount)[0];
}

function getWalkTotal(walk) {
  return agentOrder.reduce((sum, agent) => sum + getAgentTotal(walk, agent), 0);
}

function getAgencyReading(walk) {
  const passive = getActionTotal(walk, 'esperar') + getActionTotal(walk, 'frenar');
  const active = getActionTotal(walk, 'acelerar') + getActionTotal(walk, 'desviarse') + getAgentTotal(walk, 'decision');
  if (active > passive) return 'cuerpo activo';
  if (passive > active * 1.6) return 'cuerpo regulado';
  return 'cuerpo en negociación';
}

function getAgentMovementProfile(walk, agent) {
  const total = getAgentTotal(walk, agent);
  const dominant = getDominantAction(walk, [agent]);
  const weightedIntensity = total
    ? actionOrder.reduce((sum, action) => {
      const amount = walk.counts[action][agent] || 0;
      return sum + amount * actionIntensity[action];
    }, 0) / total
    : 0;
  let zone = 'centro de menor movimiento';
  if (weightedIntensity >= 2.25) zone = 'periferia de mayor movimiento';
  else if (weightedIntensity >= 1.45) zone = 'zona media-alta de aceleración';
  else if (weightedIntensity >= 0.65) zone = 'zona baja-media de freno';

  return {
    agent,
    total,
    dominant: dominant.action,
    dominantAmount: dominant.amount,
    weightedIntensity,
    zone
  };
}

function getRouteReading(walk) {
  return routeReadings[walk.place] || `${walk.place} acumula interrupciones, ajustes y decisiones; avanzar exige leer qué fuerza toma el mando en cada tramo.`;
}

function buildProfileReading(profile) {
  return agentActionCriticalReadings[profile.agent][profile.dominant];
}

function buildPairClosure(agents, profiles) {
  const crossing = profiles
    .map(profile => `${agentNames[profile.agent].toLowerCase()} actúa como ${actionNames[profile.dominant].toLowerCase()}`)
    .join(' y ');
  const criticalReading = pairCriticalReadings[getPairKey(agents)]
    || 'La combinación cruza una fuerza externa con una respuesta corporal. El avance no depende de un solo obstáculo, sino de cómo el cuerpo jerarquiza presiones para no perder ruta.';
  return `Cuando ${crossing}, el avance deja de depender de una sola causa. ${criticalReading}`;
}

function renderAgentExplanation() {
  if (!agentExplanation) return;
  const agents = getSelectedAgents();
  const info = agents.length === 1 ? agentExplanations[agents[0]] : generalExplanation;

  if (agents.length > 1) {
    agentExplanation.innerHTML = `<strong>Cruce activo</strong><p>La lectura cambia de suma a tensión: el cuerpo debe jerarquizar fuerzas para poder avanzar.</p>`;
    return;
  }

  agentExplanation.innerHTML = `<strong>${info.title}</strong><p>${info.body}</p>`;
}

function renderSpiralInsight() {
  if (!spiralInsight) return;
  const agents = getSelectedAgents();

  if (!agents.length) {
    spiralInsight.innerHTML = `
      <p class="section-tag">Lectura compartida</p>
      <p>${getRouteReading(selectedWalk)}</p>
    `;
    return;
  }

  if (agents.length > 1) {
    const comparison = agents
      .map(agent => getAgentMovementProfile(selectedWalk, agent));
    const selectedCrossing = comparison
      .map(profile => `${agentNames[profile.agent]} + ${actionNames[profile.dominant]}`)
      .join(' / ');

    spiralInsight.innerHTML = `
      <p class="section-tag">Lectura compartida</p>
      <p><strong>${selectedCrossing}</strong></p>
      <p>${buildPairClosure(agents, comparison)}</p>
    `;
    return;
  }

  const profile = getAgentMovementProfile(selectedWalk, agents[0]);

  spiralInsight.innerHTML = `
    <p class="section-tag">Lectura compartida</p>
    <p><strong>${agentNames[profile.agent]} + ${actionNames[profile.dominant]}</strong></p>
    <p>${buildProfileReading(profile)}</p>
  `;
}

function renderWalkDiagnosis() {
  if (!walkDiagnosis) return;
  const dominantAgent = getDominantAgent(selectedWalk);
  const dominantAction = getDominantAction(selectedWalk);
  walkDiagnosis.innerHTML = `
    <div class="diagnosis-meta">
      <span>${selectedWalk.time}</span>
      <span>${selectedWalk.zoneType}</span>
      <span>${selectedWalk.scale}</span>
    </div>
    <strong>${selectedWalk.cityType}</strong>
    <p>${selectedWalk.criticalRead}</p>
    <dl>
      <div><dt>Condición</dt><dd>${selectedWalk.condition}</dd></div>
      <div><dt>Experiencia</dt><dd>${selectedWalk.experience}</dd></div>
      <div><dt>Agente dominante</dt><dd>${agentNames[dominantAgent.agent]}</dd></div>
      <div><dt>Acción dominante</dt><dd>${actionNames[dominantAction.action]}</dd></div>
    </dl>
  `;
}

function renderComparisonGrid() {
  if (!comparisonGrid) return;
  comparisonGrid.innerHTML = walks.map(walk => {
    const dominantAgent = getDominantAgent(walk);
    const dominantAction = getDominantAction(walk);
    return `
      <article class="comparison-card${walk.id === selectedWalk.id ? ' is-current' : ''}" role="button" tabindex="0" data-walk-id="${walk.id}" aria-pressed="${walk.id === selectedWalk.id}" aria-label="Ver ${walk.title}">
        <p class="section-tag">${walk.title}</p>
        <h4>${walk.cityType}</h4>
        <p>${walk.interest}</p>
        <div class="comparison-facts">
          <span>${walk.zoneType}</span>
          <span>${getAgencyReading(walk)}</span>
          <span>${agentNames[dominantAgent.agent]} / ${actionNames[dominantAction.action]}</span>
        </div>
      </article>
    `;
  }).join('');

  comparisonGrid.querySelectorAll('.comparison-card').forEach(card => {
    const selectWalkFromCard = () => {
      const nextWalk = walks.find(walk => walk.id === card.dataset.walkId);
      if (!nextWalk) return;
      selectedWalk = nextWalk;
      selectedAgents = [];
      render();
      (walkTitle || routeHeroTitle)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    card.addEventListener('click', selectWalkFromCard);
    card.addEventListener('keydown', event => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      selectWalkFromCard();
    });
  });
}


const walks = [
  {
    id: 'coyoacan-1',
    title: 'Caminata 1 · Coyoacán',
    place: 'Coyoacán',
    time: '1:00 pm',
    image: '../docs/img/p9.JPG',
    zoneType: 'Barrial mixto',
    scale: 'Barrial denso',
    condition: 'Mediodía activo',
    experience: 'Negociación distribuida',
    cityType: 'Ciudad de mandos simultáneos',
    interest: 'Infraestructura, vehículos y cuerpos pesan casi igual; ningún agente domina del todo.',
    criticalRead: 'Aquí caminar es repartir mando: obedecer al cruce, calcular con el coche y corregir con otros cuerpos.',
    counts: {
      esperar:   { infraestructura: 2, vehiculos: 6, humano: 0, noHumano: 0, decision: 0 },
      frenar:    { infraestructura: 10, vehiculos: 0, humano: 8, noHumano: 0, decision: 3 },
      acelerar:  { infraestructura: 0, vehiculos: 7, humano: 6, noHumano: 0, decision: 0 },
      desviarse: { infraestructura: 1, vehiculos: 0, humano: 3, noHumano: 6, decision: 2 }
    }
  },
  {
    id: 'delvalle-6',
    title: 'Caminata 6 · Colonia del Valle',
    place: 'Colonia del Valle',
    time: '2:40 pm',
    image: '../docs/img/p16.JPG',
    zoneType: 'Barrial residencial',
    scale: 'Barrial',
    condition: 'Tarde temprana estable',
    experience: 'Regulación pasiva',
    cityType: 'Ciudad de fricción baja',
    interest: 'Funciona como contrapunto: pocos agentes, poca decisión y casi ninguna aceleración.',
    criticalRead: 'Su fuerza está en la baja intensidad. El entorno regula sin exigir mucha negociación.',
    counts: {
      esperar:   { infraestructura: 2, vehiculos: 0, humano: 5, noHumano: 0, decision: 0 },
      frenar:    { infraestructura: 7, vehiculos: 3, humano: 0, noHumano: 0, decision: 0 },
      acelerar:  { infraestructura: 0, vehiculos: 0, humano: 0, noHumano: 0, decision: 0 },
      desviarse: { infraestructura: 0, vehiculos: 0, humano: 0, noHumano: 2, decision: 0 }
    }
  },
  {
    id: 'centro-3',
    title: 'Caminata 3 · Centro Histórico',
    place: 'Centro Histórico',
    time: '12:00 pm',
    image: '../docs/img/p8.JPG',
    zoneType: 'Nodo urbano',
    scale: 'Urbano denso',
    condition: 'Mediodía saturado',
    experience: 'Corriente corporal',
    cityType: 'Ciudad de empuje peatonal',
    interest: 'La gente no solo bloquea: también acelera y arrastra el ritmo.',
    criticalRead: 'Hay mucha intensidad corporal, pero poca decisión propia. Se avanza dentro de una corriente que empuja y frena.',
    counts: {
      esperar:   { infraestructura: 0, vehiculos: 5, humano: 2, noHumano: 0, decision: 0 },
      frenar:    { infraestructura: 4, vehiculos: 0, humano: 6, noHumano: 0, decision: 2 },
      acelerar:  { infraestructura: 0, vehiculos: 1, humano: 8, noHumano: 0, decision: 0 },
      desviarse: { infraestructura: 6, vehiculos: 0, humano: 0, noHumano: 0, decision: 0 }
    }
  },
  {
    id: 'reforma-12',
    title: 'Caminata 12 · Reforma',
    place: 'Reforma',
    time: '2:30 pm',
    image: '../docs/img/p15.JPG',
    zoneType: 'Corredor',
    scale: 'Metropolitano',
    condition: 'Tarde temprana de cruce',
    experience: 'Control y desvío',
    cityType: 'Ciudad corredor interrumpido',
    interest: 'Un corredor que promete continuidad termina produciendo espera y desvío.',
    criticalRead: 'La infraestructura ordena la pausa; humanos, objetos y decisiones empujan el recorrido hacia el borde.',
    counts: {
      esperar:   { infraestructura: 10, vehiculos: 0, humano: 2, noHumano: 0, decision: 0 },
      frenar:    { infraestructura: 2, vehiculos: 3, humano: 1, noHumano: 0, decision: 0 },
      acelerar:  { infraestructura: 0, vehiculos: 0, humano: 0, noHumano: 0, decision: 3 },
      desviarse: { infraestructura: 0, vehiculos: 1, humano: 9, noHumano: 10, decision: 2 }
    }
  }
];

let selectedWalk = walks[0];
let selectedAgents = [];

function makeSvgElement(tag, attributes = {}) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function expandWalk(walk) {
  const sequence = [];
  actionOrder.forEach((action, actionIndex) => {
    agentOrder.forEach((agent, agentIndex) => {
      const amount = walk.counts[action][agent] || 0;
      for (let i = 0; i < amount; i++) sequence.push({ action, agent, actionIndex, agentIndex });
    });
  });
  return sequence;
}

function spreadSequenceOverSlots(sequence, slots) {
  const result = new Map();
  if (!sequence.length) return result;
  if (sequence.length === 1) {
    result.set(Math.floor(slots.length / 2), sequence[0]);
    return result;
  }
  sequence.forEach((item, i) => {
    const slotIndex = Math.round(i * (slots.length - 1) / (sequence.length - 1));
    result.set(slotIndex, item);
  });
  return result;
}

function appendWordSymbol(group, item, slot) {
  const cx = slot.x + slot.w / 2;
  const cy = slot.y + slot.h / 2;
  const unit = Math.min(slot.w, slot.h);

  if (item.action === 'esperar') {
    group.appendChild(makeSvgElement('line', { class: 'datum-symbol', x1: cx - unit * .22, y1: cy - unit * .22, x2: cx + unit * .22, y2: cy + unit * .22 }));
    group.appendChild(makeSvgElement('line', { class: 'datum-symbol', x1: cx + unit * .22, y1: cy - unit * .22, x2: cx - unit * .22, y2: cy + unit * .22 }));
  }
  if (item.action === 'frenar') {
    group.appendChild(makeSvgElement('circle', { class: 'datum-symbol', cx, cy, r: unit * .16, fill: '#fff', stroke: 'none' }));
  }
  if (item.action === 'acelerar') {
    group.appendChild(makeSvgElement('rect', { class: 'datum-symbol', x: cx - unit * .15, y: cy - unit * .15, width: unit * .3, height: unit * .3, fill: '#fff', stroke: 'none' }));
  }
  if (item.action === 'desviarse') {
    const points = `${cx},${cy - unit * .22} ${cx + unit * .22},${cy + unit * .18} ${cx - unit * .22},${cy + unit * .18}`;
    group.appendChild(makeSvgElement('polygon', { class: 'datum-symbol', points, fill: '#fff', stroke: 'none' }));
  }
}

function buildWord() {
  const sequence = expandWalk(selectedWalk);
  const dataBySlot = spreadSequenceOverSlots(sequence, baseSlots);
  pixelWord.innerHTML = '';
  pixelWord.classList.toggle('is-filtered', hasActiveAgents());

  baseSlots.forEach((slot, index) => {
    const item = dataBySlot.get(index);
    if (!item) {
      const base = makeSvgElement('rect', { class: 'word-base base-no-data', x: slot.x, y: slot.y, width: slot.w, height: slot.h, rx: 1.44, ry: 1.44 });
      pixelWord.appendChild(base);
      return;
    }

    const group = makeSvgElement('g', { class: `word-datum${isAgentSelected(item.agent) ? ' is-selected' : ''}`, 'data-agent': item.agent, 'data-action': item.action, tabindex: 0 });
    const bg = makeSvgElement('rect', { class: 'datum-bg', x: slot.x, y: slot.y, width: slot.w, height: slot.h, rx: 1.44, ry: 1.44, fill: colors[item.agent] });
    const title = makeSvgElement('title');
    title.textContent = `${actionNames[item.action]} · ${agentNames[item.agent]}`;
    group.appendChild(title);
    group.appendChild(bg);
    group.addEventListener('click', () => setAgent(item.agent));
    pixelWord.appendChild(group);
  });
}

function renderWalkButtons() {
  walkButtons.innerHTML = '';
  walks.forEach((walk, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'walk-button';
    button.textContent = `${index + 1}. ${walk.place}`;
    button.classList.toggle('is-selected', walk.id === selectedWalk.id);
    button.addEventListener('click', () => {
      selectedWalk = walk;
      render();
    });
    walkButtons.appendChild(button);
  });
}

function setAgent(agent) {
  if (isAgentSelected(agent)) {
    selectedAgents = selectedAgents.filter(item => item !== agent);
  } else {
    selectedAgents = [...selectedAgents, agent].slice(-2);
  }
  render();
}

function renderLegend() {
  legendButtons.forEach(btn => {
    const isSelected = isAgentSelected(btn.dataset.agent);
    btn.classList.toggle('is-selected', isSelected);
    btn.setAttribute('aria-pressed', String(isSelected));
    btn.onclick = () => setAgent(btn.dataset.agent);
  });
  clearAgent.classList.toggle('is-selected', !hasActiveAgents());
  clearAgent.setAttribute('aria-pressed', String(!hasActiveAgents()));
  clearAgent.onclick = () => { selectedAgents = []; render(); };
}

function appendStitch(item, x, y, index) {
  if (hasActiveAgents() && !isAgentSelected(item.agent)) return;

  const color = colors[item.agent];
  const baseClass = `stitch ${item.action}${hasActiveAgents() ? ' is-highlight' : ''}`;
  let node;

  if (item.action === 'esperar') {
    node = makeSvgElement('g', { class: baseClass, 'data-agent': item.agent, 'data-action': item.action });
    node.appendChild(makeSvgElement('line', { x1: x - 6, y1: y - 6, x2: x + 6, y2: y + 6, stroke: color, 'stroke-width': 3, 'stroke-linecap': 'square' }));
    node.appendChild(makeSvgElement('line', { x1: x + 6, y1: y - 6, x2: x - 6, y2: y + 6, stroke: color, 'stroke-width': 3, 'stroke-linecap': 'square' }));
  }
  if (item.action === 'frenar') {
    node = makeSvgElement('circle', { cx: x, cy: y, r: 5.5, fill: color, class: baseClass, 'data-agent': item.agent, 'data-action': item.action });
  }
  if (item.action === 'acelerar') {
    node = makeSvgElement('rect', { x: x - 5.5, y: y - 5.5, width: 11, height: 11, fill: color, class: baseClass, 'data-agent': item.agent, 'data-action': item.action });
  }
  if (item.action === 'desviarse') {
    const points = `${x},${y - 7} ${x + 7},${y + 6} ${x - 7},${y + 6}`;
    node = makeSvgElement('polygon', { points, fill: color, class: baseClass, 'data-agent': item.agent, 'data-action': item.action });
  }

  node.style.animationDelay = `${index * 7}ms`;
  const title = makeSvgElement('title');
  title.textContent = `${actionNames[item.action]} · ${agentNames[item.agent]}`;
  node.appendChild(title);
  spiralScore.appendChild(node);
}

function renderSpiral() {
  const sequence = expandWalk(selectedWalk);
  const cx = 310;
  const cy = 310;
  const step = sequence.length > 46 ? 3.9 : 4.6;
  const angleStep = 0.52;
  let path = '';
  spiralScore.innerHTML = '';

  sequence.forEach((item, i) => {
    const angle = i * angleStep;
    const radius = 18 + i * step;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    path += `${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)} `;
  });

  spiralScore.appendChild(makeSvgElement('path', { d: path, class: 'score-path' }));

  sequence.forEach((item, i) => {
    const angle = i * angleStep;
    const radius = 18 + i * step;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    appendStitch(item, x, y, i);
  });
}

function renderCopy() {
  const sequence = expandWalk(selectedWalk);
  const agents = getSelectedAgents();
  if (routeHeroTitle) routeHeroTitle.textContent = selectedWalk.place;
  document.documentElement.style.setProperty('--route-accent', routeAccents[selectedWalk.place] || '#dc681a');
  if (walkTitle) walkTitle.textContent = selectedWalk.title;

  activeAgent.textContent = getAgentLabelList(agents);
  wordState.textContent = getAgentLabelList(agents);

  const visibleTotal = agents.length
    ? agents.reduce((sum, agent) => sum + getAgentTotal(selectedWalk, agent), 0)
    : sequence.length;

  const relationRows = actionOrder.map(action => {
    const total = getActionTotal(selectedWalk, action, agents);
    const breakdown = agentOrder
      .map(agent => ({ agent, amount: selectedWalk.counts[action][agent] || 0 }))
      .filter(item => item.amount > 0 && (!agents.length || isAgentSelected(item.agent)));

    const breakdownHtml = breakdown.length
      ? breakdown.map(item => `
        <div class="stat-chip" data-agent="${item.agent}">
          <span class="stat-dot"></span>
          <span>${agentNames[item.agent]}</span>
          <strong>${item.amount}</strong>
        </div>
      `).join('')
      : '<div class="stat-chip is-empty"><span></span><span>Sin registros</span><strong>0</strong></div>';

    return `
      <div class="stat-group">
        <div class="stat-head">
          <strong>${actionNames[action]}</strong>
          <span>${total}</span>
        </div>
        <div class="stat-breakdown">${breakdownHtml}</div>
      </div>
    `;
  }).join('');

  walkStats.innerHTML = `
    <div class="stat-row">
      <strong>${agents.length ? 'Comparación visible' : 'Total visible'}</strong>
      <span>${visibleTotal}</span>
    </div>
    ${relationRows}
  `;

  renderAgentExplanation();
  renderSpiralInsight();
  renderWalkDiagnosis();
  renderComparisonGrid();
}
function render() {
  buildWord();
  renderWalkButtons();
  renderLegend();
  renderSpiral();
  renderCopy();
}

render();
