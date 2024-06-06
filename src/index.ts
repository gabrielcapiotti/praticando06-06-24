import { comments } from "./database/comments.db";
import { users } from "./database/users.db";
import { Product, User } from "./model";
import CommentClass from "./model/Comment";
import PromotionalProduct from "./model/PromotionalProduct";

const user1 = new User({
  name: "Marcelo",
  email: "marcelo@uol.com",
  username: "MarceloGrowdev",
});
const produto1 = new Product({
  name: "Notebook Acer",
  value: 2000,
});

const produto2 = new Product({
  name: "Notebook Dell",
  value: 5000,
});

const produtoPromo = new PromotionalProduct({
  value: 30,
  name: "Mouse Dell",
  discount: 4,
});

const valorComDesconto = produtoPromo.getValuWithDiscount();
const comment = new CommentClass("Primeiro comentario");
const comment2 = new CommentClass("Segundo comentario");
const comment3 = new CommentClass("Terceiro comentario");
produto1.comment(comment);
produtoPromo.comment(comment);
produtoPromo.comment(comment2);
produtoPromo.comment(comment3);

console.log(produto1.showComments());

// produtoPromo.deleteComment("kjh");
// produto1.deleteComment("431ef365-cc8c-4be3-be6a-8cad5b453787");

// console.log(comments);

produto1.updateComment(
  "431ef365-cc8c-4be3-be6a-8cad5b453787",
  "Atualizado comentario"
);

// console.log(produto1.showComments());

users.push(user1);
user1.addToCart(produto1);
user1.addToCart(produto2);
// user1.removefromCart(produto1);

const details = produtoPromo.showDetail();

console.log(details);
