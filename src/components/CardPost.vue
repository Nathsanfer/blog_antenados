<script>
export default {
  name: "CardPost",
  props: {
    image: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    categoryColor: {
      type: String,
      default: "#da4167",
    },
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <div class="card">
    <img :src="image" :alt="title" />
    <p class="text-categorie" :style="{ color: categoryColor }">{{ category }}</p>
    <h4 class="title-post">{{ title }}</h4>
    <p class="brief-content">
      {{ content }}
    </p>
    <div class="divisor-post"></div>
    <p class="author-post">por <span>@ {{ author }}</span></p>
  </div>
</template>

<style>
    .card {
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.13);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.text-categorie {
  font-size: 11px;
  font-family: var(--primary-font);
  margin: 0;
  font-weight: 400;
  padding: 0.75rem 0.75rem 0;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  filter: saturate(1.8) brightness(0.77);
}

.title-post {
  font-size: 20px;
  font-weight: 500;
  font-family: var(--secondary-font);
  margin: 0;
  padding: 0.25rem 0.75rem 0;
  line-height: 1.3;
}

.brief-content {
  font-size: 11px;
  font-family: var(--primary-font);
  margin: 0;
  font-weight: 300;
  padding: 0.5rem 0.75rem;
  line-height: 1.65;
  color: #555;
  flex: 1;
}

.divisor-post {
  width: 92%;
  height: 1px;
  background-color: #ececec;
  margin: 0 auto;
}

.author-post {
  font-size: 11px;
  font-family: var(--primary-font);
  color: #333;
  margin: 0;
  padding: 0.5rem 0.75rem 1rem;
}

.author-post span {
  color: #968d8d;
  font-weight: 500;
}
</style>