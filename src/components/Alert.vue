<template>
  <div class="alert">
    <slot></slot>
  </div>
</template>

<style>
.alert {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--white);
  text-transform: uppercase;
  font-weight: 900;
  font-size: 1.8rem;
  padding: .5rem
}
</style>