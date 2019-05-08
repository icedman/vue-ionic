<template>
  <div padding>
    <h1>{{ msg }}</h1>
    <ion-list>
      <ion-item>
        <ion-label fixed>{{ $store.getters.DEVICE_READY }}</ion-label>
      </ion-item>
      <ion-item>
        <ion-label fixed>App Layout</ion-label>
      </ion-item>
      <ion-item>
        <ion-button @click="setLayout('Full')">Full</ion-button>
      </ion-item>
      <ion-item>
        <ion-button @click="setLayout('Header')">Header</ion-button>
      </ion-item>
      <ion-item>
        <ion-button @click="setLayout('Menu')">Menu</ion-button>
      </ion-item>
      <ion-item>
        <ion-button @click="setLayout('Tabs')">Tabs</ion-button>
      </ion-item>
      <ion-item>
        <ion-button @click="setLayout('SplitPane')">SplitPane</ion-button>
      </ion-item>
      <ion-item>
        <ion-label fixed>Sample Controllers</ion-label>
      </ion-item>
      <ion-item>
        <ion-button @click="sampleAlert()">Alert</ion-button>
      </ion-item>
      <ion-item>
        <ion-button @click="sampleActionSheet()">ActionSheet</ion-button>
      </ion-item>
      <ion-item>
        <ion-button @click="sampleToast()">Toast</ion-button>
      </ion-item>
    </ion-list>
    <ion-searchbar
      :value="searched"
      @ionChange="searched = $event.target.value"
      :debounce="500"
    ></ion-searchbar>
    searching for {{ searched }}...
    <ion-list>
      <ion-item>
        <ion-icon name="logo-twitter"></ion-icon>
        Followers
        <ion-badge>260k</ion-badge>
      </ion-item>
      <ion-item>
        <ion-label fixed>Input Text</ion-label>
        <ion-input
          type="text"
          :value="msg"
          @ionChange="msg = $event.target.value"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-label fixed>Input Text (v-ion-model)</ion-label>
        <ion-input
          type="text"
          v-ion-model="msg"
          @input="didSomeInput"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Toggle [{{ toggled }}]</ion-label>
        <ion-toggle
          :checked="toggled"
          @ionChange="toggled = $event.target.checked ? true : false"
        ></ion-toggle>
      </ion-item>
      <ion-item>
        <ion-label>Toggle (v-ion-model) [{{ toggled }}]</ion-label>
        <ion-toggle v-ion-model="toggled"></ion-toggle>
      </ion-item>
      <ion-item>
        <ion-label>Checkbox [{{ checkboxed }}]</ion-label>
        <ion-checkbox
          color="dark"
          :checked="checkboxed"
          @ionChange="checkboxed = $event.target.checked ? true : false"
        ></ion-checkbox>
      </ion-item>
      <ion-item>
        <ion-label>Checkbox (v-ion-model) [{{ checkboxed }}]</ion-label>
        <ion-checkbox v-ion-model="checkboxed"></ion-checkbox>
      </ion-item>
      <ion-item>
        <ion-label>Date/Time {{ dated }}</ion-label>
        <ion-datetime
          displayFormat="h:mm A"
          pickerFormat="h mm A"
          :value="dated"
          @ionChange="dated = $event.target.value"
        ></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-label>Date/Time (v-ion-model) {{ dated }}</ion-label>
        <ion-datetime displayFormat="h:mm A" v-ion-model="dated"></ion-datetime>
      </ion-item>

      <ion-item>
        <ion-textarea
          v-ion-model="texted"
          placeholder="Enter more information here..."
        ></ion-textarea>
      </ion-item>
      <ion-item>
        {{ texted }}
      </ion-item>
    </ion-list>
    <ion-card>
      <ion-card-header>
        Card Header
      </ion-card-header>
      <ion-card-content>
        Card content
      </ion-card-content>
    </ion-card>
    <ion-radio-group
      :value="radioed"
      @ionChange="radioed = $event.target.value"
    >
      <ion-list-header> Radio Group [{{ radioed }}] </ion-list-header>
      <ion-item>
        <ion-label>Go</ion-label>
        <ion-radio value="go"></ion-radio>
      </ion-item>
      <ion-item>
        <ion-label>Rust</ion-label>
        <ion-radio value="rust"></ion-radio>
      </ion-item>
      <ion-item disabled="true">
        <ion-label>Python</ion-label>
        <ion-radio value="python"></ion-radio>
      </ion-item>
    </ion-radio-group>
    <ion-radio-group v-ion-model="radioed">
      <ion-list-header>
        Radio Group (v-ion-model) [{{ radioed }}]
      </ion-list-header>
      <ion-item>
        <ion-label>Go</ion-label>
        <ion-radio value="go"></ion-radio>
      </ion-item>
      <ion-item>
        <ion-label>Rust</ion-label>
        <ion-radio value="rust"></ion-radio>
      </ion-item>
      <ion-item disabled="true">
        <ion-label>Python</ion-label>
        <ion-radio value="python"></ion-radio>
      </ion-item>
    </ion-radio-group>
    <ion-item>
      <ion-label>Range [{{ ranged }}]</ion-label>
      <ion-range :value="ranged" @ionChange="ranged = $event.target.value">
        <ion-icon size="small" name="sunny" slot="start"></ion-icon>
        <ion-icon name="sunny" slot="end"></ion-icon>
      </ion-range>
    </ion-item>
    <ion-item>
      <ion-label>Range (v-ion-model) [{{ ranged }}]</ion-label>
      <ion-range v-ion-model="ranged">
        <ion-icon size="small" name="sunny" slot="start"></ion-icon>
        <ion-icon name="sunny" slot="end"></ion-icon>
      </ion-range>
    </ion-item>
    <ion-list>
      <ion-item>
        <ion-label>Gaming [{{ selected }}]</ion-label>
        <ion-select
          :value="selected"
          @ionChange="selected = $event.target.value"
        >
          <ion-select-option value="nes">NES</ion-select-option>
          <ion-select-option value="n64">Nintendo64</ion-select-option>
          <ion-select-option value="ps">PlayStation</ion-select-option>
          <ion-select-option value="genesis">Sega Genesis</ion-select-option>
          <ion-select-option value="saturn">Sega Saturn</ion-select-option>
          <ion-select-option value="snes">SNES</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item>
        <ion-label>Gaming (v-ion-model) [{{ selected }}]</ion-label>
        <ion-select v-ion-model="selected">
          <ion-select-option value="nes">NES</ion-select-option>
          <ion-select-option value="n64">Nintendo64</ion-select-option>
          <ion-select-option value="ps">PlayStation</ion-select-option>
          <ion-select-option value="genesis">Sega Genesis</ion-select-option>
          <ion-select-option value="saturn">Sega Saturn</ion-select-option>
          <ion-select-option value="snes">SNES</ion-select-option>
        </ion-select>
      </ion-item>
    </ion-list>
    <ion-slides pager>
      <ion-slide style="background-color: green">
        <h2>Slide 1</h2>
      </ion-slide>
      <ion-slide style="background-color: blue">
        <h2>Slide 2</h2>
      </ion-slide>
      <ion-slide style="background-color: red">
        <h2>Slide 3</h2>
      </ion-slide>
    </ion-slides>
    <ion-list>
      <ion-item-sliding>
        <ion-item>
          <ion-label fixed>Slide me to the left</ion-label>
        </ion-item>
        <ion-item-options>
          <ion-item-option @click="option1($event)" color="green"
            >Option 1</ion-item-option
          >
          <ion-item-option>Option 2</ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </ion-list>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      texted: "",
      searched: "",
      dated: null,
      selected: "n64",
      toggled: true,
      checkboxed: true,
      radioed: "python",
      ranged: 10,
      msg: "Welcome to Your Vue.js App"
    };
  },

  mounted() {
    window.$app = this;
  },

  methods: {
    option1(e) {
      Array.prototype.forEach.call(
        document.querySelectorAll("ion-item-sliding"),
        s => {
          s.closeOpened();
        }
      );
    },
    setLayout(layout) {
      this.$store.commit("ui/SET_LAYOUT", layout);
    },

    async sampleAlert() {
      await this.$ionic.alert.componentOnReady();
      this.$ionic.alert
        .create({
          header: "Alert",
          subHeader: "Subtitle",
          message: "This is an alert message.",
          buttons: ["OK"]
        })
        .then(a => {
          a.present();
        });
    },

    async sampleActionSheet() {
      await this.$ionic.actionSheet.componentOnReady();
      this.$ionic.actionSheet
        .create({
          header: "Albums",
          buttons: [
            {
              text: "Delete",
              role: "destructive",
              icon: "trash",
              handler: () => {
                console.log("Delete clicked");
              }
            },
            {
              text: "Share",
              icon: "share",
              handler: () => {
                console.log("Share clicked");
              }
            },
            {
              text: "Play (open modal)",
              icon: "arrow-dropright-circle",
              handler: () => {
                console.log("Play clicked");
              }
            },
            {
              text: "Favorite",
              icon: "heart",
              handler: () => {
                console.log("Favorite clicked");
              }
            },
            {
              text: "Cancel",
              icon: "close",
              role: "cancel",
              handler: () => {
                console.log("Cancel clicked");
              }
            }
          ]
        })
        .then(a => {
          a.present();
        });
    },

    async sampleToast() {
      await this.$ionic.toast.componentOnReady();
      this.$ionic.toast
        .create({
          message: "Click to Close",
          showCloseButton: true,
          position: "top",
          closeButtonText: "Done"
        })
        .then(a => {
          a.present();
        });
    },

    didSomeInput(x) {
      console.log(x);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
