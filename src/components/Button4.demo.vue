<demo>
不可用状态
</demo>
<template>
  <Button disabled>Disabled</Button>
  <Button theme="link" disabled>Disabledlink</Button>
  <Button theme="text" disabled>Disabledtext</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>