import {
  RegistrationFields, LoginFields, AuthResponse,
} from '../types/auth-types';

type ResponsesData = {
  error: {
    text: string;
  };
  signupFalse: AuthResponse;
  signupOk: AuthResponse;
  loginFalse: AuthResponse;
  loginOk: AuthResponse;
};

const responsesData: ResponsesData = {
  error: {
    text: 'Unknown error',
  },
  signupFalse: {
    success: false,
    error: {
      code: 400,
      text: 'Данный email уже используется',
    },
  },
  signupOk: {
    success: true,
  },
  loginFalse: {
    success: false,
    error: {
      code: 400,
      text: 'Неверные логин или пароль',
    },
  },
  loginOk: {
    success: true,
    data: {
      userResponseLoginDto: {
        id: 5,
        firstName: 'Test User',
        lastName: 'Test User',
        email: 'TestUser@mail.ru',
        role: 'USER',
        isBlocked: false,
      },
      authToken: {
        token: 'Test token',
        expireSecond: 60000,
      },
    },
  },
};

export const mockAuthRequest = (
  user: RegistrationFields | LoginFields,
  type: 'signup' | 'login',
): Promise<AuthResponse> => (
  new Promise((res, rej) => {
    if (user.email === 'NetErr@test.com') {
      // eslint-disable-next-line prefer-promise-reject-errors
      setTimeout(() => rej(responsesData.error), 2500);
    } else if (user.email === 'ServerError@test.com') {
      setTimeout(() => res(responsesData[`${type}False`]), 2500);
    } else {
      setTimeout(() => res(responsesData[`${type}Ok`]), 2500);
    }
  })
);
