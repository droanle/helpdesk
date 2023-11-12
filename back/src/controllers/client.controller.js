const Client = require("../models/client.model");

exports.create = async (req, res) => {
  try {
    const exists = await Client.findOne({ email: req.body.email });

    if (exists) return res.status(400).json({ message: "Cliente já existe" });

    const newClient = new Client(req.body);
    await newClient.save();

    res.status(200).json({ message: "Cliente registrado com sucesso" });
  } catch (error) {
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
  var newData = req.body;

  try {
    await Client.updateOne(
      { email: req.session.email },
      {
        $set: {
          password: newData.password,
          name: newData.name,
          dateOfBirth: newData.dateOfBirth,
          city: newData.city,
        },
      }
    );
    res.status(200).json({ message: "Cliente alterado com sucesso" });
  } catch (error) {
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
