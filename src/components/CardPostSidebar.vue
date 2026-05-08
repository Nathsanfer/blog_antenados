<script>
export default {
  name: "CardPostSidebar",
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    categoryColor: {
      type: String,
      default: "#da4167",
    },
  },
};
</script>

<template>
  <li class="sidebar-card">
    <RouterLink class="sidebar-card__link" :to="`/blog/${id}`">
      <img class="sidebar-card__image" :src="image" :alt="title" />
      <div class="sidebar-card__info">
        <h4 class="sidebar-card__title">{{ title }}</h4>
        <p class="sidebar-card__category" :style="{ color: categoryColor }">
          {{ category }}
        </p>
      </div>
    </RouterLink>
  </li>
</template>

<style scoped>
.sidebar-card {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.11);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.sidebar-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.12);
}

.sidebar-card__link {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 0.75rem;
  width: 100%;
  min-height: 64px;
  color: inherit;
  text-decoration: none;
}

.sidebar-card__image {
  width: 72px;
  min-width: 72px;
  height: auto;
  object-fit: cover;
  flex-shrink: 0;
}

.sidebar-card__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  padding: 0.5rem 0.75rem 0.5rem 0;
}

.sidebar-card__title {
  font-size: 11px;
  font-weight: 500;
  margin: 0;
  font-family: var(--secondary-font);
  line-height: 1.25;
  line-clamp: 2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.sidebar-card__category {
  font-size: 10px;
  font-weight: 300;
  margin: 0;
  line-height: 1.2;
  margin-top: 0.5rem;
  text-transform: uppercase;
  filter: saturate(1.8) brightness(0.77);
  letter-spacing: 0.4px;
  line-clamp: 2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
