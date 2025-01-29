import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {

  @Get('fibonacci/:n')
  getFibonacciSequence(@Param('n') n: string): object {
    // Check if the input is a valid number with no special characters or letters after it
    const validNumberPattern = /^[0-9]+$/;

    if (!validNumberPattern.test(n)) {
      return { message: 'Please enter a valid number without any special characters or letters.' };
    }

    const num = parseInt(n, 10);
    
    if (num < 0) {
      return { message: 'Enter a number greater than or equal to zero.' };
    }
    
    const sequence = this.generateFibonacci(num);
    return { sequence };
  }

  private generateFibonacci(count: number): number[] {
    if (count === 0) return [];
    if (count === 1) return [0];
    
    const sequence = [0, 1];
    for (let i = 2; i < count; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
}
