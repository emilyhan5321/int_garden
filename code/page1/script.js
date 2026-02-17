<script>
  const popup = document.getElementById("midPopup");
  const trigger = document.getElementById("popup-trigger");

  const observer = new IntersectionObserver(
    ([entry]) => {
      popup.classList.toggle("is-visible", entry.isIntersecting);
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-45% 0px -45% 0px"
    }
  );

  observer.observe(trigger);
</script>
