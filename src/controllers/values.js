'use strict';

/**
 * getValue controller
 *
 * @export
 * @param {any} request
 * @param {any} response
 * @param {any} next
 */
export const getValue = (req, res, next) => {
  try {
    res.status(200).send({
      data: [],
      status: 'success',
    });
  } catch (err) {
    res.status(404).send({
      message: err.message,
      status: 'failure',
    });
  }
};

/**
 * getValueById controller
 *
 * @export
 * @param {any} request
 * @param {any} response
 * @param {any} next
 */
export const getValueById = (req, res, next) => {
  try {
    res.status(200).send({
      data: [],
      status: 'success',
    });
  } catch (err) {
    res.status(404).send({
      message: err.message,
      status: 'failure',
    });
  }
};

/**
 * addValue controller
 *
 * @export
 * @param {any} request
 * @param {any} response
 * @param {any} next
 */
export const addValue = (req, res, next) => {
  try {
    res.status(200).send({
      data: 'Value added',
      status: 'success',
    });
  } catch (err) {
    res.status(404).send({
      message: err.message,
      status: 'failure',
    });
  }
};

/**
 * updateValue controller
 *
 * @export
 * @param {any} request
 * @param {any} response
 * @param {any} next
 */
export const updateValue = (req, res, next) => {
  try {
    res.status(200).send({
      data: 'Value updated',
      status: 'success',
    });
  } catch (err) {
    res.status(404).send({
      message: err.message,
      status: 'failure',
    });
  }
};

/**
 * deleteValue controller
 *
 * @export
 * @param {any} request
 * @param {any} response
 * @param {any} next
 */
export const deleteValue = (req, res, next) => {
  try {
    res.status(200).send({
      data: 'Value deleted',
      status: 'success',
    });
  } catch (err) {
    res.status(404).send({
      message: err.message,
      status: 'failure',
    });
  }
};
