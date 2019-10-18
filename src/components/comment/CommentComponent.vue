<template lang="html">
  <div>
    <v-row no-gutters cols="12">
      <v-col sm="12">
          <h3>Comments</h3>
            <v-list-item-content v-for="(comment, index) in comments" :key="index">
            <v-list-item-title id="commentator">{{comment.commentator}}</v-list-item-title>
            <v-list-item-content>{{comment.comment}}</v-list-item-content>
          </v-list-item-content>
      </v-col>
    </v-row>
  </div>

</template>

<script>
export default {
  name: "CommentComponent",
  props: ['comments'],
};
</script>

<style scoped>
#commentator {
  font-weight: bold;
}
</style>
