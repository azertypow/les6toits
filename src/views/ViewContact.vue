<template>
  <div class="view-contact">
    <form >
      <div>
        <label
        >nom
          <br><input type="text">
        </label>
      </div>

      <div>
        <label
        >prénom
          <br><input type="text">
        </label>
      </div>

      <div>
        <label
        >adresse mail
          <br><input type="text">
        </label>
      </div>

      <div>
        <label
        >message
          <br><input type="text">
        </label>
      </div>

      <button>envoyer</button>


    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'ViewContact',
  components: {},

});
</script>

<style lang="scss" scoped>
.view-contact {
  padding-top:    15vh;
  padding-bottom: 15vh;
}
</style>