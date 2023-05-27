const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const projectController = require('../controllers/project-controller')
const noteController = require('../controllers/note-controller')
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');
const AuditoryController = require('../controllers/auditory-controller')
const ResourceFinanceController = require('../controllers/resorceFinance-controller')
const ResourceWorkController = require('../controllers/resourceWork-controller')
const ResourceTimeController = require('../controllers/resourceTime-controller')
const EducationController = require('../controllers/education-controller')
const PromotionController = require('../controllers/promotion-controller')
const fileMiddleware = require('../middlewares/file-middleware')
const multer = require('multer');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/'); // Папка, куда сохранять загруженные файлы
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname); // Имя файла после сохранения
	}
});

const upload = multer({
	storage: storage,
	limits: { fileSize: 1024 * 1024 * 5 }, // Ограничение размера файла (5MB)
});





router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
// router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);

router.post('/project', upload.single('file'), projectController.create)
router.post('/project/:id', projectController.update)
router.get('/project/:id', projectController.getProjectById)
router.get('/project', projectController.getProjects)

router.post('/uploadIcon', upload.any(), (req, res) => {
	try {
		if(req.file){

		}
	} catch (error){
		console.log(error)
	}
})

router.post('/notes/:id', noteController.create)
router.post('/note', noteController.update)
router.post('/noteDelete', noteController.delete)
router.get('/notes/:id', noteController.getNotes)

router.post('/auditory/:id', AuditoryController.update)
router.get('/auditory/:id', AuditoryController.getAuditoryById)

router.post('/resourceFinance/:id', ResourceFinanceController.update)
router.get('/resourceFinance/:id', ResourceFinanceController.getResourceFinanceById)

router.post('/resourceWork/:id', ResourceWorkController.update)
router.get('/resourceWork/:id', ResourceWorkController.getResourceWorkById)

router.post('/resourceTime/:id', ResourceTimeController.update)
router.get('/resourceTime/:id', ResourceTimeController.getResourceTimeById)

router.post('/educations/:id', EducationController.update)
router.get('/educations/:id', EducationController.getEducationById)

router.post('/promotion/:id', PromotionController.update)
router.get('/promotion/:id', PromotionController.getPromotionById)

router.get('/users', authMiddleware, userController.getUsers);

module.exports = router
