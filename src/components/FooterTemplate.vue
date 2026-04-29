<template>
  <footer class="footer">
    <div class="content">
      <div class="container-title">
        <h1>Antenados</h1>
        <p>BLOG ESCOLAR</p>
      </div>
      <img src="../assets/icons_highlights/icon8.png" alt="Icone de Estrela" />
      <p class="text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
    </div>
    <div class="data">
        <p class="subtitle">DÚVIDAS? ENTRE EM CONTATO COM A ESCOLA</p>
        <div class="divisor"></div>
        <p class="phone">Telefone: (XX) XX XXXXX-XXXX</p>
        <p class="email">Email: emeb.dirce.antonio@gmail.com</p>
    </div>
    <p class="localization">Parque dos Cocais, Valinhos - SP, 13274-465</p>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  height: 200px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.05);
  margin-top: 3rem;
  padding: 0;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  margin: 0 auto;
}

.container-title {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.container-title h1 {
  font-size: 29px;
  font-weight: 500;
  font-family: var(--secondary-font);   
}

.container-title p {
  font-size: 13px;
  font-weight: normal;
  font-family: var(--primary-font);
  margin-top: -1rem;
  color: #da4167;
}

.content img {
  width: 55px;
  height: 55px;
  padding: 0 3rem;
}

.text {
  width: 820px;
  font-size: 12px;
  font-weight: normal;
  font-family: var(--primary-font);
  color: #555555;
}

.data {
    width: 68%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.subtitle {
    font-size: 12px;
    font-weight: normal;
    font-family: var(--primary-font);
    color: #da4167;
    padding: 0.5rem 0;
}

.divisor {
    width: 100px;
    height: 1px;
    background-color: #a8a8a8;
    margin: 0 1rem;
}

.phone, .email {
    font-size: 12px;
    font-weight: normal;
    font-family: var(--primary-font);
    color: #555555;
}

.localization {
    width: 68%;
    margin: 0 auto;
    text-align: center;
    font-size: 12px;
    font-weight: normal;
    font-family: var(--primary-font);
    color: #555555;
    margin-top: 1rem;
}

/* Tablet (768px) */
@media (max-width: 768px) {
  .footer {
    height: auto;
    padding: 1.5rem 0;
  }

  .content {
    flex-direction: column;
    width: 90%;
    gap: 1rem;
    text-align: center;
  }

  .container-title {
    align-items: center;
  }

  .container-title h1 {
    font-size: 24px;
  }

  .container-title p {
    margin-top: -0.5rem;
  }

  .content img {
    padding: 0;
    width: 45px;
    height: 45px;
  }

  .text {
    width: 100%;
    font-size: 11px;
    text-align: justify;
  }

  .data {
    width: 90%;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  .divisor {
    display: none;
  }

  .subtitle {
    font-size: 11px;
  }

  .phone, .email {
    font-size: 11px;
  }

  .localization {
    width: 90%;
    font-size: 11px;
  }
}

/* Mobile (480px) */
@media (max-width: 480px) {
  .container-title h1 {
    font-size: 20px;
  }

  .container-title p {
    font-size: 11px;
  }

  .text {
    font-size: 10px;
  }

  .subtitle {
    font-size: 10px;
  }

  .phone, .email {
    font-size: 10px;
  }

  .localization {
    font-size: 10px;
  }
}
</style>
