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
  <div class="details" style="height:100%">
    <h3>
      {{ content.title }}
    </h3>
    <div class="content">
      <v-md-preview :text="content.message"></v-md-preview>
    </div>  
  </div>
</template>


<style scoped>

.details {
  flex: 1;
  float: right;
  height: 100%;
  padding: 0 10dvw;
}

h3 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

.content {
  overflow-x: auto;
}

@media screen and (orientation:landscape) {
  .details {
    flex: 1;
    width: 32dvw;
    padding: 0;
  }
}
</style>
