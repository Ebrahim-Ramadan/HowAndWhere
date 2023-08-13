      // JavaScript code to show the element and restart the animation periodically
      setTimeout(showElementAndRestartAnimationA2, 80);
      function showElementAndRestartAnimationA2() {
        const element = document.querySelector(".A2");
        element.classList.add("show");
        setTimeout(() => {
          element.classList.remove("show");
          setTimeout(showElementAndRestartAnimationA2, 100);
        }, 1500);
      }

      // Start the initial animation after a delay
      setTimeout(showElementAndRestartAnimationB2, 30);

      function showElementAndRestartAnimationB2() {
        const element = document.querySelector(".B2");
        element.classList.add("show");
        setTimeout(() => {
          element.classList.remove("show");
          setTimeout(showElementAndRestartAnimationB2, 100);
        }, 1500);
      }

      // Start the initial animation after a delay
      setTimeout(showElementAndRestartAnimationB3, 150);

      function showElementAndRestartAnimationB3() {
        const element = document.querySelector(".B3");
        element.classList.add("show");
        setTimeout(() => {
          element.classList.remove("show");
          setTimeout(showElementAndRestartAnimationB3, 10);
        }, 1500);
      }