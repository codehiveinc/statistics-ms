import { Router } from "express";
import { StaticsController } from "./StaticsController";
import { StaticsUseCase } from "../../application/StaticsUseCase";
import { StaticsService } from "../../domain/StaticsService";

const router = Router();
const staticsService = new StaticsService();
const staticsUseCase = new StaticsUseCase(staticsService);
const staticsController = new StaticsController(staticsUseCase);

router.post('/events', (req, res) => staticsController.handleEvent(req, res));
router.get('/aggregatedData', (req, res) => staticsController.getAggregatedData(req, res));

export default router;