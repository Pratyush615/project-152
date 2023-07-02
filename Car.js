AFRAME.registerComponent("car-model", {
schema: {
  modelRef: { type: "string", default: "scene.gltf" },
  rotation: { type: "number", default: 0},
  clickCounter: { type: "number", default: 0}
},

  init: function() {
    
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: 0, y: 50, z: 80 };
    const rotation = { x: 0, y: -100, z: 0 };
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  },
  update: function() {
    window.addEventListener("click", e => {
    this.data.clickCounter = this.data.clickCounter + 1; 
    if (this.data.clickCounter === 1) {
      const rotation = { x: 0, y: 20, z: 0 }; 
      this.el.setAttribute("rotation", rotation);
    } else if (this.data.clickCounter=== 2)
    {
      const rotation = { x: 0, y: 100, z: 0 };
      this.el.setAttribute("rotation", rotation);
    }else if (this.data.clickCounter=== 3)
    {
      const rotation = { x: 0, y: 180, z: 0 };
      this.el.setAttribute("rotation", rotation);
    }else if (this.data.clickCounter=== 4)
    {
      const rotation = { x: 0, y: 360, z: 0 };
      this.el.setAttribute("rotation", rotation);
    }else if (this.data.clickCounter=== 5)
    {
      this.data.clickCounter= 1
      const rotation = { x: 0, y: -100, z: 0 };
      this.el.setAttribute("rotation", rotation);
    }
    })

  }
});
