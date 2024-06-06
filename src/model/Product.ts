/*
Claro! Vou adicionar comentários ao seu código explicando o que está acontecendo em cada parte.
*/

import { ProductType } from "../types/ProductType"; // Importa o tipo ProductType do arquivo de tipos.
import { v4 as uuid } from "uuid"; // Importa a função uuid para gerar identificadores únicos.
import User from "./User"; // Importa a classe User do arquivo User.
import CommentClass from "./Comment"; // Importa a classe CommentClass do arquivo Comment.
import { comments } from "../database/comments.db"; // Importa a base de dados de comentários.
import CommentsType from "../types/CommentsType"; // Importa o tipo CommentsType do arquivo de tipos.

export default class Product {
    private id: string; // Atributo privado id do tipo string.
    name: string; // Atributo público name do tipo string.
    value: number; // Atributo público value do tipo number.

    constructor(product: ProductType) {
        this.id = uuid(); // Gera um id único para o produto.
        this.name = product.name; // Atribui o nome do produto.
        this.value = product.value; // Atribui o valor do produto.
    }

    // Método para exibir as informações do produto.
    show() {
        return {
            id: this.id,
            name: this.name,
            value: this.value,
        };
    }

    // Método para obter o id do produto.
    getId() {
        return this.id;
    }

    // Método para exibir os comentários do produto.
    showComments() {
        // Encontra os comentários para este produto.
        const commentsFind = comments.find((item) => item.product == this.id);

        // Mapeia os comentários para retornar um objeto com id e conteúdo.
        return commentsFind?.comments.map((item) => {
            return {
                id: item.getId(),
                comment: item.content,
            };
        });
    }

    // Método para exibir detalhes do produto, incluindo comentários.
    showDetail() {
        const detail = this.show(); // Obtém os detalhes do produto.
        const commentsProduct = this.showComments(); // Obtém os comentários do produto.
        return { ...detail, comments: commentsProduct }; // Retorna um objeto com detalhes do produto e comentários.
    }

    // Método para adicionar um comentário ao produto.
    comment(comment: CommentClass) {
        // Encontra o índice do produto nos comentários.
        const index = comments.findIndex((item) => item.product === this.id);

        if (index === -1) {
            // Se o produto não tem comentários, cria uma nova entrada.
            const dataComments: CommentsType = {
                product: this.id,
                comments: [comment],
            };
            comments.push(dataComments);
        } else {
            // Se o produto já tem comentários, adiciona o novo comentário.
            comments[index].comments.push(comment);
        }
    }

    // Método para deletar um comentário do produto.
    deleteComment(commentId: string) {
        // Encontra os comentários do produto.
        const commentsFind = comments.find((item) => item.product == this.id);

        // Encontra o índice do comentário a ser deletado.
        const index = commentsFind?.comments.findIndex((item) => item.getId() == commentId);

        if (index !== undefined && index !== -1) {
            console.log(index);
            // Remove o comentário do array.
            commentsFind?.comments.splice(index, 1);
            console.log("Comentário deletado!");
        } else {
            console.log("Comentário não encontrado.");
        }
    }

    // Método para atualizar um comentário do produto.
    updateComment(commentId: string, newContent: string) {
        // Encontra os comentários do produto.
        const commentsFind = comments.find((item) => item.product == this.id);

        // Encontra o índice do comentário a ser atualizado.
        const index = commentsFind?.comments.findIndex((item) => item.getId() == commentId);

        if (index !== undefined && index !== -1 && commentsFind) {
            // Atualiza o conteúdo do comentário.
            commentsFind.comments[index].content = newContent;
            console.log("Comentário atualizado!");
        } else {
            console.log("Comentário não encontrado!");
        }
    }

    // Método para avaliar o produto (não implementado).
    rate(value: number, user: User) {}
}


/*
### Explicação:

1. **Importações e Dependências:**
   - O código importa várias dependências, como tipos, classes e funções necessárias para a implementação da classe `Product`.

2. **Declaração da Classe `Product`:**
   - A classe `Product` é definida com atributos `id`, `name` e `value`. O `id` é gerado automaticamente usando a função `uuid`.

3. **Método `show`:**
   - Este método retorna um objeto com as informações do produto.

4. **Método `getId`:**
   - Retorna o identificador único do produto.

5. **Método `showComments`:**
   - Encontra os comentários associados ao produto e retorna uma lista de objetos contendo o `id` e o `conteúdo` de cada comentário.

6. **Método `showDetail`:**
   - Combina as informações do produto e os seus comentários em um único objeto.

7. **Método `comment`:**
   - Adiciona um comentário ao produto. Se o produto ainda não tem comentários, cria uma nova entrada na lista de comentários. Caso contrário, adiciona o comentário à lista existente.

8. **Método `deleteComment`:**
   - Remove um comentário específico do produto, se encontrado.

9. **Método `updateComment`:**
   - Atualiza o conteúdo de um comentário específico do produto, se encontrado.

10. **Método `rate`:**
   - O método `rate` está declarado mas não implementado. Ele deverá receber uma avaliação e um usuário, e provavelmente vai adicionar uma avaliação ao produto no futuro.
*/