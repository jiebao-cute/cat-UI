<demo>
尺寸
</demo>
<template>
  <div>
    <div>
      <Button size="big">Bigbutton</Button>
      <Button>Normal</Button>
      <Button size="small">Small</Button>
    </div>
    <div>
      <Button theme="link" size="big">Big Link</Button>
      <Button theme="link">Normal Link</Button>
      <Button size="small" theme="link">Small Link</Button>
    </div>
    <div>
      <Button size="big" theme="text">Big Text</Button>
      <Button theme="text">Normal Text</Button>
      <Button size="small" theme="text">Small Text</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>