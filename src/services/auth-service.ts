import {
  // TODO: исправить тип ответа на запрос регистрации как станет известен
  LoginFields, RegistrationFields, AuthResponse,
} from '../types/auth-types';

export default class AuthService {
  // TODO: исправить адрес запросов как станет известен
  apiBase = 'http://soledout.ru/api/auth';

  async serverRequest (
    type: 'signup' | 'login',
    user: LoginFields | RegistrationFields,
  ) : Promise<AuthResponse> {
    const response = await fetch(`${this.apiBase}/${type}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const result = await response.json();

    return result;
  }

  signup (user: RegistrationFields): Promise<AuthResponse> {
    return this.serverRequest('signup', user);
  }

  login (user: LoginFields) : Promise<AuthResponse> {
    return this.serverRequest('login', user);
  }
}
