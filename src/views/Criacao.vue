<script setup>
import { computed, ref } from "vue";
import FooterTemplate from "../components/FooterTemplate.vue";
import HeaderTemplate from "../components/HeaderTemplate.vue";

const activeSection = ref("artigos");
const activeStatusFilter = ref("todos");

const statusLabels = {
  rascunho: "Rascunho",
  publicado: "Publicado",
  arquivado: "Arquivado",
};

const statusFilters = [
  { label: "Todos", value: "todos" },
  { label: "Rascunho", value: "rascunho" },
  { label: "Publicado", value: "publicado" },
  { label: "Arquivado", value: "arquivado" },
];

const sections = {
  artigos: {
    label: "Artigos",
    actionLabel: "Criar Artigo",
    items: [
      {
        category: "ARTES E EXPRESSÃO",
        status: "publicado",
        title: "Cada cor, uma marca: histórias pintadas na escola",
        excerpt:
          "Em meio a cores, pincéis e muita criatividade, os alunos transformaram um simples muro em uma verdadeira obra de arte. Mais do que uma atividade artística, o projeto representou a...",
        author: "@ Aaaaaaa Aaaaa",
      },
      {
        category: "CIÊNCIAS",
        status: "rascunho",
        title: "Experimentos simples que despertam a curiosidade",
        excerpt:
          "Atividades práticas ajudaram os estudantes a entender conceitos científicos de forma leve, visual e participativa dentro da sala de aula.",
        author: "@ Bbbbbbb Bbbbb",
      },
      {
        category: "FOLCLORE",
        status: "arquivado",
        title: "Lendas e histórias que mantêm a memória viva",
        excerpt:
          "Os alunos pesquisaram personagens do folclore brasileiro e criaram registros cheios de identidade cultural e criatividade.",
        author: "@ Ccccccc Ccccc",
      },
      {
        category: "CONSCIÊNCIA NEGRA",
        status: "publicado",
        title: "Projetos que valorizam a história e a representatividade",
        excerpt:
          "A turma desenvolveu produções que destacam a importância da luta, da cultura e da valorização da população negra.",
        author: "@ Ddddddd Ddddd",
      },
      {
        category: "LEITURA",
        status: "rascunho",
        title: "A biblioteca como espaço de descoberta",
        excerpt:
          "Entre livros, rodas de conversa e resenhas, os estudantes exploraram novas histórias e fortaleceram o hábito da leitura.",
        author: "@ Eeeeeee Eeeee",
      },
      {
        category: "TECNOLOGIA",
        status: "arquivado",
        title: "Ferramentas digitais no aprendizado escolar",
        excerpt:
          "Os recursos digitais ampliaram as formas de criar, pesquisar e apresentar trabalhos em diferentes disciplinas.",
        author: "@ Fffffff Fffff",
      },
    ],
  },
  jornais: {
    label: "Jornais",
    actionLabel: "Criar Jornal",
    items: [
      {
        category: "1ª EDIÇÃO",
        status: "publicado",
        title: "Jornal escolar destaca os projetos do bimestre",
        excerpt:
          "A primeira edição reuniu reportagens sobre atividades, eventos e acontecimentos marcantes da escola.",
        author: "@ Equipe Editorial",
      },
      {
        category: "2ª EDIÇÃO",
        status: "rascunho",
        title: "Cobertura especial das ações culturais",
        excerpt:
          "Nesta edição, os alunos organizaram entrevistas, notas e fotos sobre as apresentações culturais realizadas no período.",
        author: "@ Equipe Editorial",
      },
      {
        category: "3ª EDIÇÃO",
        status: "arquivado",
        title: "Edição com foco em ciência e descobertas",
        excerpt:
          "Os estudantes produziram matérias sobre feiras, experimentos e experiências desenvolvidas em sala.",
        author: "@ Equipe Editorial",
      },
      {
        category: "4ª EDIÇÃO",
        status: "publicado",
        title: "Boletim da comunidade escolar",
        excerpt:
          "Uma edição especial com relatos das turmas, avisos e destaques da participação dos alunos.",
        author: "@ Equipe Editorial",
      },
      {
        category: "5ª EDIÇÃO",
        status: "rascunho",
        title: "Jornal de encerramento do semestre",
        excerpt:
          "A turma fechou o semestre com uma edição cheia de memórias, entrevistas e registros das melhores produções.",
        author: "@ Equipe Editorial",
      },
      {
        category: "6ª EDIÇÃO",
        status: "arquivado",
        title: "Especial com dicas e curiosidades",
        excerpt:
          "Conteúdos variados ajudaram a tornar o jornal mais dinâmico e atrativo para leitura da comunidade escolar.",
        author: "@ Equipe Editorial",
      },
    ],
  },
};

const currentSection = computed(() => sections[activeSection.value]);

const filteredItems = computed(() => {
  if (activeStatusFilter.value === "todos") {
    return currentSection.value.items;
  }

  return currentSection.value.items.filter(
    (item) => item.status === activeStatusFilter.value,
  );
});

const totalItemsLabel = computed(
  () => `Total de ${currentSection.value.label}: ${filteredItems.value.length}`,
);

const setSection = (section) => {
  activeSection.value = section;
};

