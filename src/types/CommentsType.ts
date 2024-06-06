import CommentClass from "../model/Comment"; // Importa a classe CommentClass do módulo ../model/Comment

// Define uma interface chamada CommentsType
interface CommentsType {
  product: string; // Atributo product do tipo string, representa o ID do produto ao qual os comentários estão associados
  comments: CommentClass[]; // Atributo comments do tipo array de CommentClass, representa a lista de comentários associados ao produto
}

export default CommentsType; // Exporta a interface CommentsType como o padrão do módulo

/*
### Explicação:

1. **Importações:**
   - `import CommentClass from "../model/Comment";`: Esta linha importa a classe `CommentClass` do módulo especificado pelo caminho relativo `../model/Comment`.

2. **Definição da Interface `CommentsType`:**
   - `interface CommentsType`: Declara uma interface chamada `CommentsType`. Interfaces são usadas em TypeScript para definir a estrutura de um objeto.
   - `product: string;`: Define um atributo `product` do tipo `string`. Este atributo representa o ID do produto ao qual os comentários estão associados.
   - `comments: CommentClass[];`: Define um atributo `comments` que é um array de objetos do tipo `CommentClass`. Este atributo representa a lista de comentários associados ao produto.

3. **Exportação da Interface `CommentsType`:**
   - `export default CommentsType;`: Exporta a interface `CommentsType` como o padrão do módulo, permitindo que ela seja importada em outros módulos usando a sintaxe `import CommentsType from '...'`.

Este código define uma interface `CommentsType` que descreve a estrutura de um objeto de comentários. Cada objeto de comentários tem um `product` (representado pelo ID do produto) e uma lista de `comments` (array de `CommentClass`). A interface é exportada como padrão para que possa ser utilizada em outros módulos.
*/





