const Client = require("../models/client.model");

exports.create = async (req, res) => {
  try {
    var newClientData = req.query;

    newClientData.dateOfBirth = new Date(newClientData.dateOfBirth);

    const exists = await Client.findOne({ email: newClientData.email });

    if (exists) return res.status(400).json({ message: "Cliente já existe" });

    const newClient = new Client(newClientData);
    await newClient.save();

    res
      .status(200)
      .json({ message: "Cliente registrado com sucesso", _id: newClient._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:
        "Erro interno do servidor. Por favor, tente novamente mais tarde.",
    });
  }
};

exports.read = async (req, res) => {
  try {
    const { id } = req.params;

    var clients = await Client.find(id ? { _id: id } : {}).exec();

    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({
      message:
        "Erro interno do servidor. Por favor, tente novamente mais tarde.",
    });
  }
};

exports.update = async (req, res) => {
  var newData = req.query;

  if (newData.password == "####") {
    delete newData.password;
  }

  const { id } = req.params;

  try {
    const isUpdated = await Client.updateOne(
      { _id: id },
      {
        $set: {
          password: newData.password,
          name: newData.name,
          dateOfBirth: new Date(newData.dateOfBirth),
          city: newData.city,
        },
      }
    );

    if (isUpdated)
      res.status(200).json({ message: "Cliente alterado com sucesso" });
    else
      res.status(400).json({ message: "Não foi possivel alterar o cliente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:
        "Erro interno do servidor. Por favor, tente novamente mais tarde.",
    });
  }
};

exports.delete = async (req, res) => {
  var email = req.email;

  try {
    await Client.deleteOne({ email: email });

    res.status(200).json({ message: "Cliente deletado com sucesso!" });
  } catch (error) {
    res.status(500).json({
      message:
        "Erro interno do servidor. Por favor, tente novamente mais tarde.",
    });
  }
};
