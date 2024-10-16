import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create floor
const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Create walls
const wallMaterial = new THREE.MeshBasicMaterial({ color: 0xa0a0a0, side: THREE.DoubleSide });

// Back Wall
const backWallGeometry = new THREE.PlaneGeometry(10, 5);
const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
backWall.position.z = -5;
backWall.position.y = 2.5;
scene.add(backWall);

// Left Wall
const leftWallGeometry = new THREE.PlaneGeometry(10, 5);
const leftWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
leftWall.rotation.y = Math.PI / 2;
leftWall.position.x = -5;
leftWall.position.y = 2.5;
scene.add(leftWall);

// Right Wall
const rightWallGeometry = new THREE.PlaneGeometry(10, 5);
const rightWall = new THREE.Mesh(rightWallGeometry, wallMaterial);
rightWall.rotation.y = -Math.PI / 2;
rightWall.position.x = 5;
rightWall.position.y = 2.5;
scene.add(rightWall);

// Ceiling
const ceilingGeometry = new THREE.PlaneGeometry(10, 10);
const ceilingMaterial = new THREE.MeshBasicMaterial({ color: 0xb0b0b0, side: THREE.DoubleSide });
const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
ceiling.rotation.x = Math.PI / 2;
ceiling.position.y = 5;
scene.add(ceiling);

// Add a bed to the room
const bedFrameGeometry = new THREE.BoxGeometry(3, 0.3, 6);
const bedFrameMaterial = new THREE.MeshBasicMaterial({ color: 0x8b4513 });
const bedFrame = new THREE.Mesh(bedFrameGeometry, bedFrameMaterial);
bedFrame.position.set(-1, 0.15, -2);
scene.add(bedFrame);

const mattressGeometry = new THREE.BoxGeometry(2.8, 0.3, 5.8);
const mattressMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const mattress = new THREE.Mesh(mattressGeometry, mattressMaterial);
mattress.position.set(-1, 0.45, -2);
scene.add(mattress);

const pillowGeometry = new THREE.BoxGeometry(1, 0.2, 1.5);
const pillowMaterial = new THREE.MeshBasicMaterial({ color: 0xfffdd0 });
const pillow = new THREE.Mesh(pillowGeometry, pillowMaterial);
pillow.position.set(-1, 0.65, -4.25);
scene.add(pillow);

const blanketGeometry = new THREE.BoxGeometry(2.8, 0.2, 3);
const blanketMaterial = new THREE.MeshBasicMaterial({ color: 0x4682b4 });
const blanket = new THREE.Mesh(blanketGeometry, blanketMaterial);
blanket.position.set(-1, 0.55, -0.5);
scene.add(blanket);

// Add a nightstand
const nightstandGeometry = new THREE.BoxGeometry(1, 1, 1);
const nightstandMaterial = new THREE.MeshBasicMaterial({ color: 0x654321 });
const nightstand = new THREE.Mesh(nightstandGeometry, nightstandMaterial);
nightstand.position.set(-4, 0.5, -3);
scene.add(nightstand);

// Add a lamp on the nightstand
const lampBaseGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 27);
const lampBaseMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const lampBase = new THREE.Mesh(lampBaseGeometry, lampBaseMaterial);
lampBase.position.set(-4, 1.25, -3);
scene.add(lampBase);

const lampShadeGeometry = new THREE.CylinderGeometry(0.5, 0.7, 1, 32);
const lampShadeMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });
const lampShade = new THREE.Mesh(lampShadeGeometry, lampShadeMaterial);
lampShade.position.set(-4, 1.75, -3);
scene.add(lampShade);

// Add windows to the room
const windowGeometry = new THREE.PlaneGeometry(3, 2);
const windowMaterial = new THREE.MeshBasicMaterial({ color: 0x87ceeb, side: THREE.DoubleSide, opacity: 0.5, transparent: true });

// Window on the back wall
const backWindow = new THREE.Mesh(windowGeometry, windowMaterial);
backWindow.position.set(0, 3, -4.9);
scene.add(backWindow);

// Window on the right wall
const rightWindow = new THREE.Mesh(windowGeometry, windowMaterial);
rightWindow.rotation.y = -Math.PI / 2;
rightWindow.position.set(4.9, 3, 0);
scene.add(rightWindow);

// Add a table to the room
const tableTopGeometry = new THREE.BoxGeometry(3, 0.1, 2);
const tableTopMaterial = new THREE.MeshBasicMaterial({ color: 0x8b4513 });
const tableTop = new THREE.Mesh(tableTopGeometry, tableTopMaterial);
tableTop.position.set(3, 1, -1);
scene.add(tableTop);

const tableLegGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 32);
const tableLegMaterial = new THREE.MeshBasicMaterial({ color: 0x8b4513 });

// Add four legs to the table
for (let i = -1; i <= 1; i += 2) {
    for (let j = -1; j <= 1; j += 2) {
        const tableLeg = new THREE.Mesh(tableLegGeometry, tableLegMaterial);
        tableLeg.position.set(3 + (i * 1.4), 0.5, -1 + (j * 0.9));
        scene.add(tableLeg);
    }
}

// Add a monitor on the table
const monitorBaseGeometry = new THREE.BoxGeometry(0.6, 0.1, 0.3);
const monitorBaseMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const monitorBase = new THREE.Mesh(monitorBaseGeometry, monitorBaseMaterial);
monitorBase.position.set(3, 1.05, -1);
scene.add(monitorBase);

const monitorScreenGeometry = new THREE.BoxGeometry(1.8, 1, 0.1);
const monitorScreenMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const monitorScreen = new THREE.Mesh(monitorScreenGeometry, monitorScreenMaterial);
monitorScreen.position.set(3, 1.6, -1);
scene.add(monitorScreen);

camera.position.set(0, 2, 10);

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();