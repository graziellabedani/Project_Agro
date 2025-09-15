from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__) #inicia o app
CORS(app)  # permite chamadas do frontend local


DATA = [
    {"estado": "SP", "produto": "Soja", "quantidade": 1000},
    {"estado": "PR", "produto": "Milho", "quantidade": 800},
    {"estado": "MG", "produto": "Soja", "quantidade": 600},
    {"estado": "RS", "produto": "Arroz", "quantidade": 300},
    {"estado": "BA", "produto": "Café", "quantidade": 450},
    {"estado": "GO", "produto": "Soja", "quantidade": 700},
    {"estado": "MT", "produto": "Milho", "quantidade": 1200},
    {"estado": "MS", "produto": "Soja", "quantidade": 500},
    {"estado": "SC", "produto": "Milho", "quantidade": 650},
    {"estado": "MG", "produto": "Café", "quantidade": 400},
    {"estado": "TO", "produto": "Soja", "quantidade": 350},
    {"estado": "MA", "produto": "Arroz", "quantidade": 200},
    {"estado": "PA", "produto": "Milho", "quantidade": 550},
    {"estado": "RO", "produto": "Soja", "quantidade": 300},
    {"estado": "PI", "produto": "Arroz", "quantidade": 150},
    {"estado": "CE", "produto": "Milho", "quantidade": 400},
    {"estado": "RN", "produto": "Soja", "quantidade": 220},
    {"estado": "PB", "produto": "Café", "quantidade": 180},
    {"estado": "PE", "produto": "Milho", "quantidade": 500},
    {"estado": "AL", "produto": "Soja", "quantidade": 270}
]

@app.route('/dados', methods=['GET'])
def dados():
    # Aqui poderia buscar em um banco de dados; por enquanto retorna dados simulados
    return jsonify(DATA)

# Executa a aplicação
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
