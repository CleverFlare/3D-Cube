const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let cube;

let loader = new THREE.TextureLoader();

loader.load( 'Real Texture.png', function (texture) {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);

    let geometry = new THREE.BoxGeometry(2.4, 2.4, 2.4);
    let material = new THREE.MeshLambertMaterial( { map: texture, shading: THREE.FlatShading } );
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    renderer.render(scene, camera);
});

let light = new THREE.AmbientLight('rgb(255, 255, 255, 0.5)');
scene.add(light);

let spotLight = new THREE.SpotLight('rgba(255, 255, 255, 0.5)');
spotLight.position.set(100, 1000, 1000);
spotLight.castShadow = true;
scene.add(spotLight);

function drawLeft() {
    cube.rotation.y -= 0.01;
    renderer.render(scene, camera);
}
function drawRight() {
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
function drawUp() {
    cube.rotation.x -= 0.01;
    renderer.render(scene, camera);
}
function drawDown() {
    cube.rotation.x += 0.01;
    renderer.render(scene, camera);
}

document.addEventListener('keydown', (e) => {
    if(e.code === 'ArrowRight') {
        requestAnimationFrame(() => {
            cube.rotation.y += 0.1;
            renderer.render(scene, camera);
        });
    }
    if(e.code === 'ArrowDown') {
        requestAnimationFrame(() => {
            cube.rotation.x += 0.1;
            renderer.render(scene, camera);
        })
    }
    if(e.code === 'ArrowUp') {
        requestAnimationFrame(() => {
            cube.rotation.x -= 0.1;
            renderer.render(scene, camera);
        })
    }
    if(e.code === 'ArrowLeft') {
        requestAnimationFrame(() => {
            cube.rotation.y -= 0.1;
            renderer.render(scene, camera);
        })
    }
    if(e.code === 'KeyW') {
        requestAnimationFrame(() => {
            cube.position.z -= 0.1;
            renderer.render(scene, camera);
        })
    }
    if(e.code === 'KeyS') {
        requestAnimationFrame(() => {
            cube.position.z += 0.1;
            renderer.render(scene, camera);
        })
    }
    if(e.code === 'KeyD') {
        requestAnimationFrame(() => {
            cube.position.x -= 0.1;
            renderer.render(scene, camera);
        })
    }
    if(e.code === 'KeyA') {
        requestAnimationFrame(() => {
            cube.position.x += 0.1;
            renderer.render(scene, camera);
        })
    }
})