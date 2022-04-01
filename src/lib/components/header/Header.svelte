<script lang="ts">
  import Menu from "./Menu.svelte";

  import CartButton from "./CartButton.svelte";
  import Cart from "$lib/components/cart/Cart.svelte";

  import IconClose from "$lib/icons/IconClose.svelte";
  import IconMenu from "$lib/icons/IconMenu.svelte";
  import Logo from "./Logo.svelte";
  import { fly, fade } from "svelte/transition";
  import { isCartVisible } from "../../../stores/cart";

  let isMenuVisible = false;
  let navOverlayEl;
  let viewportWidth;
  let headerHeight;

  const showMenu = () => (isMenuVisible = true);
  const hideMenu = () => (isMenuVisible = false);
</script>

<svelte:window bind:innerWidth={viewportWidth} />

<header
  bind:clientHeight={headerHeight}
  class="bg-white flex py-5 px-6 items-center sm:border-b sm:border-b-blue-92 md:py-8 lg:px-0">
  <div class="flex mr-4 sm:hidden">
    <button
      on:click={showMenu}
      aria-expanded={isMenuVisible}
      aria-controls="navigation">
      <span class="sr-only">Show menu</span>
      <IconMenu />
    </button>
  </div>

  <div class="sm:mr-7 md:mr-14">
    <Logo />
  </div>

  {#if viewportWidth < 640}
    {#if isMenuVisible}
      <div
        bind:this={navOverlayEl}
        in:fade
        out:fade
        class="z-20 <sm:bg-black/75 <sm:inset-0 <sm:fixed"
        on:click={({ target }) => {
          if (target === navOverlayEl) hideMenu();
        }}>
        <nav
          id="navigation"
          in:fly={{ x: -800, duration: 1000 }}
          out:fly={{ x: -800, duration: 1000 }}
          class="flex <sm:bg-white <sm:flex-col <sm:font-bold <sm:h-screen <sm:text-black <sm:p-6 <sm:top-0 <sm:left-0 <sm:w-[60vw]  <sm:gap-y-14 <sm:absolute ">
          <button on:click={hideMenu} class="w-max sm:hidden">
            <IconClose />
            <span class="sr-only">Hide menu</span>
          </button>
          <Menu className="flex flex-col gap-5 " />
        </nav>
      </div>
    {/if}
  {:else}
    <Menu className="flex gap-5 items-center md:gap-8" />
  {/if}

  <CartButton on:click={() => ($isCartVisible = !$isCartVisible)} />

  <a href={"#"} class="flex" aria-label="User profile">
    <img
      src="images/user.webp"
      alt="User"
      aria-hidden="true"
      class="border-transparent rounded-full cursor-pointer flex border-[2px] h-9 transition-colors w-9 md:h-[50px] md:w-[50px] hover:border-orange-55" />
  </a>
</header>

{#if $isCartVisible}
  <div
    in:fly={{ y: 8, opacity: 0 }}
    out:fly={{ y: 8, opacity: 0 }}
    style=" top: {headerHeight + 8}px"
    class=" right-2 z-10 absolute xl:-right-25 xl:!top-[94px] ">
    <Cart />
  </div>
{/if}
