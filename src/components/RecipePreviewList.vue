<template>
  <b-container>
    <h3 class="title">
      {{ title }}:
      <slot></slot>
    </h3>
    <b-row class="recipes-container">
      <b-col v-for="(r, index) in recipes" :key="r.id">
        <RecipePreview
          class="recipePreview"
          :recipe="r"
          :id="r.id"
          :title="r.title"
          :readyInMinutes="r.readyInMinutes"
          :image="r.image"
          :aggregateLikes="r.aggregateLikes == undefined
                ? r.popularity
                : r.aggregateLikes"
          :isFavorite="r.isFavorite"
          :isLastseen="r.isLastseen"
          :index="index + 1"
        />
      </b-col>
    </b-row>
    <b-button class="more_btn" @click="updateRecipes" variant="dark"
      >More Recipe</b-button
    >
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    listType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      recipes: [],
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        this.$root.store.server_domain = "https://dm-recipes.cs.bgu.ac.il";
        let response;
        if (this.listType == "RandomRecipes") {
          response = await this.axios.get(
            this.$root.store.server_domain + "/recipes/random"
          );
        } else if (this.listType == "MyRecipes") {
          response = await this.axios.get(
            this.$root.store.server_domain + "/users/my"
          );
        } else if (this.listType == "MyFamilyRecipes") {
          response = await this.axios.get(
            this.$root.store.server_domain + "/users/family"
          );
        } else if (this.listType == "MyFavoriteRecipes") {
          response = await this.axios.get(
            this.$root.store.server_domain + "/users/favorites"
          );
        }
        const resultsRecipes = response.data;
        this.recipes = resultsRecipes;
        if (this.$root.store.username != undefined) {
          let lastSeen = await this.axios.get(
            this.$root.store.server_domain + "/users/allwatched"
          );
          sessionStorage.setItem(
            "watchedRecipes",
            JSON.stringify(lastSeen.data.watched)
          );
          let favorites = JSON.parse(sessionStorage.getItem("favorites"));
          let newRecipes = [];
          this.recipes.forEach((recipe) => {
            let newRecipe = JSON.parse(JSON.stringify(recipe));
            newRecipe.isFavorite = favorites.includes(newRecipe.id.toString());
            newRecipe.isLastseen = lastSeen.data.watched.includes(
              newRecipe.id.toString()
            );
            newRecipes.push(newRecipe);
          });
          this.recipes = newRecipes;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
  position: flex;
}
.recipes-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
.more_btn {
  margin-left: 170px;
  margin-top: 50px;
}
</style>
