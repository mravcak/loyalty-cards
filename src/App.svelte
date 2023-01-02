<script>
  import LoyaltyCard from './components/LoyaltyCard.svelte';
  import loadCards from './util/loadCards';

  let cards = null;
  cards = loadCards();

  const inputCardsManually = () => {
    const providedCardString = prompt('Insert cards');
    if (providedCardString) {
      cards = loadCards(providedCardString);
    }
  }
</script>

<main>
  <h1 class="app-title">💳 My cards</h1>
  <div class="card-list">
    {#if cards}
      {#each cards as card}
        <div>
          <LoyaltyCard
            card="{card}"
          />
        </div>
      {/each}
    {:else}
      <div class="no-cards-loaded">
        <h2>No cards were loaded</h2>
        <p>Load cards in <code>name,code,options,color</code> format</p>
        <p>e.g. <code>?c=Billa,9791287225767,ean,FFD000</code> appended to the URL</p>
        <p>Multiple cards are separated with <code>/</code></p>
      </div>
    {/if}
    <button
      class="button"
      on:click="{inputCardsManually}"
      on:keydown="{inputCardsManually}"
    >
      Load cards manually
    </button>
  </div>
</main>

<style>
  .app-title {
    text-align: center;
    margin: 30px 0;
    font-family: 'Fira Sans', sans-serif;
  }
  .card-list {
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
  }
  .no-cards-loaded {
    padding: 0 20px;
  }
  .no-cards-loaded code {
    background-color: rgba(0,200,255,0.2);
    padding: 2px 4px;
    border-radius: 4px;
  }
  .button {
    border: 0;
    padding: 4px 12px;
    margin: 20px 0;
    background-color: rgba(255,255,255,0.7);
    color: black;
    border-radius: 50px;
  }
</style>
