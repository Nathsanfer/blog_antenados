<script setup>
// Importa as dependências necessárias
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSupabase } from "../composables/useSupabase";

// Define as variáveis reativas para email, senha, erro e estado de carregamento
const email = ref("");
const password = ref("");
const erro = ref(null);
const loading = ref(false);

// Obtém a instância do Supabase e do roteador
const { supabase } = useSupabase();
const router = useRouter();

// Função para lidar com o login do usuário
const login = async () => {
  // Reseta o erro e define o estado de carregamento
  erro.value = null;
  loading.value = true;

  const emailNormalizado = email.value.trim().toLowerCase();

  // Validação básica para garantir que email e senha foram preenchidos
  if (!emailNormalizado || !password.value) {
    erro.value = "Email e senha são obrigatórios";
    loading.value = false;
    return;
  }

  try {
    // Tenta fazer login com email e senha usando o Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailNormalizado,
      password: password.value,
    });

    if (error) {
      console.error("Erro de login:", error);

      // Tratamento de erros específicos
      if (error.message.includes("Invalid login credentials")) {
        erro.value =
          "Email ou senha inválidos. Se o usuário foi criado agora, confirme se o cadastro no Auth foi concluído.";
      } else if (error.message.includes("Email not confirmed")) {
        erro.value =
          "Email não foi confirmado. Verifique sua caixa de entrada ou desative a confirmação de email no Supabase para ambiente de teste.";
      } else if (error.message.includes("Too many requests")) {
        erro.value = "Muitas tentativas. Tente novamente depois";
      } else {
        erro.value = error.message || "Erro ao fazer login";
      }
      loading.value = false;
      return;
    }

    // Se o login for bem-sucedido, redireciona para o dashboard
    if (data?.session) {
      router.push("/criacao");
    }
  } catch (erroCatch) {
    console.error("Erro inesperado:", erroCatch);
    erro.value = "Erro inesperado. Tente novamente tarde";
    loading.value = false;
  }
};
</script>

<template>
  <div class="page">
    <img class="image-left" src="../assets/image3.png" alt="" />
    <div class="container">
      <div class="icon-bottom-left">
        <img src="../assets/icons_highlights/icon6.png" alt="" />
      </div>
      <div class="content">
        <h1>Faça o Login para Acessar o Sistema</h1>
        <form class="form" action="." @submit.prevent="login">
          <div class="form-section">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Digite seu email"
            />
          </div>
          <div class="form-section">
            <label for="password">Senha</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Digite sua senha"
            />
          </div>
          <button class="btn" type="submit" :disabled="loading">
            {{ loading ? "Entrando..." : "Entrar" }}
          </button>
        </form>
        <p v-if="erro" class="error-message">{{ erro }}</p>
      </div>
      <div class="icon-top-right">
        <img src="../assets/icons_highlights/icon7.png" alt="" />
      </div>
    </div>
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
  width: 100%;
  box-sizing: border-box;
}

.container {
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 35%;
  max-width: 100%;
  min-height: 520px;
  max-height: 90vh;
  height: auto;
  position: relative;
  z-index: 1;
}

.image-left {
  margin: 0;
  position: absolute;
  top: 0;
  left: -5rem;
  width: 530px;
  height: 320px;
  object-fit: contain;
}

.image-right {
  margin: 0;
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
  width: 100%;
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

@media (max-width: 1100px) {
  .container {
    max-width: 50%;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 45%;
    width: 100%;
  }

  .content h1 {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .container {
    max-width: 82%;
    width: 100%;
    min-height: 450px;
  }

  .content h1 {
    font-size: 18px;
  }

  .form {
    width: 90%;
    margin-top: 1rem;
  }

  .btn {
    width: 60%;
    margin-top: 0rem;
  }
}

@media (max-width: 360px) {
  .container {
    max-width: 85%;
    width: 100%;
    min-height: 400px;
  }

  .content h1 {
    margin-top: 2rem;
  }

  .form {
    width: 90%;
    margin-top: 1rem;
  }

  .form-section label {
    font-size: 12px;
  }

  .btn {
    width: 60%;
    margin-top: 0rem;
  }
}
</style>
