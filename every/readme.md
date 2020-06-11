# Patronum/Every

```ts
import { every } from 'patronum/every';
```

## `every(predicate, stores)`

```ts
$result = every(predicate, stores);
```

- `$result` will be `true` if each call `predicate` on each store value from `values` returns `true`, otherwise it will be `false`

### Arguments

1. `predicate` _(`(value: T) => boolean`)_ — Function to check store value
1. `stores` _(`Array<Store<T>>`)_ — List of stores

### Return

- `$result` _(`Store<boolean>`)_ — `true` if each store corresponds to `predicate`

### Example

```ts
const $width = createStore(440);
const $height = createStore(780);

const $fitsSquare = every((size) => size < 800, [$width, $height]);

console.assert(true === $fitsSquare.getState());
```

## `every(value, stores)`

```ts
$result = every(value, stores);
```

- `$result` will be `true` if each value if `stores` equals `values`, otherwise it will be `false`

### Arguments

1. `value` _(`T`)_ — Data to compare stores values with
1. `stores` _(`Array<Store<T>>`)_ — List of stores to compare with `value`
1. type of `value` and `stores` should should be the same

### Return

- `$result` _(`Store<boolean>`)_ — `true` if each store contains `value`

### Example

```ts
const $isPasswordCorrect = createStore(true);
const $isEmailCorrect = createStore(true);

const $isFormCorrect = every(true, [$isPasswordCorrect, $isEmailCorrect]);

console.assert(true === $isFormCorrect.getState());
```