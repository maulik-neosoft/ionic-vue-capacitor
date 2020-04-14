<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-buttons slot="start" @click="goBack()">
          <ion-icon name="arrow-back" style="font-size: 25px;"></ion-icon>
        </ion-buttons>
        <ion-title>Device Info</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <pre>{{ JSON.stringify(info, null, 4) }}</pre>
    </ion-content>
  </div>
</template>

<script>
import { Plugins } from '@capacitor/core';

const { Device } = Plugins;

export default {
  name: "DeviceInfo",
  data() {
    return {
      info: null
    }
  },
  mounted() {
    Device.getInfo().then(response => {
      this.info = response
    }).catch(error => {
      this.info = error
    })
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
