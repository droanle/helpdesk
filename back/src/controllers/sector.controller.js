const Sector = require("../models/sector.model");

exports.create = async (req, res) => {
  try {
    const existingSector = await Sector.findOne({ name: req.query.name });

    if (existingSector)
      return res
        .status(400)
        .json({ message: "Já existe um setor com este mesmo nome" });

    const newSector = new Sector(req.query);

    await newSector.save();

    res
      .status(200)
      .json({ message: "Setor registrado com sucesso", _id: newSector._id });
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
    var newData = req.query;
    const { id } = req.params;
    const update = await Sector.updateOne(
      { _id: id },
      {
        $set: {
          name: newData.name,
          responseSpeed: newData.responseSpeed,
          responseNumber: newData.responseNumber,
        },
      }
    );

    if (update)
      res.status(200).json({ message: "Setor alterado com sucesso", _id: id });
    else
      res
        .status(400)
        .json({ message: "Não foi possivel alterar o setor", _id: id });
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
    const isDelete = await Sector.deleteOne({ _id: id });
    if (isDelete)
      res.status(200).json({ message: "Setor deletado com sucesso!" });
    else
      res.status(400).json({ message: "Não foi possivel deletar esse setor" });
  } catch (error) {
    res.status(500).json({
      message:
        "Erro interno do servidor. Por favor, tente novamente mais tarde.",
    });
  }
};
