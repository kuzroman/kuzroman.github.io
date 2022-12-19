<template>
  <div class="box"></div>
</template>

<script setup>
useHead({
  title: 'matter.js great gravity =)',
})

import Matter from 'matter-js'
const { Engine, Render, World, Bodies, Body, Events, Composite, Composites, Constraint,
  Vertices, Mouse, Bounds, MouseConstraint, Query, Common, Runner } = Matter

const getRandomBetween = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min)
}

const dropIntervalId = ref(0);
const mouseBodyX = ref(100);
const mouseBodyY = ref(100);

onMounted(() => {
  const engine = Engine.create({
    gravity: {
      y: 0.1
    }
  });

  const render = Render.create({
    element: document.querySelector('.box'),
    // element: document.body,
    engine: engine,
    options: {
      // width: 800,
      // height: 600,
      wireframes: false,
      background: "#2d2d2d",
      // showAngleIndicator: true,
    }
  });

  dropIntervalId.value = setInterval(() => {
    let dropCircles = [];
    [...Array(getRandomBetween(2,6))].forEach(i => {
      dropCircles.push(
          Bodies.circle(
              getRandomBetween(0, window.innerWidth),
              getRandomBetween(-50, 0),
              getRandomBetween(2,10),
              {
                restitution: 1,
                render: {
                  fillStyle: '#333',
                  strokeStyle: 'orange',
                  lineWidth: 3
                }
              }
          ));
    })
    Composite.add(engine.world, dropCircles);

    // console.log('dropCircles',dropCircles);
  }, 200);

  const optionStatic = {
    isStatic: true,
    render: {
      fillStyle: '#333',
      strokeStyle: '#5a5a5a',
      lineWidth: 3
    }
  }

  let staticPositions = [
    {x:getRandomBetween(390,410), y:getRandomBetween(90,110)},
    {x:getRandomBetween(40,60), y:getRandomBetween(190,210)},
    {x:getRandomBetween(590,610), y:getRandomBetween(290,310)},
    {x:getRandomBetween(240,260), y:getRandomBetween(440,460)},
    {x:getRandomBetween(490,510), y:getRandomBetween(590,610)},
  ]

  const moveStatic = (ev) => {
    mouseBodyX.value = ev.x
    mouseBodyY.value = ev.y
  };

  window.addEventListener('mousemove', moveStatic)

  // Composite.add(engine.world, mouseBody.value)

  // const rect = Bodies.rectangle(350, 50, 80, 80, { chamfer: {radius: 10}, frictionAir: 0.1});

  Composite.add(engine.world, [
    // rect,
    // Bodies.rectangle(500, 100, 40, 40, { chamfer: {radius: 10}, restitution: 0.8 }),
    // Bodies.rectangle(400, 100, 80, 80, { chamfer: {radius: 10}, restitution: 0.8 }),
    // Bodies.rectangle(350, 50, 80, 80, { chamfer: {radius: 10}, frictionAir: 0.1}),

    // Bodies.circle(mouseBodyX.value, mouseBodyY.value, 30, {
    //   render: {
    //     fillStyle: '#333',
    //     strokeStyle: '#5a5a5a',
    //     lineWidth: 3
    //   }
    // }),

    Bodies.circle(staticPositions[0].x, staticPositions[0].y, getRandomBetween(30,40), optionStatic),
    Bodies.circle(staticPositions[1].x, staticPositions[1].y, getRandomBetween(30,40), optionStatic),
    Bodies.circle(staticPositions[2].x, staticPositions[2].y, getRandomBetween(60,70), optionStatic),
    Bodies.circle(staticPositions[3].x, staticPositions[3].y, getRandomBetween(100,120), optionStatic),
    Bodies.circle(staticPositions[4].x, staticPositions[4].y, getRandomBetween(40,60), optionStatic),

    // skew walls
    // Bodies.rectangle(0, 100, 800, 10, { isStatic: true, angle: Math.PI * 0.2, render: { fillStyle: '#fff' }}),
    // Bodies.rectangle(800, 100, 800, 10, { isStatic: true, angle: Math.PI * -0.1, render: { fillStyle: '#fff' }}),
    // walls
    // Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
    // Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
    // Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
    // Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
  ]);

  // add mouse control
  // const mouse = Mouse.create(render.canvas);
  // const mouseConstraint = MouseConstraint.create(engine, {
  //   mouse,
  //   constraint: {
  //     stiffness: 0.2,
  //     render: {
  //       visible: false
  //     }
  //   }
  // });
  // Composite.add(engine.world, mouseConstraint);

  // mousemove
  // Matter.Events.on(mouseConstraint, 'mousemove', function (event) {
  //   //For Matter.Query.point pass "array of bodies" and "mouse position"
  //   // var foundPhysics = Matter.Query.point([rect], event.mouse.position);
  //   // console.log(foundPhysics[0]); //returns a shape corrisponding to the mouse position
  //   console.log(111, event);
  //   rect.position.x = event.mouse.position.x
  //   rect.position.y = event.mouse.position.y
  // });


  // run the renderer
  Render.run(render);
  // create runner
  const runner = Runner.create();
  // run the engine
  Runner.run(runner, engine);
})
onUnmounted(() => {
  clearTimeout(dropIntervalId.value);
})

</script>

<style lang="scss">

.app .content .view {
  padding: 0;
}

canvas {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
