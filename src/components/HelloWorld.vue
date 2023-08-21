<script lang="ts" setup>
const items = Array.from({ length: 100 }, () =>
  Math.random().toString(36).substring(7)
);
</script>
<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-form>
            <v-table>
              <tr>
                <td>
                  <v-autocomplete
                    :items="items"
                    data-cy="inputField"
                    outlined
                    persistent-hint
                  />
                </td>
                <td>
                  <div style="width: 1000px" />
                </td>
              </tr>
            </v-table>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
