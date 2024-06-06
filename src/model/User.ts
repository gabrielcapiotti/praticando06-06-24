import { CartType, ProductType, UserType } from "../types"; // Importa os tipos CartType, ProductType e UserType do arquivo de tipos.
import { v4 as uuid } from "uuid"; // Importa a função uuid para gerar IDs únicos.
import Product from "./Product"; // Importa a classe Product do arquivo Product.
import { carts } from "../database/carts.db"; // Importa a lista de carrinhos de compras do arquivo de banco de dados de carrinhos.

export default class User {
    private id: string; // Atributo privado id do tipo string.
    name: string; // Atributo público name do tipo string.
    username: string; // Atributo público username do tipo string.
    email: string; // Atributo público email do tipo string.

    // Construtor que recebe um objeto do tipo UserType.
    constructor(user: UserType) {
        this.id = uuid(); // Gera um ID único para o usuário.
        this.name = user.name; // Atribui o nome do usuário.
        this.username = user.username; // Atribui o nome de usuário.
        this.email = user.email; // Atribui o email do usuário.
    }

    // Método para adicionar um produto ao carrinho do usuário.
    addCart(product: Product) {
        // Encontra o índice do carrinho do usuário na lista de carrinhos.
        const index = carts.findIndex((item) => item.user === this.id);

        // Se o carrinho do usuário não existir, cria um novo carrinho.
        if (index === -1) {
            const cart: CartType = {
                user: this.id,
                products: [product],
            };
            carts.push(cart); // Adiciona o novo carrinho à lista de carrinhos.
        } else {
            carts[index].products.push(product); // Adiciona o produto ao carrinho existente.
        }
    }

    // Método para remover um produto do carrinho do usuário.
    removeCart(product: Product) {
        // Encontra o índice do carrinho do usuário na lista de carrinhos.
        const index = carts.findIndex((item) => item.user === this.id);

        // Encontra o índice do produto no carrinho do usuário.
        const indexProduct = carts[index].products.findIndex((item) => item.getId() === product.getId());

        // Se o produto não for encontrado, sai do método.
        if (indexProduct === -1) {
            return;
        }
        // Remove o produto do carrinho do usuário.
        carts[index].products.splice(indexProduct, 1);
    }

    // Método para mostrar os produtos no carrinho do usuário.
    showProducts() {
        // Encontra o índice do carrinho do usuário na lista de carrinhos.
        const index = carts.findIndex((item) => item.user === this.id);

        // Se o carrinho do usuário não existir, sai do método.
        if (index === -1) {
            return;
        }
        // Retorna os produtos no carrinho do usuário.
        return carts[index].products;
    }

    // Método para mostrar os detalhes do usuário.
    showUserDetails() {
        // Cria um objeto com os detalhes do usuário.
        const userDetail: any = {
            id: this.id,
            name: this.name,
            username: this.username,
            email: this.email,
        };
        // Obtém os produtos no carrinho do usuário.
        const cart = this.showProducts()?.map((item) => item.show());

        // Se houver produtos no carrinho, adiciona-os ao objeto de detalhes do usuário.
        if (cart?.length) {
            userDetail.cart = cart;
        }
        // Retorna os detalhes do usuário.
        return userDetail;
    }
}

/*
### Explicação:

1. **Importações e Dependências:**
   - Importa os tipos `CartType`, `ProductType`, e `UserType` do arquivo de tipos.
   - Importa a função `uuid` para gerar IDs únicos.
   - Importa a classe `Product` do arquivo `Product`.
   - Importa a lista de carrinhos de compras (`carts`) do arquivo de banco de dados de carrinhos.

2. **Declaração da Classe `User`:**
   - Declara a classe `User` com atributos `id`, `name`, `username`, e `email`.
   - O atributo `id` é privado, enquanto `name`, `username`, e `email` são públicos.

3. **Construtor:**
   - O construtor da classe `User` recebe um objeto do tipo `UserType`.
   - Gera um ID único para o usuário usando a função `uuid`.
   - Atribui os valores de `name`, `username`, e `email` aos atributos correspondentes.

4. **Método `addCart`:**
   - Adiciona um produto ao carrinho do usuário.
   - Verifica se o carrinho do usuário já existe na lista de carrinhos.
   - Se o carrinho não existir, cria um novo carrinho e adiciona à lista.
   - Se o carrinho já existir, adiciona o produto ao carrinho existente.

5. **Método `removeCart`:**
   - Remove um produto do carrinho do usuário.
   - Verifica se o produto existe no carrinho do usuário.
   - Se o produto for encontrado, remove-o do carrinho.

6. **Método `showProducts`:**
   - Mostra os produtos no carrinho do usuário.
   - Retorna os produtos no carrinho do usuário se o carrinho existir.

7. **Método `showUserDetails`:**
   - Mostra os detalhes do usuário, incluindo os produtos no carrinho.
   - Cria um objeto com os detalhes do usuário.
   - Adiciona os produtos no carrinho ao objeto de detalhes do usuário se houver produtos.
   - Retorna os detalhes do usuário.
*/