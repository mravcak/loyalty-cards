<script>
  import { onMount } from 'svelte';
  import JsBarcode from 'jsbarcode';
  import TinyColor from 'tinycolor2';

  export let card;
  let codeCanvas;
  const backgroundColor = TinyColor(card.backgroundColor);
  const color = backgroundColor.getLuminance() > 0.5  ? 'black' : 'white';

  onMount(() => {
    JsBarcode(codeCanvas, card.code, {
      format: card.format,
      height: 150,
    })
  });
</script>

<div
  class="loyalty-card"
  style="background-color: {card.backgroundColor}"
>
  <div
    class="loyalty-card-code-wrap"
  >
    <svg
      class="loyalty-card-code"
      bind:this="{codeCanvas}"
    />
  </div>
  <h2
    class="loyalty-card-name"
    style="color: {color}"
  >
    {card.name}
  </h2>
</div>

<style>
  .loyalty-card {
    height: 80vh;
    padding: 30px 30px 20px 30px;
    display: flex;
    flex-direction: column;
    font-family: 'Fira Sans', sans-serif;
  }
  .loyalty-card-code-wrap {
    background-color: white;
    border-radius: 15px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loyalty-card-name {
    text-align: center;
    font-size: 60px;
    margin: 15px 0 0;
  }
  @media screen and (min-width: 500px) {
    .loyalty-card {
      height: 350px;
      border-radius: 20px;
      margin-bottom: 20px;
    }
  }
</style>