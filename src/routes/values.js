'use strict';

/**
 * Values Routes
 * @module routes/values
 * @requires controllers/values
 */

import { Router } from 'express';

const router = Router();

import * as ctrlValue from '../controllers/values';

/**
 * @swagger
 * /api/value:
 *   post:
 *     tags:
 *       - "Values"
 *     description: "Add value"
 *     operationId: ctrlValue.addValue
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: Add Value Response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 status:
 *                   type: string
 *       '400':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message = Invalid request
 *                 status:
 *                   type: string
 *                   description: Status = failure
 */
router.post('/api/value', ctrlValue.addValue);

/**
 * @swagger
 * /api/value:
 *   get:
 *     tags:
 *       - "Values"
 *     description: "Get values"
 *     operationId: ctrlValue.getValue
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: Add Value Response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 status:
 *                   type: string
 *       '400':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message = Invalid request
 *                 status:
 *                   type: string
 *                   description: Status = failure
 */
router.get('/api/value', ctrlValue.getValue);

/**
 * @swagger
 * /api/value/{id}:
 *   get:
 *     tags:
 *       - "Values"
 *     description: "Get value by Id"
 *     operationId: ctrlValue.getValueById
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Unique identifier of Values
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Add Value Response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 status:
 *                   type: string
 *       '400':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message = Invalid request
 *                 status:
 *                   type: string
 *                   description: Status = failure
 */
router.get('/api/value/:id', ctrlValue.getValueById);

/**
 * @swagger
 * /api/value/{id}:
 *   put:
 *     tags:
 *       - "Values"
 *     description: "Update value"
 *     operationId: ctrlValue.updateValue
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Unique identifier of Values
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Update Value Response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 status:
 *                   type: string
 *       '400':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message = Invalid request
 *                 status:
 *                   type: string
 *                   description: Status = failure
 */
router.put('/api/value/:id', ctrlValue.updateValue);

/**
 * @swagger
 * /api/value/{id}:
 *   delete:
 *     tags:
 *       - "Values"
 *     description: "Delete value"
 *     operationId: ctrlValue.deleteValue
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Unique identifier of Values
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Delete Value Response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 status:
 *                   type: string
 *       '400':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message = Invalid request
 *                 status:
 *                   type: string
 *                   description: Status = failure
 */
router.delete('/api/value/:id', ctrlValue.deleteValue);

export default router;
