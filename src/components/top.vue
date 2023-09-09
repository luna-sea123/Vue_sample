<template>
    <div class="top">
        <h1>{{ msg }}</h1>
        
        <h1>test</h1>
        <h2>test</h2>
        <h3>test</h3>

        <!-- v-if判定未 何も表示されない-->
        <div id="app">
            <div v-if="center" key="center">
              <h1>center</h1>
              <div v-on:click="watchLeft">left</div>
              <div v-on:click="watchRight">right</div>
            </div>
          </div>

          <div v-if="left" key="left">
            <div class="animated" v-bind:class="leftSlideClass">
              <h1>left</h1>
              <div v-on:click="watchCenter">center</div>
              <div v-on:click="watchRight">right</div>
            </div>
          </div>

          <div v-if="right" key="right">
            <div class="animated" v-bind:class="rightSlideClass">
              <h1>right</h1>
              <div v-on:click="watchCenter">center</div>
              <div v-on:click="watchLeft">left</div>
            </div>
          </div>

        </div>
</template>

<script>
export default{
    name: 'top',
    props: {
        msg: String
    }
}

</script>