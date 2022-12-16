<template>
    <div ref="dropDownWrapper" class="dropDown pos-rel">
      
      <button
        @click="dropDown"
        :id="options.type"
      >
        
        <span :id="options.type">{{current?.label}}</span>
        
        <Icons
          class="ml-a"
          icon="arrDown"
          size="middle"
          color="white"
          :id="options.type"
        />

      </button>

      <ul
        class="pos-abs"
        :class="open ? 'open' : 'closed'"
      >
        <li
          @click="changeOption(option)"
          v-for="option in options.options"
          :key="option.value"
          :class="option == currentOption ? 'chosenOption' : ''"
        >
          {{option.label}}
        </li>
      </ul>
    </div>
  </template>

  <script>
  import Icons from './icons.vue'

  export default {
    name: 'dropDownComponent',

    components: {
      Icons
    },

    data() {
      return {
        open: false,
        event: '',
        currentOption: this.currentOption
      }
    },

    props: {
      options: {
        type: Object,
        required: true
      },
      current: {
        type: Object,
        required: false
      },
      tabReplacement: {
        type: Boolean,
        default: false,
        required: false
      }
    },


    methods: {
      changeOption(option) {
        this.$emit('changeOption', option)
        this.currentOption = option

        if(this.tabReplacement === true) {
          this.$router.push({
            query: {
              ...this.$route.query,
              type: option.value
            }
          })
        }
      },

      loggerFunc() {
        const _t = this

        if(this.open === true) {
          this.open = false
          window.removeEventListener('mouseup', _t.stateDetector)
        } else return
      },

      stateDetector(e) {
        const _t = this
        const dropDownID = this.options.type

        if(e.target && e.target.id !== dropDownID) {
          _t.loggerFunc()
        }
      },

      dropDown() {
        const _t = this

        if(this.open === false) {
          this.open = true
          window.addEventListener('mouseup', _t.stateDetector)
        } else {
          this.open = false
        }
      },
    },
  }
  </script>
  <style lang="scss">
    $white: #FFFFFF;
    $prim: #4582D3;

.dropDown {
  button {
    width: 100%;
    display: flex;
    gap: 24px;
    flex-direction: row;
    align-items: center;
    padding: 14px;
    box-sizing: border-box;
    height: 48px;
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid $prim;

    span {
      color: $prim;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  ul {
    z-index: 201;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    margin-top: 8px;
    max-height: 278px;
    width: 100%;
    background-color: $white;
    padding: 24px;
    box-sizing: border-box;
    border-radius: 10px;
    gap: 24px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.24);
    transform-origin: top;

    li {
      list-style: none;
      cursor: pointer;
      color: $prim;
      user-select: none;

      &.chosenOption {
        color: $prim;
        font-family: 'Tell Bold';
        font-weight: 700;
      }

      &:hover {
        color: $prim;
      }
    }

    &.open {
      opacity: 1;
      margin-top: 8px;
      height: fit-content;
      transform: scaleY(1);
      transition: all 200ms ease-out;
    }
    
    &.closed {
      opacity: 0;
      margin-top: 0;
      height: 0;
      transform: scaleY(0);
      transition: all 200ms ease-out;
    }
  }
}
</style>