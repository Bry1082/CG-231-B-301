//Bryam Barreto 
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 1000);
camera.position.z = 4.5;
camera.position.x = -5.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);




//Luz del escenario sacado de un repositorio del semestre
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

//funcion de creacion del cubo con chat GPT con buffer parametrizado cpn el lado para que el usuario lo pude cambiar
function cube1(side){
 
  const geometry = new THREE.BufferGeometry();

  // Definir los vértices del cubo en base al tamaño del lado
  const halfSide = side / 2;
  const vertices = new Float32Array([
    -halfSide, -halfSide, -halfSide,
    halfSide, -halfSide, -halfSide,
    halfSide, halfSide, -halfSide,
    -halfSide, halfSide, -halfSide,
    -halfSide, -halfSide, halfSide,
    halfSide, -halfSide, halfSide,
    halfSide, halfSide, halfSide,
    -halfSide, halfSide, halfSide,
  ]);

  // Definir las caras del cubo utilizando los índices de los vértices
  const indices = new Uint16Array([
    0, 1, 2,
    0, 2, 3,
    1, 5, 6,
    1, 6, 2,
    5, 4, 7,
    5, 7, 6,
    4, 0, 3,
    4, 3, 7,
    3, 2, 6,
    3, 6, 7,
    4, 5, 1,
    4, 1, 0,
  ]);

  // Agregar los vértices y las caras a la geometría
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geometry.setIndex(new THREE.BufferAttribute(indices, 1));

  // Calcular las normales de la geometría para suavizar las caras
  geometry.computeVertexNormals();

  // Crear una malla utilizando la geometría y un material

const color= new THREE.Color("rgb(0, 0, 0)"); //color
const material2 = new THREE.MeshBasicMaterial({ color, wireframe: true });
const mesh = new THREE.Mesh(geometry, material2);

// Agregar la malla a la escena
scene.add(mesh);
}

//Renderizado de la animación
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
cube1(2);

