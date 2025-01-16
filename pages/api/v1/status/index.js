function status(request, response) {
  response.status(200).json({ chave: "mensagem usando o json" });
  // response.status(200).send("Mensagem usando o send");
}

export default status;
