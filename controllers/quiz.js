const { quizzes } = require("../models");
const db = require("../models");
const Quiz = db.quizzes;

// CREATE: untuk menambahkan data kedalam tabel quiz
exports.create = async (req, res) => {
    try {
        const data = await Quiz.create(req.body)
        res.json({
            message: "quiz created successfully.",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

//READ: menampilkan semua data quiz sesuai model dari database
exports.getAll = async(req, res) => {
    try {
        const quizzes = await Quiz.findAll()
        res.json({
            message: "Quiz berhasil diambil",
            data: quizzes,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

//mengubah data sesuai id yang dikirim
exports.update = async(req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id,{ rejectOnEmpty: true})
        quiz.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Quiz berhasil diupdate",
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "beberapa kesalahan terjadi saat mengambil kuis",
            data: null,
        });
    }
}

//Menghapus data sesuai id yang dikirmkan
exports.delete = async(req, res) => {
    const id = id.params.id
    try {
        const quiz = await Quiz.findByPk(id,{ rejectOnEmpty: true})
        quiz.destroy()
        res.json({
            message: "berhasil menghapus quiz"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "beberapa kesalahan terjadi saat mengambil kuis",
            data: null,
        });
    }
}

//mengambil data sesuai id yang dikirim
exports.findOne = async (req,res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id,{ rejectOnEmpty: true})
        res.json({
            message: `berhasil mengambil quiz dengan id=${id}`,
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "beberapa kesalahan terjadi saat mengambil kuis",
            data: null,
        });
    }
}

//menampilkan semua data quiz berdasarkan category tertentu
exports.getByCategoryId = async(req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where: {
            categoryId: id
        }
    })
    res.json({
        message: `berhasil mengambil quiz dengan categoryId=${id}`,
        data: quizzes,
    });
}

//menampilkan semua data quiz berdasarkan level tertentu
exports.getByLevelId = async(req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where: {
            levelId: id
        }
    })
    res.json({
        message: `berhasil mengambil quiz dengan categoryId=${id}`,
        data: quizzes,
    });
}
