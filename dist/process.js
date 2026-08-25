"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.process = void 0;
const process = (input) => input.data.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
exports.process = process;
