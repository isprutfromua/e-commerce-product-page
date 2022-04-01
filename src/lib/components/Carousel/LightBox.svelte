<script>
  import IconClose from "$lib/icons/IconClose.svelte";
  import Carousel from "./Carousel.svelte";
  import { fade } from "svelte/transition";
</script>

<div
  class="bg-black/75 grid inset-0 fixed place-items-center "
  in:fade={{ duration: 500 }}
  out:fade={{ duration: 100 }}>
  <div class="flex flex-col gap-6">
    <button class="text-white self-end" on:click>
      <IconClose />
    </button>
    <div class="w-140">
      <slot />
    </div>
  </div>
</div>
