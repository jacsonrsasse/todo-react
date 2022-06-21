### TODO-REACT

<hr>
<p>
Projeto simples que consiste em criar uma aplicação para armazenar tarefas a fazer, marca-las como concluídas ou remover elas da listagem. Além disso, fará integração com o IndexedDB para armazenar essas tarefas.
</p>
<p>
As funcionalidades previstas para o projeto já estão prontas em um outro projetinho, e no final esse projeto é apenas um estudo a respeito do React e outras tecnologias que posso integrar com ele.
</p>
<br>
<hr>

##### CHECK-LIST

-   [x] Criar o projeto
-   [x] Criar os componentes front-end e o visual da aplicação
-   [x] Criar a funcionalidade para adicionar uma nova tarefa à lista
-   [x] Criar a funcionalidade para marcar uma tarefa como concluída, podendo também desmarcar ela como concluída
-   [x] Criar a funcionalidade para remover uma tarefa
-   [x] Criar a integração com o IndexedDB do navegador, permitindo assim o armazenamento das tarefas e seus estados
-   [x] Melhorar o visual da aplicação, disponibilizando outros temas. Trabalhar com o themes do styled-components.
-   [x] Melhorar a inclusão de tarefas, criar uma tela de inclusão ao invés de utilizar o promp do navegador.

<hr>
<br>

## Finalizado

<br/>
<p>
Como esperado, foi um projeto simples, mas de grande valia no meu estudo sobre React e Styled-Components. Sim, provavelmente a estrutura do projeto não tenha sido a melhor ou mais organizada, afinal isso também faz parte do estudo.
</p>
<p>
Escolhi por organizar os componentes por pastas, onde cada uma possui seu arquivo "index.tsx" e seu "style.ts". Componentes que julguei "mais importantes", ou "de maior impacto", elevei ao título de templates.
</p>
<p>
Precisei sobrescrever a interface "DefaultTheme", feito por meio da pasta "@types" que pode ser vista no projeto. É recomendado pela própria documentação, para que assim seja possível tipar as propriedades como for necessário. E por utilizar o typescript, evitar os erros que a IDE estava apresentando durante a etapa de estilização.
</p>
