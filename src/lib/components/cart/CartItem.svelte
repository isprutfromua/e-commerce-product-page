<script lang="ts">
  import IconDelete from "$lib/icons/IconDelete.svelte";
  export let cartItem;

  $: finalPrice = cartItem.price * cartItem.amount;
</script>

<div class="flex gap-4 items-center justify-between">
  <img
    src={cartItem.image}
    class="object-cover rounded-[4px] h-[50px] w-[50px] "
    alt={cartItem.name} />
  <div>
    <p>{cartItem.name}</p>
    <p>
      <span>{cartItem.price}</span> x <span>{cartItem.amount}</span>
      <span class="font-bold text-black">${finalPrice}</span>
    </p>
  </div>
  <button on:click>
    <span class="sr-only">Remove item</span>
    <IconDelete />
  </button>
</div>
