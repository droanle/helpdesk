const User = require("../models/user.model");
const Sector = require("../models/sector.model");
const ObjectId = require("mongoose").Types.ObjectId;
const JWT = require("../utils/jwt");

exports.register = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser)
      return res.status(400).json({ message: "Usuário já existe" });

    const newUser = new User(req.body);

    await newUser.save();

    res.status(200).json({ message: "Usuário registrado com sucesso" });
  } catch (error) {
    res.status(500).json({
      message:
        "Erro interno do servidor. Por favor, tente novamente mais tarde.",
    });
  }
};

exports.login = async (req, res) => {
  var { email, password } = req.body;

  try {
    var foundUser = await User.findOne({ email: email });

    if (!foundUser)
      return res.status(400).json({ message: "Usuario ou senha incorretos." });

    if (password !== foundUser.password)
      res.status(403).json({
        message: "Usuario ou senha incorretos.",
      });
    else {
      var token = JWT.generateJwt({
        email: foundUser.email,
      });

      res
        .cookie("accessToken", token, {
          maxAge: 100000 * (36 * 24) * 11,
          httpOnly: true,
        })
        .status(200)
        .json({
          message: "Usuario logado com sucesso.",
        });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "Erro interno do servidor. Por favor, tente novamente mais tarde.",
    });
  }
};

exports.update = async (req, res) => {
  const newData = req.body;
  const { id } = req.params;
  return res.status(200).json(id);

  try {
    var sector;

    if (ObjectId.isValid(newData.sector)) {
      var sector = await Sector.findOne({ _id: newData.sector });
      if (!sector)
        return res.status(400).json({ message: "Setor inexistente!" });
    } else
      return res
        .status(400)
        .json({ message: "Código de setor em formato inválido" });

    await User.updateOne(
      { _id: id ? id : req.session._id },
      {
        $set: {
          password: newData.password,
          name: newData.name,
          nivel: newData.nivel,
          relatedSectors: sector._id,
        },
      }
    );

    res
      .status(200)
      .json({ message: "Dados do usuário atualizados com sucesso" });
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
    await User.deleteOne({ email: email });

    res.status(200).json({ message: "Usuário deletado com sucesso" });
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

    var foundUser = await User.find(id ? { _id: id } : {})
      .populate("relatedSectors")
      .exec();

    res.json(foundUser);
  } catch (error) {
    res.status(500);
  }
};

exports.showUserLogged = async (req, res) => {
  try {
    const nickname = req.session.accessToken.nickname;

    const foundUser = await User.findOne({ nickname });

    if (foundUser) {
      res.json(foundUser);
    } else {
      res.status(404).json({ error: "Usuário não encontrado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

exports.saveAnswer = async (req, res) => {
  const { nickname, answer } = req.body;

  try {
    const user = await User.findOne({ nickname: nickname });

    if (!user) {
      return res.status(404).send();
    }

    user.answers.push(answer);
    const updatedUser = await user.save();

    res.send(updatedUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateFirstAccess = async (req, res) => {
  const { nickname } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { nickname: nickname },
      { $set: { firstAccess: false } },
      { new: true }
    );

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
