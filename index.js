class Noticia{
  constructor(titulo,data,resumo,texto){
  this.titulo = titulo;
   this.data = data;
   this.resumo = resumo;
   this.texto = texto;
  }
  mostrarNoticia(){
    console.log(this.titulo + "\n" + this.data + "\n"+ this.resumo + "\n\n"+this.texto)
  }
  noticia(){
    return this.mostrarNoticia()
  }
}
let noticia = new Noticia("Independência Do Brasil","23/04/2021","A independência do Brasil foi o processo histórico de separação entre Brasil e Portugal que se deu em 7 de setembro de 1822. Por meio da independência, o Brasil deixou de ser uma colônia portuguesa e passou a ser uma nação independente. Com esse evento, o país organizou-se como uma monarquia que tinha d. Pedro I como imperador.","Aqui é o texto");

console.log(noticia.mostrarNoticia())