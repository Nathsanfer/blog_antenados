<script>
import { useRoute } from "vue-router";
import HeaderTemplate from "../components/HeaderTemplate.vue";
import FooterTemplate from "../components/FooterTemplate.vue";
import imagemPost from "../assets/post.jpg";

export default {
  name: "Home",
  components: {
    HeaderTemplate,
    FooterTemplate,
  },
  data() {
    return {
      content: `Entre cores, pincéis e muita criatividade, os alunos participaram de uma atividade especial que transformou a fachada da escola em uma verdadeira obra de arte. O que antes era apenas um muro passou a ganhar vida com desenhos, formas e cores que representam ideias, sentimentos e a imaginação de cada estudante. Mais do que uma simples pintura, essa iniciativa se tornou uma oportunidade para que os alunos deixassem sua marca no espaço onde aprendem, convivem e constroem suas histórias todos os dias.

Durante a atividade, cada participante contribuiu com um pouco de sua criatividade, mostrando que a arte também pode ser uma forma de expressão e de aprendizado. Enquanto pintavam, os alunos não apenas desenvolveram habilidades artísticas, mas também trabalharam valores importantes, como colaboração, respeito e cuidado com o ambiente escolar. A experiência permitiu que todos se sentissem parte de algo maior, fortalecendo o sentimento de pertencimento e de orgulho pela escola.

Projetos como esse mostram que a educação vai muito além da sala de aula. Quando os estudantes têm a oportunidade de participar ativamente da construção e transformação do espaço escolar, eles passam a enxergar a escola de uma maneira diferente: como um lugar que também é deles. Cada cor aplicada no muro representa dedicação, alegria e o desejo de tornar o ambiente mais bonito e acolhedor para todos.

Além de revitalizar a fachada, a atividade também deixou uma mensagem importante para toda a comunidade escolar. A arte tem o poder de unir pessoas, despertar emoções e transformar lugares. Ao final do projeto, o resultado foi muito mais do que uma parede colorida — foi a construção de memórias, experiências e aprendizados que certamente permanecerão na lembrança de todos que participaram.

Assim, cada pincelada feita pelos alunos simboliza mais do que tinta sobre o muro. Ela representa criatividade, união e o desejo de deixar uma marca positiva na escola. Uma marca que vai além das cores e que continuará inspirando outras gerações de estudantes a cuidar, valorizar e transformar o espaço onde estudam.`,
    };
  },
  methods: {
    formatContent(text) {
      return text.replace(/\n/g, '<br>');
    },
  },
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
    <h1>Artigo</h1>
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
      <h3 class="title-sidebar title-primary">Autor(a)</h3>
      <div class="author">
        <img src="../assets/author.png" alt="" />
        <div class="data-author">
          <h4>Nathalia Santos</h4>
          <p>Coordenadora</p>
        </div>
      </div>
      <h3 class="title-sidebar">Data da Publicação</h3>
      <div class="date">
        <p>15 de junho de 2023</p>
      </div>
      <h3 class="title-sidebar">Encontre Mais...</h3>
      <ul class="list-cards">
        <li class="card">
          <img src="../assets/post.jpg" alt="" />
          <div class="info">
            <h4>Nome do artigo criado por Nathalia Santos</h4>
            <p>Categoria do artigo</p>
          </div>
        </li>
        <li class="card">
          <img src="../assets/post.jpg" alt="" />
          <div class="info">
            <h4>Nome do artigo criado por Nathalia Santos</h4>
            <p>Categoria do artigo</p>
          </div>
        </li>
        <li class="card">
          <img src="../assets/post.jpg" alt="" />
          <div class="info">
            <h4>Nome do artigo criado por Nathalia Santos</h4>
            <p>Categoria do artigo</p>
          </div>
        </li>
        <li class="card">
          <img src="../assets/post.jpg" alt="" />
          <div class="info">
            <h4>Nome do artigo criado por Nathalia Santos</h4>
            <p>Categoria do artigo</p>
          </div>
        </li>
        <li class="card">
          <img src="../assets/post.jpg" alt="" />
          <div class="info">
            <h4>Nome do artigo criado por Nathalia Santos</h4>
            <p>Categoria do artigo</p>
          </div>
        </li>
      </ul>
      <button class="btn-sidebar">Ver Mais</button>
    </aside>
    <div class="container-right">
      <div class="container">
        <img src="../assets/post.jpg" alt="" />
        <p class="category">ARTES E EXPRESSÃO</p>
        <h1 class="title-article">
          Cores que Falam: Como a Arte Expressa Emoções
        </h1>
        <p class="subtitle">
          Entre cores e criatividade, os alunos transformaram a fachada da
          escola em uma verdadeira obra de arte. Mais do que pintar, eles
          tiveram a oportunidade de deixar sua marca no espaço onde vivem e
          aprendem, tornando o ambiente mais acolhedor e cheio de significado.
        </p>
        <div class="divider"></div>
        <p class="content" v-html="formatContent(content)"></p>
      </div>
    </div>
  </main>

  <FooterTemplate />
</template>

<style scoped>
/* ===== Header Page ===== */
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

/* ===== Main Layout ===== */
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

/* ===== Sidebar ===== */
.container-left {
  width: 240px;
  flex-shrink: 0;
}

.title-sidebar {
  font-size: 19px;
  font-weight: 500;
  font-family: var(--secondary-font);
  color: #000;
  margin: 1.5rem 0 0.5rem;
}

.title-primary {
  margin-top: 0;
}

.author {
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  width: 97%;
  margin: 0 auto;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.11);
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 65px;
}

.author img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-shrink: 0;
}

.data-author {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.7rem;
  margin-left: 0.5rem;
}

.data-author h4 {
  font-size: 12px;
  font-weight: 500;
  margin: 0;
}

.data-author p {
  font-size: 11px;
  font-weight: 300;
  margin: 0;
  color: #555;
}

.date {
  width: 97%;
  margin: 0 auto;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.11);
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 40px;
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
}

.date p {
  font-size: 11px;
  font-weight: 300;
  margin: 0;
  color: #000;
}

.list-cards {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: 97%;
  margin: 0 auto;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.11);
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 60px;
}

.card img {
  width: 85px;
  height: 100%;
  border-radius: 10px 0 0;
  flex-shrink: 0;
}

.info h4 {
  font-size: 11px;
  font-weight: 500;
  margin: 0;
  font-family: var(--secondary-font);
}

.info p {
  font-size: 10px;
  font-weight: 300;
  margin: 0;
  color: #afa629;
}

.btn-sidebar {
  width: 100%;
  padding: 0.5rem;
  background-color: var(--color-green);
  color: #fff;
  border: none;
  border-radius: 18px;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 1rem;
}

/* ===== Article  ===== */
.container-right {
  flex: 1;
  min-width: 0;
}

.container {
  width: 98%;
  margin: 0 auto;
  padding: 1.2rem;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.11);
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  display: flex;
  flex-direction: column;
}

.container img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.category {
  font-size: 12px;
  font-family: var(--primary-font);
  margin-top: 1rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  filter: saturate(1.8) brightness(0.77);
}

.title-article {
  font-size: 29px;
  font-weight: 300;
  font-family: var(--secondary-font);
  margin: 0.5rem 0 0;
}

.subtitle {
  font-size: 14px;
  font-weight: 300;
  margin: 0.8rem 0 0;
  color: #555;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #dfdede;
  margin: 1.5rem 0;
}

.content {
  font-size: 14px;
  font-weight: 300;
  margin: 0;
  color: #555;
  line-height: 1.8;
  white-space: pre-wrap;
}
</style>
