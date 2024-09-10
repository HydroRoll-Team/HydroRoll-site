<script lang="ts">
import Notepad from './Notepad/index.vue'
import DocumentationIcon from '@/components/icons/IconDocumentation.vue'
import { NotepadContent } from "@/views/index/Notepad/type";
import { changelog } from './Notepad/changelog'



export default {
  data() {
    return {
      mainPage: 0,
      tooltip: [
        "ChangeLog",
        "What's new?",
        "敬请期待",
        "敬请期待",
      ],
      notepadContents: [] as NotepadContent[],
    }
  },
  components: {
    Notepad: Notepad,
    DocumentationIcon
  },
  methods: {
    change_page(n: number) {
      this.mainPage = n;
      return this.notepadContents[n]
    },
    getBgColor(index: number) {
      if (index < this.mainPage) {
        return "var(--color-border)"
      } else if (index == this.mainPage) {
        return "var(--icon-highlight)"
      } else {
        return "var(--color-border-hover)"
      }
    }
  },
  beforeCreate() {
    changelog().then(res => {
      this.notepadContents.push(res);
    });
    changelog().then(res => {
      this.notepadContents.push(res);
    });
    changelog().then(res => {
      this.notepadContents.push(res);
    });
    changelog().then(res => {
      this.notepadContents.push(res);
    });
  },
}

</script>

<template>
  <div class="messageBar">
    <ul class="options">
      <li v-for="(item, index) in notepadContents" :key="index" class="item">
        <el-tooltip :content="item.title" placement="left" >
          <i :style="{background:getBgColor(index)}" @mouseover="change_page(index)">
            <DocumentationIcon/>
          </i>
        </el-tooltip>
      </li>
    </ul>
    <div class="messageBox">
      <Notepad :content="notepadContents[mainPage]" />
    </div>
  </div>
</template>

<style lang="scss">

.messageBar {
  display: flex;
  flex-direction: column;
  height: 500px;
  margin-top: 2rem;
  position: relative;
}

.messageBar .options{
  display: flex;
  flex-direction: row;
  margin: auto;
  flex-grow: 1;
  color: var(--color-text);
}

.messageBar .options .item{
  display: flex;
  margin: auto;
  padding: 0.7rem;
}

.messageBar .messageBox {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

i {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--color-text);
  width: 50px;
  height: 50px;
  border-radius: 8px;
}

@media screen and (orientation:landscape) {
  .messageBar {
    flex-direction: row;
    height: 600px;
    margin-top: 0;
    padding: 5rem 0 5rem 0rem;
  }

  .messageBar .options{
    flex-direction: column;
  }

  .messageBar .options .item{
    padding: 1.8rem;
  }

  .item {
    text-align: center;
    width: 100%;
  }

  i {
    margin: auto;
    border-radius: 8px;

  }

  // .messageBar:before {
  //   content: ' ';
  //   border-left: 1px solid var(--color-border);
  //   position: absolute;
  //   left: 0;
  //   bottom: calc(50% + 25px);
  //   height: calc(50% - 25px);
  // }

  // 画白线
  .options:after {
    content: ' ';
    border-left: 1px solid var(--vt-c-divider-dark-2);
    position: absolute;
    left: 3.25rem;
    top: calc(10%);
    height: calc(80%);
    z-index: -10;
  }

  // .messageBar:first-of-type:before {
  //   display: none;
  // }

  // .item:last-of-type:after {
  //   display: none;
  // }
}
</style>
