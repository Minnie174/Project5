export default class ProductService {
  // TODO: Изменить базовый URL на корректный, когда будет известен
  baseURL = 'http://soledout.ru/products';

  async responseServer (type: string, id: number, token?: string, path?: string) {
    const option = type === 'GET' ? undefined : {
      method: type,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, token }),
    };
    const operation = path || '';
    // TODO: Изменить эндпоинт на корректный, когда будет известен
    const response = await fetch(`${this.baseURL}/${id}${operation}`, option);
    const result = await response.json();

    return result;
  }

  getItem (id: number) {
    // TODO: Изменить эндпоинт на корректный, когда будет известен
    return this.responseServer('GET', id);
  }

  addFavorites (id: number, token: string) {
    // TODO: Изменить эндпоинт на корректный, когда будет известен
    return this.responseServer('POST', id, token, '/favorites');
  }

  deleteFavorites (id: number, token: string) {
    // TODO: Изменить эндпоинт на корректный, когда будет известен
    return this.responseServer('DELETE', id, token, '/favorites');
  }

  purchase (id: number, token: string) {
    // TODO: Изменить эндпоинт на корректный, когда будет известен
    return this.responseServer('POST', id, token, '/purchase');
  }
}
