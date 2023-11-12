const Ticket = require("../models/ticket.model");

exports.create = async (req, res) => {
  try {
    const exists = await Ticket.findOne({ title: req.body.title });

    if (exists) return res.status(400).json({ message: "Ticket já existe" });

    const newTicket = new Ticket(req.body);
    await newTicket.save();

    res.status(200).json({ message: "Ticket registrado com sucesso" });
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

    var tickets = await Ticket.find(id ? { _id: id } : {}).exec();

    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({
      message:
        "Erro interno do servidor. Por favor, tente novamente mais tarde.",
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    var newData = req.body;

    await Ticket.updateOne(
      { _id: id },
      {
        $set: {
          title: newData.title,
          creater: newData.creater,
          closingDate: newData.closingDate,
          priority: newData.priority,
          status: newData.status,
          relatedUsers: newData.relatedUsers,
          sectors: newData.sectors,
          discourses: newData.discourses,
        },
      }
    );
    res.status(200).json({ message: "Ticket alterado com sucesso" });
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

    if (!id) return res.status(400).json({ message: "ID nao informado" });

    await Ticket.deleteOne({ _id: id });

    res.status(200).json({ message: "Ticket deletado com sucesso" });
  } catch (error) {
    res.status(500).json({
      message:
        "Erro interno do servidor. Por favor, tente novamente mais tarde.",
    });
  }
};
