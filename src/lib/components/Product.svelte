<script>
  import Details from "$lib/components/Details.svelte";

  import Carousel from "$lib/components/Carousel/Carousel.svelte";

  let productCount = 0;
  let product = {};
</script>

<div class="lg:flex lg:mx-auto lg:mt-10 lg:mt-22  lg:max-w-254 lg:gap-x-30">
  <Carousel on:click arrows="sm" />
  <Details {product} />
</div>
