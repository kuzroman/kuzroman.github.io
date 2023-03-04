<template>
  <div>
    <div class="box"></div>
  </div>
</template>

<script>
import Matter from 'matter-js'
import { mapMutations } from 'vuex'
const {
  Engine,
  Render,
  World,
  Bodies,
  Body,
  Events,
  Composite,
  Composites,
  Constraint,
  Vertices,
  Mouse,
  Bounds,
  MouseConstraint,
  Query,
  Common,
  Runner,
} = Matter

export default {
  methods: {
    ...mapMutations('app', ['setIsPageLoaderHide']),
  },

  mounted() {
    this.setIsPageLoaderHide(true)

    const engine = Engine.create({
      gravity: {
        y: 1,
      },
    })

    const render = Render.create({
      element: document.querySelector('.box'),
      // element: document.body,
      engine,
      options: {
        // width: 800,
        // height: 600,
        wireframes: false,
        // background: "white"
        // showAngleIndicator: true,
      },
    })

    Composite.add(engine.world, [
      // Bodies.rectangle(500, 100, 40, 40, { chamfer: {radius: 10}, restitution: 0.8 }),
      // Bodies.rectangle(400, 100, 80, 80, { chamfer: {radius: 10}, restitution: 0.8 }),
      // Bodies.rectangle(350, 50, 80, 80, { chamfer: {radius: 10}, frictionAir: 0.1}),
      // Bodies.circle(380, 100, 40, {restitution: 0.8}),

      Bodies.circle(450, 0, 100, {
        restitution: 0.8,
        // slop: 0.9,
      }),

      Bodies.circle(150, 100, 150, {
        isStatic: true,
        // isSleeping: true,
        // isSensor: true,
        render: {
          fillStyle: '#fc0',
          strokeStyle: 'white',
          lineWidth: 3,
        },
      }),

      // skew walls
      // Bodies.rectangle(0, 100, 800, 10, { isStatic: true, angle: Math.PI * 0.2, render: { fillStyle: '#fff' }}),
      // Bodies.rectangle(800, 100, 800, 10, { isStatic: true, angle: Math.PI * -0.1, render: { fillStyle: '#fff' }}),
      // walls
      Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
      Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
      Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
      Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
    ])

    // объедининение объектов
    // const bigCircle = Bodies.circle(450, 0, 200, {restitution: 0.8,})
    // const compoundBodyA = Body.create({
    //   parts: [bigCircle, Bodies.circle(200, 0, 10)]
    // })
    // Composite.add(engine.world, [compoundBodyA,]);

    // const group = Body.nextGroup(true);
    // const ropeA = Composites.stack(200, 50, 12, 1, 10, 10, (x, y) => {
    //   return Bodies.circle(x, y, 10, { collisionFilter: { group } });
    // });
    // Composites.chain(ropeA, 0.5, 0, -0.5, 0, { stiffness: 0.4, length: 1, render: { type: 'line' } });
    // пружина и привязка к точке
    // Composite.add(ropeA, Constraint.create({
    //   bodyB: ropeA.bodies[0],
    //   pointB: { x: -25, y: 0 },
    //   pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
    //   stiffness: 0.5
    // }));
    // Composite.add(engine.world, [ropeA,]);

    // // множество элементов
    // let stack = Composites.stack(25, 5, 12, 20, 0, 0, function(x, y, column, row) {
    //   return Bodies.circle(x, y, Common.random(5, 15), { friction: .001, restitution: .1, density: 5.5 });
    // });
    // World.add(engine.world, stack);

    // add mouse control
    const mouse = Mouse.create(render.canvas)
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    })
    Composite.add(engine.world, mouseConstraint)

    // run the renderer
    Render.run(render)
    // create runner
    const runner = Runner.create()
    // run the engine
    Runner.run(runner, engine)
  },
}
</script>

<style lang="scss">
//@import "../assets/styles/props";

.app .content .view {
  padding: 0;
}

.box {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>
