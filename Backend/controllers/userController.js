const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const resp = require("../utils/responses");
const validate = require("../utils/validate");

const createUser = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    // if (existingUser && existingUser.status === 'I') {
    //   await user.findOneAndUpdate({ email }, {
    //     $set: { status: 'A', deletedAt: null }
    //   })

    //   resp.makeResponsesOkData(res, { firstName, lastName, gender, birthday, phone, email }, 'UReactivated')
    //   return
    // }

    const user = new User({
      name,
      username,
      email,
      password: bcrypt.hashSync(password),
    });

    await user.save();

    if (!email) {
      return resp.makeResponsesError(
        res,
        "Provide values for email.",
        "UnexpectedError"
      );
    }

    resp.makeResponsesOkData(
      res,
      {
        name,
        username,
        email,
        password,
      },
      "UCreated"
    );
  } catch (error) {
    resp.makeResponsesError(res, error, "UnexpectedError");
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const valUser = await User.findOne({ username });

    if (!valUser) {
      return resp.makeResponsesError(
        res,
        "Incorrect credentials",
        "ULoginError1"
      );
    }

    const valPass = await validate.comparePassword(password, valUser.password);

    if (!valPass) {
      return resp.makeResponsesError(
        res,
        "Incorrect credentials",
        "ULoginError2"
      );
    }

    const secret = process.env.SECRET_KEY;
    const token = jwt.sign({ id: valUser._id }, secret, { expiresIn: "1w" });

    const user = {
      id: valUser._id,
      token: token,
    };

    resp.makeResponsesOkData(res, user, "Success");
  } catch (error) {
    console.log(error);
    resp.makeResponsesError(res, error, "UnexpectedError");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      order: [["createdAt", "DESC"]],
    });

    resp.makeResponsesOkData(res, users, "Success");
  } catch (error) {
    console.log(error);
    resp.makeResponsesError(res, error, "UnexpectedError");
  }
};

module.exports = {
  createUser,
  login,
  getAllUsers,
};
