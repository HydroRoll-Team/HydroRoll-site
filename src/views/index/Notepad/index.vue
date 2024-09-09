<script lang="ts">
import { NotepadContent } from "@/views/index/Notepad/type";

export default {
  props: {
    content: {
      type: NotepadContent,
      require: true,
      default: new NotepadContent(),
    },
  },
}
</script>


<template>
  <div class="details" style="overflow-y:hidden;overflow-x:hidden;height:100%">
    <h3>
      {{ content.title }}
    </h3>
    <v-md-preview :text="content.message" ></v-md-preview>
  </div>
</template>


<style scoped>


h3 {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

.details {
  flex: 1;
  width: 60dvw;
  float: right;
}

@media screen and (orientation:landscape) {
  .details {
    flex: 1;
    width: 32dvw;
  }
}
</style>
