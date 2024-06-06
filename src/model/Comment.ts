import { v4 as uuid } from "uuid"; // Importa a função uuid para gerar IDs únicos.

class CommentClass {
    private id: string; // Atributo privado id do tipo string.
    content: string; // Atributo público content do tipo string.

    // Construtor que recebe uma string content.
    constructor(content: string) {
        this.id = uuid(); // Gera um ID único para o comentário.
        this.content = content; // Atribui o conteúdo do comentário.
    }

    // Método para obter o ID do comentário.
    getId() {
        return this.id; // Retorna o ID do comentário.
    }
}

export default CommentClass; // Exporta a classe CommentClass como padrão.

/*
### Explicação:

1. **Importações:**
   - Importa a função `uuid` do pacote `uuid` para gerar IDs únicos.

2. **Declaração da Classe `CommentClass`:**
   - Declara a classe `CommentClass` com atributos `id` e `content`.
   - O atributo `id` é privado, enquanto `content` é público.

3. **Construtor:**
   - O construtor da classe `CommentClass` recebe uma string `content`.
   - Gera um ID único para o comentário usando a função `uuid`.
   - Atribui o valor de `content` ao atributo correspondente.

4. **Método `getId`:**
   - Método público para obter o ID do comentário.
   - Retorna o valor do atributo `id`.

5. **Exportação:**
   - Exporta a classe `CommentClass` como a exportação padrão do módulo.

Este código define uma classe `CommentClass` que representa um comentário com um ID único e conteúdo. O ID é gerado automaticamente no momento da criação do comentário, e o método `getId` permite obter o ID do comentário.
*/