<slot />

<style global windi:preflights:global windi:safelist:global>
  body {
    font-family: "Kumbh Sans";
    color: hsla(220, 9%, 45%, 1);
  }

  button:focus,
  a:focus {
    outline: none;
  }

  button:focus-visible,
  a:focus-visible {
    outline-offset: 3px;
    outline-style: dashed;
    outline-width: 2px;
    outline-color: hsl(220, 13%, 13%);
  }
</style>
