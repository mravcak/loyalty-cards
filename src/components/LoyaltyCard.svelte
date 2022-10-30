<script>
  import { onMount } from 'svelte';
  import JsBarcode from 'jsbarcode';
  import TinyColor from 'tinycolor2';

  export let card;
  let codeCanvas;
  let isOpen = false;
  const backgroundColor = TinyColor(card.backgroundColor);
  const color = backgroundColor.getLuminance() > 0.5  ? 'black' : 'white';
  const renderBarcode = () => {
    JsBarcode(codeCanvas, card.code, {
      format: card.format,
      height: 150,
    })
  };
  const triggerDisplay = () => {
    isOpen = !isOpen;
    setTimeout(() => {
      if (isOpen) {
        renderBarcode();
      }
    }, 0)
  };
</script>

<div
  class="loyalty-card"
  style="background-color: {card.backgroundColor}"
  on:click="{triggerDisplay}"
  on:keydown="{triggerDisplay}"
>
  {#if isOpen}
    <div
      class="loyalty-card-code-wrap"
    >
      <svg
        class="loyalty-card-code"
        bind:this="{codeCanvas}"
      />
    </div>
  {/if}
  <h2
    class="loyalty-card-name"
    style="color: {color}"
  >
    {card.name}
  </h2>
</div>

<style>
  .loyalty-card {
    padding: 30px;
    display: flex;
    flex-direction: column;
    font-family: 'Fira Sans', sans-serif;
  }
  .loyalty-card-code-wrap {
    background-color: white;
    border-radius: 15px;
    height: 300px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loyalty-card-name {
    text-align: center;
    font-size: 50px;
    margin: 0;
  }
  @media screen and (min-width: 500px) {
    .loyalty-card {
      border-radius: 20px;
      margin-bottom: 20px;
    }
  }
</style>