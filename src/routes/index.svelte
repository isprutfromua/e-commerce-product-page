<script>
  import Details from "$lib/components/Details.svelte";
  import Product from "$lib/components/Product.svelte";

  import Carousel from "$lib/components/Carousel/Carousel.svelte";
  import LightBox from "$lib/components/Carousel/LightBox.svelte";
  import Header from "$lib/components/header/Header.svelte";
  import IconCart from "$lib/icons/IconCart.svelte";
  import IconMinus from "$lib/icons/IconMinus.svelte";
  import IconPlus from "$lib/icons/IconPlus.svelte";

  let isLightBoxVisible = false;
  let windowWidth;
  let productCount = 0;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<main class="lg:container lg:mx-auto lg:relative">
  <Header />
  <Product
    on:click={() => {
      isLightBoxVisible = true;
    }} />
</main>

{#if windowWidth > 1024 && isLightBoxVisible}
  <LightBox
    on:click={() => {
      isLightBoxVisible = false;
    }}>
    <Carousel thumbnailsPosition="center" />
  </LightBox>
{/if}
