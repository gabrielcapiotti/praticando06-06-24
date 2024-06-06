import { PromotionalProductType } from "../types"; // Importa o tipo PromotionalProductType do arquivo de tipos.
import Product from "./Product"; // Importa a classe Product do arquivo Product.

export default class PromotionalProduct extends Product {
    discount: number; // Atributo público discount do tipo number.

    // Construtor que recebe um objeto do tipo PromotionalProductType.
    constructor(data: PromotionalProductType) {
        // Chama o construtor da classe pai (Product) com os dados do nome e valor.
        super({ name: data.name, value: data.value });
        this.discount = data.discount; // Atribui o valor do desconto.
    }

    // Método para obter o valor do produto com o desconto aplicado.
    getValueWithDiscount() {
        return this.value - this.discount; // Retorna o valor do produto subtraído do desconto.
    }
}

/*
### Explicação:

1. **Importações e Dependências:**
   - O código importa o tipo `PromotionalProductType` do arquivo de tipos.
   - Importa a classe `Product` do arquivo `Product`.

2. **Declaração da Classe `PromotionalProduct`:**
   - A classe `PromotionalProduct` estende a classe `Product`, o que significa que herda todas as propriedades e métodos da classe `Product`.
   - Declara um atributo `discount` do tipo `number` para armazenar o valor do desconto.

3. **Construtor:**
   - O construtor da classe `PromotionalProduct` recebe um objeto do tipo `PromotionalProductType`.
   - Utiliza o método `super` para chamar o construtor da classe `Product` com os dados de `name` e `value` do produto promocional.
   - Atribui o valor do desconto ao atributo `discount`.

4. **Método `getValueWithDiscount`:**
   - Este método calcula e retorna o valor do produto após a aplicação do desconto.
   - Subtrai o valor do desconto (`this.discount`) do valor original do produto (`this.value`) e retorna o resultado.
*/