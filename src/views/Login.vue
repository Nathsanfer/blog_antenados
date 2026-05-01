<template>
  <div class="page">
    <img class="image-left" src="../assets/image3.png" alt="" />
    <div class="container">
        <div class="icon-bottom-left">
            <img src="../assets/icons_highlights/icon6.png" alt="">
        </div>
        <div class="content">
            <h1>Faça o Login para Acessar o Sistema</h1>
            <form class="form" action=".">
                <div class="form-section">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Digite seu email" />
                </div>
                <div class="form-section">
                    <label for="password">Senha</label>
                    <input type="password" id="password" placeholder="Digite sua senha" />
                </div>
            </form>
            <router-link class="link-btn" to="/">
                <button class="btn" type="submit">Entrar</button>
            </router-link>
        </div>
        <div class="icon-top-right">
            <img src="../assets/icons_highlights/icon7.png" alt="">
        </div>
    </div>
    <img class="image-right" src="../assets/image2.png" alt="" />
  </div>
</template>

<style scoped>
.page {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.container {
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 35%;
  height: 550px;
  position: relative;
  z-index: 1;
}

.image-left {
  position: absolute;
  top: 0;
  left: -5rem;
  width: 530px;
  height: 320px;
  object-fit: contain;
}

.image-right {
  position: absolute;
  right: -5rem;
  bottom: 0;
  width: 530px;
  height: 320px;
  object-fit: contain;
}

.icon-bottom-left {
  position: absolute;
  bottom: -2rem;
  left: -2rem;
  z-index: 2;
}

.icon-bottom-left img {
  width: 65px;
  height: 65px;
  object-fit: contain;
  opacity: 0.15;
}

.content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.content h1 {
    font-size: 24px;
    font-weight: 500;
    font-family: var(--secondary-font);
    color: #333333;
    margin-top: 3rem;
    text-align: center;
}

.form {
    width: 80%;
    margin: 0 auto;
    margin-top: 4rem;
}

.form-section {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
}

.form-section label {
    font-size: 14px;
    font-weight: normal;
    font-family: var(--primary-font);
    color: #3d3d3d;
    margin-bottom: 0.5rem;
}

.form-section input {
    padding: 0.5rem 1rem;
    border: 1px solid #cccccc;
    border-radius: 20px;
    font-size: 13px;
    font-family: var(--primary-font);
}

.link-btn {
    text-decoration: none;
    display: flex;
    justify-content: center;
}

.btn {
    width: 80%;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 0.75rem;
    background-color: var(--color-green);
    color: #ffffff;
    border: none;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    font-family: var(--primary-font);
    cursor: pointer;
}

.icon-top-right {
  position: absolute;
  top: -2rem;
  right: -2rem;
  z-index: 2;
}

.icon-top-right img {
  width: 65px;
  height: 65px;
  object-fit: contain;
  opacity: 0.15;
}
</style>
