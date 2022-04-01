<script>
  import IconNext from "$lib/icons/IconNext.svelte";
  import IconPrevious from "$lib/icons/IconPrevious.svelte";
  import { fade } from "svelte/transition";

  let images = [
    "/images/sneakers-main.webp",
    "/images/sneakers-2.webp",
    "/images/sneakers-3.webp",
    "/images/sneakers-4.webp",
  ];

  let currentSlide = 0;
  export let arrows = true;
  export let thumbnailsPosition = "between";
  const prevSlide = () => {
    currentSlide = currentSlide == 0 ? images.length - 1 : currentSlide - 1;
  };

  const nextSlide = () => {
    currentSlide = currentSlide == images.length - 1 ? 0 : currentSlide + 1;
  };
</script>

<div class="flex carousel  relative lg:flex-col">
  <div class="flex w-full relative slide ">
    {#key currentSlide}
      <img
        on:click
        class="h-full object-cover w-full   absolute lg:rounded-xl"
        transition:fade={{ duration: 500 }}
        src={images[currentSlide]}
        alt="" />
    {/key}
  </div>

  <div
    class="flex left-0 right-0 px-4 transform top-1/2 -translate-y-5 justify-between controls absolute   {arrows ===
    'sm'
      ? 'lg:hidden'
      : arrows
      ? 'block'
      : 'hidden'}">
    <button
      class="bg-white rounded-full flex h-10 w-10 items-center justify-center"
      on:click={prevSlide}>
      <IconPrevious />
    </button>
    <button
      class="bg-white rounded-full flex h-10 w-10 items-center justify-center"
      on:click={nextSlide}>
      <IconNext />
    </button>
  </div>

  <div
    class="flex mt-8 gap-x-8 thumbnails justify-{thumbnailsPosition} <lg:hidden">
    {#each images as image, idx}
      <div
        class:active={idx === currentSlide}
        class="bg-cover rounded-lg cursor-pointer h-22 w-22 thumb-image"
        on:click={() => {
          currentSlide = idx;
        }}
        style="--image: url({image});" />
    {/each}
  </div>
</div>

<style>
  .slide {
    aspect-ratio: calc(375 / 300);
  }

  @media screen and (min-width: 768px) {
    .slide {
      aspect-ratio: 1 / 1;
    }
  }

  .thumb-image {
    background-image: var(--image);
  }
  .active {
    border: 2px solid hsla(26, 100%, 55%, 1);
    background-image: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.75),
        rgba(255, 255, 255, 0.75)
      ),
      var(--image);
  }
</style>
