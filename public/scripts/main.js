/* global THREE */

document.addEventListener('DOMContentLoaded', function() {
  if (!('ontouchstart' in window && Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 800)) {
    var SEPARATION = 100,
      AMOUNTX = 100,
      AMOUNTY = 70;
    var camera, scene, renderer;

    var container;

    var show = window.innerWidth >= 640 && window.innerHeight >= 600;

    var particles,
      particle,
      count = 0;

    var mouseX = 0,
      mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    init();
    animate();

    function init() {
      container = document.createElement('div');
      container.id = 'container';
      document.body.appendChild(container);

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.z = 10000;

      scene = new THREE.Scene();

      particles = new Array();

      var PI2 = Math.PI * 2;
      var material = new THREE.SpriteCanvasMaterial({
        color: 0xffffff,
        program: function(context) {
          context.beginPath();
          context.arc(0, 0, 0.5, 0, PI2, true);
          context.fill();
        }
      });

      var i = 0;

      for (var ix = 0; ix < AMOUNTX; ix++) {
        for (var iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++] = new THREE.Sprite(material);
          particle.position.x = ix * SEPARATION - AMOUNTX * SEPARATION / 2;
          particle.position.z = iy * SEPARATION - AMOUNTY * SEPARATION / 2;
          scene.add(particle);
        }
      }

      renderer = new THREE.CanvasRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);
      //

      window.addEventListener('resize', onWindowResize, false);
    }

    function onWindowResize() {
      if (window.innerWidth >= 640 && window.innerHeight >= 600) {
        if (!show) {
          show = true;
          animate();
        }
      } else {
        show = false;
      }
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    //

    //

    function animate() {
      if (!show) return null;
      requestAnimationFrame(animate);

      render();
    }

    function render() {
      camera.position.set(0, 355, 122);

      var i = 0;

      for (var ix = 0; ix < AMOUNTX; ix++) {
        for (var iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++];
          particle.position.y = Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;
          particle.scale.x = particle.scale.y =
            (Math.sin((ix + count) * 0.3) + 1) * 4 + (Math.sin((iy + count) * 0.5) + 1) * 4;
        }
      }

      renderer.render(scene, camera);

      count += 0.1;
    }
  }
});
