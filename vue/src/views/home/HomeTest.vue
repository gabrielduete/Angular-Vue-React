<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ legenda }}</h2>
    <input type="text" v-model="legenda" />

    <button @click="resetLegenda">Reset Legenda</button>
  </div>
</template>

<script>
export default {
  props: ["msg"],
  data: () => {
    return {
      legenda: "Estou no Vue",
    }
  },

  methods: {
    resetLegenda() {
      this.legenda = "Estou no vue"
    },
  },
}
</script>

<style></style>
