'use strict';

/**
 * Get random Id - generateID
 *
 * @return {number} a random integer id.
 */
export const generateID = () =>
  `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;
