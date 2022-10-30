# Loyalty Cards

Simple loyalty card web app. Doesn't do anything other than display the cards, doesn't store cards anywhere. Cards are simply provided by query string at runtime.

Demo: [https://projects.mravcak.com/loyalty-cards/](https://projects.mravcak.com/loyalty-cards/)

## Providing the cards

Cards are provided to the app with cardstring that can be passed either as `c` query string or as `#` URL hash.

Cardstring might contain any number of cards and each card is defined as `name,code,type,color`. Cards are separated with `/` slash.

- `name` specifies the displayed name of the card
- `code` specifies the code of the card
- `type` specifies the type of the card, currently only `ean` is supported, which specifies EAN13 format
- `color` specifies the displayed background color of the card, can be either hex string without # (e.g. `FFD000`) or CSS color name (e.g. `yellow`)

Example cardstring passed as `c` query variable:

`?c=ShopA,9275161801006,ean,FFD000/ShopB,5903438605326,ean,006DAF`

## Usage

1. Construct your cardsting
2. Open the app with cardstring on your mobile device
3. Save shortcut to desktop

## Development

The app is written in Svelte and uses Vite.

To run dev server, simply run:

```
npm run dev
```

To build the app:

```
npm run build
```