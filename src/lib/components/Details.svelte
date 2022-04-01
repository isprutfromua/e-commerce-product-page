<script>
  import { cart, isCartVisible } from "../../stores/cart";

  import IconCart from "$lib/icons/IconCart.svelte";
  import IconMinus from "$lib/icons/IconMinus.svelte";
  import IconPlus from "$lib/icons/IconPlus.svelte";

  let isLightBoxVisible = false;
  let productCount = 0;

  $: product = {
    name: "Fall Limited Edition Sneakers",
    image: "/images/sneakers-main.webp",
    price: 125,
    amount: productCount,
  };

  function addProduct() {
    $cart = [product, ...$cart];
    productCount = 0;
    isCartVisible.set(true);
    window.scrollTo(0, 0);
  }
</script>

<h1 class="sr-only">Product page</h1>
<div class="flex flex-col <lg:p-6">
  <p class="font-bold mb-6 text-orange-55 uppercase">Sneaker company</p>
  <h2 class="font-bold text-black mb-8 text-5xl ">
    Fall Limited Edition Sneakers
  </h2>
  <p class="mb-5">
    These low-profile sneakers are your perfect casual wear companion. Featuring
    a durable rubber outer sole, they'll withstand everything the weather can
    offer.
  </p>
  <p class="mb-2">
    <b class="text-black mr-4 text-2xl">$125.00</b>
    <span class="rounded-md font-bold bg-orange-94 p-2 text-orange-55"
      >50%</span>
  </p>
  <s class="font-bold mb-8 text-blue-75">$24.00</s>
  <div class="flex gap-x-4 buttons">
    <div
      class="rounded-md flex bg-blue-98 h-14 px-4 w-39 items-center justify-between select-none ">
      <button
        class="font-bold text-orange-55"
        on:click={() => {
          if (productCount >= 1) productCount--;
        }}>
        <span class="sr-only">Decrease quantity</span>
        <IconMinus />
      </button>
      <span class="font-bold text-black">{productCount}</span>
      <button
        class="font-bold text-orange-55"
        on:click={() => {
          productCount++;
        }}>
        <span class="sr-only">Increase quantity</span>
        <IconPlus />
      </button>
    </div>
    <button
      class="flex font-bold bg-orange text-white btn justify-center {productCount ==
      0
        ? 'bg-orange-71'
        : ''} "
      on:click={addProduct}
      disabled={productCount == 0}>
      <IconCart />
      <span>Add to cart</span>
    </button>
  </div>
</div>
