<script>
  import CartItem from "./CartItem.svelte";

  import IconDelete from "$lib/icons/IconDelete.svelte";

  import { cart } from "../../../stores/cart";

  import { fade } from "svelte/transition";

  function removeItem(cartItem) {
    $cart = $cart.filter((item) => item !== cartItem);
  }
</script>

<div class="bg-white rounded-[10px] shadow-cart w-90">
  <header class="border-b font-bold border-b-blue-92 text-black p-6">
    Cart
  </header>
  <div class="p-6">
    {#if $cart.length}
      <ul class="flex flex-col mb-6 gap-4">
        {#each $cart as cartItem, i}
          <li>
            <CartItem {cartItem} on:click={() => removeItem(cartItem)} />
          </li>
        {/each}
      </ul>
      <button class="w-full btn">Checkout</button>
    {:else}
      <p class="font-bold text-center py-11 ">Your cart is empty.</p>
    {/if}
  </div>
</div>
