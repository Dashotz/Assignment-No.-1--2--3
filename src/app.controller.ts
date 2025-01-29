import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {

  @Get('prime/:number')
  checkPrime(@Param('number') number: string): object {
    const num = parseInt(number, 10);

    if (isNaN(num) || num < 2) {
      return { isPrime: false };
    }

    const result = this.isPrime(num);
    return { isPrime: result };
  }

  
  private isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num === 2) return true; 
    if (num % 2 === 0) return false; 

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
