// Importa a interface ProductType do arquivo ProductType
import { ProductType } from "./ProductType";

// Define e exporta uma nova interface PromotionalProductType que estende ProductType
export interface PromotionalProductType extends ProductType {
    discount: number; // Adiciona um novo atributo obrigatório chamado discount, que é do tipo number
}

/*
### Explicação:

1. **Importação da Interface `ProductType`:**
   - `import { ProductType } from "./ProductType";`: Importa a interface `ProductType` do arquivo `ProductType`. Isso permite que a nova interface `PromotionalProductType` utilize e expanda a estrutura definida em `ProductType`.

2. **Definição da Interface `PromotionalProductType`:**
   - `export interface PromotionalProductType extends ProductType { ... }`: Define e exporta uma nova interface chamada `PromotionalProductType` que estende a interface `ProductType`. Isso significa que `PromotionalProductType` herda todos os atributos de `ProductType`.

3. **Atributo Adicional:**
   - `discount: number;`: Adiciona um novo atributo obrigatório chamado `discount`, que é do tipo `number`. Isso significa que qualquer objeto do tipo `PromotionalProductType` deve ter, além dos atributos herdados de `ProductType` (`id`, `name`, `value`), um atributo `discount`.

### Resumo:

A interface `PromotionalProductType` estende `ProductType`, adicionando um atributo extra `discount`. Isso é útil para definir produtos que têm um desconto associado, mantendo a estrutura básica dos produtos definida em `ProductType`.
*/