const canvas = document.querySelector('#canvas');

const engine = new BABYLON.Engine(canvas, true);

const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(1, 1, 0.9);

const camera = new BABYLON.ArcRotateCamera("camera", 0, 0, -25, new BABYLON.Vector3(0, 0, 0), scene);
camera.attachControl(canvas, true);

const light = new BABYLON.PointLight('light', new BABYLON.Vector3(6, -3, 4), scene);

const myBox = {
    position: {
        x: 5,
        y: 2,
        z: -5
    },
    rotate(box, dX, dY) {
        box.rotation.x += dX;
        box.rotation.y += dY;
    }
}

const box = new BABYLON.MeshBuilder.CreateBox('box', {});
box.position.x = myBox.position.x;
box.position.y = myBox.position.y;
box.position.z = myBox.position.z;

box.scaling = new BABYLON.Vector3(3, 3, 3);
box.position.y = 3;

const boxMaterial = new BABYLON.StandardMaterial('material', scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0.5, 0.22, 0.9);

box.material = boxMaterial;

// Вращение
canvas.addEventListener('click', () => {
    setInterval(() => {
        myBox.rotate(box, 0.2, 0.2);
    }, 500)
});

engine.runRenderLoop(() => {
    scene.render();
});