# vue-flex-box
A flexbox grid system.

## setup

### npm

```shell
npm install @sidline/vue-flex-box
```

---

Register the components globally.

```javascript
import Vue from 'vue';
import FlexBox from '@sidline/vue-flex-box';

Vue.use(FlexBox);
```

## components

### FxCol - FxRow - FxItem

#### properties

| Property | Type | Default | Accepted Values |
| :--- | :--- | :--- | :--- |
| `fxAlign` | `String` | `'none'` | "none", "auto", "start", "end", "center", "baseline", "stretch" |
| `fxAlignContent` | `String` | `'stretch'` | "start", "end", "center", "between", "around", "evenly", "baseline", "stretch" |
| `fxAlignItems` | `String` | `'stretch'` | "start", "end", "center", "baseline", "stretch" |
| `fxFill` | `Boolean` | `false` | |
| `fxGutter` | `String` | `'none'` | "none", "small", "medium", "large" | 
| `fxJustify` | `String` | `'start'` | "start", "end", "center", "between", "around", "evenly" !
| `fxNoGrow` | `Boolean` | `false` | |
| `fxNoShrink` | `Boolean` | `false` | | 
| `fxNoWrap` | `Boolean` | `true` | |
| `fxOrder` | `Number` | `0` | |
| `fxReverse` | `Boolean` | `false` | |
| `fxSize` | `Number | String` | `0` | number or size "px" "%" "em" |
| `fxWrap` | `Boolean` | `false` | |
| `fxWrapReverse` | `Boolean` | `false` | |
| `tag` | `String` | `'div'` | |