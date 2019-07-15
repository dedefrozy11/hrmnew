<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-card>
          <v-card-text>
            <v-layout>
              <v-flex xs11 sm11 md11 lg11>
                <h4>Employee Info</h4>
              </v-flex>
              <v-flex xs1 sm1 md1 lg1>
                <v-btn
                  flat
                  icon
                  color="success"
                  class="align-end"
                  @click="viewemployee(props.item)"
                >
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout>
              <v-flex xs12 sm12 md2 lg2 text-xs-center>
                <v-avatar size="180">
                  <img src="@/assets/14.jpg" alt="avatar" />
                  <div class="fill-height repeating-gradient"></div>
                </v-avatar>
              </v-flex>
              <v-flex xs12 sm12 md5 lg5>
                <div>
                  <h3>Nomer ID : {{ }}</h3>
                </div>
                <div>
                  <h3>Nik : {{ }}</h3>
                </div>
                <div>
                  <h3>Nama : {{ }}</h3>
                </div>
                <div>
                  <h3>Nama Panggilan : {{ }}</h3>
                </div>
                <div>
                  <h3>Gender :</h3>
                </div>
              </v-flex>
              <v-flex xs12 sm12 md5 lg5>
                <div>
                  <h3>Tempat Lahir : {{ }}</h3>
                </div>
                <div>
                  <h3>Tanggal Lahir : {{ }}</h3>
                </div>
                <div>
                  <h3>Agama :</h3>
                </div>
                <div>
                  <h3>Status Pernikahan :</h3>
                </div>
                <div>
                  <h3>Status :</h3>
                </div>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-container fluid grid-list-md>
        <v-data-iterator
          :items="items"
          :rows-per-page-items="rowsPerPageItems"
          :pagination.sync="pagination"
          content-tag="v-layout"
          row
          wrap
        >
          <template v-slot:item="props">
            <v-flex xs12 sm12 md6 lg6>
              <Empfamily />
            </v-flex>
            <v-flex xs12 sm12 md6 lg6>
              <Empaddress />
            </v-flex>
            <v-flex xs12 sm12 md6 lg6>
              <Empeducation />
            </v-flex>
            <v-flex xs12 sm12 md6 lg6>
              <Empcourses />
            </v-flex>
            <v-flex xs12 sm12 md6 lg6>
              <Empexperience />
            </v-flex>
            <v-flex xs12 sm12 md6 lg6>
              <Empphone />
            </v-flex>
            <v-flex xs12 sm12 md6 lg6>
              <Empposition />
            </v-flex>
            <v-flex xs12 sm12 md6 lg6>
              <Empskill />
            </v-flex>
          </template>
        </v-data-iterator>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    rowsPerPageItems: [4, 8, 12],
    pagination: {
      rowsPerPage: 8
    },
    items: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: "14%",
        iron: "1%"
      }
    ]
  })
};
</script>