const setStatusFilter = (status) => {
  activeStatusFilter.value = status;
};
</script>

<template>
  <HeaderTemplate />

  <div class="header-page">
    <img
      src="../assets/icons_highlights/icon9.png"
      alt="Icone de Beca"
      class="icon-desktop"
    />
    <img src="../assets/icons_highlights/icon10.png" alt="Icone de Lâmpada" />
    <div class="divisor"></div>
    <h1>Criações</h1>
    <div class="divisor"></div>
    <img src="../assets/icons_highlights/icon11.png" alt="Icone de Livro" />
    <img
      src="../assets/icons_highlights/icon12.png"
      alt="Icone de Colmeia"
      class="icon-desktop"
    />
  </div>

  <main>
    <aside class="container-left">
      <button
        class="option"
        :class="{ active: activeSection === 'artigos' }"
        type="button"
        @click="setSection('artigos')"
      >
        <h3>Artigos</h3>
      </button>
      <button
        class="option"
        :class="{ active: activeSection === 'jornais' }"
        type="button"
        @click="setSection('jornais')"
      >
        <h3>Jornais</h3>
      </button>
    </aside>

    <div class="container-right">
      <div class="total-items">
        <p>{{ totalItemsLabel }}</p>
        <button>{{ currentSection.actionLabel }}</button>
      </div>
      <div class="status-filters">
        <button
          v-for="filter in statusFilters"
          :key="filter.value"
          class="status-filter"
          :class="{ active: activeStatusFilter === filter.value }"
          type="button"
          @click="setStatusFilter(filter.value)"
        >
          {{ filter.label }}
        </button>
      </div>
      <div class="posts-grid">
        <div v-for="item in filteredItems" :key="item.title" class="card">
          <img src="../assets/post.jpg" alt="Imagem para a postagem" />
          <span class="status-badge" :class="`status-${item.status}`">
            {{ statusLabels[item.status] }}
          </span>
          <p class="text-categorie">{{ item.category }}</p>
          <h4 class="title-post">{{ item.title }}</h4>
          <p class="brief-content">
            {{ item.excerpt }}
            <strong>Ler Mais</strong>
          </p>
          <div class="divisor-post"></div>
          <p class="author-post">por <span>{{ item.author }}</span></p>
        </div>
      </div>
    </div>
  </main>

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

main {
  display: flex;
  width: 85%;
  margin: 0 auto;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1200px;
  width: 90%;
  margin: 2rem auto 4rem;
  gap: 2rem;
  overflow-x: hidden;
}

.container-left {
  width: 240px;
  flex-shrink: 0;
}

.option {
  width: 100%;
  border: 1px solid #aaaaaa;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  border-radius: 20px;
  cursor: pointer;
  padding: 0;
}

.option.active {
  border: 2px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(to right, #aca16d, #6dac7e, #41d0da, #7e4ba0, #da4167)
      border-box;
}

.option h3 {
  font-size: 18px;
  font-weight: 500;
  font-family: var(--secondary-font);
  margin: 0;
  padding: 1rem 0;
}

.option:focus-visible {
  outline: 2px solid var(--color-green);
  outline-offset: 3px;
}

.option h3 {
  pointer-events: none;
}

.container-right {
  flex: 1;
  min-width: 0;
}

.total-items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  border: #aaaaaa 1px solid;
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

.total-items p {
  font-size: 18px;
  font-family: var(--secondary-font);
}

.total-items button {
  background-color: var(--color-green);
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 14px;
  font-family: var(--primary-font);
  cursor: pointer;
}

.status-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.status-filter {
  padding: 0.55rem 1rem;
  border-radius: 999px;
  border: 1px solid #d8d8d8;
  background-color: #ffffff;
  color: #555;
  font-family: var(--primary-font);
  font-size: 13px;
  cursor: pointer;
}

.status-filter.active {
  background-color: var(--color-green);
  border-color: var(--color-green);
  color: #fff;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.card {
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.status-badge {
  position: absolute;
  top: 0.9rem;
  right: 0.9rem;
  z-index: 3;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  font-size: 11px;
  font-family: var(--primary-font);
  font-weight: 600;
  letter-spacing: 0.3px;
  color: #fff;
  text-transform: uppercase;
}

.status-rascunho {
  background-color: #da9a16;
}

.status-publicado {
  background-color: #6dac7e;
}

.status-arquivado {
  background-color: #8d8d8d;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.13);
  z-index: 2;
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.text-categorie {
  font-size: 11px;
  font-family: var(--primary-font);
  color: #da4167;
  margin: 0;
  padding: 0.75rem 0.75rem 0;
  letter-spacing: 0.5px;
}

.title-post {
  font-size: 19px;
  font-weight: 500;
  font-family: var(--secondary-font);
  margin: 0;
  padding: 0.2rem 0.75rem 0;
  line-height: 1.3;
}

.brief-content {
  font-size: 11px;
  font-family: var(--primary-font);
  margin: 0;
  font-weight: 300;
  padding: 0.4rem 0.75rem;
  line-height: 1.6;
  color: #555;
  flex: 1;
}

.brief-content strong {
  color: var(--color-green);
  font-weight: 600;
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
  color: #da4167;
  font-weight: 500;
}
</style>
