import { Test, TestingModule } from '@nestjs/testing';
import { AssignmentController } from './app.controller'; // Ensure the correct import
import { AppService } from './app.service'; // Keep AppService if needed

describe('AssignmentController', () => {
  let assignmentController: AssignmentController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AssignmentController],
      providers: [AppService],
    }).compile();

    assignmentController = app.get<AssignmentController>(AssignmentController);
  });

  describe('getFibonacciSequence', () => {
    it('should return Fibonacci sequence for given number', () => {
      const result = assignmentController.getFibonacciSequence('5');
      expect(result).toEqual({ sequence: [0, 1, 1, 2, 3] });
    });

    it('should return an empty array for 0', () => {
      const result = assignmentController.getFibonacciSequence('0');
      expect(result).toEqual({ sequence: [] });
    });

    it('should return a single element for 1', () => {
      const result = assignmentController.getFibonacciSequence('1');
      expect(result).toEqual({ sequence: [0] });
    });

    it('should handle invalid input', () => {
      const result = assignmentController.getFibonacciSequence('invalid');
      expect(result).toEqual({ message: 'Please provide a valid non-negative integer.' });
    });
  });
});
