import {
  CREATE_DOMAIN,
  CREATE_FITNESS,
  CREATE_FITNESS_REQUEST,
  CHECK_FITNESS_REQUEST
} from "./constants";

const createDomain = payloads => ({ type: CREATE_DOMAIN, payloads });
const createFitness = payloads => ({ type: CREATE_FITNESS, payloads });

const checkFitnessRequest = payloads => ({
  type: CHECK_FITNESS_REQUEST,
  payloads
});
const createFitnessRequest = payloads => ({
  type: CREATE_FITNESS_REQUEST,
  payloads
});

module.exports = {
  createDomain,
  createFitness,
  createFitnessRequest,
  checkFitnessRequest
};
