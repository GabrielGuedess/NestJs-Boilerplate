import { User } from 'domain/entities/user/User';

describe('User', () => {
  it('should be able to create a user with entity', () => {
    const user = new User({
      password: '123456789',
      document: '44754358899',
      full_name: 'Gabriel Guedes',
      email: 'gabrielrguedess@gmail.com',
      avatar_url: 'https://github.com/GabrielGuedess.png',
    });

    expect(user).toBeTruthy();
    expect(user.validated).toBeFalsy();
  });

  it('should be able to set and get props user with entity', () => {
    const user = new User({
      password: '123456789',
      document: '44754358899',
      full_name: 'Gabriel Guedes',
      email: 'gabrielrguedess@gmail.com',
      avatar_url: 'https://github.com/GabrielGuedess.png',
    });

    expect(user.id).toBeTruthy();
    expect(user.email).toBeTruthy();
    expect(user.document).toBeTruthy();
    expect(user.fullName).toBeTruthy();
    expect(user.avatarUrl).toBeTruthy();
    expect(user.role).toBeTruthy();
    expect(user.password).toBeTruthy();
    expect(user.validated).toBeFalsy();
    expect(user.active).toBeTruthy();
    expect(user.createdAt).toBeTruthy();
    expect(user.updatedAt).toBeTruthy();

    user.document = '12345678901';
    user.email = 'test@test.com';
    user.password = '987654321';
    user.fullName = 'test';
    user.avatarUrl = 'https://test.com.png';
    user.role = 'ADMIN';
    user.validated = true;
    user.active = false;
    user.updatedAt = new Date('2003-03-21');

    expect(user.document).toBe('12345678901');
    expect(user.email).toBe('test@test.com');
    expect(user.password).toBe('987654321');
    expect(user.fullName).toBe('test');
    expect(user.avatarUrl).toBe('https://test.com.png');
    expect(user.role).toBe('ADMIN');
    expect(user.validated).toBe(true);
    expect(user.active).toBe(false);
    expect(user.updatedAt).toStrictEqual(new Date('2003-03-21'));
  });

  it('should not be able to create a user with entity with error', () => {
    expect(() => {
      new User({
        email: '',
        document: '',
        password: '',
        full_name: '',
        avatar_url: '',
      });
    }).toThrow();
  });
});
