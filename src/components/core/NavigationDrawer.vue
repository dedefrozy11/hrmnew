<template>
  <v-navigation-drawer v-model="toggle" fixed app>
    <v-toolbar color="light-blue darken-3" class="toolbar">
      <router-link :to="{ name: 'Dashboard' }">
        <img src="@/assets/logo2.png" width="36px">
      </router-link>
      <router-link :to="{ name: 'Dashboard' }" class="text">PT.Lestari Jaya Raya</router-link>
    </v-toolbar>
    <v-list>
      <v-list-tile @click="changeRoute('edit', 1)">
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 1}, 'item-title' ]">Dashboard</v-list-tile-title>
      </v-list-tile>
      <v-list-group prepend-icon="person_add">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Candidate</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Canddata', 2)">
          <v-list-tile-action></v-list-tile-action>
          <v-list-tile-title
            :class="[{'active': selectedIndex === 2}, 'item-title' ]"
          >Candidate Data</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Addcand', 3)">
          <v-list-tile-action></v-list-tile-action>
          <v-list-tile-title
            :class="[{'active': selectedIndex === 3}, 'item-title' ]"
          >Added Candidate</v-list-tile-title>
        </v-list-tile>
      </v-list-group>
      <v-list-group prepend-icon="how_to_reg">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Employee</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Addemp', 5)">
          <v-list-tile-action></v-list-tile-action>
          <v-list-tile-title
            :class="[{'active': selectedIndex === 5}, 'item-title' ]"
          >Added Employees</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Empdata', 4)">
          <v-list-tile-action></v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 4}, 'item-title' ]">Employee Data</v-list-tile-title>
        </v-list-tile>
      </v-list-group>
      <v-list-tile @click="changeRoute('edit', 14)">
        <v-list-tile-action>
          <v-icon>edit</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 14}, 'item-title' ]">Edit</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    toggle: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  data() {
    return {
      selectedIndex: 1,
      admins: [["Management", "people_outline"], ["Settings", "settings"]]
    };
  },

  methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName });
    }
  }
};
</script>

<style>
.toolbar {
  font-weight: bold;
  font-size: 18px;
}

.toolbar .text {
  padding-left: 15px;
  color: white;
  text-decoration: none;
}

.item-title {
  font-size: 17px;
  font-weight: 500;
}
.item-sub-title {
  font-size: 15px;
  font-weight: 500;
}

.active {
  font-weight: bold;
}
</style>
