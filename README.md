# GamePlay

Inserir arquivo ".env" sem aspas no .gitignore para não sincronizar as variáveis de ambiente do configs/discordAuth.ts

Pendências:

-Autenticação OAuth com API do Discord era concluída com sucesso, retornando o token via console.log no terminal do VS Code, mas agora apresenta uma mensagem de erro após autorização "Something went wrong trying do finish signing in..." o erro ocorreu em versões anteriores do projeto também.

Obs: Não é possível realizar o teste via navegador web, apenas pelo Expo Go.

-Linha de código " {user.id ? <AppRoutes /> : <SignIn /> } "  com função de redirecionamento para a screen Home após autenticação provoca travamento do botão "Entrar com Discord", impedindo o prosseguimento da autenticação

-Exibir quantidade de jogadores no servidor dinamicamente 

-Compartilhar convite do servidor (botão share nos detalhes do agendamento)

-Redirecionamento para o servidor do Discord

-Logout
