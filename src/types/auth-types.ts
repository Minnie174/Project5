export type RegistrationFields = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
};

export type LoginFields = {
  email: string;
  password: string;
};

export type AuthResponse = {
  success: boolean;
  data?: {
    userResponseLoginDto: {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
      role: 'ADMIN' | 'USER';
      isBlocked: boolean;
    };
    authToken: {
      token: string;
      expireSecond: number;
    };
  };
  error?: {
    code: number;
    text: string;
  };
};
