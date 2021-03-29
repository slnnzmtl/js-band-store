import Auth from './AuthAPI';
import Cart from './CartAPI';
import Catalog from './CatalogAPI';

describe('auth api tests', () => {
  test('must return an object with user data', async () => {
    expect(
      await Auth.login('slnnzmtl'),
    ).toHaveProperty('token' && 'username' && 'avatar');
  });

  test('must return an object contains success message', async () => {
    const { token } = await Auth.login('slnnzmtl');
    expect(
      await Cart.purchase(token, [1]),
    ).toMatchObject({ message: 'Thank you for purchasing books in our store!' });
  });

  test('must return an array', async () => {
    const { token } = await Auth.login('slnnzmtl');
    expect(
      await Catalog.getBooks(token),
    ).toBeInstanceOf(Array);
  });

  test('must return an object contains propery "id" with value "1"', async () => {
    const { token } = await Auth.login('slnnzmtl');
    expect(
      await Catalog.getBookById(token, 1),
    ).toMatchObject({ id: '1' });
  });
});
