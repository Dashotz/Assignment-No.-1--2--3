import { Test, TestingModule } from '@nestjs/testing';
import { AssignmentController } from './app.controller'; 

describe('AssignmentController', () => {
  let assignmentController: AssignmentController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AssignmentController]      
    }).compile();

    assignmentController = app.get<AssignmentController>(AssignmentController);
  });

  describe('checkPrime', () => {
    it('should return true for prime number 7', () => {
      const result = assignmentController.checkPrime('7');
      expect(result).toEqual({ isPrime: true });
    });

    it('should return false for non-prime number 10', () => {
      const result = assignmentController.checkPrime('10');
      expect(result).toEqual({ isPrime: false });
    });

    it('should return false for invalid input', () => {
      const result = assignmentController.checkPrime('abc');
      expect(result).toEqual({ isPrime: false });
    });

    it('should return false for number less than 2', () => {
      const result = assignmentController.checkPrime('1');
      expect(result).toEqual({ isPrime: false });
    });
  });
});
