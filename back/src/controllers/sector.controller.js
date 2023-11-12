const Sector = require("../models/sector.model");

exports.create = async (req, res) => {
  try {
    const existingSector = await Sector.findOne({ name: req.body.name });

    if (existingSector)
      return res
        .status(400)
        .json({ message: "Já existe um setor com este mesmo nome" });

    const newSector = new Sector(req.body);

    await newSector.save();

    res.status(200).json({ message: "Setor registrado com sucesso" });
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

    var foundSector = await Sector.find(id ? { _id: id } : {}).exec();

    res.json(foundSector);
  } catch (error) {
    res.status(500).json({
      message:
        "Erro interno do servidor. Por favor, tente novamente mais tarde.",
    });
  }
};

exports.update = async (req, res) => {
  try {
    var newData = req.body;
    const { id } = req.params;
    await Sector.updateOne(
      { _id: id },
      {
        $set: {
          name: newData.name,
          responseSpeed: newData.responseSpeed,
          responseNumber: newData.responseNumber,
        },
      }
    );
    res.status(200).json({ message: "Setor alterado com sucesso" });
  } catch (error) {
    res.status(500).json({
      message:
        "Erro interno do servidor. Por favor, tente novamente mais tarde.",
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await Sector.deleteOne({ _id: id });
    res.status(200).json({ message: "Setor deletado com sucesso!" });
  } catch (error) {
    res.status(500).json({
      message:
        "Erro interno do servidor. Por favor, tente novamente mais tarde.",
    });
  }
};
