var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);


//creacion del cubo con vertices referencia CHATGPT
var side = 1; // longitud de un lado del cubo

function creacioncybo(side){
	const geometry = new THREE.BufferGeometry();
	var half = side / 2; // mitad de la longitud del lado

var vertices = new Float32Array[ //vertices del cubo parametizados con side
  // cara frontal (z = +half)
  -half, -half, half,
  half, -half, half,
  half, half, half,
  -half, half, half,

  // cara trasera (z = -half)
  -half, -half, -half,
  -half, half, -half,
   half, half, -half,
   half, -half, -half,

  // cara superior (y = +half)
  -half, half, -half,
  -half, half, half,
  half, half, half,
  half, half, -half,

  // cara inferior (y = -half)
  -half, -half, -half,
  half, -half, -half,
  half, -half, half,
  -half, -half, half,

  // cara derecha (x = +half)
  half, -half, -half,
  half, half, -half,
  half, half, half,
  half, -half, half,

  // cara izquierda (x = -half)
  -half, -half, -half,
  -half, -half, half,
  -half, half, half,
  -half, half, -half
];
 
 geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
 const material = new THREE.MeshBasicMaterial( { color: 0xff0000 },{Wireframe:true} );
 const mesh = new THREE.Mesh( geometry, material );
 scene.add(mesh);
}
creacioncybo(1);

