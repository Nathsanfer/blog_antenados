<script>
import FooterTemplate from "../components/FooterTemplate.vue";
import HeaderTemplate from "../components/HeaderTemplate.vue";

export default {
  name: "Perfil",
  components: {
    HeaderTemplate,
    FooterTemplate,
  },
};
</script>

<template>
<HeaderTemplate />    
  
    <div class="header-page">
    <img src="../assets/icons_highlights/icon9.png" alt="Icone de Beca" class="icon-desktop" />
    <img src="../assets/icons_highlights/icon10.png" alt="Icone de Lâmpada" />
    <div class="divisor"></div>
    <h1>Perfil</h1>
    <div class="divisor"></div>
    <img src="../assets/icons_highlights/icon11.png" alt="Icone de Livro" />
    <img src="../assets/icons_highlights/icon12.png" alt="Icone de Colmeia" class="icon-desktop" />
  </div>

  <FooterTemplate />
</template>

<style scoped>
.header-page {
  display: flex;
  max-width: 1200px;
  width: 90%;
  margin: 1rem auto;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.header-page img {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}
    
.divisor {
  flex: 1;
  height: 1px;
  background-color: #a8a8a8;
}

.header-page h1 {
  font-size: 30px;
  font-weight: 500;
  font-family: var(--secondary-font);
  white-space: nowrap;
}
</style>