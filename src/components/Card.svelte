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
  class="card"
  style="background-color: {card.backgroundColor}"
>
  <div
    class="card-code-wrap"
  >
    <svg
      class="card-code"
      bind:this="{codeCanvas}"
    />
  </div>
  <h2
    class="card-name"
    style="color: {color}"
  >
    {card.name}
  </h2>
</div>

<style>
  .card {
    height: 400px;
    padding: 30px 30px 20px 30px;
    display: flex;
    flex-direction: column;
    color: black;
  }
  .card-code-wrap {
    background-color: white;
    border-radius: 15px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-name {
    text-align: center;
    font-size: 60px;
    margin: 15px 0 0;
  }
</style>