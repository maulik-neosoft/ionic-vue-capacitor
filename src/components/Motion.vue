<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-buttons slot="start" @click="goBack()">
          <ion-icon name="arrow-back" style="font-size: 25px;"></ion-icon>
        </ion-buttons>
        <ion-title>Motion</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-button @click="start()">START</ion-button>
      
      <ion-card v-if="accel !== null">
        <ion-card-content>
          <h4>Acceleration</h4>
          <br>
          <ion-grid>
            <ion-row>
              <ion-col>
                <span>X: {{ parseInt(accel.x) }}</span>
              </ion-col>
              <ion-col>
                <span>Y: {{ parseInt(accel.y) }}</span>
              </ion-col>
              <ion-col>
               <span>Z: {{ parseInt(accel.z) }}</span>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>

      <ion-card v-if="accelGravity !== null">
        <ion-card-content>
          <h4>Acceleration Including Gravity</h4>
          <br>
          <ion-grid>
            <ion-row>
              <ion-col>
                <span>X: {{ parseInt(accelGravity.x) }}</span>
              </ion-col>
              <ion-col>
                <span>Y: {{ parseInt(accelGravity.y) }}</span>
              </ion-col>
              <ion-col>
                <span>Z: {{ parseInt(accelGravity.z) }}</span>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>

      <ion-card v-if="rotationRate !== null">
        <ion-card-content>
          <h4>rotation Rate</h4>
          <br>
          <ion-grid>
            <ion-row>
              <ion-col>
                <span>Alpha: {{ parseInt(rotationRate.alpha) }}</span>
              </ion-col>
              <ion-col>
                <span>Beta: {{ parseInt(rotationRate.beta) }}</span>
              </ion-col>
              <ion-col>
                <span>Gamma: {{ parseInt(rotationRate.gamma) }}</span>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>

    </ion-content>
  </div>
</template>

<script>
import { Plugins } from '@capacitor/core';

const { Motion } = Plugins;

export default {
  name: "Motion",
  data() {
    return {
      accel: null,
      accelGravity: null,
      rotationRate: null
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    start() {
      Motion.addListener("accel", (event) => {
        this.accel = event.acceleration
        this.accelGravity = event.accelerationIncludingGravity
        this.rotationRate = event.rotationRate
      })
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
