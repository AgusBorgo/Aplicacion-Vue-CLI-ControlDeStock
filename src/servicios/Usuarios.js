import axios from 'axios';

class servicioUsuarios {
  #url = 'https://690c0b0d6ad3beba00f6f588.mockapi.io/api/usuarios';

  constructor() {
    this.#url = 'https://690c0b0d6ad3beba00f6f588.mockapi.io/api/usuarios';
  }

  getAll = async () => {
    try {
      const { data: usuarios } = await axios.get(this.#url);
      return usuarios;
    } catch (error) {
      console.log('Error usuarios GET', error.message);
    }
  }
 
}

export default servicioUsuarios;