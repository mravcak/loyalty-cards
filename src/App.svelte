<script>
  import Card from './components/Card.svelte';

  const isColor = (colorString) => {
    const s = new Option().style;
    s.color = colorString.toLowerCase();
    return s.color !== '';
  }

  const loadColor = (colorString) => {
    if (isColor(colorString)) {
      return colorString;
    }
    if (isColor(`#${colorString}`)) {
      return `#${colorString}`;
    }
    return 'black';
  }

  const urlParams = new URLSearchParams(window.location.search);
  const cardString = urlParams.get('k');
  let cards = null;

  if (cardString) {
    cards = cardString.replace(/\s/g, '').split('/').map((string) => {
      const [name, options, bg, code] = string.split(',');
      return {
        name,
        format: options === 'ean' ? 'EAN13' : '',
        backgroundColor: loadColor(bg),
        code,
      };
    })
  }
  console.log('Loaded card config:', cards);
</script>

<main>
  <h1 class="title">💳 My cards</h1>
  <div class="list">
    {#if cards}
      {#each cards as card}
        <div>
          <Card
            card="{card}"
          />
        </div>
      {/each}
    {:else}
      <p>No cards were loaded</p>
    {/if}
  </div>
</main>

<style>
  .title {
    text-align: center;
    margin: 30px 0;
  }
  .list {
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
  }
</style>
