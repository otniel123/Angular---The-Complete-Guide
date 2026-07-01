import { Injectable } from '@angular/core';
import { User } from '../../dashboard-component/intefarces/user-interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
      userList: User[] = [
        {
          id: '1',
          name: 'Otniel',
          age: 20,
          nickname: 'otni'
        },
        {
          id: '2',
          name: 'Sara',
          age: 18,
          nickname: 'Sarah'
        },
        {
          id: '3',
          name: 'João',
          age: 25,
          nickname: 'João Silva'
        },
        {
          id: '4',
          name: 'Maria',
          age: 17,
          nickname: 'Mari'
        },
        {
          id: '5',
          name: 'Pedro',
          age: 30,
          nickname: 'Pedrão'
        }
      ];
  
    getUsersLis(): User[]{
      return this.userList;
    }
    getAverageAge(): number {
      if (this.userList.length === 0) return 0;
      const totalAge = this.userList.reduce((sum, user) => sum + user.age, 0);
      return Math.round(totalAge / this.userList.length);
    }
  
    getYoungestUser(): User {
      return this.userList.reduce((youngest, user) => 
        user.age < youngest.age ? user : youngest
      );
    }
  
    getOldestUser(): User {
      return this.userList.reduce((oldest, user) => 
        user.age > oldest.age ? user : oldest
      );
    }
  
    countMajors(): number {
      return this.userList.filter(user => user.age >= 18).length;
    }
  
    countMinors(): number {
      return this.userList.filter(user => user.age < 18).length;
    }
  
    deleteUser(id: string): void {
      this.userList = this.userList.filter(user => user.id !== id);
      console.log('Usuário removido:', id);
    }
}
